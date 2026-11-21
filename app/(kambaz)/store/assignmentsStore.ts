"use client";
import { create } from "zustand";
import type { Assignment } from "@/lib/types";
import * as client from "../courses/client";
export type { Assignment } from "@/lib/types";
export const useAssignmentsStore = create<{
  assignments: Assignment[];
  loadAssignments: (cid: string) => Promise<void>;
  saveAssignment: (assignment: Assignment) => Promise<void>;
  deleteAssignment: (id: string, course: string) => Promise<void>;
}>((set) => ({
  assignments: [],
  loadAssignments: async (cid) => {
    const assignments = await client.findAssignmentsForCourse(cid);
    set((state) => ({ assignments: [...state.assignments.filter((item) => item.course !== cid), ...assignments] }));
  },
  saveAssignment: async (assignment) => {
    const saved = assignment._id ? await client.updateAssignment(assignment) : await client.createAssignmentForCourse(assignment);
    set((state) => ({ assignments: [...state.assignments.filter((item) => item._id !== saved._id), saved] }));
  },
  deleteAssignment: async (id) => {
    await client.deleteAssignment(id);
    set((state) => ({ assignments: state.assignments.filter((item) => item._id !== id) }));
  },
}));
