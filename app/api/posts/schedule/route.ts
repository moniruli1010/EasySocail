import { PostStatus } from "@prisma/client";
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  socialAccountId: z.string(),
  caption: z.string().min(1),
  imageUrl: z.string().optional(),
  scheduledAt: z.string().datetime()
});

export async function POST(req: Request) {
  const body = schema.parse(await req.json());
  const account = await prisma.socialAccount.findUniqueOrThrow({ where: { id: body.socialAccountId } });

  const post = await prisma.post.create({
    data: {
      userId: account.userId,
      socialAccountId: account.id,
      caption: body.caption,
      imageUrl: body.imageUrl,
      status: PostStatus.SCHEDULED,
      scheduledAt: new Date(body.scheduledAt)
    }
  });

  return NextResponse.json(post, { status: 201 });
}
