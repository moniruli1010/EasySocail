const providers = ["Facebook Pages", "Instagram Business", "LinkedIn", "X (Twitter)"];

export default function AccountsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Connect social accounts</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {providers.map((provider) => (
          <article key={provider} className="glass-card flex items-center justify-between">
            <h2 className="font-semibold">{provider}</h2>
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Connect OAuth</button>
          </article>
        ))}
      </div>
    </div>
  );
}
