"use client";
import { create } from "zustand";
import initial from "../database/courses.json";
export type Course = (typeof initial)[number];
export const emptyCourse: Course = {
  ...initial[0],
  _id: "",
  name: "",
  number: "",
  description: "",
  startDate: "2026-01-15",
  endDate: "2026-05-15",
};
export const useCoursesStore = create<{
  courses: Course[];
  addCourse: (c: Course) => string;
  updateCourse: (c: Course) => void;
  deleteCourse: (id: string) => void;
}>((set) => ({
  courses: initial,
  addCourse: (c) => {
    const id = crypto.randomUUID();
    set((s) => ({ courses: [...s.courses, { ...c, _id: id }] }));
    return id;
  },
  updateCourse: (c) =>
    set((s) => ({ courses: s.courses.map((x) => (x._id === c._id ? c : x)) })),
  deleteCourse: (id) =>
    set((s) => ({ courses: s.courses.filter((x) => x._id !== id) })),
}));
