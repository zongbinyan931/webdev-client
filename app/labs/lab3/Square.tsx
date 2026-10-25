import { ReactNode } from "react";

export default function Square({ children }: { children: ReactNode }) {
  const num = Number(children);
  return <span id={num === 4 ? "wd-square" : `wd-square-${num}`}>{num * num}</span>;
}
