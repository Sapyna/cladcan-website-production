"use client";
import { useEffect } from "react";

function fileKey(file){return `${file.name}:${file.size}:${file.lastModified}`}
function formatSize(bytes){if(bytes<1024)return `${bytes} B`;if(bytes<1024*1024)return `${Math.ceil(bytes/1024)} KB`;return `${(bytes/1024/1024).toFixed(1)} MB`}

export default function ChatAttachmentUX(){
  useEffect(()=>{
    let files=[];

    function render(){
      document.querySelectorAll(".chatAttachmentSummaryEnhanced").forEach(n=>n.remove());
      const panel=document.querySelector(".chatPanel");
      if(!panel||!files.length)return;
      const upload=panel.querySelector(".chatFileUpload");
      if(!upload)return;

      const wrap=document.createElement("div");
      wrap.className="chatAttachmentSummaryEnhanced";
      wrap.setAttribute("role","status");
      wrap.setAttribute("aria-live","polite");

      const title=document.createElement("div");
      title.className="chatAttachmentSummaryTitle";
      title.textContent=`${files.length} file${files.length===1?"":"s"} attached successfully`;
      wrap.appendChild(title);

      const list=document.createElement("div");
      list.className="chatAttachmentSummaryList";
      files.forEach(file=>{
        const row=document.createElement("div");
        row.className="chatAttachmentSummaryRow";
        const name=document.createElement("span");
        name.textContent=file.name;
        const size=document.createElement("small");
        size.textContent=formatSize(file.size);
        row.append(name,size);
        list.appendChild(row);
      });
      wrap.appendChild(list);

      const note=document.createElement("div");
      note.className="chatAttachmentSummaryNote";
      note.textContent="You can choose more files to add them before continuing.";
      wrap.appendChild(note);
      upload.insertAdjacentElement("afterend",wrap);
    }

    function onChange(event){
      const input=event.target;
      if(!(input instanceof HTMLInputElement)||input.type!=="file"||!input.closest(".chatPanel"))return;
      input.multiple=true;
      const map=new Map(files.map(f=>[fileKey(f),f]));
      Array.from(input.files||[]).forEach(f=>map.set(fileKey(f),f));
      files=Array.from(map.values());
      setTimeout(render,0);
    }

    function onBridge(event){
      files=Array.isArray(event.detail?.files)?event.detail.files:[];
      setTimeout(render,0);
    }

    function onError(event){
      setTimeout(()=>{
        const panel=document.querySelector(".chatPanel");
        if(!panel)return;
        const node=document.createElement("div");
        node.className="chatAttachmentErrorEnhanced";
        node.textContent=event.detail?.message||"We could not attach the selected files.";
        panel.querySelector(".chatFileUpload")?.insertAdjacentElement("afterend",node);
      },0);
    }

    document.addEventListener("change",onChange,true);
    window.addEventListener("cladcan-chat-attachments-changed",onBridge);
    window.addEventListener("cladcan-chat-attachment-error",onError);
    return()=>{
      document.removeEventListener("change",onChange,true);
      window.removeEventListener("cladcan-chat-attachments-changed",onBridge);
      window.removeEventListener("cladcan-chat-attachment-error",onError);
    };
  },[]);
  return null;
}
