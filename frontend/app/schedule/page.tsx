import { AppShell } from "@/components/layout/AppShell";
import { TimelineWall } from "@/components/schedule/TimelineWall";

export default function SchedulePage() {
  return (
    <AppShell title="Schedule" subtitle="Your next 24 hours, organized into simple automation windows.">
      <TimelineWall />
    </AppShell>
  );
}
