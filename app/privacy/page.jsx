import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | CladCan",
  description: "Learn how CladCan collects, uses, discloses, retains and protects personal information."
};

export default function PrivacyPolicy() {
  return <>
    <section className="section paper">
      <div className="wrap" style={{ maxWidth: 920 }}>
        <span className="eyebrow">PRIVACY</span>
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated: August 27, 2026</p>
      </div>
    </section>

    <section className="section">
      <div className="wrap" style={{ maxWidth: 920 }}>
        <div style={{ display: "grid", gap: 28, lineHeight: 1.75 }}>
          <section>
            <h2>Our commitment to privacy</h2>
            <p>CladCan respects your privacy and is committed to handling personal information responsibly. This Privacy Policy explains how we collect, use, disclose, retain and protect personal information when you visit cladcan.ca, contact us, request information or a quotation, arrange a showroom visit, or otherwise interact with us.</p>
          </section>

          <section>
            <h2>Information we collect</h2>
            <p>We collect personal information that you choose to provide to us. Depending on how you interact with CladCan, this may include your name, email address, telephone number, project or property location, project type, project details, preferred showroom appointment date and time, and files you submit such as drawings, specifications or project photos.</p>
            <p>Our website and the services used to operate it may also receive limited technical information associated with a visit, such as IP address, browser or device information, referring pages, request logs and information used for website security, diagnostics or performance. The information actually collected depends on the technologies and service providers in use.</p>
          </section>

          <section>
            <h2>Why we collect and use information</h2>
            <p>We use personal information only for identified and reasonable business purposes, including to respond to inquiries; discuss projects; prepare quotations or requested information; coordinate showroom visits; communicate about products, services or projects; provide requested services; maintain appropriate business and project records; operate, secure and improve our website; prevent misuse or spam; and comply with applicable legal requirements.</p>
            <p>If we intend to use personal information for a materially different purpose, we will identify that purpose and obtain any consent required by applicable law.</p>
          </section>

          <section>
            <h2>Consent and your choices</h2>
            <p>By voluntarily providing information for an inquiry, quotation, appointment or other request, you consent to our collection, use and disclosure of that information as reasonably necessary to respond to and fulfill that request. Where additional consent is required, we will seek it in an appropriate form.</p>
            <p>You may withdraw consent to uses that depend on consent, subject to legal or contractual restrictions and reasonable notice. Withdrawal may affect our ability to provide a requested service where the information is necessary for that service.</p>
          </section>

          <section>
            <h2>Sharing and service providers</h2>
            <p>CladCan does not sell personal information submitted through this website. We may disclose information to employees, contractors and service providers that need it to support our website, communications, email delivery, hosting, security, analytics, project administration or other business operations. We expect service providers handling personal information on our behalf to use appropriate safeguards and to process the information for the services they provide to us.</p>
            <p>We may also disclose information where required or permitted by law, or where reasonably necessary to protect our rights, users, systems or business.</p>
          </section>

          <section>
            <h2>Google reviews, links and third-party services</h2>
            <p>The website may display selected customer reviews sourced from CladCan&apos;s Google Business Profile and may link to Google Maps, Google services or other third-party websites. Third-party services operate under their own privacy practices and policies. CladCan is not responsible for the privacy practices of websites or services that we do not control.</p>
          </section>

          <section>
            <h2>Cookies and similar technologies</h2>
            <p>CladCan and its website service providers may use cookies, server logs or similar technologies that are necessary for website functionality, security, diagnostics or performance. If we introduce non-essential analytics, advertising or other tracking technologies that require consent, we will provide appropriate notice and choices as required by applicable law.</p>
          </section>

          <section>
            <h2>Retention</h2>
            <p>We retain personal information only for as long as reasonably necessary to fulfill the purposes for which it was collected, maintain appropriate project and business records, resolve disputes, enforce agreements, or satisfy legal, accounting or regulatory requirements. When information is no longer required, we take reasonable steps to delete, destroy or anonymize it, as appropriate.</p>
          </section>

          <section>
            <h2>Safeguards</h2>
            <p>We use reasonable administrative, organizational and technical safeguards appropriate to the nature of the information we handle. These measures are intended to reduce risks such as unauthorized access, use, disclosure, alteration or loss. No method of internet transmission or electronic storage, however, can be guaranteed to be completely secure.</p>
          </section>

          <section>
            <h2>Access and correction</h2>
            <p>You may contact us to ask whether we hold personal information about you, request access to information under our control, or ask us to correct inaccurate or incomplete information. We may need to verify your identity before fulfilling a request, and applicable law may permit or require us to refuse access in limited circumstances.</p>
          </section>

          <section>
            <h2>Privacy questions and complaints</h2>
            <p>CladCan is responsible for personal information under its control. Privacy inquiries, access or correction requests, withdrawal requests, and concerns or complaints about our privacy practices may be directed to our Privacy Contact at <a href="mailto:info@cladcan.ca">info@cladcan.ca</a> or <a href="tel:+18449243030">+1 (844) 924-3030</a>. We will review privacy concerns and respond as appropriate.</p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>We may update this Privacy Policy when our practices, services, technologies or legal obligations change. The current version will be posted on this page with the date of the latest update.</p>
          </section>

          <p><Link href="/contact">Contact CladCan</Link></p>
        </div>
      </div>
    </section>
  </>;
}
