"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import initial from "../database/users.json";
export type User = (typeof initial)[number] & { password: string; dob: string };
export const emptyUser: User = {
  _id: "",
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  dob: "",
  role: "STUDENT",
  loginId: "",
  section: "",
  lastActivity: "",
  totalActivity: "",
};
type Account = {
  currentUser: User | null;
  users: User[];
  signin: (u: string, p: string) => boolean;
  signup: (u: User) => boolean;
  signout: () => void;
  updateUser: (u: User) => void;
  addUser: (u: User) => string;
  deleteUser: (id: string) => void;
};
const Context = createContext<Account | null>(null);
export const useAccount = () => {
  const value = useContext(Context);
  if (!value) throw new Error("Account provider missing");
  return value;
};
export default function AccountProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>(
    initial.map((u) => ({ ...u, password: "123", dob: "" })),
  );
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  function addUser(user: User) {
    const _id = crypto.randomUUID();
    setUsers((all) => [...all, { ...user, _id }]);
    return _id;
  }
  return (
    <Context.Provider
      value={{
        users,
        currentUser,
        signin: (username, password) => {
          const user = users.find(
            (u) => u.username === username && u.password === password,
          );
          if (!user) return false;
          setCurrentUser(user);
          return true;
        },
        signup: (user) => {
          if (users.some((u) => u.username === user.username)) return false;
          const _id = addUser(user);
          setCurrentUser({ ...user, _id });
          return true;
        },
        signout: () => setCurrentUser(null),
        addUser,
        updateUser: (user) => {
          setUsers((all) => all.map((u) => (u._id === user._id ? user : u)));
          if (currentUser?._id === user._id) setCurrentUser(user);
        },
        deleteUser: (id) => {
          setUsers((all) => all.filter((u) => u._id !== id));
          if (currentUser?._id === id) setCurrentUser(null);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
}
