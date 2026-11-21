"use client";
import { useEffect, useState } from "react";
import { fetchHello } from "./client";
import { errorMessage } from "@/lib/http";

export default function HelloRoute() {
  const [hello, setHello] = useState<{ message?: string }>({});
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    fetchHello().then((data) => { if (active) setHello(data); }).catch((error) => { if (active) setError(errorMessage(error)); });
    return () => { active = false; };
  }, []);
  return <section>
    <h3>Next.js Hello Route Handler</h3>
    <a href="/api/lab5/hello" target="_blank" rel="noreferrer">GET /api/lab5/hello</a>
    <pre>{JSON.stringify(hello, null, 2)}</pre>
    {error && <p role="alert">{error}</p>}
  </section>;
}
