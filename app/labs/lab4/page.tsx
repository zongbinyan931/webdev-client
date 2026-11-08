"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Section, CounterControls, ProfileFields } from "./shared";
import { useCounter, useTodos, useProfile } from "./zustand/stores";
import { TodoList } from "./shared";
import ContextExamples from "./context/ContextExamples";
import ReduxExamples from "./redux/ReduxExamples";
import {
  useWindowSize,
  useToggle,
  useLocalStorage,
  useProfileForm,
} from "./hooks";
import "./lab4.css";
function PassingFunctions({
  greeting,
  named,
  theOtherFunction,
}: {
  greeting: () => void;
  named: () => void;
  theOtherFunction: () => void;
}) {
  return (
    <Section title="Passing Functions">
      <button onClick={greeting}>Call parent function</button>
      <button onClick={named}>Named greeting</button>
      <button id="wd-pass-functions-other-click" onClick={theOtherFunction}>
        Sample from parent
      </button>
    </Section>
  );
}
function ChildState({
  count,
  setCount,
}: {
  count: number;
  setCount: (n: number) => void;
}) {
  return (
    <>
      <h3>Child Counter: {count}</h3>
      <CounterControls count={count} setCount={setCount} initial={123} />
      <button id="wd-reset-child-state-click" onClick={() => setCount(123)}>
        Reset child state
      </button>
    </>
  );
}
type CounterProps = { count: number; setCount: (n: number) => void };
function Grandchild(p: CounterProps) {
  return (
    <>
      <h3>Grandchild: {p.count}</h3>
      <CounterControls {...p} />
    </>
  );
}
function Middle(p: CounterProps) {
  return (
    <>
      <h3>Middle</h3>
      <Grandchild {...p} />
    </>
  );
}
function Forwarder(p: CounterProps) {
  return (
    <>
      <h3>Forwarder</h3>
      <Middle {...p} />
    </>
  );
}
function Child(p: CounterProps) {
  return (
    <>
      <h3>Child</h3>
      <Forwarder {...p} />
    </>
  );
}
function ProfileExample() {
  const form = useProfileForm();
  return (
    <Section title="Profile form (useState)">
      <ProfileFields {...form} />
    </Section>
  );
}
function HookProfile() {
  const form = useProfileForm();
  return (
    <Section title="useProfileForm">
      <ProfileFields {...form} />
    </Section>
  );
}
function ToggleExample() {
  const [on, toggle] = useToggle();
  return (
    <>
      <button onClick={toggle}>{on ? "On" : "Off"}</button>
      <span>{on ? " Visible" : " Hidden"}</span>
    </>
  );
}
function Effects() {
  const [name, setName] = useState("Zongbin");
  const [count, setCount] = useState(0);
  useEffect(() => {
    const previous = document.title;
    document.title = `${name}: ${count}`;
    console.log(name, count);
    return () => {
      document.title = previous;
    };
  }, [name, count]);
  return (
    <Section title="useEffect">
      <input
        aria-label="Effect name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Effect Counter: {count}</h3>
      <CounterControls {...{ count, setCount }} initial={0} />
    </Section>
  );
}
function Hooks() {
  const size = useWindowSize();
  const [note, setNote] = useLocalStorage("lab4-note");
  return (
    <>
      <Section title="useWindowSize">
        <p>
          {size.width} × {size.height}
        </p>
      </Section>
      <Section title="useToggle">
        <ToggleExample />
      </Section>
      <Section title="useLocalStorage">
        <label>
          Saved note
          <input value={note} onChange={(e) => setNote(e.target.value)} />
        </label>
        <p>{note}</p>
      </Section>
      <Section title="Each caller gets its own state">
        <ToggleExample />
        <ToggleExample />
      </Section>
      <HookProfile />
    </>
  );
}
export default function Lab4() {
  let broken = 7;
  const [count, setCount] = useState(7);
  const [parent, setParent] = useState(123);
  const [drilled, setDrilled] = useState(7);
  const [done, setDone] = useState(false);
  const [urgent, setUrgent] = useState(false);
  const [saved, setSaved] = useState(false);
  const [firstName, setFirstName] = useState("Zongbin");
  const [lastName, setLastName] = useState("Yan");
  const [nickName, setNickName] = useState("JD");
  const [start, setStart] = useState("2026-01-15");
  const [end, setEnd] = useState("2026-05-15");
  const [due, setDue] = useState("2026-01-22");
  const [person, setPerson] = useState({
    name: "Zongbin Yan",
    age: 25,
    city: "Boston",
  });
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [a, setA] = useState("3");
  const [b, setB] = useState("4");
  const [c, setC] = useState("2");
  const router = useRouter();
  const counter = useCounter();
  const todos = useTodos();
  const profile = useProfile();
  const query =
    "/labs/lab4/url-encoding/query-params?" + new URLSearchParams({ a, b, c });
  const path = `/labs/lab4/url-encoding/path-params/${encodeURIComponent(a || "0")}/${encodeURIComponent(b || "0")}`;
  const lifeIs = (value: string) => alert(`Life is ${value}`);
  return (
    <div id="wd-lab4">
      <h1 className="text-3xl font-semibold">Lab 4: Managing Client State</h1>
      <Section title="Click Event">
        <button id="wd-onclick-hello" onClick={() => alert("Hello World!")}>
          Click Hello
        </button>
        <button
          id="wd-onclick-name"
          onClick={() => alert("Hello, Zongbin Yan!")}
        >
          Greet Zongbin
        </button>
        <button id="wd-onclick-goodbye" onClick={() => alert("Goodbye World!")}>
          Goodbye
        </button>
      </Section>
      <Section title="Passing Data on Event">
        <button onClick={() => lifeIs("Good!")}>Good</button>
        <button onClick={() => lifeIs("Great!")}>Great</button>
        <button onClick={() => lifeIs("Learning!")}>Learning</button>
        <button
          id="wd-pass-data-course-click"
          onClick={() => lifeIs("Web Development")}
        >
          Web Development
        </button>
      </Section>
      <PassingFunctions
        greeting={() => alert("Hello from parent")}
        named={() => alert("Zongbin Yan")}
        theOtherFunction={() => alert("Sample from parent")}
      />
      <Section title={`Broken Counter: ${broken}`}>
        <button
          onClick={() => {
            broken++;
          }}
        >
          Up (no state)
        </button>
        <button
          onClick={() => {
            broken--;
          }}
        >
          Down (no state)
        </button>
      </Section>
      <Section title={`Counter: ${count}`}>
        <CounterControls {...{ count, setCount }} />
        <button id="wd-counter-reset-click" onClick={() => setCount(7)}>
          Reset to 7
        </button>
      </Section>
      <Section title="Boolean State Variables">
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={(e) => setDone(e.target.checked)}
          />
          Done
        </label>
        {done && <p>Done</p>}
        <label>
          <input
            type="checkbox"
            checked={urgent}
            onChange={(e) => setUrgent(e.target.checked)}
          />
          Urgent
        </label>
        {urgent && <p>Urgent</p>}
        <label>
          <input
            id="wd-boolean-saved"
            type="checkbox"
            checked={saved}
            onChange={(e) => setSaved(e.target.checked)}
          />
          Saved
        </label>
        {saved && <p>Saved</p>}
      </Section>
      <Section title="String State Variables">
        <label>
          First name
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last name
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Nickname
          <input
            id="wd-nick-name"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
          />
        </label>
        <p>
          {firstName} {lastName} ({nickName})
        </p>
      </Section>
      <Section title="Date State Variables">
        <label>
          Start date
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </label>
        <label>
          End date
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </label>
        <label>
          Due date
          <input
            id="wd-due-date"
            type="date"
            value={due}
            onChange={(e) => setDue(e.target.value)}
          />
        </label>
        <p>
          {start} — {end}; due {due}
        </p>
      </Section>
      <Section title="Object State Variables">
        <label>
          Name
          <input
            value={person.name}
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
          />
        </label>
        <label>
          Age
          <input
            type="number"
            value={person.age}
            onChange={(e) =>
              setPerson({ ...person, age: Number(e.target.value) })
            }
          />
        </label>
        <label>
          City
          <input
            id="wd-person-city"
            value={person.city}
            onChange={(e) => setPerson({ ...person, city: e.target.value })}
          />
        </label>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </Section>
      <Section title="Array State Variable">
        <button onClick={() => setArray([...array, Math.max(0, ...array) + 1])}>
          Add Element
        </button>
        <button onClick={() => setArray([1, 2, 3, 4, 5])}>Clear</button>
        <button
          id="wd-clear-array-click"
          onClick={() => setArray([1, 2, 3, 4, 5])}
        >
          Restore five elements
        </button>
        <ul>
          {array.map((n) => (
            <li key={n}>
              {n}{" "}
              <button onClick={() => setArray(array.filter((x) => x !== n))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </Section>
      <ProfileExample />
      <Section title={`Parent Counter: ${parent}`}>
        <ChildState count={parent} setCount={setParent} />
      </Section>
      <Section title="Prop Drilling">
        <Child count={drilled} setCount={setDrilled} />
      </Section>
      <Section title="Addition Calculator">
        <label>
          a
          <input
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </label>
        <label>
          b
          <input
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </label>
        <label>
          c
          <input
            id="wd-url-c"
            type="number"
            value={c}
            onChange={(e) => setC(e.target.value)}
          />
        </label>
        <p>
          <Link href={query}>Query parameters</Link> |{" "}
          <Link href={path}>Path parameters</Link> |{" "}
          <Link href={`${path}/${encodeURIComponent(c || "0")}`}>
            Three path parameters
          </Link>
        </p>
        <button onClick={() => router.push(query)}>
          Add using query parameters
        </button>
        <button onClick={() => router.push(path)}>
          Add using path parameters
        </button>
      </Section>
      <ContextExamples />
      <Section title={`Zustand Counter: ${counter.count}`}>
        <CounterControls {...counter} />
      </Section>
      <TodoList title="Zustand Todo List" {...todos} />
      <Section title="Profile (Zustand)">
        <ProfileFields {...profile} />
      </Section>
      <ReduxExamples />
      <Effects />
      <Hooks />
    </div>
  );
}
