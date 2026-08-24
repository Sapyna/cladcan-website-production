"use client";

import { useEffect } from "react";

export default function AttachmentSelectionFeedback(){
  useEffect(()=>{
    function update(input){
      if(!input || input.name!=="attachments") return;
      const label=input.closest(".contactFinalUpload");
      if(!label) return;

      let feedback=label.parentElement?.querySelector(":scope > .contactAttachmentFeedback");
      if(!feedback){
        feedback=document.createElement("div");
        feedback.className="contactAttachmentFeedback";
        feedback.setAttribute("aria-live","polite");
        label.insertAdjacentElement("afterend",feedback);
      }

      Object.assign(feedback.style,{
        display:"none",
        width:"100%",
        maxWidth:"100%",
        boxSizing:"border-box",
        margin:"10px 0 2px",
        padding:"11px 14px",
        borderRadius:"10px",
        background:"#edf7f1",
        color:"#185c3b",
        fontSize:"14px",
        lineHeight:"1.45",
        fontWeight:"650",
        whiteSpace:"normal",
        overflowWrap:"anywhere",
        wordBreak:"normal"
      });

      const files=Array.from(input.files||[]);
      if(!files.length){
        feedback.textContent="";
        feedback.style.display="none";
        return;
      }

      const names=files.map(file=>file.name).join(" · ");
      feedback.textContent=`${files.length} file${files.length>1?"s":""} selected: ${names}`;
      feedback.style.display="block";
    }

    const onChange=(event)=>{
      const target=event.target;
      if(target instanceof HTMLInputElement && target.type==="file") update(target);
    };

    const onReset=(event)=>{
      if(!(event.target instanceof HTMLFormElement)) return;
      const feedback=event.target.querySelector(".contactAttachmentFeedback");
      if(feedback){
        feedback.textContent="";
        feedback.style.display="none";
      }
    };

    document.addEventListener("change",onChange);
    document.addEventListener("reset",onReset);
    document.querySelectorAll('input[type="file"][name="attachments"]').forEach(update);

    return ()=>{
      document.removeEventListener("change",onChange);
      document.removeEventListener("reset",onReset);
    };
  },[]);

  return null;
}
