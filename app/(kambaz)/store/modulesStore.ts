"use client";
import { create } from "zustand";
import type { Module } from "@/lib/types";
import * as client from "../courses/client";
export type { Module } from "@/lib/types";
export const useModulesStore = create<{
  modules: Module[];
  loadModules: (cid: string) => Promise<void>;
  addModule: (cid: string, name: string) => Promise<void>;
  updateModule: (id: string, name: string) => Promise<void>;
  deleteModule: (id: string) => Promise<void>;
}>((set) => ({
  modules: [],
  loadModules: async (cid) => {
    const modules = await client.findModulesForCourse(cid);
    set((state) => ({ modules: [...state.modules.filter((item) => item.course !== cid), ...modules] }));
  },
  addModule: async (cid, name) => {
    const saved = await client.createModuleForCourse(cid, name.trim());
    set((state) => ({ modules: [...state.modules, saved] }));
  },
  updateModule: async (id, name) => {
    const saved = await client.updateModule(id, name.trim());
    set((state) => ({ modules: state.modules.map((item) => item._id === id ? saved : item) }));
  },
  deleteModule: async (id) => {
    await client.deleteModule(id);
    set((state) => ({ modules: state.modules.filter((item) => item._id !== id) }));
  },
}));
