import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input aria-label="username"
        defaultValue="zongbin"
        placeholder="username"
        className="wd-username w-full rounded border border-neutral-300 p-2"
      />
      <br />
      <input aria-label="password"
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password w-full rounded border border-neutral-300 p-2"
      />
      <br />
      <input className="mb-3 w-full rounded border border-neutral-300 p-2" aria-label="First Name"
        defaultValue="Zongbin"
        placeholder="First Name"
        id="wd-firstname"
      />
      <br />
      <input className="mb-3 w-full rounded border border-neutral-300 p-2" aria-label="Last Name" defaultValue="Yan" placeholder="Last Name" id="wd-lastname" />
      <br />
      <input className="mb-3 w-full rounded border border-neutral-300 p-2" aria-label="Date of birth" type="date" id="wd-dob" />
      <br />
      <input className="mb-3 w-full rounded border border-neutral-300 p-2" aria-label="School email" placeholder="School email" type="email" id="wd-email" />
      <br />
      <select aria-label="Role" className="mb-3 w-full rounded border border-neutral-300 p-2" defaultValue="STUDENT" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link className="inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-white no-underline" href="/account/signin">Sign out</Link>
    </div>
  );
}
