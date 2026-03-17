import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/primitives/Card";
import { Button } from "@/components/primitives/Button";

export default function DevicesPage() {
  return (
    <AppShell title="Devices" subtitle="Manage connected devices and choose how much control Gridiant should automate.">
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-5">
          <h2 className="text-lg font-semibold">Connected devices</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="rounded-xl border border-white/10 p-3">EV Charger · Ready</div>
            <div className="rounded-xl border border-white/10 p-3">HVAC · Managed</div>
            <div className="rounded-xl border border-white/10 p-3">Battery · Active</div>
          </div>
        </Card>
        <Card className="p-5">
          <h2 className="text-lg font-semibold">Automation preferences</h2>
          <p className="mt-2 text-sm text-slateAsh">Choose what can run automatically and what should always ask first.</p>
          <div className="mt-4">
            <Button variant="secondary">Manage devices</Button>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
