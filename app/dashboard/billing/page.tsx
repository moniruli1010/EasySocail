import { PricingTable } from "@/components/dashboard/pricing-table";

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Billing & subscriptions</h1>
      <PricingTable />
    </div>
  );
}
