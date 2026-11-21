import { http } from "@/lib/http";
import type { Enrollment } from "@/lib/types";
export const findEnrollments = async (uid: string) => (await http.get<Enrollment[]>(`/api/users/${uid}/enrollments`)).data;
export const enroll = async (uid: string, cid: string) => (await http.post<Enrollment>(`/api/users/${uid}/courses/${cid}`)).data;
export const unenroll = async (uid: string, cid: string) => { await http.delete(`/api/users/${uid}/courses/${cid}`); };
