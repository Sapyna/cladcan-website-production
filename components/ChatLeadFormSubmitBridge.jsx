"use client";

import { useEffect } from "react";

const ENDPOINT = "https://formsubmit.co/info@cladcan.ca";
const STORAGE_KEY = "cladcan_chat_leads";
const FRAME_NAME = "cladcan-chat-formsubmit-frame";

function readableLabel(key) {
  return String(key || "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function addHidden(form, name, value) {
  const input = document.createElement("input");
  input.type = "hidden";
  input.name = name;
  input.value = String(value ?? "");
  form.appendChild(input);
}

function flattenValues(form, value, prefix = "") {
  if (value == null) return;
  if (typeof value === "object" && !Array.isArray(value)) {
    Object.entries(value).forEach(([key, nested]) => {
      flattenValues(form, nested, prefix ? `${prefix} — ${readableLabel(key)}` : readableLabel(key));
    });
    return;
  }
  addHidden(form, prefix || "Details", Array.isArray(value) ? value.join(", ") : value);
}

function attachFiles(form, files) {
  files.forEach((file, index) => {
    try {
      const input = document.createElement("input");
      input.type = "file";
      input.name = index === 0 ? "attachment" : `attachment_${index + 1}`;
      const dt = new DataTransfer();
      dt.items.add(file);
      input.files = dt.files;
      input.style.display = "none";
      form.appendChild(input);
    } catch (_) {}
  });
}

export default function ChatLeadFormSubmitBridge() {
  useEffect(() => {
    let frame = document.querySelector(`iframe[name="${FRAME_NAME}"]`);
    if (!frame) {
      frame = document.createElement("iframe");
      frame.name = FRAME_NAME;
      frame.title = "Chat inquiry submission";
      frame.style.display = "none";
      document.body.appendChild(frame);
    }

    const selectedFiles = [];
    const onFileChange = (event) => {
      const input = event.target;
      if (!(input instanceof HTMLInputElement)) return;
      if (input.type !== "file" || !input.closest(".chatPanel")) return;
      selectedFiles.length = 0;
      selectedFiles.push(...Array.from(input.files || []));
    };
    document.addEventListener("change", onFileChange, true);

    const originalSetItem = window.localStorage.setItem.bind(window.localStorage);
    window.localStorage.setItem = function patchedSetItem(key, value) {
      originalSetItem(key, value);
      if (key !== STORAGE_KEY) return;

      try {
        const leads = JSON.parse(value || "[]");
        const lead = Array.isArray(leads) ? leads[leads.length - 1] : null;
        if (!lead) return;

        const form = document.createElement("form");
        form.action = ENDPOINT;
        form.method = "POST";
        form.enctype = "multipart/form-data";
        form.target = FRAME_NAME;
        form.style.display = "none";

        const flowLabel = readableLabel(lead.flow || "Chatbot inquiry");
        addHidden(form, "_subject", `CladCan chatbot inquiry — ${flowLabel}`);
        addHidden(form, "_template", "table");
        addHidden(form, "_captcha", "false");
        addHidden(form, "_url", "https://cladcan.ca");
        addHidden(form, "Source", "CladCan Project Assistant");
        addHidden(form, "Inquiry Type", flowLabel);
        addHidden(form, "Priority", lead.priority ? "Urgent" : "Standard");
        addHidden(form, "Submitted At", lead.createdAt || new Date().toISOString());

        flattenValues(form, lead.values || {});
        attachFiles(form, selectedFiles);

        document.body.appendChild(form);
        form.submit();
        window.setTimeout(() => form.remove(), 1500);
        selectedFiles.length = 0;
      } catch (error) {
        console.error("Chatbot FormSubmit bridge error:", error);
      }
    };

    return () => {
      document.removeEventListener("change", onFileChange, true);
      window.localStorage.setItem = originalSetItem;
    };
  }, []);

  return null;
}
