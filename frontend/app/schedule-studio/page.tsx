import { AppShell } from "@/components/layout/AppShell";
import { TimelineWall } from "@/components/schedule/TimelineWall";

export default function ScheduleStudioPage() {
  return <AppShell title="Schedule" subtitle="Smart automation windows for the next 24 hours."><TimelineWall /></AppShell>;
}
