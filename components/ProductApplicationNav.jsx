import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProductApplicationNav({ links=[] }) {
  if (!links.length) return null;
  return <section className="productApplicationNav"><div className="wrap productApplicationNavInner"><div><span>AVAILABLE IN</span><strong>This product supports {links.length > 1 ? "multiple applications" : "this application"}.</strong></div><div className="productApplicationNavLinks">{links.map(link=><Link key={link.href} href={link.href}>{link.label}<ArrowUpRight size={13}/></Link>)}</div></div></section>;
}
