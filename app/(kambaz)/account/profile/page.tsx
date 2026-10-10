import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input aria-label="Profile field"
        defaultValue="zongbin"
        placeholder="username"
        className="wd-username w-full rounded border border-neutral-300 p-2"
      />
      <br />
      <input aria-label="Profile field"
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password w-full rounded border border-neutral-300 p-2"
      />
      <br />
      <input aria-label="Profile field"
        defaultValue="Zongbin"
        placeholder="First Name"
        id="wd-firstname"
      />
      <br />
      <input aria-label="Profile field" defaultValue="Yan" placeholder="Last Name" id="wd-lastname" />
      <br />
      <input aria-label="Profile field" type="date" id="wd-dob" />
      <br />
      <input aria-label="Profile field" placeholder="School email" type="email" id="wd-email" />
      <br />
      <select defaultValue="STUDENT" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link href="/account/signin">Sign out</Link>
    </div>
  );
}
