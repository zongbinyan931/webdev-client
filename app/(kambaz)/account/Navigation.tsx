"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
export default function AccountNavigation(){const path=usePathname();return <nav id="wd-account-navigation" className="wd list-group">{[["Signin","Sign in"],["Signup","Sign up"],["Profile","Profile"]].map(([route,label])=><Link key={route} href={`/account/${route.toLowerCase()}`} className={`list-group-item ${path.endsWith(route.toLowerCase())?'active':''}`}>{label}</Link>)}</nav>;}
