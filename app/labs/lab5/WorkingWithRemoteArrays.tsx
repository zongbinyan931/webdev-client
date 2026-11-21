"use client";
import { useState } from "react";
import ServerLink from "./ServerLink";

export default function WorkingWithRemoteArrays() {
  const [id, setId] = useState("1");
  const [title, setTitle] = useState("Read Chapter 5");
  const [description, setDescription] = useState("Review HTTP requests");
  const [completed, setCompleted] = useState(false);
  const todoPath = `/lab5/todos/${encodeURIComponent(id)}`;
  return <section>
    <h3>Working with Remote Arrays</h3>
    <h4>Retrieving Arrays</h4>
    <ServerLink id="wd-retrieve-todos" path="/lab5/todos">Get Todos</ServerLink>
    <h4>Retrieving an Item by ID</h4>
    <label>Todo ID <input id="wd-todo-id" value={id} onChange={(event) => setId(event.target.value)} /></label>
    <ServerLink id="wd-retrieve-todo-by-id" path={todoPath}>Get Todo by ID</ServerLink>
    <h4>Filtering Array Items</h4>
    <div className="lab5-links">
      <ServerLink id="wd-retrieve-completed-todos" path="/lab5/todos?completed=true">Get Completed Todos</ServerLink>
      <ServerLink path="/lab5/todos?completed=false">Get Incomplete Todos</ServerLink>
    </div>
    <h4>Creating Items with GET</h4>
    <ServerLink id="wd-create-todo" path="/lab5/todos/create">Create Todo</ServerLink>
    <h4>Removing an Item with GET</h4>
    <ServerLink id="wd-remove-todo" path={`${todoPath}/delete`}>Remove Todo with ID = {id}</ServerLink>
    <h4>Updating an Item</h4>
    <label>Todo title <input value={title} onChange={(event) => setTitle(event.target.value)} /></label>
    <ServerLink id="wd-update-todo-title" path={`${todoPath}/title/${encodeURIComponent(title)}`}>Update Todo</ServerLink>
    <label><input type="checkbox" checked={completed} onChange={(event) => setCompleted(event.target.checked)} /> Todo completed</label>
    <ServerLink id="wd-update-todo-completed" path={`${todoPath}/completed/${completed}`}>Complete Todo ID = {id}</ServerLink>
    <label>Todo description <input value={description} onChange={(event) => setDescription(event.target.value)} /></label>
    <ServerLink id="wd-update-todo-description" path={`${todoPath}/description/${encodeURIComponent(description)}`}>Describe Todo ID = {id}</ServerLink>
  </section>;
}
