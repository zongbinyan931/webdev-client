import Link from "next/link";
export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const titles: Record<string, string> = {
    "123": "A1 - ENV + HTML",
    "234": "A2 - CSS + TAILWIND",
    "345": "A3 - JS + REACT", "practice":"Responsive Layout Practice", "ai-a":"A9 - Sample assignment",
  };
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input className="w-full rounded border border-neutral-300 p-3" id="wd-name" defaultValue={titles[aid] ?? "Assignment"} />
      <br />
      <br />
      <label htmlFor="wd-description">Description</label>
      <br />
      <textarea
        id="wd-description" className="w-full rounded border border-neutral-300 p-3"
        rows={5}
        cols={50}
        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
      />
      <br />
      <div className="wd-editor-fields">
        
          <div className="wd-editor-row">
            <div>
              <label htmlFor="wd-points">Points</label>
            </div>
            <div>
              <input className="w-full rounded border border-neutral-300 p-2" id="wd-points" type="number" min={0} defaultValue={100} />
            </div>
          </div>
          <div className="wd-editor-row">
            <div>
              <label htmlFor="wd-group">Assignment Group</label>
            </div>
            <div>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
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
              <select id="wd-display-grade-as" defaultValue="Percentage">
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
              <select id="wd-submission-type" defaultValue="Online">
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
                <input id="wd-text-entry" type="checkbox" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />
                <input id="wd-website-url" type="checkbox" defaultChecked />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />
                <input id="wd-media-recordings" type="checkbox" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />
                <input id="wd-student-annotation" type="checkbox" />
                <label htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
                <br />
                <input id="wd-file-upload" type="checkbox" />
                <label htmlFor="wd-file-upload">File Uploads</label>
              </fieldset>
            </div>
          </div>
          <div className="wd-editor-row">
            <div>
              Assign
            </div>
            <div>
              <fieldset>
                <legend>Assign</legend>
                <label htmlFor="wd-assign-to">Assign to</label>
                <br />
                <input id="wd-assign-to" defaultValue="Everyone" />
                <br />
                <label htmlFor="wd-due-date">Due</label>
                <br />
                <input
                  type="datetime-local"
                  className="w-full rounded border border-neutral-300 p-2" id="wd-due-date"
                  defaultValue="2026-10-11T23:59"
                />
                <br />
                <label htmlFor="wd-available-from">Available from</label>
                <br />
                <input
                  type="datetime-local"
                  id="wd-available-from"
                  defaultValue="2026-09-14T00:00"
                />
                <br />
                <label htmlFor="wd-available-until">Until</label>
                <br />
                <input
                  type="datetime-local"
                  id="wd-available-until"
                  defaultValue="2026-10-11T23:59"
                />
              </fieldset>
            </div>
          </div>
        
      </div>
      <label htmlFor="wd-ai-editor-notes">Sample notes</label><textarea id="wd-ai-editor-notes" rows={3} className="w-full rounded border border-neutral-300 p-3"/><hr />
      <Link id="wd-cancel" href={`/courses/${cid}/assignments`}>
        Cancel
      </Link>{" "}
      <Link id="wd-save" href={`/courses/${cid}/assignments`}>
        Save
      </Link>
    </div>
  );
}

