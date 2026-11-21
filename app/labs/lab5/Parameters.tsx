"use client";
import { useState } from "react";
import ServerLink from "./ServerLink";

const operations = ["add", "subtract", "multiply", "divide"] as const;
export default function Parameters() {
  const [a, setA] = useState("12");
  const [b, setB] = useState("3");
  const query = new URLSearchParams({ a, b });
  return <section>
    <h3>Path Parameters</h3>
    <div className="lab5-fields">
      <label>A <input id="wd-path-parameter-a" type="number" step="any" value={a} onChange={(event) => setA(event.target.value)} /></label>
      <label>B <input id="wd-path-parameter-b" type="number" step="any" value={b} onChange={(event) => setB(event.target.value)} /></label>
    </div>
    <div className="lab5-links">{operations.map((operation) => <ServerLink key={operation} id={`wd-path-parameter-${operation}`} path={`/lab5/${operation}/${encodeURIComponent(a)}/${encodeURIComponent(b)}`}>{operation} {a} and {b}</ServerLink>)}</div>
    <h3>Query Parameters</h3>
    <p>The same operands are sent as query parameters.</p>
    <div className="lab5-links">{operations.map((operation) => <ServerLink key={operation} id={`wd-query-parameter-${operation}`} path={`/lab5/calculator?operation=${operation}&${query}`}>{operation} using query parameters</ServerLink>)}</div>
  </section>;
}
