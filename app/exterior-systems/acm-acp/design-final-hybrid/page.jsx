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

      /* Match the established product-page CTA language: lightly rounded outline, red on hover, no text-link underline. */
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
        text-decoration:none!important;
        text-decoration-line:none!important;
        text-decoration-color:transparent!important;
        transition:background .18s ease,border-color .18s ease,transform .18s ease!important;
      }
      [class*="heroCopy"] > a:hover,
      [class*="heroCopy"] > a:focus-visible{
        background:#d61f24!important;
        border-color:#d61f24!important;
        color:#fff!important;
        text-decoration:none!important;
        text-decoration-line:none!important;
        text-decoration-color:transparent!important;
        transform:translateY(-1px)!important;
      }

      /* Final ACM tab heading master: every tab uses the approved Overview typography. */
      html body .${styles.page} main[class*="panel"] h2{
        max-width:620px!important;
        margin:0 0 24px!important;
        font-family:var(--type-display)!important;
        font-size:clamp(1.7rem,2.15vw,2.45rem)!important;
        line-height:1.16!important;
        letter-spacing:-.025em!important;
        font-weight:600!important;
        text-wrap:balance!important;
      }

      /* Finishes: strong material inspection hover without reflowing the grid. */
      html body .${styles.page} [class*="panelFinishes"] [class*="finishGrid"] article,
      html body .${styles.page} [class*="panelFinishes"] [class*="swatches"]{
        overflow:visible!important;
      }
      html body .${styles.page} [class*="panelFinishes"] [class*="swatches"] > span{
        position:relative!important;
        z-index:1;
        transform:scale(1);
        transform-origin:center;
        transition:transform .2s ease,box-shadow .2s ease,z-index 0s!important;
      }
      html body .${styles.page} [class*="panelFinishes"] [class*="swatches"] > span:hover{
        z-index:30!important;
        transform:scale(2)!important;
        box-shadow:0 14px 32px rgba(7,26,41,.28),0 0 0 2px rgba(255,255,255,.9)!important;
      }
      html body .${styles.page} [class*="panelFinishes"] [class*="swatches"] > span::after{
        transform:translateX(-50%) translateY(4px) scale(.5)!important;
        transform-origin:center bottom!important;
      }
      html body .${styles.page} [class*="panelFinishes"] [class*="swatches"] > span:hover::after{
        opacity:1!important;
        transform:translateX(-50%) translateY(-6px) scale(.5)!important;
      }

      @media(max-width:760px){
        .pageBreadcrumbInner{min-height:44px!important;}
        [class*="heroCopy"] > a{
          min-height:48px!important;
          padding:13px 18px!important;
          border-radius:9px!important;
        }
        html body .${styles.page} main[class*="panel"] h2{
          max-width:540px!important;
          font-size:clamp(1.65rem,7vw,2.15rem)!important;
          line-height:1.16!important;
          margin-bottom:20px!important;
          font-weight:600!important;
        }
      }
    `}</style>
    <div className={styles.page}><AcmProductCompare variant="left" theme="architectural-stone" /></div>
  </>;
}
