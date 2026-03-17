import { CommandShell } from "@/components/layout/CommandShell";
import { Button } from "@/components/primitives/Button";
import { Card } from "@/components/primitives/Card";

const features = [
  { title: "Smart schedules", body: "Automatically move usage to lower-cost hours while keeping comfort intact." },
  { title: "Clear insights", body: "Understand where your energy spend comes from with simple, visual guidance." },
  { title: "Automation that feels safe", body: "Approve recommendations in one tap or let Gridiant run trusted routines." },
];

export default function LandingPage() {
  return (
    <CommandShell>
      <div className="space-y-8 pb-10">
        <header className="glass-card flex items-center justify-between px-5 py-4">
          <p className="font-display text-xl text-iceMist">Gridiant</p>
          <Button href="/dashboard" variant="secondary">Open app</Button>
        </header>

        <section className="grid gap-6 rounded-[28px] border border-white/15 bg-gradient-to-br from-[#12233a]/85 via-[#0f1a2a]/80 to-[#0a1018]/78 p-6 md:grid-cols-[1.08fr_0.92fr] md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-emerald-200/80">Smarter schedules. Lower bills. Better comfort.</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-iceMist md:text-6xl">
              Save more on electricity without thinking about it.
            </h1>
            <p className="mt-4 max-w-xl text-slateAsh">
              Gridiant is a premium energy app that automates appliance timing and optimizes home performance with AI and Q#-driven optimization intelligence.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/dashboard">Start saving</Button>
              <Button href="/insights" variant="secondary">Explore insights</Button>
            </div>
          </div>
          <Card className="relative min-h-[320px] overflow-hidden p-6">
            <div className="absolute -right-4 top-8 h-28 w-28 rounded-full bg-cyan-300/20 blur-xl" />
            <div className="absolute left-8 top-16 h-40 w-40 rounded-full bg-emerald-300/15 blur-2xl" />
            <div className="relative z-10 space-y-3">
              <p className="text-sm text-slateAsh">This week</p>
              <p className="text-2xl font-semibold text-iceMist">Your home is running more efficiently</p>
              <p className="text-sm text-slateAsh">$42 saved • 18% lower peak usage • comfort maintained</p>
              <div className="mt-6 grid gap-2 text-sm">
                <div className="rounded-xl border border-white/12 bg-white/[0.04] p-3">Dishwasher shifted to lower-cost hours</div>
                <div className="rounded-xl border border-white/12 bg-white/[0.04] p-3">Smart charging window found for tonight</div>
              </div>
            </div>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Card className="p-5"><p className="text-sm text-slateAsh">Average monthly savings</p><p className="mt-2 text-2xl font-semibold">18-35%</p></Card>
          <Card className="p-5"><p className="text-sm text-slateAsh">Schedule refresh</p><p className="mt-2 text-2xl font-semibold">Under 2 seconds</p></Card>
          <Card className="p-5"><p className="text-sm text-slateAsh">Automation reliability</p><p className="mt-2 text-2xl font-semibold">99.9%</p></Card>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {features.map((item) => (
            <Card key={item.title} className="p-6">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-slateAsh">{item.body}</p>
            </Card>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold">How it works</h3>
            <ol className="mt-4 space-y-3 text-slateAsh">
              <li>1. Connect your home profile and devices.</li>
              <li>2. Gridiant builds a daily plan around cost and comfort.</li>
              <li>3. You approve actions and see savings grow week by week.</li>
            </ol>
          </Card>
          <Card className="p-6">
            <h3 className="text-2xl font-semibold">Built on trusted optimization</h3>
            <p className="mt-4 text-slateAsh">
              Our hybrid optimization engine keeps scheduling practical, transparent, and future-ready with Azure Quantum-inspired architecture and Q# integration.
            </p>
          </Card>
        </section>
      </div>
    </CommandShell>
  );
}
