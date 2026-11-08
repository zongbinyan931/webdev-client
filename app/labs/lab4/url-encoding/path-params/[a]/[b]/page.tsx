import Link from "next/link";
export default async function Path({
  params,
}: {
  params: Promise<{ a: string; b: string }>;
}) {
  const p = await params;
  const values = [p.a, p.b];
  const nums = values.map(Number);
  return (
    <div>
      <h1>Path Parameters</h1>
      <p>
        {nums.every(Number.isFinite)
          ? `${values.join(" + ")} = ${nums.reduce((a, b) => a + b, 0)}`
          : "Please provide valid numbers."}
      </p>
      <Link href="/labs/lab4">Back to Lab 4</Link>
    </div>
  );
}
