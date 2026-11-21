"use client";
import { errorMessage } from "@/lib/http";
import type { User } from "@/lib/types";
import { findUsersForCourse } from "../../../client";
import { use, useEffect, useState } from "react";
import { emptyUser, useAccount } from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";
export default function People({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = use(params);
  const { currentUser, addUser, updateUser } = useAccount();
  const { enroll, unenroll } = useEnrollmentsStore();
  const [draft, setDraft] = useState({ ...emptyUser });
  const [editing, setEditing] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let active = true;
    findUsersForCourse(cid).then((data) => { if (active) setUsers(data); })
      .catch((error) => { if (active) setError(errorMessage(error)); });
    return () => { active = false; };
  }, [cid]);
  const canEdit =
    !currentUser || ["FACULTY", "ADMIN"].includes(currentUser.role);
  return (
    <div id="wd-people-table">
      {error && <p role="alert">{error}</p>}
      {canEdit && (
        <button
          className="mb-3 rounded border p-2"
          onClick={() => {
            setDraft({ ...emptyUser });
            setEditing(true);
          }}
        >
          + People
        </button>
      )}
      {editing && (
        <form
          className="mb-4 grid gap-2 rounded border p-3"
          onSubmit={async (e) => {
            e.preventDefault();
            setBusy(true); setError("");
            try {
              if (draft._id) await updateUser(draft);
              else { const user = await addUser(draft); await enroll(user._id, cid); }
              setUsers(await findUsersForCourse(cid)); setEditing(false);
            } catch (error) { setError(errorMessage(error)); }
            finally { setBusy(false); }
          }}
        >
          {(
            ["username", "password", "firstName", "lastName", "email", "section"] as const
          ).map((k) => (
            <label key={k}>
              {k}
              <input
                type={k === "password" ? "password" : "text"}
                required={k === "username" || k === "firstName" || (k === "password" && !draft._id)}
                className="ml-2 rounded border p-2"
                value={draft[k]}
                onChange={(e) => setDraft({ ...draft, [k]: e.target.value })}
              />
            </label>
          ))}
          <label>
            Role
            <select
              value={draft.role}
              onChange={(e) => setDraft({ ...draft, role: e.target.value })}
            >
              {["STUDENT", "FACULTY", "TA", "ADMIN"].map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </label>
          <button disabled={busy}>Save</button>
          <button type="button" onClick={() => setEditing(false)}>
            Cancel
          </button>
        </form>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr>
              {[
                "Name",
                "Login ID",
                "Section",
                "Role",
                "Last Activity",
                "Total Activity",
                ...(canEdit ? ["Actions"] : []),
              ].map((x) => (
                <th className="p-2" key={x}>
                  {x}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users

              .map((u) => (
                <tr key={u._id} className="border-t odd:bg-neutral-50">
                  <td className="p-2">
                    {u.firstName} {u.lastName}
                  </td>
                  <td className="p-2">{u.loginId || u.username}</td>
                  <td className="p-2">{u.section}</td>
                  <td className="p-2">{u.role}</td>
                  <td className="p-2">{u.lastActivity}</td>
                  <td className="p-2">{u.totalActivity}</td>
                  {canEdit && (
                    <td className="p-2">
                      <button
                        onClick={() => {
                          setDraft({ ...u, password: "" });
                          setEditing(true);
                        }}
                      >
                        Edit
                      </button>{" "}
                      <button
                        onClick={() => {
                          if (
                            confirm(`Remove ${u.firstName} from this course?`)
                          )
                            void unenroll(u._id, cid).then(() => setUsers((all) => all.filter((person) => person._id !== u._id))).catch((error) => setError(errorMessage(error)));
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
