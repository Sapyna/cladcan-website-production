import AcmProductCompare from "@/components/AcmProductCompare";
import styles from "./page.module.css";

export const metadata = {
  title: "ACM / ACP Aluminum Composite Panels | CladCan",
  description: "Explore ACM / ACP aluminum composite panels, applications, attachment systems, components, finishes and completed CladCan projects across Ontario."
};

export default function Page(){
  return <div className={styles.page}><AcmProductCompare variant="left" theme="architectural-stone" /></div>;
}
