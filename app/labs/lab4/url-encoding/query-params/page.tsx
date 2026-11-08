import Link from "next/link";
export default async function Query({
  searchParams,
}: {
  searchParams: Promise<{ a?: string; b?: string; c?: string }>;
}) {
  const p = await searchParams;
  const values = [p.a ?? "0", p.b ?? "0", ...(p.c !== undefined ? [p.c] : [])];
  const nums = values.map(Number);
  return (
    <div>
      <h1>Query Parameters</h1>
      <p>
        {nums.every(Number.isFinite)
          ? `${values.join(" + ")} = ${nums.reduce((a, b) => a + b, 0)}`
          : "Please provide valid numbers."}
      </p>
      <Link href="/labs/lab4">Back to Lab 4</Link>
    </div>
  );
}
