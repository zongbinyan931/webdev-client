"use client";
import { useState } from "react";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import { seed, Section, CounterControls, TodoList } from "../shared";
const counter = createSlice({
  name: "counter",
  initialState: { count: 7 },
  reducers: {
    setCount: (s, a: PayloadAction<number>) => {
      s.count = a.payload;
    },
    reset: (s) => {
      s.count = 7;
    },
  },
});
const hello = createSlice({
  name: "hello",
  initialState: { message: "Hello Redux" },
  reducers: {},
});
const addition = createSlice({
  name: "addition",
  initialState: { sum: 0 },
  reducers: {
    add: (s, a: PayloadAction<{ a: number; b: number }>) => {
      s.sum = a.payload.a + a.payload.b;
    },
  },
});
const todos = createSlice({
  name: "todos",
  initialState: { todos: seed },
  reducers: {
    add: (s, a: PayloadAction<{ id: string; title: string }>) => {
      s.todos.push({ ...a.payload, done: false });
    },
    update: (s, a: PayloadAction<{ id: string; title: string }>) => {
      const t = s.todos.find((t) => t.id === a.payload.id);
      if (t) t.title = a.payload.title;
    },
    remove: (s, a: PayloadAction<string>) => {
      s.todos = s.todos.filter((t) => t.id !== a.payload);
    },
    toggle: (s, a: PayloadAction<string>) => {
      const t = s.todos.find((t) => t.id === a.payload);
      if (t) t.done = !t.done;
    },
  },
});
const makeStore = () =>
  configureStore({
    reducer: {
      counter: counter.reducer,
      hello: hello.reducer,
      addition: addition.reducer,
      todos: todos.reducer,
    },
  });
type State = ReturnType<ReturnType<typeof makeStore>["getState"]>;
function Examples() {
  const dispatch = useDispatch();
  const state = useSelector((s: State) => s);
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  return (
    <>
      <Section title="Hello Redux">
        <p>{state.hello.message}</p>
      </Section>
      <Section title={`Redux Counter: ${state.counter.count}`}>
        <CounterControls
          count={state.counter.count}
          setCount={(n) => dispatch(counter.actions.setCount(n))}
        />
        <button
          id="wd-redux-reset-click"
          onClick={() => dispatch(counter.actions.reset())}
        >
          Reset Redux counter
        </button>
      </Section>
      <Section title="Add Redux">
        <input
          aria-label="Redux operand a"
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          aria-label="Redux operand b"
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(addition.actions.add({ a: Number(a), b: Number(b) }))
          }
        >
          Add
        </button>
        <p>Sum: {state.addition.sum}</p>
      </Section>
      <TodoList
        title="Redux Todo List"
        todos={state.todos.todos}
        add={(title) =>
          dispatch(todos.actions.add({ id: crypto.randomUUID(), title }))
        }
        update={(id, title) => dispatch(todos.actions.update({ id, title }))}
        remove={(id) => dispatch(todos.actions.remove(id))}
        toggle={(id) => dispatch(todos.actions.toggle(id))}
      />
    </>
  );
}
export default function ReduxExamples() {
  const [store] = useState(makeStore);
  return (
    <Provider store={store}>
      <Examples />
    </Provider>
  );
}
