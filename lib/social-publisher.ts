import { Platform } from "@prisma/client";

export async function publishToPlatform(platform: Platform, accessToken: string, payload: { caption: string; imageUrl?: string }) {
  if (!accessToken) throw new Error("Missing access token");

  switch (platform) {
    case "FACEBOOK":
    case "INSTAGRAM":
    case "LINKEDIN":
    case "X":
      return { externalId: `${platform}-${Date.now()}`, payload };
    default:
      throw new Error(`Unsupported platform: ${platform satisfies never}`);
  }
}
