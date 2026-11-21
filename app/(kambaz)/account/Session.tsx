"use client";
import type { ReactNode } from "react";
import { useAccount } from "./AccountContext";

export default function Session({ children }: { children: ReactNode }) {
  const { pending } = useAccount();
  return pending ? <p role="status">Loading account and courses…</p> : children;
}
