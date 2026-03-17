import { SectionFrame } from "@/components/primitives/SectionFrame";

export function QuantumPanel() {
  return (
    <SectionFrame title="Advanced optimization details">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="border border-white/15 rounded-xl p-4 text-sm">Optimization complexity: <span className="text-emberAccent">0.78</span></div>
        <div className="border border-white/15 rounded-xl p-4 text-sm">Cost improvement after advanced optimization: <span className="text-emberAccent">4.2%</span></div>
        <div className="border border-white/15 rounded-xl p-4 text-sm">Most difficult decision: EV + battery timing overlap</div>
        <div className="border border-white/15 rounded-xl p-4 text-sm">Q# routine completed successfully with fallback protection</div>
        <div className="border border-white/15 rounded-xl p-4 text-sm">Future scale estimate is available for upcoming hardware generations</div>
        <div className="border border-white/15 rounded-xl p-4 text-sm">Result quality improved while keeping comfort targets stable</div>
      </div>
    </SectionFrame>
  );
}
