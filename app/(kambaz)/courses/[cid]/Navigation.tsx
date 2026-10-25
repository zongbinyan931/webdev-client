"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const LINKS = [
  { label: "Home", segment: "home" }, { label: "Modules", segment: "modules" },
  { label: "Piazza", segment: "piazza" }, { label: "Zoom", segment: "zoom" },
  { label: "Assignments", segment: "assignments" }, { label: "Quizzes", segment: "quizzes" },
  { label: "Grades", segment: "grades" }, { label: "People", segment: "people/table" },
  { label: "Announcements", segment: "announcements" },
];
export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  return <nav aria-label="Course" className="wd-courses-navigation wd list-group rounded-none text-lg">
    {LINKS.map(({ label, segment }) => {
      const href = `/courses/${cid}/${segment}`;
      const active = pathname === href || pathname.startsWith(href + "/");
      return <Link key={segment} href={href} aria-current={active ? "page" : undefined}
        className={`list-group-item ${active ? "active" : "text-red-600"}`}>{label}</Link>;
    })}
  </nav>;
}
