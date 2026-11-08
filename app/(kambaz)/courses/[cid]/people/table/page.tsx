"use client";
import { use, useState } from "react";
import { emptyUser, useAccount } from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";
export default function People({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = use(params);
  const { users, currentUser, addUser, updateUser } = useAccount();
  const { enrollments, enroll, unenroll } = useEnrollmentsStore();
  const [draft, setDraft] = useState({ ...emptyUser });
  const [editing, setEditing] = useState(false);
  const canEdit =
    !currentUser || ["FACULTY", "ADMIN"].includes(currentUser.role);
  return (
    <div id="wd-people-table">
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
          onSubmit={(e) => {
            e.preventDefault();
            if (draft._id) updateUser(draft);
            else {
              const id = addUser(draft);
              enroll(id, cid);
            }
            setEditing(false);
          }}
        >
          {(
            ["username", "firstName", "lastName", "email", "section"] as const
          ).map((k) => (
            <label key={k}>
              {k}
              <input
                required={k === "username" || k === "firstName"}
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
          <button>Save</button>
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
              .filter((u) =>
                enrollments.some((e) => e.user === u._id && e.course === cid),
              )
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
                          setDraft({ ...u });
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
                            unenroll(u._id, cid);
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
