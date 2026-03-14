"use client";

import { useState } from "react";

const platforms = ["FACEBOOK", "INSTAGRAM", "LINKEDIN", "X"];

export function PostComposer() {
  const [selected, setSelected] = useState<string[]>(["FACEBOOK"]);

  const toggle = (name: string) => {
    setSelected((curr) => (curr.includes(name) ? curr.filter((p) => p !== name) : [...curr, name]));
  };

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <form className="glass-card space-y-4">
        <h2 className="text-2xl font-semibold">Compose post</h2>
        <textarea className="h-40 w-full rounded-lg border border-border bg-secondary p-3" placeholder="Write your caption..." />
        <input type="file" className="w-full rounded-lg border border-border bg-secondary p-3" />
        <div className="flex flex-wrap gap-2">
          {platforms.map((platform) => (
            <button
              key={platform}
              type="button"
              onClick={() => toggle(platform)}
              className={`rounded-full border px-3 py-1 text-sm ${selected.includes(platform) ? "bg-primary text-primary-foreground" : ""}`}
            >
              {platform}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="rounded-lg bg-primary px-4 py-2 font-semibold">Publish now</button>
          <button className="rounded-lg border px-4 py-2 font-semibold">Schedule</button>
        </div>
      </form>
      <article className="glass-card">
        <h3 className="mb-4 text-lg font-semibold">Live preview</h3>
        <div className="rounded-xl border border-border bg-secondary p-4">
          <p className="text-sm text-muted-foreground">Platforms: {selected.join(", ")}</p>
          <p className="mt-3">Your post preview appears here...</p>
        </div>
      </article>
    </section>
  );
}
