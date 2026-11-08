"use client";
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import {
  Section,
  CounterControls,
  TodoList,
  Todo,
  seed,
  Profile,
  blankProfile,
  ProfileFields,
} from "../shared";
const CountContext = createContext<{
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
} | null>(null);
const TodosContext = createContext<{
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
} | null>(null);
const ProfileContext = createContext<{
  profile: Profile;
  setProfile: Dispatch<SetStateAction<Profile>>;
} | null>(null);
function Reader() {
  const c = useContext(CountContext)!;
  return <h3>Reader: {c.count}</h3>;
}
function Writer() {
  const c = useContext(CountContext)!;
  return (
    <>
      <h3>Writer</h3>
      <CounterControls {...c} />
      <button id="wd-context-reset-click" onClick={() => c.setCount(7)}>
        Reset context
      </button>
    </>
  );
}
function ContextTodos() {
  const { todos, setTodos } = useContext(TodosContext)!;
  return (
    <TodoList
      title="React Context Todo List"
      todos={todos}
      add={(title) =>
        setTodos((all) => [
          ...all,
          { id: crypto.randomUUID(), title, done: false },
        ])
      }
      update={(id, title) =>
        setTodos((all) => all.map((t) => (t.id === id ? { ...t, title } : t)))
      }
      remove={(id) => setTodos((all) => all.filter((t) => t.id !== id))}
      toggle={(id) =>
        setTodos((all) =>
          all.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
        )
      }
    />
  );
}
function ContextProfile() {
  const { profile, setProfile } = useContext(ProfileContext)!;
  return (
    <Section title="Profile (React Context)">
      <ProfileFields
        profile={profile}
        change={setProfile}
        reset={() => setProfile({ ...blankProfile })}
      />
    </Section>
  );
}
export default function ContextExamples() {
  const [count, setCount] = useState(7);
  const [todos, setTodos] = useState(seed);
  const [profile, setProfile] = useState({ ...blankProfile });
  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <Section title="React Context">
          <Reader />
          <Writer />
        </Section>
      </CountContext.Provider>
      <TodosContext.Provider value={{ todos, setTodos }}>
        <ContextTodos />
      </TodosContext.Provider>
      <ProfileContext.Provider value={{ profile, setProfile }}>
        <ContextProfile />
      </ProfileContext.Provider>
    </>
  );
}
