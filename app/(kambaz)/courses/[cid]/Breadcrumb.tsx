"use client";
import { usePathname } from "next/navigation";
export default function Breadcrumb({ course }: { course: { name: string } }) {
  const pathname = usePathname();
  const section = pathname.split("/")[3] ?? "home";
  const label = section.charAt(0).toUpperCase() + section.slice(1);
  return <span id="wd-course-breadcrumb">{course.name} &gt; {label}</span>;
}
