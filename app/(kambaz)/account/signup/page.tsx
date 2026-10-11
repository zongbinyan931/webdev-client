import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input aria-label="username"
        placeholder="username"
        className="wd-username w-full rounded border border-neutral-300 p-2"
        defaultValue="zongbin"
      />
      <br />
      <input aria-label="password"
        placeholder="password"
        type="password"
        className="wd-password w-full rounded border border-neutral-300 p-2"
        defaultValue="123"
      />
      <br />
      <input aria-label="verify password"
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-3 w-full rounded border border-neutral-300 p-2"
      />
      <br />
      <Link className="inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-white no-underline" href="/account/profile">Sign up</Link>
      <br />
      <Link className="inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-white no-underline" href="/account/signin">Sign in</Link>
    </div>
  );
}
