import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/primitives/Card";

export default function SavingsPage() {
  return (
    <AppShell title="Savings" subtitle="Track how much you save and where improvements are coming from.">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-5"><p className="text-sm text-slateAsh">This month</p><p className="mt-2 text-3xl font-semibold">$184</p></Card>
        <Card className="p-5"><p className="text-sm text-slateAsh">Peak-hour reduction</p><p className="mt-2 text-3xl font-semibold">19%</p></Card>
        <Card className="p-5"><p className="text-sm text-slateAsh">Clean energy usage</p><p className="mt-2 text-3xl font-semibold">+14%</p></Card>
      </div>
      <Card className="p-5">
        <h2 className="text-lg font-semibold">Where savings came from</h2>
        <ul className="mt-3 space-y-2 text-sm text-slateAsh">
          <li>• EV charging shifted away from expensive hours.</li>
          <li>• Battery dispatch reduced evening peak costs.</li>
          <li>• Smart comfort schedule lowered HVAC spikes.</li>
        </ul>
      </Card>
    </AppShell>
  );
}
