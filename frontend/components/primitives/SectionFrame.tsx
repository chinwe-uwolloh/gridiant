import { ReactNode } from "react";

export function SectionFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="soft-card p-5 md:p-6">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold tracking-tight text-iceMist md:text-xl">{title}</h2>
      </header>
      {children}
    </section>
  );
}
