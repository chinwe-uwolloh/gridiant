import { SectionFrame } from "@/components/primitives/SectionFrame";

export function FleetMapSurface() {
  return (
    <SectionFrame title="Neighborhood and fleet overview">
      <div className="h-[420px] border border-white/15 rounded-xl p-4">
        <div className="blueprint-grid flex h-full items-end justify-between border border-white/10 rounded-xl p-4">
          <div className="space-y-2 text-xs text-slateAsh">
            <p className="font-mono uppercase tracking-[0.14em] text-iceMist">Network status</p>
            <p>72 locations coordinated</p>
            <p>Peak-hour demand reduction in progress</p>
            <p>Optimization checks running in real time</p>
          </div>
          <div className="w-[220px] border border-white/15 bg-[#0b141d]/80 rounded-xl p-3 text-xs text-slateAsh">
            <p className="font-mono uppercase tracking-[0.14em] text-emberAccent">Live impact</p>
            <p className="mt-2">Aggregate peak reduction: 18.9%</p>
            <p>Dispatch reliability: 99.93%</p>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
