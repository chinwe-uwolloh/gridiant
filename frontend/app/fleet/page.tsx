import { AppShell } from "@/components/layout/AppShell";
import { FleetMapSurface } from "@/components/fleet/FleetMapSurface";

export default function FleetPage() {
  return <AppShell title="Network view" subtitle="Coordinate multiple homes and assets from one calm view."><FleetMapSurface /></AppShell>;
}
