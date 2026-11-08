"use client";
import { useState, ReactNode } from "react";
export type Todo = { id: string; title: string; done: boolean };
export const seed: Todo[] = [
  { id: "1", title: "Read Chapter 4", done: false },
  { id: "2", title: "Practice React state", done: true },
  { id: "3", title: "Build Kambaz stores", done: false },
];
export function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="my-5 rounded border border-neutral-300 p-4">
      <h2 className="mb-3 text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
export function TodoForm({ save }: { save: (title: string) => void }) {
  const [title, setTitle] = useState("");
  return (
    <form
      className="flex flex-wrap gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (title.trim()) {
          save(title.trim());
          setTitle("");
        }
      }}
    >
      <input
        aria-label="Todo title"
        placeholder="Todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
export function TodoItem({
  todo,
  update,
  remove,
  toggle,
}: {
  todo: Todo;
  update: (id: string, title: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  return (
    <li className="my-2 flex flex-wrap items-center gap-2">
      <input
        aria-label={`Complete ${todo.title}`}
        type="checkbox"
        checked={todo.done}
        onChange={() => toggle(todo.id)}
      />
      {editing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (title.trim()) {
              update(todo.id, title.trim());
              setEditing(false);
            }
          }}
        >
          <input
            aria-label="Edit todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button>Save</button>
          <button type="button" onClick={() => setEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span className={todo.done ? "line-through" : ""}>{todo.title}</span>
          <button
            onClick={() => {
              setTitle(todo.title);
              setEditing(true);
            }}
          >
            Edit
          </button>
        </>
      )}
      <button onClick={() => remove(todo.id)}>Delete</button>
    </li>
  );
}
export function TodoList({
  title,
  todos,
  add,
  update,
  remove,
  toggle,
}: {
  title: string;
  todos: Todo[];
  add: (t: string) => void;
  update: (id: string, t: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
}) {
  return (
    <Section title={title}>
      <TodoForm save={add} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...{ todo, update, remove, toggle }} />
        ))}
      </ul>
    </Section>
  );
}
export function CounterControls({
  count,
  setCount,
  initial = 7,
}: {
  count: number;
  setCount: (value: number) => void;
  initial?: number;
}) {
  return (
    <div className="flex gap-2">
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <button onClick={() => setCount(initial)}>Reset</button>
    </div>
  );
}
export type Profile = {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  role: string;
  bio: string;
  newsletter: boolean;
};
export const blankProfile: Profile = {
  firstName: "Zongbin",
  lastName: "Yan",
  email: "",
  dob: "2000-01-01",
  role: "Student",
  bio: "",
  newsletter: false,
};
export function ProfileFields({
  profile,
  change,
  reset,
}: {
  profile: Profile;
  change: (p: Profile) => void;
  reset: () => void;
}) {
  return (
    <div className="grid max-w-xl gap-2">
      {(["firstName", "lastName", "email", "dob"] as const).map((k) => (
        <label key={k}>
          {k}
          <input
            type={k === "dob" ? "date" : k === "email" ? "email" : "text"}
            value={profile[k]}
            onChange={(e) => change({ ...profile, [k]: e.target.value })}
          />
        </label>
      ))}
      <label>
        Role
        <select
          value={profile.role}
          onChange={(e) => change({ ...profile, role: e.target.value })}
        >
          <option>Student</option>
          <option>Faculty</option>
        </select>
      </label>
      <label>
        Bio
        <textarea
          value={profile.bio}
          onChange={(e) => change({ ...profile, bio: e.target.value })}
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={profile.newsletter}
          onChange={(e) => change({ ...profile, newsletter: e.target.checked })}
        />
        Newsletter
      </label>
      <button onClick={reset}>Reset profile</button>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}
