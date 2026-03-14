import { PrismaClient, Role, SubscriptionPlan } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@easysocial.dev" },
    update: {},
    create: {
      email: "admin@easysocial.dev",
      name: "EasySocial Admin",
      role: Role.ADMIN,
      passwordHash: "seeded-demo-hash"
    }
  });

  await prisma.subscription.upsert({
    where: { userId: admin.id },
    update: { plan: SubscriptionPlan.AGENCY },
    create: { userId: admin.id, plan: SubscriptionPlan.AGENCY }
  });
}

main().finally(async () => prisma.$disconnect());
