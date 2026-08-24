import "./globals.css";
import "./hero-fix.css";
import "./typography.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import QuickContactRail from "@/components/QuickContactRail";
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
