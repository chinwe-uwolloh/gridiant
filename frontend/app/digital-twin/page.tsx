import { AppShell } from "@/components/layout/AppShell";
import { DigitalTwinPanel } from "@/components/digitalTwin/DigitalTwinPanel";

export default function DigitalTwinPage() {
  return <AppShell title="Insights model" subtitle="See how your home responds to weather, usage, and preferences."><DigitalTwinPanel /></AppShell>;
}
