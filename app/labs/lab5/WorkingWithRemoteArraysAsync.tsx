"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
import { errorMessage } from "@/lib/http";
import ServerLink from "./ServerLink";

export default function WorkingWithRemoteArraysAsync() {
  const [todos, setTodos] = useState<client.Todo[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [draft, setDraft] = useState<client.Todo | null>(null);
  const [newTitle, setNewTitle] = useState("New Posted Todo");
  useEffect(() => {
    let active = true;
    client.getTodos().then((data) => { if (active) setTodos(data); })
      .catch((error) => { if (active) setError(errorMessage(error)); })
      .finally(() => { if (active) setLoaded(true); });
    return () => { active = false; };
  }, []);
  async function run(action: () => Promise<void>) {
    setBusy(true); setError("");
    try { await action(); } catch (error) { setError(errorMessage(error)); }
    finally { setBusy(false); }
  }
  async function save(todo: client.Todo) {
    const saved = await client.updateTodo(todo);
    setTodos((items) => items.map((item) => item.id === saved.id ? saved : item));
    setDraft(null);
  }
  return <section>
    <h3>Working with Arrays Asynchronously</h3>
    <h4>Loading Todos with Axios</h4>
    <button disabled={busy} onClick={() => void run(async () => setTodos(await client.getTodos()))}>Reload Todos</button>
    {!loaded && <p role="status">Loading todos…</p>}
    <h4>Creating Todos with GET and POST</h4>
    <button disabled={busy} id="wd-create-todo-async" onClick={() => void run(async () => setTodos(await client.createTodo()))}>+ Create with GET</button>
    <form onSubmit={(event) => {
      event.preventDefault();
      void run(async () => {
        const created = await client.postTodo({ title: newTitle, description: "", completed: false });
        setTodos((items) => [...items, created]);
      });
    }}>
      <label>New todo title <input required value={newTitle} onChange={(event) => setNewTitle(event.target.value)} /></label>
      <button disabled={busy} id="wd-post-todo">+ Create with POST</button>
    </form>
    <h4>Updating Todos with PUT</h4>
    <p>Edit a title or change a checkbox, then reload to read the saved state.</p>
    <h4>Deleting Todos with GET and DELETE</h4>
    <ul className="lab5-todos">{todos.map((todo) => <li key={todo.id}>
      {draft?.id === todo.id ? <form onSubmit={(event) => { event.preventDefault(); void run(() => save(draft)); }}>
        <label>Title <input required autoFocus value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} /></label>
        <label>Description <input value={draft.description} onChange={(event) => setDraft({ ...draft, description: event.target.value })} /></label>
        <button disabled={busy}>Save</button><button type="button" onClick={() => setDraft(null)}>Cancel</button>
      </form> : <>
        <label><input type="checkbox" checked={todo.completed} disabled={busy} onChange={(event) => void run(() => save({ ...todo, completed: event.target.checked }))} /> {todo.title}</label>
        <small> ID: {todo.id}</small>
        <button disabled={busy} aria-label={`Edit ${todo.title}`} onClick={() => setDraft({ ...todo })}>Edit</button>
      </>}
      <button disabled={busy} aria-label={`Remove ${todo.title} with GET`} onClick={() => void run(async () => setTodos(await client.removeTodo(todo.id)))}>Remove (GET)</button>
      <button disabled={busy} aria-label={`Delete ${todo.title} with DELETE`} onClick={() => void run(async () => {
        await client.deleteTodo(todo.id);
        setTodos((items) => items.filter((item) => item.id !== todo.id));
      })}>× Delete</button>
      <ServerLink path={`/lab5/todos/${todo.id}/delete`}>Delete in another tab</ServerLink>
    </li>)}</ul>
    <h4>Handling HTTP Errors</h4>
    <p>To try a 404 response, delete a todo in another tab, then click its × Delete button here before reloading.</p>
    {error && <p id="wd-todo-error-message" role="alert">{error}</p>}
  </section>;
}
