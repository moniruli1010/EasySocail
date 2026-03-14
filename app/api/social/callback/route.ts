import { Platform } from "@prisma/client";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const platform = (searchParams.get("platform") ?? "FACEBOOK") as Platform;
  const userId = searchParams.get("userId") ?? "demo-user";

  await prisma.socialAccount.upsert({
    where: { platform_accountId: { platform, accountId: `${platform.toLowerCase()}-acct` } },
    create: {
      userId,
      platform,
      accountId: `${platform.toLowerCase()}-acct`,
      accountName: `${platform} Account`,
      accessToken: "encrypted-token-placeholder"
    },
    update: { accessToken: "encrypted-token-placeholder" }
  });

  return NextResponse.redirect(`${process.env.APP_URL}/dashboard/accounts`);
}
