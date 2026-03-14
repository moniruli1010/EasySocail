import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const [users, posts, socialAccounts] = await Promise.all([
    prisma.user.count(),
    prisma.post.count(),
    prisma.socialAccount.count()
  ]);

  return NextResponse.json({ users, posts, socialAccounts });
}
