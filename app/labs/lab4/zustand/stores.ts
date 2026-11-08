"use client";
import { create } from "zustand";
import { seed, Todo, Profile, blankProfile } from "../shared";
export const useCounter = create<{
  count: number;
  setCount: (n: number) => void;
}>((set) => ({ count: 7, setCount: (count) => set({ count }) }));
export const useTodos = create<{
  todos: Todo[];
  add: (title: string) => void;
  update: (id: string, title: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
}>((set) => ({
  todos: seed,
  add: (title) =>
    set((s) => ({
      todos: [...s.todos, { id: crypto.randomUUID(), title, done: false }],
    })),
  update: (id, title) =>
    set((s) => ({
      todos: s.todos.map((t) => (t.id === id ? { ...t, title } : t)),
    })),
  remove: (id) => set((s) => ({ todos: s.todos.filter((t) => t.id !== id) })),
  toggle: (id) =>
    set((s) => ({
      todos: s.todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    })),
}));
export const useProfile = create<{
  profile: Profile;
  change: (p: Profile) => void;
  reset: () => void;
}>((set) => ({
  profile: blankProfile,
  change: (profile) => set({ profile }),
  reset: () => set({ profile: { ...blankProfile } }),
}));
