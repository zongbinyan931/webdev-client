"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { emptyUser, useAccount } from "../AccountContext";
export default function Signup() {
  const [user, setUser] = useState({ ...emptyUser });
  const [verify, setVerify] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAccount();
  const router = useRouter();
  return (
    <form
      id="wd-signup-screen"
      className="max-w-md space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        if (user.password !== verify) {
          setError("Passwords do not match.");
          return;
        }
        if (signup({ ...user, username: user.username.trim() }))
          router.push("/account/profile");
        else setError("Username already exists.");
      }}
    >
      <h2>Sign up</h2>
      {(
        ["username", "password", "firstName", "lastName", "email"] as const
      ).map((key) => (
        <label key={key} className="block">
          {key}
          <input
            required
            className="block w-full rounded border p-2"
            type={
              key === "password"
                ? "password"
                : key === "email"
                  ? "email"
                  : "text"
            }
            value={user[key]}
            onChange={(e) => setUser({ ...user, [key]: e.target.value })}
          />
        </label>
      ))}
      <label className="block">
        Verify password
        <input
          className="block w-full rounded border p-2"
          required
          type="password"
          value={verify}
          onChange={(e) => setVerify(e.target.value)}
        />
      </label>
      <label>
        Role
        <select
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        >
          <option>STUDENT</option>
          <option>FACULTY</option>
        </select>
      </label>
      {error && <p role="alert">{error}</p>}
      <button className="rounded bg-red-600 px-4 py-2 text-white">
        Sign up
      </button>
      <p>
        <Link href="/account/signin">Sign in</Link>
      </p>
    </form>
  );
}
