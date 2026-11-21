"use client";
import { errorMessage } from "@/lib/http";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { emptyCourse, useCoursesStore } from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccount } from "../account/AccountContext";
export default function Dashboard() {
  const { courses, loaded, error, loadCourses, addCourse, updateCourse, deleteCourse } = useCoursesStore();
  const { enrollments, loadEnrollments, enroll, unenroll } = useEnrollmentsStore();
  const { currentUser } = useAccount();
  const [course, setCourse] = useState({ ...emptyCourse });
  const [all, setAll] = useState(false);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  async function run(action: () => Promise<void>) {
    setBusy(true); setMessage("");
    try { await action(); } catch (error) { setMessage(errorMessage(error)); }
    finally { setBusy(false); }
  }
  const canEdit =
    !currentUser || ["FACULTY", "ADMIN"].includes(currentUser.role);
  const visible = courses.filter(
    (c) =>
      !currentUser ||
      canEdit ||
      all ||
      enrollments.some((e) => e.user === currentUser._id && e.course === c._id),
  );
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      {!loaded && <p role="status">Loading courses…</p>}
      {error && <p role="alert">{error} <button onClick={() => void loadCourses()}>Retry</button></p>}
      {currentUser && (
        <button
          id="wd-enrollments-toggle"
          className="my-2 rounded bg-blue-600 px-3 py-2 text-white"
          onClick={() => setAll(!all)}
        >
          {all ? "My Courses" : "Enrollments"}
        </button>
      )}
      {canEdit && (
        <form
          className="my-4 grid max-w-2xl gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (!course.name.trim()) return;
            void run(async () => {
              await addCourse({ ...course, name: course.name.trim() });
              if (currentUser) await loadEnrollments(currentUser._id);
              setCourse({ ...emptyCourse }); setMessage("Course added.");
            });
          }}
        >
          <h2>{course._id ? "Edit Course" : "New Course"}</h2>
          <label>
            Course name
            <input
              id="wd-course-name"
              required
              className="block w-full rounded border p-2"
              value={course.name}
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
          </label>
          <label>
            Description
            <textarea
              id="wd-course-description"
              className="block w-full rounded border p-2"
              value={course.description}
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
            />
          </label>
          <label>
            Course number
            <input
              id="wd-course-number"
              className="block w-full rounded border p-2"
              value={course.number}
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
          </label>
          <label>
            Start date
            <input
              id="wd-course-start-date"
              type="date"
              className="block rounded border p-2"
              value={course.startDate}
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
            />
          </label>
          <div className="flex gap-3">
            <button
              id="wd-add-course-click"
              disabled={busy}
              className="rounded bg-blue-600 px-3 py-2 text-white"
            >
              Add
            </button>
            <button
              type="button"
              disabled={busy || !course._id || !course.name.trim()}
              className="rounded border px-3 disabled:opacity-40"
              onClick={() => {
                void run(async () => {
                  await updateCourse({ ...course, name: course.name.trim() });
                  setCourse({ ...emptyCourse }); setMessage("Course updated.");
                });
              }}
            >
              Update
            </button>
            <button type="button" onClick={() => setCourse({ ...emptyCourse })}>
              Clear
            </button>
          </div>
        </form>
      )}
      {message && <p role="status">{message}</p>}
      <h2 id="wd-dashboard-published">Published Courses ({visible.length})</h2>
      <div id="wd-dashboard-courses" className="flex flex-wrap gap-6">
        {visible.map((c) => (
          <CourseCard key={c._id} {...c}>
            <div className="flex gap-3 px-4 pb-4">
              {canEdit && (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setCourse({ ...c });
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="text-red-700"
                    onClick={() => {
                      if (confirm(`Delete ${c.name}?`)) {
                        void run(async () => {
                          await deleteCourse(c._id);
                          if (course._id === c._id) setCourse({ ...emptyCourse });
                        });
                      }
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
              {currentUser &&
                (enrollments.some(
                  (e) => e.user === currentUser._id && e.course === c._id,
                ) ? (
                  <button
                    className="rounded bg-red-600 px-3 py-1 text-white"
                    disabled={busy}
                    onClick={() => void run(() => unenroll(currentUser._id, c._id))}
                  >
                    Unenroll
                  </button>
                ) : (
                  <button
                    className="rounded bg-green-700 px-3 py-1 text-white"
                    disabled={busy}
                    onClick={() => void run(() => enroll(currentUser._id, c._id))}
                  >
                    Enroll
                  </button>
                ))}
            </div>
          </CourseCard>
        ))}
      </div>
      {loaded && !error && visible.length === 0 && (
        <p>No enrolled courses. Select Enrollments to browse courses.</p>
      )}
    </div>
  );
}
