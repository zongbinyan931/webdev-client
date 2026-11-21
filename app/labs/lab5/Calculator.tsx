"use client";
import { useState } from "react";
import { errorMessage } from "@/lib/http";

export default function Calculator() {
  const [a, setA] = useState("10");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function calculate(op: string) {
    setBusy(true); setError(""); setResult("");
    try {
      const response = await fetch(`/api/lab5/calculator?${new URLSearchParams({ a, b, operation: op })}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      const symbols: Record<string, string> = { add: "+", subtract: "−", multiply: "×", divide: "÷" };
      setResult(`${data.a} ${symbols[data.operation]} ${data.b} = ${data.result}`);
    } catch (error) { setError(errorMessage(error)); }
    finally { setBusy(false); }
  }
  return <section>
    <h3>Calculator with a Next.js Web API</h3>
    <form onSubmit={(event) => { event.preventDefault(); void calculate(operation); }}>
      <div className="lab5-fields">
        <label>A <input required type="number" step="any" value={a} onChange={(event) => setA(event.target.value)} /></label>
        <label>B <input required type="number" step="any" value={b} onChange={(event) => setB(event.target.value)} /></label>
        <label>Operation <select value={operation} onChange={(event) => { setOperation(event.target.value); void calculate(event.target.value); }}>
          <option value="add">+</option><option value="subtract">−</option><option value="multiply">×</option><option value="divide">÷</option>
        </select></label>
      </div>
      <button disabled={busy}>Calculate</button>
      <output className="block" aria-live="polite">{result}</output>
      {error && <p role="alert">{error}</p>}
    </form>
  </section>;
}
