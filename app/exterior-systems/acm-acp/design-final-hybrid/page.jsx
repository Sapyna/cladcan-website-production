import AcmProductCompare from "@/components/AcmProductCompare";

export const metadata = {
  title: "ACM Final Hybrid Product Page | Design Study",
  description: "Final CladCan product-page design study combining navy brand treatment, architectural neutrals, left tab navigation and warm material accents."
};

export default function Page(){
  return <AcmProductCompare variant="left" theme="architectural-stone" />;
}
