"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
export default function CourseNavigation({cid}:{cid:string}) {
 const path=usePathname();
 return <nav id="wd-courses-navigation" aria-label="Course" className="wd list-group rounded-none text-lg">{["Home","Modules","Piazza","Zoom","Assignments","Quizzes","Grades","People"].map(label=>{
 const href=`/courses/${cid}/${label.toLowerCase()}`;
 return <Link key={label} id={`wd-course-${label.toLowerCase()}-link`} href={href} aria-current={path===href || path.startsWith(href+'/')?'page':undefined} className={`list-group-item ${path===href || path.startsWith(href+'/')?'active':'text-red-600'}`}>{label}</Link>;
 })}<Link id="wd-course-ai-link" href={`/courses/${cid}/home`} className="list-group-item border-0 text-red-600">Sample</Link></nav>;
}

