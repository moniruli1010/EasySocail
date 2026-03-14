import Link from "next/link";

const links = [
  ["Dashboard", "/dashboard"],
  ["Connect Accounts", "/dashboard/accounts"],
  ["Create Post", "/dashboard/posts/create"],
  ["Scheduled", "/dashboard/posts/scheduled"],
  ["Published", "/dashboard/posts/published"],
  ["Failed", "/dashboard/posts/failed"],
  ["Analytics", "/dashboard/analytics"],
  ["Billing", "/dashboard/billing"],
  ["Calendar", "/dashboard/calendar"],
  ["Settings", "/dashboard/settings"],
  ["Admin", "/admin"]
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-border bg-secondary/50 p-5">
      <h2 className="mb-6 text-xl font-bold">EasySocial</h2>
      <nav className="space-y-2">
        {links.map(([name, href]) => (
          <Link key={href} href={href} className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10">
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
