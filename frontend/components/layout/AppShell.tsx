import { ReactNode } from "react";
import { CommandShell } from "@/components/layout/CommandShell";
import { AppNavigation } from "@/components/navigation/AppNavigation";

export function AppShell({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <CommandShell>
      <div className="space-y-5 pb-20 md:pb-0">
        <AppNavigation />
        <header className="glass-card p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-slateAsh">Gridiant 2.0</p>
          <h1 className="mt-1 text-2xl font-semibold text-iceMist md:text-3xl">{title}</h1>
          {subtitle ? <p className="mt-1 text-sm text-slateAsh">{subtitle}</p> : null}
        </header>
        <div className="space-y-5">
          {children}
        </div>
      </div>
    </CommandShell>
  );
}
