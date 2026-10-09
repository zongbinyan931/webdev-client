import { ReactNode } from "react";
import KambazNavigation from "./Navigation";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz">
      <table>
        <tbody>
          <tr>
            <td style={{ verticalAlign: "top" }} width="200">
              <KambazNavigation />
            </td>
            <td style={{ verticalAlign: "top" }} width="100%">
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
