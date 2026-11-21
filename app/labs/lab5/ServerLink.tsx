import type { ReactNode } from "react";
import { HTTP_SERVER } from "@/lib/http";

export default function ServerLink({ path, id, children }: { path: string; id?: string; children: ReactNode }) {
  return <a id={id} href={HTTP_SERVER ? `${HTTP_SERVER}${path}` : undefined} target="_blank" rel="noreferrer">{children}</a>;
}
