import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { name: "Free", price: 0, accountLimit: 1, postLimit: 5 },
    { name: "Starter", price: 2.99, accountLimit: 3, postLimit: 40 },
    { name: "Pro", price: 9.99, accountLimit: 10, postLimit: 200 },
    { name: "Agency", price: 29, accountLimit: -1, postLimit: -1 }
  ]);
}
