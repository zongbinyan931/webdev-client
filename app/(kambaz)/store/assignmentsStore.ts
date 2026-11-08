"use client";
import { create } from "zustand";
import initial from "../database/assignments.json";
export type Assignment = (typeof initial)[number] & {
  until?: string;
  notes?: string;
  group?: string;
  gradeAs?: string;
  submissionType?: string;
  assignTo?: string;
  options?: string[];
};
export const useAssignmentsStore = create<{
  assignments: Assignment[];
  saveAssignment: (a: Assignment) => void;
  deleteAssignment: (id: string, course: string) => void;
}>((set) => ({
  assignments: initial,
  saveAssignment: (a) =>
    set((s) => ({
      assignments: a._id
        ? s.assignments.map((x) =>
            x._id === a._id && x.course === a.course ? a : x,
          )
        : [...s.assignments, { ...a, _id: crypto.randomUUID() }],
    })),
  deleteAssignment: (id, course) =>
    set((s) => ({
      assignments: s.assignments.filter(
        (a) => !(a._id === id && a.course === course),
      ),
    })),
}));
