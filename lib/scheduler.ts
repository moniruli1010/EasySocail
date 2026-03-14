import { PostStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { publishToPlatform } from "@/lib/social-publisher";

export async function runScheduledPublisher() {
  const duePosts = await prisma.post.findMany({
    where: { status: PostStatus.SCHEDULED, scheduledAt: { lte: new Date() } },
    include: { socialAccount: true }
  });

  for (const post of duePosts) {
    try {
      const response = await publishToPlatform(post.socialAccount.platform, post.socialAccount.accessToken, {
        caption: post.caption,
        imageUrl: post.imageUrl ?? undefined
      });

      await prisma.post.update({
        where: { id: post.id },
        data: { status: PostStatus.PUBLISHED, publishedAt: new Date(), externalPostId: response.externalId }
      });

      await prisma.postLog.create({
        data: { postId: post.id, level: "INFO", message: "Scheduled post published" }
      });
    } catch (error) {
      await prisma.post.update({ where: { id: post.id }, data: { status: PostStatus.FAILED } });
      await prisma.postLog.create({
        data: {
          postId: post.id,
          level: "ERROR",
          message: error instanceof Error ? error.message : "Unknown scheduling error"
        }
      });
    }
  }

  return duePosts.length;
}
