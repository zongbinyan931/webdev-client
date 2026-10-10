import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input aria-label="Account field"
        placeholder="username"
        className="wd-username w-full rounded border border-neutral-300 p-2"
        defaultValue="zongbin"
      />{" "}
      <br />
      <input aria-label="Account field"
        placeholder="password"
        type="password"
        className="wd-password w-full rounded border border-neutral-300 p-2"
        defaultValue="123"
      />{" "}
      <br />
      <label htmlFor="wd-ai-signin-note">Sample note</label><input id="wd-ai-signin-note" placeholder="sample note" className="w-full rounded border border-neutral-300 p-2"/>
<Link href="/dashboard" id="wd-signin-btn">
        Sign in
      </Link>{" "}
      <br />
      <Link href="/account/signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
