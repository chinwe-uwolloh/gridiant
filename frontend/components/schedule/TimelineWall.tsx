import { SectionFrame } from "@/components/primitives/SectionFrame";
import { PriceContourChart } from "@/components/charts/PriceContourChart";

const curve = [0.24, 0.21, 0.19, 0.22, 0.27, 0.35, 0.41, 0.46, 0.44, 0.38, 0.34, 0.29, 0.26, 0.25, 0.28, 0.31, 0.39, 0.52, 0.57, 0.54, 0.43, 0.33, 0.29, 0.25];

export function TimelineWall() {
  return (
    <SectionFrame title="Tomorrow's smart plan">
      <PriceContourChart data={curve} />
      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="font-mono uppercase tracking-[0.14em] text-slateAsh">Optimization running in background</span>
        <span className="text-emberAccent">Projected daily savings: 23.4%</span>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 text-xs md:grid-cols-4">
        <div className="border border-white/15 rounded-xl p-3">Battery charging is scheduled for lower-cost hours</div>
        <div className="border border-white/15 rounded-xl p-3">EV charging is set to finish before your deadline</div>
        <div className="border border-white/15 rounded-xl p-3">High-load appliances are spread to avoid peak spikes</div>
        <div className="border border-white/15 rounded-xl p-3">Comfort stays in your preferred temperature range</div>
      </div>
    </SectionFrame>
  );
}
