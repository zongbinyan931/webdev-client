import AssignmentItem from "./AssignmentItem";
export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <input
        id="wd-search-assignment"
        placeholder="Search for Assignments"
        aria-label="Search for Assignments"
      />{" "}
      <button id="wd-add-assignment-group" type="button">
        + Group
      </button>{" "}
      <button id="wd-add-assignment" type="button">
        + Assignment
      </button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total{" "}
        <button type="button" aria-label="Add assignment to group">
          +
        </button>
      </h3>
      <ul id="wd-assignment-list">
        <AssignmentItem
          cid={cid}
          aid="123"
          title="A1 - ENV + HTML"
          details="Multiple Modules | Due Oct 11 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="234"
          title="A2 - CSS + TAILWIND"
          details="Multiple Modules | Due Oct 11 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="345"
          title="A3 - JS + REACT"
          details="Multiple Modules | Due Oct 25 at 11:59pm | 100 pts"
        />
      </ul>
    </div>
  );
}
