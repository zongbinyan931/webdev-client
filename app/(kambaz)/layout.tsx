import { ReactNode } from "react";
import "./kambaz.css";
import AccountProvider from "./account/AccountContext";
import KambazNavigation from "./Navigation";
import Session from "./account/Session";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <AccountProvider>
      <div id="wd-kambaz" className="font-sans">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3"><Session>{children}</Session></div>
      </div>
    </AccountProvider>
  );
}
