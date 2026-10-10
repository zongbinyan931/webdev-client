import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input aria-label="Account field"
        placeholder="username"
        className="wd-username w-full rounded border border-neutral-300 p-2"
        defaultValue="zongbin"
      />
      <br />
      <input aria-label="Account field"
        placeholder="password"
        type="password"
        className="wd-password w-full rounded border border-neutral-300 p-2"
        defaultValue="123"
      />
      <br />
      <input aria-label="Account field"
        placeholder="verify password"
        type="password"
        className="wd-password-verify"
      />
      <br />
      <Link href="/account/profile">Sign up</Link>
      <br />
      <Link href="/account/signin">Sign in</Link>
    </div>
  );
}
