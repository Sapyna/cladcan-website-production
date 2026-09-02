import "./globals.css";
import "./hero-fix.css";
import "./hero-media-normalize.css";
import "./typography-system.css";
import "./link-interactions.css";
import "./chatbot-polish.css";
import "./chat-ai-addon.css";
import "./service-hero-normalize.css";
import "./footer-pro.css";
import "./exterior-system-hero.css";
import "./fastplank-product.css";
import "./sitewide-split-hero.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ChatLeadEmailBridge from "@/components/ChatLeadEmailBridge";
import ChatAttachmentUX from "@/components/ChatAttachmentUX";
import ChatAIAddon from "@/components/ChatAIAddon";
import QuickContactRail from "@/components/QuickContactRail";
import VisibleTextNormalizer from "@/components/VisibleTextNormalizer";
import AttachmentSelectionFeedback from "@/components/AttachmentSelectionFeedback";
import FormSubmitClientSubmit from "@/components/FormSubmitClientSubmit";
import { PageBreadcrumb, PageSiblingNav } from "@/components/PageNavigation";

export const metadata = {
  applicationName: "CladCan",
  metadataBase: new URL("https://cladcan.ca"),
  title: {
    default: "CladCan | Exterior Cladding & Building Envelope",
    template: "%s | CladCan"
  },
  description: "CladCan supplies exterior cladding, custom fabrication and installation services for residential, commercial and architectural projects across Ontario.",
  openGraph: {
    title: "CladCan | Exterior Cladding & Building Envelope",
    description: "Exterior cladding, material supply, fabrication and installation services across Ontario.",
    url: "https://cladcan.ca",
    siteName: "CladCan",
    locale: "en_CA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CladCan | Exterior Cladding & Building Envelope",
    description: "Exterior cladding, material supply, fabrication and installation services across Ontario."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <VisibleTextNormalizer />
        <AttachmentSelectionFeedback />
        <FormSubmitClientSubmit />
        <ChatLeadEmailBridge />
        <ChatAttachmentUX />
        <ChatAIAddon />
        <Header />
        <PageBreadcrumb />
        <main>{children}</main>
        <PageSiblingNav />
        <Footer />
        <QuickContactRail />
        <ChatWidget />
      </body>
    </html>
  );
}
