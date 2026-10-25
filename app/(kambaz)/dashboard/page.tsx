import CourseCard from "./CourseCard";
import * as db from "../database";
export default function Dashboard() {
  return <div id="wd-dashboard">
    <h1 id="wd-dashboard-title">Dashboard</h1><hr />
    <h2 id="wd-dashboard-published">Published Courses ({db.courses.length})</h2><hr />
    <div id="wd-dashboard-courses" className="flex flex-wrap gap-6">
      {db.courses.map((course) => <CourseCard key={course._id} {...course} />)}
    </div>
  </div>;
}
