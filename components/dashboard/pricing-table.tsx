const plans = [
  { name: "Free", price: "$0", features: ["1 social account", "5 posts/month"] },
  { name: "Starter", price: "$2.99", features: ["3 accounts", "40 posts"] },
  { name: "Pro", price: "$9.99", features: ["10 accounts", "200 posts"] },
  { name: "Agency", price: "$29", features: ["Unlimited accounts", "Unlimited posts"] }
];

export function PricingTable() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {plans.map((plan) => (
        <article className="glass-card" key={plan.name}>
          <h2 className="text-2xl font-bold">{plan.name}</h2>
          <p className="mb-3 mt-1 text-3xl font-black">{plan.price}<span className="text-sm font-normal">/month</span></p>
          <ul className="mb-4 list-inside list-disc text-sm text-muted-foreground">
            {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          <button className="w-full rounded-lg bg-primary p-2 font-semibold text-primary-foreground">Choose Plan</button>
        </article>
      ))}
    </div>
  );
}
