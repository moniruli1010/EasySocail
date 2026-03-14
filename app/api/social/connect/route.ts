import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const platform = searchParams.get("platform") || "FACEBOOK";
  const oauthUrl = `${process.env.APP_URL}/api/social/callback?platform=${platform}&code=mock_code`;
  return NextResponse.json({ oauthUrl });
}
