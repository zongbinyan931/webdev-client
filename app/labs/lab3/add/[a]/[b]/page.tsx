import Link from "next/link";
import { notFound } from "next/navigation";
export default async function AddPathParameters({ params }: {
  params: Promise<{ a: string; b: string }>;
}) {
  const { a, b } = await params;
  const first = Number(a), second = Number(b);
  if (!a.trim() || !b.trim() || !Number.isFinite(first) || !Number.isFinite(second)) notFound();
  return <div id="wd-add-path-parameters">
    <h2>Add Path Parameters</h2><p>{first} + {second} = {first + second}</p>
    <Link href="/labs/lab3">Back to Lab 3</Link>
  </div>;
}
