import AcmProductCompare from "@/components/AcmProductCompare";
import styles from "./page.module.css";

export const metadata = {
  title: "ACM / ACP Aluminum Composite Panels | CladCan",
  description: "Explore ACM / ACP aluminum composite panels, applications, attachment systems, components, finishes and completed CladCan projects across Ontario."
};

export default function Page(){
  return <>
    <style>{`
      /* Final ACM: give the global breadcrumb its own row instead of overlaying the hero copy. */
      .pageBreadcrumbOverlay{
        position:relative!important;
        top:auto!important;
        left:auto!important;
        right:auto!important;
        z-index:20!important;
        pointer-events:auto!important;
        background:#071a29!important;
        border-bottom:1px solid rgba(255,255,255,.10)!important;
      }
      .pageBreadcrumbInner{
        min-height:52px!important;
      }

      /* Match the established hero CTA language: lightly rounded outline, red on hover. */
      [class*="heroCopy"] > a{
        min-height:52px!important;
        padding:14px 22px!important;
        border:1px solid rgba(255,255,255,.62)!important;
        border-radius:10px!important;
        background:transparent!important;
        color:#fff!important;
        font-size:.9rem!important;
        font-weight:800!important;
        box-shadow:none!important;
        transition:background .18s ease,border-color .18s ease,transform .18s ease!important;
      }
      [class*="heroCopy"] > a:hover{
        background:#d61f24!important;
        border-color:#d61f24!important;
        color:#fff!important;
        transform:translateY(-1px)!important;
      }

      @media(max-width:760px){
        .pageBreadcrumbInner{min-height:44px!important;}
        [class*="heroCopy"] > a{
          min-height:48px!important;
          padding:13px 18px!important;
          border-radius:9px!important;
        }
      }
    `}</style>
    <div className={styles.page}><AcmProductCompare variant="left" theme="architectural-stone" /></div>
  </>;
}
