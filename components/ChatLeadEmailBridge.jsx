"use client";

import { useEffect } from "react";

const STORAGE_KEY = "cladcan_chat_leads";
const SENT_KEY = "cladcan_chat_leads_sent_count";
const ENDPOINT = "https://formsubmit.co/info@cladcan.ca";
const FRAME_NAME = "cladcan-chat-formsubmit-frame";
const MAX_TOTAL_BYTES = 10 * 1024 * 1024;

function labelize(key) {
  return String(key || "").replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
function appendHidden(form, name, value) {
  const input = document.createElement("input");
  input.type = "hidden";
  input.name = name;
  input.value = String(value ?? "");
  form.appendChild(input);
}
function flattenValues(obj, prefix = "") {
  const rows = [];
  Object.entries(obj || {}).forEach(([key, value]) => {
    const name = prefix ? `${prefix} - ${labelize(key)}` : labelize(key);
    if (value && typeof value === "object" && !Array.isArray(value)) rows.push(...flattenValues(value, name));
    else if (Array.isArray(value)) rows.push([name, value.join(", ")]);
    else rows.push([name, value ?? ""]);
  });
  return rows;
}
function findReplyEmail(values) {
  let found = "";
  function walk(value) {
    if (!value || found) return;
    if (typeof value === "object") {
      for (const [key, child] of Object.entries(value)) {
        if (key.toLowerCase() === "email" && typeof child === "string") { found = child.trim(); return; }
        walk(child);
      }
    }
  }
  walk(values);
  return found;
}
function flowTitle(flow) {
  const map = {urgent:"Urgent Issue / Leak",quote:"Request a Quote",project:"Discuss a Project",products:"Products & Materials",careers:"Careers",contact:"Contact Message",showroom:"Showroom Visit",dropoff_recovery:"Follow-up Request"};
  return map[flow] || labelize(flow || "Chatbot Inquiry");
}
function fileKey(file){return `${file.name}:${file.size}:${file.lastModified}`}
function attachFile(form,file,index){
  const transfer = new DataTransfer();
  transfer.items.add(file);
  const input = document.createElement("input");
  input.type = "file";
  input.name = index === 0 ? "attachment" : `attachment_${index + 1}`;
  input.files = transfer.files;
  input.style.display = "none";
  form.appendChild(input);
}

function submitLead(lead, files) {
  const form = document.createElement("form");
  form.action = ENDPOINT;
  form.method = "POST";
  form.enctype = "multipart/form-data";
  form.target = FRAME_NAME;
  form.style.display = "none";

  const title = flowTitle(lead?.flow);
  appendHidden(form, "_subject", `CladCan chatbot inquiry — ${title}`);
  appendHidden(form, "_template", "table");
  appendHidden(form, "_captcha", "false");
  appendHidden(form, "_url", window.location.href);
  const reply = findReplyEmail(lead?.values);
  if (reply) appendHidden(form, "_replyto", reply);
  appendHidden(form, "Inquiry Source", "CladCan Project Assistant");
  appendHidden(form, "Inquiry Type", title);
  appendHidden(form, "Priority", lead?.priority ? "Urgent" : "Normal");
  appendHidden(form, "Submitted At", lead?.createdAt || new Date().toISOString());
  flattenValues(lead?.values || {}).forEach(([name, value]) => { if (String(value).trim()) appendHidden(form, name, value); });

  files.forEach((file,index)=>attachFile(form,file,index));
  if (files.length) appendHidden(form, "Attachments", files.map(f=>`${f.name} (${Math.ceil(f.size/1024)} KB)`).join(", "));

  document.body.appendChild(form);
  form.submit();
  window.setTimeout(() => form.remove(), 20000);
}

export default function ChatLeadEmailBridge() {
  useEffect(() => {
    let frame = document.querySelector(`iframe[name="${FRAME_NAME}"]`);
    if (!frame) {
      frame = document.createElement("iframe");
      frame.name = FRAME_NAME;
      frame.title = "Chatbot submission response";
      frame.style.display = "none";
      document.body.appendChild(frame);
    }

    let capturedFiles = [];
    const onFileChange = (event) => {
      const input = event.target;
      if (!(input instanceof HTMLInputElement) || input.type !== "file" || !input.closest(".chatPanel")) return;
      input.multiple = true;
      const map = new Map(capturedFiles.map(f=>[fileKey(f),f]));
      Array.from(input.files || []).filter(f=>f instanceof File).forEach(f=>map.set(fileKey(f),f));
      capturedFiles = Array.from(map.values());
      window.__cladcanChatAttachments = capturedFiles.slice();
      window.dispatchEvent(new CustomEvent("cladcan-chat-attachments-changed", { detail:{ files:capturedFiles.slice() } }));
    };
    document.addEventListener("change", onFileChange, true);

    let initial = [];
    try { initial = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); if (!Array.isArray(initial)) initial = []; } catch { initial = []; }
    if (localStorage.getItem(SENT_KEY) === null) localStorage.setItem(SENT_KEY, String(initial.length));

    const timer = window.setInterval(() => {
      try {
        const leads = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        if (!Array.isArray(leads)) return;
        let sent = Number(localStorage.getItem(SENT_KEY) || 0);
        if (!Number.isFinite(sent) || sent < 0) sent = 0;
        if (sent > leads.length) sent = leads.length;

        while (sent < leads.length) {
          const files = (window.__cladcanChatAttachments || capturedFiles || []).filter(f=>f instanceof File);
          const totalBytes = files.reduce((sum,f)=>sum+f.size,0);
          if (totalBytes > MAX_TOTAL_BYTES) {
            window.dispatchEvent(new CustomEvent("cladcan-chat-attachment-error", { detail:{ message:"The total attachment size must be 10 MB or less." } }));
            return;
          }
          submitLead(leads[sent], files);
          sent += 1;
          localStorage.setItem(SENT_KEY, String(sent));
          capturedFiles = [];
          window.__cladcanChatAttachments = [];
          window.dispatchEvent(new CustomEvent("cladcan-chat-attachments-changed", { detail:{ files:[] } }));
        }
      } catch (error) {
        console.error("Chatbot email bridge error:", error);
      }
    }, 500);

    return () => {
      window.clearInterval(timer);
      document.removeEventListener("change", onFileChange, true);
      delete window.__cladcanChatAttachments;
    };
  }, []);
  return null;
}
