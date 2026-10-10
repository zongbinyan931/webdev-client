import type {ReactNode} from "react";
import CourseNavigation from "./Navigation";
export default async function CourseLayout({children,params}:{children:ReactNode;params:Promise<{cid:string}>}) {
 const {cid}=await params;
 return <div id="wd-courses"><h1 className="text-xl font-normal text-red-600">{cid} · Web Development</h1><hr className="my-4 border-neutral-200"/><div className="flex gap-4"><aside className="hidden w-[140px] shrink-0 md:block"><CourseNavigation cid={cid}/></aside><main className="min-w-0 flex-1"><details className="mb-4 md:hidden"><summary>Course navigation</summary><CourseNavigation cid={cid}/></details>{children}</main></div></div>;
}

