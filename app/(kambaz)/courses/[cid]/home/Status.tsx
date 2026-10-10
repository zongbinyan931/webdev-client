import {FaFileImport} from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      {["Import Existing Content","Import from Commons","Choose Home Page","View Course Stream","New Announcement","New Analytics","View Course Notifications"].map(label=><button key={label} type="button" className="mb-1 flex w-full items-center gap-2 rounded border border-neutral-300 bg-neutral-100 px-3 py-2 text-left text-sm"><FaFileImport aria-hidden="true"/>{label}</button>)}
<button id="wd-ai-status" type="button" className="mb-1 flex w-full items-center gap-2 rounded border border-neutral-300 bg-neutral-100 px-3 py-2 text-left text-sm"><FaFileImport/>Sample action</button>
    </div>
  );
}
