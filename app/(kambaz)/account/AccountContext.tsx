"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";
import type { User } from "@/lib/types";
import { errorMessage } from "@/lib/http";
import * as client from "./client";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useCoursesStore } from "../store/coursesStore";
export type { User } from "@/lib/types";
export const emptyUser: User = {
  _id: "", username: "", password: "", firstName: "", lastName: "", email: "", dob: "",
  role: "STUDENT", loginId: "", section: "", lastActivity: "", totalActivity: "",
};
type Account = {
  currentUser: User | null; pending: boolean;
  signin: (username: string, password: string) => Promise<void>;
  signup: (user: User) => Promise<void>;
  signout: () => Promise<void>;
  updateUser: (user: User) => Promise<User>;
  addUser: (user: User) => Promise<User>;
  deleteUser: (id: string) => Promise<void>;
};
const Context = createContext<Account | null>(null);
export const useAccount = () => {
  const value = useContext(Context);
  if (!value) throw new Error("Account provider missing");
  return value;
};
export default function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  const loadEnrollments = useEnrollmentsStore((state) => state.loadEnrollments);
  const clear = useEnrollmentsStore((state) => state.clear);
  const loadCourses = useCoursesStore((state) => state.loadCourses);
  useEffect(() => {
    let active = true;
    void loadCourses();
    const restore = async () => {
      try {
        const user = await client.profile();
        if (!active) return;
        await loadEnrollments(user._id);
        if (active) { setCurrentUser(user); setError(""); }
      } catch (error) {
        if (!active) return;
        clear(); setCurrentUser(null);
        setError(axios.isAxiosError(error) && error.response?.status === 401 ? "" : errorMessage(error));
      } finally { if (active) setPending(false); }
    };
    void restore();
    return () => { active = false; };
  }, [loadCourses, loadEnrollments, clear, retry]);
  async function acceptUser(user: User) {
    await loadEnrollments(user._id);
    setCurrentUser(user); setError("");
  }
  return <Context.Provider value={{
    currentUser, pending,
    signin: async (username, password) => acceptUser(await client.signin(username, password)),
    signup: async (user) => acceptUser(await client.signup(user)),
    signout: async () => { await client.signout(); clear(); setCurrentUser(null); },
    addUser: client.addUser,
    updateUser: async (user) => {
      const saved = await client.updateUser(user);
      if (currentUser?._id === saved._id) setCurrentUser(saved);
      return saved;
    },
    deleteUser: async (id) => { await client.deleteUser(id); if (currentUser?._id === id) { clear(); setCurrentUser(null); } },
  }}>
    {error && <p role="alert" className="m-3 rounded bg-red-100 p-3 text-red-800">{error} <button onClick={() => { setPending(true); setRetry(retry + 1); }}>Retry</button></p>}
    {children}
  </Context.Provider>;
}
