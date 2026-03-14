import { AnalyticsChart } from "@/components/charts/analytics-chart";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {["Engagement", "Clicks", "Likes", "Shares", "Follower growth"].map((metric) => (
          <div key={metric} className="glass-card"><p>{metric}</p><p className="text-2xl font-bold">+18%</p></div>
        ))}
      </div>
      <AnalyticsChart />
    </div>
  );
}
