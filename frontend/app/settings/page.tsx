import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/primitives/Card";
import { Button } from "@/components/primitives/Button";

export default function SettingsPage() {
  return (
    <AppShell title="Settings" subtitle="Update your profile, notifications, and account preferences.">
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-5">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <p className="mt-2 text-sm text-slateAsh">Get alerts when plans change or savings opportunities appear.</p>
          <div className="mt-4"><Button variant="secondary">Notification settings</Button></div>
        </Card>
        <Card className="p-5">
          <h2 className="text-lg font-semibold">Account</h2>
          <p className="mt-2 text-sm text-slateAsh">Manage profile details, billing, and linked integrations.</p>
          <div className="mt-4"><Button variant="secondary">Account settings</Button></div>
        </Card>
      </div>
    </AppShell>
  );
}
