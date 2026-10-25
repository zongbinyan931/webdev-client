import ModulesList from "../modules/ModulesList";
import CourseStatus from "./Status";
export default async function Home({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  return <div id="wd-course-home" className="flex gap-4">
    <div className="min-w-0 flex-1"><ModulesList cid={cid} /></div>
    <aside className="hidden w-[250px] shrink-0 lg:block"><CourseStatus /></aside>
  </div>;
}
