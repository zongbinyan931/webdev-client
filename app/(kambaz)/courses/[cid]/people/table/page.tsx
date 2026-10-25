import * as db from "../../../../database";
import { FaUserCircle } from "react-icons/fa";

export default async function PeopleTable({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const users = db.users.filter((user) => db.enrollments.some((enrollment) => enrollment.user === user._id && enrollment.course === cid));
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => <tr key={user._id} className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap"><FaUserCircle className="me-2 inline text-4xl text-neutral-500" />{user.firstName} {user.lastName}</td>
            <td className="p-2">{user.loginId}</td><td className="p-2">{user.section}</td>
            <td className="p-2">{user.role}</td><td className="p-2">{user.lastActivity}</td><td className="p-2">{user.totalActivity}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}
