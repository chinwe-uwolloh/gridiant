"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type AppRoute = "/dashboard" | "/insights" | "/schedule" | "/devices" | "/savings" | "/settings" | "/advanced";

const items = [
  { href: "/dashboard", label: "Home" },
  { href: "/insights", label: "Insights" },
  { href: "/schedule", label: "Schedule" },
  { href: "/devices", label: "Devices" },
  { href: "/savings", label: "Savings" },
  { href: "/settings", label: "Settings" },
] as const satisfies ReadonlyArray<{ href: AppRoute; label: string }>;

export function AppNavigation() {
  const pathname = usePathname();
  return (
    <>
      <nav className="glass-card hidden items-center justify-between p-3 md:flex">
        <p className="px-2 text-sm text-iceMist">Gridiant</p>
        <div className="flex items-center gap-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-1.5 text-sm transition ${pathname === item.href ? "bg-white/14 text-iceMist" : "text-slateAsh hover:bg-white/8 hover:text-iceMist"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/advanced" className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-sm text-slateAsh hover:text-iceMist">
          Quantum Lab
        </Link>
      </nav>
      <nav className="fixed inset-x-3 bottom-3 z-20 rounded-2xl border border-white/10 bg-[#0b1016]/95 p-2 backdrop-blur md:hidden">
        <div className="grid grid-cols-3 gap-1">
          {items.slice(0, 6).map((item) => (
            <Link key={item.href} href={item.href} className={`rounded-lg px-2 py-2 text-center text-xs ${pathname === item.href ? "bg-white/10 text-iceMist" : "text-slateAsh"}`}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
