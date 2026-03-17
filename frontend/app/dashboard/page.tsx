import { AppShell } from "@/components/layout/AppShell";
import { FadeIn } from "@/components/motion/FadeIn";
import { PriceContourChart } from "@/components/charts/PriceContourChart";
import { Button } from "@/components/primitives/Button";
import { Card } from "@/components/primitives/Card";
import { AnimatedNumber } from "@/components/primitives/AnimatedNumber";
import { RadialGauge } from "@/components/primitives/RadialGauge";
import { QuantumSavingsMeter } from "@/components/dashboard/QuantumSavingsMeter";

const trend = [0.34, 0.29, 0.24, 0.21, 0.25, 0.32, 0.38, 0.43, 0.41, 0.37, 0.33, 0.3, 0.28, 0.27, 0.29, 0.33, 0.39, 0.47, 0.51, 0.49, 0.42, 0.36, 0.31, 0.28];

export default function DashboardPage() {
  return (
    <AppShell title="Home" subtitle="Your home is optimized and ready for today's rate windows.">
      <FadeIn>
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="p-6">
            <p className="text-xs uppercase tracking-[0.12em] text-emerald-200/80">Today’s highlight</p>
            <h2 className="mt-2 text-2xl font-semibold">Quantum Energy Savings Applied</h2>
            <p className="mt-2 text-slateAsh">Dishwasher shifted to lower-cost hours and cooling schedule adjusted for comfort.</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-white/12 bg-white/[0.03] p-4">
                <p className="text-sm text-slateAsh">Saved this week</p>
                <p className="mt-1 text-xl font-semibold"><AnimatedNumber value={42} prefix="$" /></p>
              </div>
              <div className="rounded-xl border border-white/12 bg-white/[0.03] p-4">
                <p className="text-sm text-slateAsh">Peak usage change</p>
                <p className="mt-1 text-xl font-semibold"><AnimatedNumber value={18} suffix="%" /></p>
              </div>
              <div className="rounded-xl border border-white/12 bg-white/[0.03] p-4">
                <p className="text-sm text-slateAsh">Appliances rescheduled</p>
                <p className="mt-1 text-xl font-semibold"><AnimatedNumber value={2} /></p>
              </div>
            </div>
          </Card>
          <QuantumSavingsMeter valueKwh={17.8} />
        </div>
      </FadeIn>

      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Daily energy trend</h3>
            <Button href="/insights" variant="secondary">View insights</Button>
          </div>
          <PriceContourChart data={trend} />
        </Card>
        <Card className="p-5">
          <h3 className="text-lg font-semibold">Household status</h3>
          <div className="mt-4 grid gap-4">
            <RadialGauge value={88} label="Comfort score maintained" />
            <RadialGauge value={76} label="Savings efficiency today" />
          </div>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-5">
          <h3 className="text-lg font-semibold">Recommended actions</h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-white/12 bg-white/[0.03] p-3">
              <p className="font-medium">Smart charging window found</p>
              <p className="text-sm text-slateAsh">Start EV charging at 11:00 PM for lower rates</p>
            </div>
            <div className="rounded-xl border border-white/12 bg-white/[0.03] p-3">
              <p className="font-medium">Cooling schedule optimized</p>
              <p className="text-sm text-slateAsh">Pre-cool before peak to reduce evening cost spikes</p>
            </div>
          </div>
        </Card>
        <Card className="p-5">
          <h3 className="text-lg font-semibold">Today’s automation timeline</h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="rounded-xl border border-white/12 bg-white/[0.03] p-3">3:00 PM · Battery hold for peak pricing</div>
            <div className="rounded-xl border border-white/12 bg-white/[0.03] p-3">6:00 PM · Comfort adjustment applied</div>
            <div className="rounded-xl border border-white/12 bg-white/[0.03] p-3">11:00 PM · EV charge session starts</div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
