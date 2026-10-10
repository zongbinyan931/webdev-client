import type { ReactNode } from "react";
import TOC from "./TOC";
import "./layout.css";
export default function LabsLayout({children}:{children:ReactNode}) {
 return <div className="wd-labs-layout"><aside><TOC/></aside><main>{children}</main></div>;
}
