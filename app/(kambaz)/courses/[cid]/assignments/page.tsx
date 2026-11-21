"use client";
import { errorMessage } from "@/lib/http";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
import { useAccount } from "../../../account/AccountContext";
import AssignmentItem from "./AssignmentItem";
export default function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = use(params);
  const { assignments, loadAssignments, deleteAssignment } = useAssignmentsStore();
  const { currentUser } = useAccount();
  const edit = !currentUser || ["FACULTY", "ADMIN"].includes(currentUser.role);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let active = true;
    loadAssignments(cid).catch((error) => { if (active) setError(errorMessage(error)); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [cid, loadAssignments]);
  return (
    <div id="wd-assignments">
      {error && <p role="alert">{error}</p>}
      {loading && <p role="status">Loading assignments…</p>}
      <div className="mb-4 flex flex-wrap justify-between gap-3">
        <input
          aria-label="Search assignments"
          placeholder="Search for Assignments"
          className="rounded border p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {edit && (
          <Link
            id="wd-add-assignment"
            className="rounded bg-red-600 px-3 py-2 text-white"
            href={`/courses/${cid}/assignments/new`}
          >
            + Assignment
          </Link>
        )}
      </div>
      <h3 className="mb-3 bg-neutral-200 p-3">ASSIGNMENTS 40% of Total</h3>
      <ul id="wd-assignment-list" className="list-none p-0">
        {assignments
          .filter(
            (a) =>
              a.course === cid &&
              a.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((a) => (
            <li key={a._id}>
              <ul className="list-none p-0">
                <AssignmentItem
                  cid={cid}
                  aid={a._id}
                  title={a.title}
                  details={`Available ${a.available} | Due ${a.due} | ${a.points} pts`}
                />
              </ul>
              {edit && (
                <button
                  className="mb-3 text-red-700"
                  aria-label={`Delete ${a.title}`}
                  onClick={() => {
                    if (confirm(`Delete ${a.title}?`))
                      void deleteAssignment(a._id, cid).catch((error) => setError(errorMessage(error)));
                  }}
                >
                  Delete
                </button>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
