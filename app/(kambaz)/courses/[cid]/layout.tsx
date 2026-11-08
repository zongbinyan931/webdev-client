"use client";
import { ReactNode, use, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCoursesStore } from "../../store/coursesStore";
import { useEnrollmentsStore } from "../../store/enrollmentsStore";
import { useAccount } from "../../account/AccountContext";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
export default function CourseLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = use(params);
  const course = useCoursesStore((s) => s.courses.find((c) => c._id === cid));
  const { currentUser } = useAccount();
  const enrolled = useEnrollmentsStore((s) =>
    s.enrollments.some((e) => e.user === currentUser?._id && e.course === cid),
  );
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const blocked =
    !!currentUser &&
    !["FACULTY", "ADMIN"].includes(currentUser.role) &&
    !enrolled;
  useEffect(() => {
    if (blocked) router.replace("/dashboard");
  }, [blocked, router]);
  if (blocked) return null;
  if (!course)
    return (
      <p>
        Course not found. <Link href="/dashboard">Dashboard</Link>
      </p>
    );
  return (
    <div id="wd-courses">
      <h1 className="text-xl font-normal text-red-600">
        <button
          aria-label="Toggle course navigation"
          aria-expanded={open}
          className="mr-3"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <Breadcrumb course={course} />
        <small> ({cid})</small>
      </h1>
      <hr className="my-4 border-neutral-200" />
      <div className="flex gap-4">
        {open && (
          <aside className="hidden w-[150px] shrink-0 md:block">
            <CourseNavigation cid={cid} />
          </aside>
        )}
        <main className="min-w-0 flex-1">
          <details className="mb-4 md:hidden">
            <summary>Course navigation</summary>
            <CourseNavigation cid={cid} />
          </details>
          {children}
        </main>
      </div>
    </div>
  );
}
