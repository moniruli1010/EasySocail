import { NextResponse } from "next/server";
import { runScheduledPublisher } from "@/lib/scheduler";

export async function POST() {
  const count = await runScheduledPublisher();
  return NextResponse.json({ processed: count });
}
