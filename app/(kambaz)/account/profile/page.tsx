"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccount, User } from "../AccountContext";
function ProfileForm({ user }: { user: User }) {
  const [profile, setProfile] = useState(user);
  const [saved, setSaved] = useState(false);
  const { updateUser, signout } = useAccount();
  const router = useRouter();
  return (
    <form
      className="max-w-md space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        updateUser(profile);
        setSaved(true);
      }}
    >
      <h2>Profile</h2>
      {(
        [
          "username",
          "password",
          "firstName",
          "lastName",
          "email",
          "dob",
        ] as const
      ).map((key) => (
        <label className="block" key={key}>
          {key}
          <input
            className="block w-full rounded border p-2"
            type={
              key === "password"
                ? "password"
                : key === "email"
                  ? "email"
                  : key === "dob"
                    ? "date"
                    : "text"
            }
            value={profile[key]}
            onChange={(e) => {
              setSaved(false);
              setProfile({ ...profile, [key]: e.target.value });
            }}
          />
        </label>
      ))}
      <label>
        Role
        <select
          value={profile.role}
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          {["STUDENT", "FACULTY", "TA", "ADMIN", "USER"].map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </label>
      <div className="flex gap-3">
        <button className="rounded bg-red-600 px-4 py-2 text-white">
          Save
        </button>
        <button
          type="button"
          onClick={() => {
            signout();
            router.push("/account/signin");
          }}
        >
          Sign out
        </button>
      </div>
      {saved && <p role="status">Profile saved.</p>}
    </form>
  );
}
export default function Profile() {
  const { currentUser } = useAccount();
  return (
    <div id="wd-profile-screen">
      {currentUser ? (
        <ProfileForm key={currentUser._id} user={currentUser} />
      ) : (
        <Link href="/account/signin">Sign in to view your profile</Link>
      )}
    </div>
  );
}
