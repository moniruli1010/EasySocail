import { AnalyticsChart } from "@/components/charts/analytics-chart";
import { StatsCards } from "@/components/dashboard/stats-cards";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <StatsCards />
      <AnalyticsChart />
    </div>
  );
}
