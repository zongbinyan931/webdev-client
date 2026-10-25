import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import * as db from "../../database";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
export default async function CourseLayout({ children, params }: {
  children: ReactNode; params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const course = db.courses.find((course) => course._id === cid);
  if (!course) notFound();
  return <div id="wd-courses">
    <h1 className="text-xl font-normal text-red-600"><Breadcrumb course={course} /> <small>({course._id})</small></h1>
    <hr className="my-4 border-neutral-200" />
    <div className="flex gap-4">
      <aside className="hidden w-[150px] shrink-0 md:block"><CourseNavigation cid={cid} /></aside>
      <main className="min-w-0 flex-1">
        <details className="mb-4 md:hidden"><summary>Course navigation</summary><CourseNavigation cid={cid} /></details>
        {children}
      </main>
    </div>
  </div>;
}
