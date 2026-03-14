import { PricingTable } from "@/components/dashboard/pricing-table";

export default function PricingPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">Simple pricing for every stage</h1>
      <PricingTable />
    </main>
  );
}
