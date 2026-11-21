import { HTTP_SERVER } from "@/lib/http";
import ServerLink from "./ServerLink";
import Parameters from "./Parameters";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";
import WorkingWithRemoteArrays from "./WorkingWithRemoteArrays";
import WorkingWithRemoteObjectsAsync from "./WorkingWithRemoteObjectsAsync";
import WorkingWithRemoteArraysAsync from "./WorkingWithRemoteArraysAsync";
import HelloRoute from "./HelloRoute";
import Calculator from "./Calculator";
import "./lab5.css";

export default function Lab5() {
  return <div id="wd-lab5">
    <h2>Lab 5 — HTTP Servers and REST APIs</h2>
    <section>
      <h3>Environment Variables</h3>
      {HTTP_SERVER ? <p>Express server: <a href={HTTP_SERVER}>{HTTP_SERVER}</a></p> : <p role="alert">Set NEXT_PUBLIC_HTTP_SERVER to the Express server URL.</p>}
      <ServerLink id="wd-welcome-link" path="/lab5/welcome">Welcome</ServerLink>
    </section>
    <Parameters />
    <WorkingWithRemoteObjects />
    <WorkingWithRemoteArrays />
    <WorkingWithRemoteObjectsAsync />
    <WorkingWithRemoteArraysAsync />
    <HelloRoute />
    <Calculator />
  </div>;
}
