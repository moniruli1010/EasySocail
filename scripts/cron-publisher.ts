import { runScheduledPublisher } from "@/lib/scheduler";

(async () => {
  const count = await runScheduledPublisher();
  console.log(`Published ${count} scheduled posts.`);
  process.exit(0);
})();
