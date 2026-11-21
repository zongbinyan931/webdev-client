"use client";
import { useState } from "react";
import ServerLink from "./ServerLink";

export default function WorkingWithRemoteObjects() {
  const [title, setTitle] = useState("NodeJS Assignment");
  const [score, setScore] = useState("95");
  const [completed, setCompleted] = useState(false);
  const [name, setName] = useState("HTTP Servers");
  const [description, setDescription] = useState("Express routes and HTTP requests");
  return <section>
    <h3>Working with Remote Objects</h3>
    <h4>Retrieving Objects</h4>
    <ServerLink id="wd-retrieve-assignments" path="/lab5/assignment">Get Assignment</ServerLink>
    <h4>Retrieving Properties</h4>
    <ServerLink id="wd-retrieve-assignment-title" path="/lab5/assignment/title">Get Title</ServerLink>
    <h4>Modifying Properties</h4>
    <label>Assignment title <input id="wd-assignment-title" value={title} onChange={(event) => setTitle(event.target.value)} /></label>
    <ServerLink id="wd-update-assignment-title" path={`/lab5/assignment/title/${encodeURIComponent(title)}`}>Update Title</ServerLink>
    <label>Score <input type="number" value={score} onChange={(event) => setScore(event.target.value)} /></label>
    <ServerLink id="wd-update-assignment-score" path={`/lab5/assignment/score/${encodeURIComponent(score)}`}>Update Score</ServerLink>
    <label><input type="checkbox" checked={completed} onChange={(event) => setCompleted(event.target.checked)} /> Completed</label>
    <ServerLink id="wd-update-assignment-completed" path={`/lab5/assignment/completed/${completed}`}>Update Completed</ServerLink>
    <h4>Module Object</h4>
    <div className="lab5-links">
      <ServerLink id="wd-retrieve-module" path="/lab5/module">Get Module</ServerLink>
      <ServerLink id="wd-retrieve-module-name" path="/lab5/module/name">Get Module Name</ServerLink>
    </div>
    <label>Module name <input value={name} onChange={(event) => setName(event.target.value)} /></label>
    <ServerLink id="wd-update-module-name" path={`/lab5/module/name/${encodeURIComponent(name)}`}>Update Module Name</ServerLink>
    <label>Module description <input value={description} onChange={(event) => setDescription(event.target.value)} /></label>
    <ServerLink id="wd-update-module-description" path={`/lab5/module/description/${encodeURIComponent(description)}`}>Update Module Description</ServerLink>
  </section>;
}
