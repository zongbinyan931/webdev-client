"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccount } from "./AccountContext";
export default function AccountNavigation() {
  const path = usePathname();
  const { currentUser } = useAccount();
  const links = currentUser
    ? [["profile", "Profile"]]
    : [
        ["signin", "Sign in"],
        ["signup", "Sign up"],
      ];
  return (
    <nav id="wd-account-navigation" className="wd list-group">
      {links.map(([route, label]) => (
        <Link
          key={route}
          href={`/account/${route}`}
          className={`list-group-item ${path.endsWith(route) ? "active" : ""}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
