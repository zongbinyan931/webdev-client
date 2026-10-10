import type {ReactNode} from "react";
import AccountNavigation from "./Navigation";
export default function AccountLayout({children}:{children:ReactNode}){return <div id="wd-kambaz-account" className="flex flex-col gap-8 md:flex-row"><aside className="w-[150px] shrink-0"><AccountNavigation/></aside><main className="min-w-0 flex-1">{children}</main></div>;}

