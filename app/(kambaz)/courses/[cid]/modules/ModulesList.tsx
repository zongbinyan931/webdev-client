"use client";
import { useState } from "react";
import { FaPencilAlt, FaTrash, FaGripVertical, FaPlus } from "react-icons/fa";
import Lesson from "./Lesson";
import GreenCheckmark from "./GreenCheckmark";
import { useModulesStore } from "../../../store/modulesStore";
import { useAccount } from "../../../account/AccountContext";
export default function ModulesList({ cid }: { cid: string }) {
  const { modules, addModule, updateModule, deleteModule } = useModulesStore();
  const { currentUser } = useAccount();
  const canEdit =
    !currentUser || ["FACULTY", "ADMIN"].includes(currentUser.role);
  const [dialog, setDialog] = useState(false);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState("");
  const [draft, setDraft] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2">
        <button
          className="rounded border px-3 py-2"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Expand All" : "Collapse All"}
        </button>
        {canEdit && (
          <button
            className="rounded bg-red-600 px-3 py-2 text-white"
            onClick={() => setDialog(true)}
          >
            + Module
          </button>
        )}
      </div>
      {dialog && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Add module"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        >
          <form
            className="w-full max-w-md space-y-3 rounded bg-white p-6 text-neutral-900"
            onSubmit={(e) => {
              e.preventDefault();
              if (!name.trim()) return;
              addModule(cid, name);
              setName("");
              setDialog(false);
            }}
          >
            <h2>Add Module</h2>
            <label>
              Module name
              <input
                autoFocus
                required
                className="block w-full rounded border p-2"
                placeholder="Module name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <button className="rounded bg-red-600 px-3 py-2 text-white">
              Add Module
            </button>{" "}
            <button
              type="button"
              onClick={() => {
                setDialog(false);
                setName("");
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules
          .filter((m) => m.course === cid)
          .map((m) => (
            <li
              key={m._id}
              className="wd-module mb-5 overflow-hidden border border-neutral-400"
            >
              <div className="wd-title flex items-center justify-between gap-2 bg-neutral-200 p-3">
                <FaGripVertical />
                <div className="flex-1">
                  {editing === m._id ? (
                    <form
                      className="flex gap-2"
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (draft.trim()) {
                          updateModule(m._id, draft);
                          setEditing("");
                        }
                      }}
                    >
                      <input
                        autoFocus
                        aria-label="Edit module name"
                        className="min-w-0 flex-1 rounded border bg-white p-2"
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Escape") setEditing("");
                        }}
                      />
                      <button>Save</button>
                      <button type="button" onClick={() => setEditing("")}>
                        Cancel
                      </button>
                    </form>
                  ) : (
                    <span>{m.name}</span>
                  )}
                </div>
                <GreenCheckmark />
                {canEdit && (
                  <>
                    <button
                      aria-label={`Edit ${m.name}`}
                      onClick={() => {
                        setEditing(m._id);
                        setDraft(m.name);
                      }}
                    >
                      <FaPencilAlt />
                    </button>
                    <button
                      aria-label={`Delete ${m.name}`}
                      onClick={() => {
                        if (confirm(`Delete ${m.name}?`)) deleteModule(m._id);
                      }}
                    >
                      <FaTrash />
                    </button>
                    <FaPlus />
                  </>
                )}
              </div>
              {!collapsed && (
                <ul className="wd-lessons m-0 list-none p-0">
                  {m.lessons.map((l) => (
                    <Lesson key={l._id} title={l.name}>
                      <li className="wd-content-item">{l.description}</li>
                    </Lesson>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
      {!modules.some((m) => m.course === cid) && <p>No modules yet.</p>}
    </div>
  );
}
