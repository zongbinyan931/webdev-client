"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const LINKS = [
  { href: "/labs", label: "Home" },
  { href: "/labs/lab1", label: "Lab 1" },
  { href: "/labs/lab2", label: "Lab 2" },
  { href: "/labs/lab3", label: "Lab 3" },
  { href: "/labs/lab4", label: "Lab 4" },
  { href: "/labs/lab5", label: "Lab 5" },
  { href: "/", label: "Kambaz" },
  { href: "https://kambaz.dev/book/ch1", label: "Chapter 1" },
  { href: "https://kambaz.dev/book/ch3", label: "Book Ch3" },
  { href: "https://github.com/zongbinyan931/webdev-client", label: "GitHub" },
];
export default function TOC() {
  const pathname = usePathname();
  return <nav aria-label="Labs table of contents" id="wd-labs-toc">
    <p>Zongbin Yan</p><ul>{LINKS.map(({href, label}) => {
      const active = pathname === href || (href.startsWith("/labs/lab") && pathname.startsWith(href + "/"));
      return <li key={href}><Link href={href} aria-current={active ? "page" : undefined}
        className={active ? "active" : undefined}>{label}</Link></li>;
    })}</ul>
  </nav>;
}
