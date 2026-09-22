import AcmProductCompare from "@/components/AcmProductCompare";

export const metadata = {
  title: "ACM / ACP Aluminum Composite Panels — Continuous Alternative | CladCan",
  description: "Alternative continuous-layout version of the CladCan ACM / ACP product page."
};

export default function Page(){
  return <>
    <div className="acmContinuousAlternative">
      <AcmProductCompare variant="horizontal" />
    </div>
    <style>{`
      /* Alternative only: keep the current ACM content exactly, but convert its
         long-form navigation into a left sticky in-page menu. */
      .acmContinuousAlternative article{
        display:grid!important;
        grid-template-columns:minmax(210px,250px) minmax(0,1fr)!important;
        column-gap:56px!important;
        align-items:start!important;
      }
      .acmContinuousAlternative article > section:first-child{
        grid-column:1 / -1!important;
      }
      .acmContinuousAlternative article > nav[class*="horizontalNav"]{
        grid-column:1!important;
        position:sticky!important;
        top:96px!important;
        z-index:20!important;
        display:flex!important;
        flex-direction:column!important;
        align-self:start!important;
        width:100%!important;
        margin:64px 0 96px!important;
        padding:8px 0 8px 18px!important;
        border:0!important;
        border-left:1px solid #d9e0e4!important;
        background:transparent!important;
        box-shadow:none!important;
      }
      .acmContinuousAlternative article > nav[class*="horizontalNav"] a{
        display:grid!important;
        grid-template-columns:28px 1fr!important;
        gap:0 10px!important;
        align-items:center!important;
        min-height:48px!important;
        padding:8px 10px!important;
        border:0!important;
        border-radius:8px!important;
        color:#647681!important;
        text-decoration:none!important;
        background:transparent!important;
      }
      .acmContinuousAlternative article > nav[class*="horizontalNav"] a:hover{
        color:#0a2133!important;
        background:#f4f1eb!important;
      }
      .acmContinuousAlternative article > nav[class*="horizontalNav"] svg{
        grid-row:1 / span 2!important;
        width:18px!important;
        height:18px!important;
        color:#a9783e!important;
      }
      .acmContinuousAlternative article > nav[class*="horizontalNav"] span{
        display:none!important;
      }
      .acmContinuousAlternative article > nav[class*="horizontalNav"] strong{
        font-size:15px!important;
        line-height:1.25!important;
        font-weight:750!important;
      }
      .acmContinuousAlternative article > main[class*="longform"]{
        grid-column:2!important;
        width:100%!important;
        min-width:0!important;
        margin:64px 0 96px!important;
        padding:0 4vw 0 0!important;
      }
      .acmContinuousAlternative article > main[class*="longform"] > section{
        scroll-margin-top:105px!important;
        padding:0 0 82px!important;
        margin:0 0 82px!important;
        border-bottom:1px solid #e0e5e8!important;
      }
      .acmContinuousAlternative article > main[class*="longform"] > section:last-child{
        margin-bottom:0!important;
        border-bottom:0!important;
      }
      .acmContinuousAlternative [class*="longHead"]{
        margin-bottom:28px!important;
      }
      @media(max-width:900px){
        .acmContinuousAlternative article{
          display:block!important;
        }
        .acmContinuousAlternative article > nav[class*="horizontalNav"]{
          position:sticky!important;
          top:72px!important;
          display:flex!important;
          flex-direction:row!important;
          overflow-x:auto!important;
          width:100%!important;
          margin:0!important;
          padding:10px 16px!important;
          border-left:0!important;
          border-top:1px solid #e0e5e8!important;
          border-bottom:1px solid #e0e5e8!important;
          background:#fff!important;
        }
        .acmContinuousAlternative article > nav[class*="horizontalNav"] a{
          display:flex!important;
          flex:0 0 auto!important;
          min-height:42px!important;
          white-space:nowrap!important;
        }
        .acmContinuousAlternative article > main[class*="longform"]{
          margin:42px 0 70px!important;
          padding:0 20px!important;
        }
      }
    `}</style>
  </>;
}
