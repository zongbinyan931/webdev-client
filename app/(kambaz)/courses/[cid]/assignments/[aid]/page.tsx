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
    "345": "A3 - JS + REACT",
  };
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" defaultValue={titles[aid] ?? "Assignment"} />
      <br />
      <br />
      <label htmlFor="wd-description">Description</label>
      <br />
      <textarea
        id="wd-description"
        rows={5}
        cols={50}
        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
      />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" style={{ verticalAlign: "top" }}>
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" min={0} defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="Percentage">
                <option>Percentage</option>
                <option>Points</option>
                <option>Complete/Incomplete</option>
                <option>Letter Grade</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="Online">
                <option>Online</option>
                <option>No Submission</option>
                <option>On Paper</option>
                <option>External Tool</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
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
            </td>
          </tr>
          <tr>
            <td align="right" style={{ verticalAlign: "top" }}>
              Assign
            </td>
            <td>
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
                  id="wd-due-date"
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
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <Link id="wd-cancel" href={`/courses/${cid}/assignments`}>
        Cancel
      </Link>{" "}
      <Link id="wd-save" href={`/courses/${cid}/assignments`}>
        Save
      </Link>
    </div>
  );
}
