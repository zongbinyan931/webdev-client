"use client";
import { useCallback, useState, useSyncExternalStore } from "react";
import { blankProfile } from "./shared";
const subscribeResize = (notify: () => void) => {
  window.addEventListener("resize", notify);
  return () => window.removeEventListener("resize", notify);
};
const readSize = () => `${window.innerWidth},${window.innerHeight}`;
export function useWindowSize() {
  const size = useSyncExternalStore(subscribeResize, readSize, () => "0,0");
  const [width, height] = size.split(",").map(Number);
  return { width, height };
}
export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  return [value, () => setValue((v) => !v)] as const;
}
const subscribeStorage = (notify: () => void) => {
  window.addEventListener("storage", notify);
  window.addEventListener("lab-storage", notify);
  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener("lab-storage", notify);
  };
};
export function useLocalStorage(key: string, initial = "") {
  const read = useCallback(() => {
    try {
      return localStorage.getItem(key) ?? initial;
    } catch {
      return initial;
    }
  }, [key, initial]);
  const value = useSyncExternalStore(subscribeStorage, read, () => initial);
  const write = (value: string) => {
    try {
      localStorage.setItem(key, value);
      window.dispatchEvent(new Event("lab-storage"));
    } catch {}
  };
  return [value, write] as const;
}
export function useProfileForm() {
  const [profile, change] = useState({ ...blankProfile });
  return { profile, change, reset: () => change({ ...blankProfile }) };
}
