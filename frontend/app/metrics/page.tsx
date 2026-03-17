import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/primitives/Card";

export default function MetricsPage() {
  return (
    <AppShell title="Savings" subtitle="Clear proof of value, updated continuously.">
      <Card className="p-5">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="border border-white/15 rounded-xl p-4">Baseline vs optimized cost: $1,248 → $914</div>
          <div className="border border-white/15 rounded-xl p-4">Savings 26.7% / Peak shift 19.4%</div>
          <div className="border border-white/15 rounded-xl p-4">Carbon proxy reduction: 14.2%</div>
          <div className="border border-white/15 rounded-xl p-4">Plan quality improvement: +4.2%</div>
          <div className="border border-white/15 rounded-xl p-4 md:col-span-2">Future readiness estimate available in Optimization Engine</div>
        </div>
        <div className="mt-3 border border-white/15 rounded-xl p-4 text-sm text-slateAsh">
          Your savings view keeps technical details out of the way while preserving full transparency.
        </div>
      </Card>
    </AppShell>
  );
}
