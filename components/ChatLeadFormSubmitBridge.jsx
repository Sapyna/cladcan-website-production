"use client";
import { useEffect } from "react";

const ENDPOINT="https://formsubmit.co/info@cladcan.ca";
const STORAGE_KEY="cladcan_chat_leads";
const FRAME_NAME="cladcan-chat-formsubmit-frame";
const MAX_TOTAL_BYTES=10*1024*1024;

function label(k){return String(k||"").replace(/_/g," ").replace(/\b\w/g,m=>m.toUpperCase())}
function hidden(form,name,value){const i=document.createElement("input");i.type="hidden";i.name=name;i.value=String(value??"");form.appendChild(i)}
function flatten(form,value,prefix=""){if(value==null)return;if(typeof value==="object"&&!Array.isArray(value)){Object.entries(value).forEach(([k,v])=>flatten(form,v,prefix?`${prefix} — ${label(k)}`:label(k)));return}hidden(form,prefix||"Details",Array.isArray(value)?value.join(", "):value)}
function signature(file){return `${file.name}:${file.size}:${file.lastModified}`}

function appendAttachmentInput(form,file,index){
  const dt=new DataTransfer();
  dt.items.add(file);
  const input=document.createElement("input");
  input.type="file";
  input.name=index===0?"attachment":`attachment_${index+1}`;
  input.files=dt.files;
  input.style.display="none";
  form.appendChild(input);
}

export default function ChatLeadFormSubmitBridge(){
  useEffect(()=>{
    let frame=document.querySelector(`iframe[name="${FRAME_NAME}"]`);
    if(!frame){
      frame=document.createElement("iframe");
      frame.name=FRAME_NAME;
      frame.title="Chat inquiry submission";
      frame.style.display="none";
      document.body.appendChild(frame);
    }

    let captured=[];
    const onFile=e=>{
      const input=e.target;
      if(!(input instanceof HTMLInputElement)||input.type!=="file"||!input.closest(".chatPanel"))return;
      const incoming=Array.from(input.files||[]).filter(f=>f instanceof File);
      const map=new Map(captured.map(f=>[signature(f),f]));
      incoming.forEach(f=>map.set(signature(f),f));
      captured=Array.from(map.values());
      window.__cladcanChatAttachments=captured.slice();
      window.dispatchEvent(new CustomEvent("cladcan-chat-attachments-changed",{detail:{files:captured.slice()}}));
    };
    document.addEventListener("change",onFile,true);

    const original=window.localStorage.setItem.bind(window.localStorage);
    window.localStorage.setItem=function(key,value){
      original(key,value);
      if(key!==STORAGE_KEY)return;
      try{
        const leads=JSON.parse(value||"[]"),lead=Array.isArray(leads)?leads.at(-1):null;
        if(!lead)return;
        const files=(window.__cladcanChatAttachments||captured||[]).filter(f=>f instanceof File);
        const total=files.reduce((sum,f)=>sum+f.size,0);
        if(total>MAX_TOTAL_BYTES){
          window.dispatchEvent(new CustomEvent("cladcan-chat-attachment-error",{detail:{message:"The total attachment size must be 10 MB or less."}}));
          return;
        }

        const form=document.createElement("form");
        form.action=ENDPOINT;
        form.method="POST";
        form.enctype="multipart/form-data";
        form.target=FRAME_NAME;
        form.style.display="none";
        const flow=label(lead.flow||"Chatbot inquiry");
        hidden(form,"_subject",`CladCan chatbot inquiry — ${flow}`);
        hidden(form,"_template","table");
        hidden(form,"_captcha","false");
        hidden(form,"_url","https://cladcan.ca");
        hidden(form,"Source","CladCan Project Assistant");
        hidden(form,"Inquiry Type",flow);
        hidden(form,"Priority",lead.priority?"Urgent":"Standard");
        hidden(form,"Submitted At",lead.createdAt||new Date().toISOString());
        flatten(form,lead.values||{});

        files.forEach((file,index)=>appendAttachmentInput(form,file,index));
        if(files.length){
          hidden(form,"Attached files",files.map(f=>`${f.name} (${Math.ceil(f.size/1024)} KB)`).join(", "));
        }

        document.body.appendChild(form);
        form.submit();
        setTimeout(()=>form.remove(),20000);
        captured=[];
        window.__cladcanChatAttachments=[];
        window.dispatchEvent(new CustomEvent("cladcan-chat-attachments-changed",{detail:{files:[]}}));
      }catch(err){console.error("Chatbot FormSubmit bridge error:",err)}
    };

    return()=>{
      document.removeEventListener("change",onFile,true);
      window.localStorage.setItem=original;
      delete window.__cladcanChatAttachments;
    };
  },[]);
  return null;
}
