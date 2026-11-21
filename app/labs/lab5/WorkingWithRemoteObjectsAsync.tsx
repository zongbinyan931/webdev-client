"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
import { errorMessage } from "@/lib/http";

export default function WorkingWithRemoteObjectsAsync() {
  const [assignment, setAssignment] = useState<client.LabAssignment | null>(null);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let active = true;
    client.getAssignment().then((data) => { if (active) { setAssignment(data); setTitle(data.title); } })
      .catch((error) => { if (active) setError(errorMessage(error)); });
    return () => { active = false; };
  }, []);
  return <section>
    <h3>Asynchronous Object Requests</h3>
    <h4>Loading an Assignment on Mount</h4>
    <pre>{assignment ? JSON.stringify(assignment, null, 2) : "Loading assignment…"}</pre>
    <h4>Updating the Title with Axios</h4>
    <form onSubmit={async (event) => {
      event.preventDefault(); setBusy(true); setError(""); setMessage("");
      try { setAssignment(await client.updateTitle(title)); setMessage("Title saved on the server."); }
      catch (error) { setError(errorMessage(error)); }
      finally { setBusy(false); }
    }}>
      <label>New title <input required id="wd-async-assignment-title" value={title} onChange={(event) => setTitle(event.target.value)} /></label>
      <button disabled={busy} id="wd-update-assignment-title-async">Update Title</button>
    </form>
    {error && <p role="alert">{error}</p>}
    {message && <p role="status">{message}</p>}
  </section>;
}
