import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold">EasySocial</h1>
          <nav className="space-x-5">
            <Link href="/(marketing)/features">Features</Link>
            <Link href="/(marketing)/pricing">Pricing</Link>
            <Link href="/auth/login">Login</Link>
          </nav>
        </header>

        <section className="glass-card text-center">
          <h2 className="mb-4 text-5xl font-black">Plan, Publish, and Grow Across Every Social Channel</h2>
          <p className="mx-auto mb-8 max-w-3xl text-muted-foreground">
            Schedule social content for Facebook, Instagram, LinkedIn, and X from one modern dashboard.
          </p>
          <div className="space-x-4">
            <Link className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground" href="/auth/register">Start free</Link>
            <Link className="rounded-lg border px-6 py-3 font-semibold" href="/dashboard">View dashboard</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
