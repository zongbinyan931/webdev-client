import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz-account">
      <table>
        <tbody>
          <tr>
            <td style={{ verticalAlign: "top" }}>
              <AccountNavigation />
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
