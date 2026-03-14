const stats = [
  { label: "Connected accounts", value: "6" },
  { label: "Total posts", value: "142" },
  { label: "Scheduled posts", value: "18" },
  { label: "Engagement rate", value: "5.8%" }
];

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((card) => (
        <article key={card.label} className="glass-card">
          <p className="text-sm text-muted-foreground">{card.label}</p>
          <p className="text-3xl font-black">{card.value}</p>
        </article>
      ))}
    </div>
  );
}
