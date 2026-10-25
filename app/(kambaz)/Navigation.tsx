"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaCogSolid, LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "Dashboard", path: "/dashboard", icon: AiOutlineDashboard },
  { label: "Courses", path: "/dashboard", icon: LiaBookSolid },
  { label: "Calendar", path: "/calendar", icon: IoCalendarOutline },
  { label: "Inbox", path: "/inbox", icon: FaInbox },
  { label: "Labs", path: "/labs", icon: LiaCogSolid },
  { label: "History", path: "/history", icon: IoCalendarOutline },
];

export default function KambazNavigation() {
  const pathname = usePathname();
  const accountActive = pathname.startsWith("/account");
  return <nav id="wd-kambaz-navigation" aria-label="Kambaz"
    className="fixed bottom-0 top-0 z-20 hidden w-[120px] overflow-y-auto bg-black md:block">
    <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" rel="noreferrer" className="block bg-black py-3 text-center">
      <Image src="/images/neu.svg" width={75} height={75} alt="Northeastern University" className="mx-auto" />
    </a>
    <Link href="/account" id="wd-account-link" aria-current={accountActive ? "page" : undefined}
      className={`block py-3 text-center text-sm no-underline ${accountActive ? "bg-white text-red-600" : "bg-black text-white"}`}>
      <FaRegCircleUser className="inline-block text-3xl" /><br />Account
    </Link>
    {LINKS.map(({ label, path, icon: Icon }) => {
      const active = label === "Courses" ? pathname.startsWith("/courses/")
        : pathname === path || pathname.startsWith(path + "/");
      return <Link key={label} id={`wd-${label.toLowerCase()}-link`} href={path}
        aria-current={active ? "page" : undefined}
        className={`block py-3 text-center text-sm no-underline ${active ? "bg-white text-red-600" : "bg-black text-white"}`}>
        <Icon className="inline-block text-3xl text-red-500" /><br />{label}
      </Link>;
    })}
  </nav>;
}
