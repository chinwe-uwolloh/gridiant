import { SectionFrame } from "@/components/primitives/SectionFrame";

export function DigitalTwinPanel() {
  return (
    <SectionFrame title="Home model">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="border border-white/15 rounded-xl p-4">Room-by-room comfort forecast</div>
        <div className="border border-white/15 rounded-xl p-4">Flexible usage windows based on your routine</div>
        <div className="border border-white/15 rounded-xl p-4">Scenario previews for outages and heat waves</div>
      </div>
      <div className="mt-3 border border-white/15 rounded-xl p-4 text-sm text-slateAsh">
        Gridiant checks fragile timing conflicts in the background before plans are sent to your devices.
      </div>
    </SectionFrame>
  );
}
