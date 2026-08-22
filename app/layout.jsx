import "./globals.css";
import "./hero-fix.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import QuickContactRail from "@/components/QuickContactRail";
import { PageBreadcrumb, PageSiblingNav } from "@/components/PageNavigation";

export const metadata = {
  title: {
    default: "CladCan | Building Envelope & Façade Systems",
    template: "%s | CladCan"
  },
  description: "Supply, fabrication, installation and design support for cladding, roofing, glazing and architectural exterior systems across Ontario."
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
