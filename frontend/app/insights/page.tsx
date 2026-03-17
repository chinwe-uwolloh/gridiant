import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/primitives/Card";
import { PriceContourChart } from "@/components/charts/PriceContourChart";

const weekTrend = [0.38, 0.35, 0.33, 0.29, 0.31, 0.34, 0.42, 0.46, 0.44, 0.39, 0.34, 0.3, 0.27, 0.26, 0.24, 0.25, 0.31, 0.37, 0.43, 0.41, 0.36, 0.33, 0.3, 0.28];

export default function InsightsPage() {
  return (
    <AppShell title="Insights" subtitle="See where your energy spend is coming from and what to improve next.">
      <Card className="p-5">
        <h2 className="text-lg font-semibold">Usage and cost trend</h2>
        <p className="mt-1 text-sm text-slateAsh">Evening usage is still your biggest cost driver.</p>
        <div className="mt-4">
          <PriceContourChart data={weekTrend} />
        </div>
      </Card>
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-5"><p className="text-sm text-slateAsh">Biggest saving opportunity</p><p className="mt-2 font-medium">Shift EV charging later</p></Card>
        <Card className="p-5"><p className="text-sm text-slateAsh">Comfort performance</p><p className="mt-2 font-medium">Stable this week</p></Card>
        <Card className="p-5"><p className="text-sm text-slateAsh">Clean energy alignment</p><p className="mt-2 font-medium">+11% improved</p></Card>
      </div>
    </AppShell>
  );
}
