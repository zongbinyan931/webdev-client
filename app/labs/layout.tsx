import { ReactNode } from "react";
import TOC from "./TOC";

export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <table>
      <tbody>
        <tr>
          <td style={{ verticalAlign: "top" }} width="100px">
            <TOC />
          </td>
          <td style={{ verticalAlign: "top" }}>{children}</td>
        </tr>
      </tbody>
    </table>
  );
}
