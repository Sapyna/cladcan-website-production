import Link from "next/link";

export const metadata={
  title:"Privacy Policy | CladCan",
  description:"Learn how CladCan collects, uses and protects information submitted through cladcan.ca."
};

export default function PrivacyPolicy(){
  return <>
    <section className="section paper">
      <div className="wrap" style={{maxWidth:920}}>
        <span className="eyebrow">PRIVACY</span>
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated: August 27, 2026</p>
      </div>
    </section>
    <section className="section">
      <div className="wrap" style={{maxWidth:920}}>
        <div style={{display:"grid",gap:28,lineHeight:1.75}}>
          <section><h2>Information we collect</h2><p>When you contact CladCan through this website, we may collect information you choose to provide, including your name, email address, phone number, project location, project type, project details, preferred showroom appointment date and time, and files such as drawings or project photos.</p></section>
          <section><h2>How we use your information</h2><p>We use submitted information to respond to inquiries, prepare project discussions or quotations, coordinate showroom visits, provide requested services, maintain business records, improve our website and communications, and protect the website from misuse or spam.</p></section>
          <section><h2>Google reviews and external services</h2><p>The website may display selected customer reviews sourced from CladCan&apos;s Google Business Profile and may link to Google Maps or other third-party services. When you follow an external link, that service&apos;s own privacy terms apply.</p></section>
          <section><h2>Sharing of information</h2><p>CladCan does not sell personal information submitted through this website. Information may be shared with service providers that support website hosting, email delivery, security, analytics or business operations where reasonably necessary to provide those services, or where disclosure is required by law.</p></section>
          <section><h2>Retention and security</h2><p>We retain information for as long as reasonably necessary for the purpose for which it was collected, for project and business records, or to meet legal obligations. We use reasonable administrative and technical safeguards, but no internet transmission or storage system can be guaranteed to be completely secure.</p></section>
          <section><h2>Your choices</h2><p>You may contact CladCan to ask about personal information you have submitted through the website, request a correction, or ask that information be deleted where applicable and subject to legal or business record requirements.</p></section>
          <section><h2>Contact</h2><p>Questions about this policy can be sent to <a href="mailto:info@cladcan.ca">info@cladcan.ca</a> or by calling <a href="tel:+18449243030">+1 (844) 924-3030</a>.</p></section>
          <p><Link href="/contact">Contact CladCan</Link></p>
        </div>
      </div>
    </section>
  </>;
}
