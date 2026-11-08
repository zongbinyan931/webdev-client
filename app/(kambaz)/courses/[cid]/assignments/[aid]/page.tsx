"use client";
import Link from "next/link";
import { use } from "react";
import { useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  Assignment,
} from "../../../../store/assignmentsStore";
import { useAccount } from "../../../../account/AccountContext";
export default function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = use(params);
  const { assignments, saveAssignment } = useAssignmentsStore();
  const router = useRouter();
  const { currentUser } = useAccount();
  const canEdit =
    !currentUser || ["FACULTY", "ADMIN"].includes(currentUser.role);
  const assignment: Assignment | undefined =
    aid === "new"
      ? {
          _id: "",
          course: cid,
          title: "",
          description: "",
          points: 100,
          due: "",
          available: "",
        }
      : assignments.find((a) => a._id === aid && a.course === cid);
  if (!assignment)
    return (
      <p>
        Assignment not found.{" "}
        <Link href={`/courses/${cid}/assignments`}>Back to assignments</Link>
      </p>
    );
  const dateTime = (v: string, hour: string) =>
    v ? (v.includes("T") ? v : `${v}T${hour}`) : "";
  return (
    <form
      id="wd-assignments-editor"
      key={aid}
      onSubmit={(e) => {
        e.preventDefault();
        if (!canEdit) return;
        const data = new FormData(e.currentTarget);
        const value = (key: string) => String(data.get(key) ?? "");
        if (!value("wd-name").trim()) return;
        saveAssignment({
          ...assignment,
          title: value("wd-name").trim(),
          description: value("wd-description"),
          points: Number(value("wd-points")),
          due: value("wd-due-date"),
          available: value("wd-available-from"),
          until: value("wd-available-until"),
          notes: value("wd-ai-editor-notes"),
          group: value("wd-group"),
          gradeAs: value("wd-display-grade-as"),
          submissionType: value("wd-submission-type"),
          assignTo: value("wd-assign-to"),
          options: [
            "wd-text-entry",
            "wd-website-url",
            "wd-media-recordings",
            "wd-student-annotation",
            "wd-file-upload",
          ].filter((k) => data.has(k)),
        });
        router.push(`/courses/${cid}/assignments`);
      }}
    >
      <fieldset disabled={!canEdit}>
        <p>Assignment id: {assignment._id}</p>
        <label htmlFor="wd-name">Assignment Name</label>
        <br />
        <input
          className="w-full rounded border border-neutral-300 p-3"
          name="wd-name"
          id="wd-name"
          required
          defaultValue={assignment.title}
        />
        <br />
        <br />
        <label htmlFor="wd-description">Description</label>
        <br />
        <textarea
          name="wd-description"
          id="wd-description"
          className="w-full rounded border border-neutral-300 p-3"
          rows={5}
          cols={50}
          defaultValue={assignment.description}
        />
        <br />
        <div className="wd-editor-fields">
          <div className="wd-editor-row">
            <div>
              <label htmlFor="wd-points">Points</label>
            </div>
            <div>
              <input
                className="w-full rounded border border-neutral-300 p-2"
                name="wd-points"
                id="wd-points"
                type="number"
                min={0}
                defaultValue={assignment.points}
              />
            </div>
          </div>
          <div className="wd-editor-row">
            <div>
              <label htmlFor="wd-group">Assignment Group</label>
            </div>
            <div>
              <select
                name="wd-group"
                id="wd-group"
                defaultValue={assignment.group ?? "ASSIGNMENTS"}
              >
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </div>
          </div>
          <div className="wd-editor-row">
            <div>
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </div>
            <div>
              <select
                name="wd-display-grade-as"
                id="wd-display-grade-as"
                defaultValue={assignment.gradeAs ?? "Percentage"}
              >
                <option>Percentage</option>
                <option>Points</option>
                <option>Complete/Incomplete</option>
                <option>Letter Grade</option>
              </select>
            </div>
          </div>
          <div className="wd-editor-row">
            <div>
              <label htmlFor="wd-submission-type">Submission Type</label>
            </div>
            <div>
              <select
                name="wd-submission-type"
                id="wd-submission-type"
                defaultValue={assignment.submissionType ?? "Online"}
              >
                <option>Online</option>
                <option>No Submission</option>
                <option>On Paper</option>
                <option>External Tool</option>
              </select>
            </div>
          </div>
          <div className="wd-editor-row">
            <div></div>
            <div>
              <fieldset>
                <legend>Online Entry Options</legend>
                <input
                  name="wd-text-entry"
                  id="wd-text-entry"
                  type="checkbox"
                  defaultChecked={
                    assignment.options
                      ? assignment.options.includes("wd-text-entry")
                      : false
                  }
                />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />
                <input
                  name="wd-website-url"
                  id="wd-website-url"
                  type="checkbox"
                  defaultChecked={
                    assignment.options
                      ? assignment.options.includes("wd-website-url")
                      : true
                  }
                />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />
                <input
                  name="wd-media-recordings"
                  id="wd-media-recordings"
                  type="checkbox"
                  defaultChecked={
                    assignment.options
                      ? assignment.options.includes("wd-media-recordings")
                      : false
                  }
                />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />
                <input
                  name="wd-student-annotation"
                  id="wd-student-annotation"
                  type="checkbox"
                  defaultChecked={
                    assignment.options
                      ? assignment.options.includes("wd-student-annotation")
                      : false
                  }
                />
                <label htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
                <br />
                <input
                  name="wd-file-upload"
                  id="wd-file-upload"
                  type="checkbox"
                  defaultChecked={
                    assignment.options
                      ? assignment.options.includes("wd-file-upload")
                      : false
                  }
                />
                <label htmlFor="wd-file-upload">File Uploads</label>
              </fieldset>
            </div>
          </div>
          <div className="wd-editor-row">
            <div>Assign</div>
            <div>
              <fieldset>
                <legend>Assign</legend>
                <label htmlFor="wd-assign-to">Assign to</label>
                <br />
                <input
                  name="wd-assign-to"
                  id="wd-assign-to"
                  defaultValue={assignment.assignTo ?? "Everyone"}
                />
                <br />
                <label htmlFor="wd-due-date">Due</label>
                <br />
                <input
                  type="datetime-local"
                  className="w-full rounded border border-neutral-300 p-2"
                  name="wd-due-date"
                  id="wd-due-date"
                  defaultValue={dateTime(assignment.due, "23:59")}
                />
                <br />
                <label htmlFor="wd-available-from">Available from</label>
                <br />
                <input
                  type="datetime-local"
                  name="wd-available-from"
                  id="wd-available-from"
                  defaultValue={dateTime(assignment.available, "00:00")}
                />
                <br />
                <label htmlFor="wd-available-until">Until</label>
                <br />
                <input
                  type="datetime-local"
                  name="wd-available-until"
                  id="wd-available-until"
                  defaultValue={dateTime(
                    assignment.until ?? assignment.due,
                    "23:59",
                  )}
                />
              </fieldset>
            </div>
          </div>
        </div>
        <label htmlFor="wd-ai-editor-notes">Sample notes</label>
        <textarea
          name="wd-ai-editor-notes"
          id="wd-ai-editor-notes"
          defaultValue={assignment.notes ?? ""}
          rows={3}
          className="w-full rounded border border-neutral-300 p-3"
        />
        <hr />
        <Link id="wd-cancel" href={`/courses/${cid}/assignments`}>
          Cancel
        </Link>{" "}
        <button
          id="wd-save"
          type="submit"
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Save
        </button>
      </fieldset>
    </form>
  );
}
