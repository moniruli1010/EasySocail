import { PostStatus } from "@prisma/client";
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { publishToPlatform } from "@/lib/social-publisher";

const schema = z.object({ socialAccountId: z.string(), caption: z.string().min(1), imageUrl: z.string().optional() });

export async function POST(req: Request) {
  const body = schema.parse(await req.json());
  const account = await prisma.socialAccount.findUniqueOrThrow({ where: { id: body.socialAccountId } });

  const external = await publishToPlatform(account.platform, account.accessToken, {
    caption: body.caption,
    imageUrl: body.imageUrl
  });

  const post = await prisma.post.create({
    data: {
      userId: account.userId,
      socialAccountId: account.id,
      caption: body.caption,
      imageUrl: body.imageUrl,
      status: PostStatus.PUBLISHED,
      publishedAt: new Date(),
      externalPostId: external.externalId
    }
  });

  return NextResponse.json(post, { status: 201 });
}
