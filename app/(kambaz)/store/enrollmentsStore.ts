"use client";
import { create } from "zustand";
import type { Enrollment } from "@/lib/types";
import * as client from "../enrollments/client";
export const useEnrollmentsStore = create<{
  enrollments: Enrollment[];
  clear: () => void;
  loadEnrollments: (uid: string) => Promise<void>;
  enroll: (uid: string, cid: string) => Promise<void>;
  unenroll: (uid: string, cid: string) => Promise<void>;
}>((set) => ({
  enrollments: [],
  clear: () => set({ enrollments: [] }),
  loadEnrollments: async (uid) => set({ enrollments: await client.findEnrollments(uid) }),
  enroll: async (uid, cid) => {
    const saved = await client.enroll(uid, cid);
    set((state) => ({ enrollments: [...state.enrollments.filter((item) => item._id !== saved._id), saved] }));
  },
  unenroll: async (uid, cid) => {
    await client.unenroll(uid, cid);
    set((state) => ({ enrollments: state.enrollments.filter((item) => !(item.user === uid && item.course === cid)) }));
  },
}));
