import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    engagement: 12_430,
    clicks: 3_102,
    likes: 8_433,
    shares: 1_204,
    followerGrowth: 14.5
  });
}
