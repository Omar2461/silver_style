import { NextResponse } from "next/server";
import { readDb } from "@/lib/readDb";

export async function GET() {
  const data = readDb();
  return NextResponse.json(data.types);
}
