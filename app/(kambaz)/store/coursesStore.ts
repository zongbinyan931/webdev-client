"use client";
import { create } from "zustand";
import * as client from "../courses/client";
import { errorMessage } from "@/lib/http";
import type { Course } from "@/lib/types";
export type { Course } from "@/lib/types";
export const emptyCourse: Course = {
  _id: "", name: "", number: "", description: "", startDate: "2026-09-01", endDate: "2026-12-15",
  department: "", credits: 3, image: "/images/reactjs.jpg", term: "Fall 2026",
};
export const useCoursesStore = create<{
  courses: Course[]; loaded: boolean; error: string;
  loadCourses: () => Promise<void>;
  addCourse: (course: Course) => Promise<string>;
  updateCourse: (course: Course) => Promise<void>;
  deleteCourse: (id: string) => Promise<void>;
}>((set) => ({
  courses: [], loaded: false, error: "",
  loadCourses: async () => {
    try { set({ courses: await client.findAllCourses(), loaded: true, error: "" }); }
    catch (error) { set({ loaded: true, error: errorMessage(error) }); }
  },
  addCourse: async (course) => {
    const saved = await client.createCourse(course);
    set((state) => ({ courses: [...state.courses, saved] }));
    return saved._id;
  },
  updateCourse: async (course) => {
    const saved = await client.updateCourse(course);
    set((state) => ({ courses: state.courses.map((item) => item._id === saved._id ? saved : item) }));
  },
  deleteCourse: async (id) => {
    await client.deleteCourse(id);
    set((state) => ({ courses: state.courses.filter((item) => item._id !== id) }));
  },
}));
