"use client";

import { useEffect } from "react";

export default function AttachmentSelectionFeedback(){
  useEffect(()=>{
    function update(input){
      if(!input || input.name!=="attachments") return;
      const label=input.closest(".contactFinalUpload");
      if(!label) return;

      let feedback=label.querySelector(".contactAttachmentFeedback");
      if(!feedback){
        feedback=document.createElement("div");
        feedback.className="contactAttachmentFeedback";
        label.appendChild(feedback);
      }

      const files=Array.from(input.files||[]);
      if(!files.length){
        feedback.textContent="No files selected";
        feedback.classList.remove("hasFiles");
        return;
      }

      const names=files.map(file=>file.name).join(" · ");
      feedback.textContent=`${files.length} file${files.length>1?"s":""} selected: ${names}`;
      feedback.classList.add("hasFiles");
    }

    const onChange=(event)=>{
      const target=event.target;
      if(target instanceof HTMLInputElement && target.type==="file") update(target);
    };

    document.addEventListener("change",onChange);
    document.querySelectorAll('input[type="file"][name="attachments"]').forEach(update);
    return ()=>document.removeEventListener("change",onChange);
  },[]);

  return null;
}
