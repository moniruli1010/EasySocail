export default function AdminPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl space-y-6 px-6 py-10">
      <h1 className="text-4xl font-bold">Admin Panel</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {["User management", "Plans", "Moderation", "Platform usage stats"].map((block) => (
          <section className="glass-card" key={block}><h2 className="font-semibold">{block}</h2></section>
        ))}
      </div>
    </main>
  );
}
