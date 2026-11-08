"use client";
import { create } from "zustand";
import initial from "../database/modules.json";
export type Module = (typeof initial)[number];
export const useModulesStore = create<{
  modules: Module[];
  addModule: (course: string, name: string) => void;
  updateModule: (id: string, name: string) => void;
  deleteModule: (id: string) => void;
}>((set) => ({
  modules: initial,
  addModule: (course, name) => {
    if (name.trim())
      set((s) => ({
        modules: [
          ...s.modules,
          {
            _id: crypto.randomUUID(),
            course,
            name: name.trim(),
            description: "",
            lessons: [],
          },
        ],
      }));
  },
  updateModule: (id, name) => {
    if (name.trim())
      set((s) => ({
        modules: s.modules.map((m) =>
          m._id === id ? { ...m, name: name.trim() } : m,
        ),
      }));
  },
  deleteModule: (id) =>
    set((s) => ({ modules: s.modules.filter((m) => m._id !== id) })),
}));
