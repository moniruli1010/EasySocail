import Link from "next/link";

type Mode = "login" | "register" | "forgot";

export function AuthCard({ mode }: { mode: Mode }) {
  const title = mode === "login" ? "Welcome back" : mode === "register" ? "Create account" : "Reset password";

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="glass-card w-full max-w-md">
        <h1 className="mb-6 text-3xl font-bold">{title}</h1>
        <form className="space-y-4">
          {mode !== "forgot" && <input className="w-full rounded-lg border border-border bg-secondary p-3" placeholder="Email" type="email" />}
          {mode !== "forgot" && <input className="w-full rounded-lg border border-border bg-secondary p-3" placeholder="Password" type="password" />}
          {mode === "forgot" && <input className="w-full rounded-lg border border-border bg-secondary p-3" placeholder="Your account email" type="email" />}
          <button className="w-full rounded-lg bg-primary p-3 font-semibold text-primary-foreground" type="submit">Continue</button>
        </form>
        <p className="mt-4 text-sm text-muted-foreground">Google social login can be enabled in NextAuth provider config.</p>
        <div className="mt-6 space-x-4 text-sm">
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
          <Link href="/auth/forgot-password">Forgot password</Link>
        </div>
      </section>
    </main>
  );
}
