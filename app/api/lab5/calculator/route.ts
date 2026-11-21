import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const first = params.get("a"), second = params.get("b");
  if (!first?.trim() || !second?.trim() || !Number.isFinite(Number(first)) || !Number.isFinite(Number(second)))
    return Response.json({ error: "Enter two valid numbers." }, { status: 400 });
  const a = Number(first), b = Number(second), operation = params.get("operation");
  let result: number;
  switch (operation) {
    case "add": result = a + b; break;
    case "subtract": result = a - b; break;
    case "multiply": result = a * b; break;
    case "divide":
      if (b === 0) return Response.json({ error: "Cannot divide by zero." }, { status: 400 });
      result = a / b; break;
    default: return Response.json({ error: "Unknown operation." }, { status: 400 });
  }
  if (!Number.isFinite(result)) return Response.json({ error: "Result must be finite." }, { status: 400 });
  return Response.json({ a, b, operation, result });
}
