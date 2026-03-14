const features = [
  "Multi-platform scheduling",
  "Rich media composer + preview",
  "Automated publishing with retry logs",
  "Performance analytics + growth insights"
];

export default function FeaturesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <h1 className="mb-10 text-4xl font-bold">EasySocial Features</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <article key={feature} className="glass-card">
            <h2 className="text-xl font-semibold">{feature}</h2>
          </article>
        ))}
      </div>
    </main>
  );
}
