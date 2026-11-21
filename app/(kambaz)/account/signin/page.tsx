"use client";
import { errorMessage } from "@/lib/http";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccount } from "../AccountContext";
export default function Signin() {
  const { signin } = useAccount();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  return (
    <form
      id="wd-signin-screen"
      className="max-w-md space-y-3"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true); setError("");
        try { await signin(username.trim(), password); router.push("/dashboard"); }
        catch (error) { setError(errorMessage(error)); }
        finally { setBusy(false); }
      }}
    >
      <h2>Sign in</h2>
      <label className="block">
        Username
        <input
          required
          id="wd-username"
          className="w-full rounded border p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />
      </label>
      <label className="block">
        Password
        <input
          required
          id="wd-password"
          className="w-full rounded border p-2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </label>
      {error && <p role="alert">{error}</p>}
      <button
        id="wd-signin-btn"
        disabled={busy}
        className="rounded bg-red-600 px-4 py-2 text-white"
      >
        Sign in
      </button>
      <p>
        <Link href="/account/signup">Sign up</Link>
      </p>
      <p className="text-sm">
        Practice accounts: iron_man (student), nick_fury (faculty). Password:
        123. These are demo accounts for the Kambaz application.
      </p>
    </form>
  );
}
