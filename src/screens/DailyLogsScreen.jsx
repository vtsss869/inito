import { IosStatusChrome } from "../device/IosStatusChrome.jsx";
import { HomeIndicator } from "../components/ds/StatusBar.jsx";
import { DailyLogsScreen as DailyLogsContent } from "../components/ds/DailyLogsScreen.jsx";

/**
 * Prototype Daily Logs page.
 * Close (X) → discard draft, return Home.
 * Save → persist logs (+ layout already saved from Edit screen).
 * Settings → Edit Daily logs (tap category Visible ↔ Hidden; no drag).
 * `focusSectionId` — center-scroll from Home log icon.
 */
export function DailyLogsScreen({
  onClose,
  onSave,
  initialLogs = null,
  focusSectionId = null,
  layout = null,
  onLayoutChange,
  variant = "ttc-empty",
}) {
  return (
    <div className="daily-logs-screen-page">
      <IosStatusChrome />
      <DailyLogsContent
        onClose={onClose}
        onSave={onSave}
        initialLogs={initialLogs}
        focusSectionId={focusSectionId}
        layout={layout}
        onLayoutChange={onLayoutChange}
        variant={variant}
      />
      <HomeIndicator />
    </div>
  );
}
