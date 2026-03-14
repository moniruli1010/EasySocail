import { PostStatus } from "@prisma/client";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const posts = await prisma.post.findMany({ where: { status: PostStatus.SCHEDULED }, orderBy: { scheduledAt: "asc" } });
  return NextResponse.json(posts);
}
