"use client";
import { create } from "zustand";
import initial from "../database/enrollments.json";
export const useEnrollmentsStore = create<{
  enrollments: typeof initial;
  enroll: (user: string, course: string) => void;
  unenroll: (user: string, course: string) => void;
}>((set) => ({
  enrollments: initial,
  enroll: (user, course) =>
    set((s) =>
      s.enrollments.some((e) => e.user === user && e.course === course)
        ? s
        : {
            enrollments: [
              ...s.enrollments,
              { _id: crypto.randomUUID(), user, course },
            ],
          },
    ),
  unenroll: (user, course) =>
    set((s) => ({
      enrollments: s.enrollments.filter(
        (e) => !(e.user === user && e.course === course),
      ),
    })),
}));
