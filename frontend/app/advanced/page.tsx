import { AppShell } from "@/components/layout/AppShell";
import { QuantumPanel } from "@/components/quantum/QuantumPanel";
import { Card } from "@/components/primitives/Card";

export default function AdvancedPage() {
  return (
    <AppShell title="Optimization Engine" subtitle="Advanced controls and deeper optimization insights.">
      <Card className="p-5">
        <p className="text-sm text-slateAsh">
          This section is for advanced tuning and transparent insight into how complex optimization decisions are solved.
        </p>
      </Card>
      <QuantumPanel />
    </AppShell>
  );
}
