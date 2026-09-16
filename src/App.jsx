import { useState } from "react";
import { HomeScreen } from "./screens/HomeScreen.jsx";
import { DailyLogsScreen } from "./screens/DailyLogsScreen.jsx";
import { getDefaultDailyLogsLayout } from "./components/ds/dailyLogsData.js";

export default function App() {
  const [screen, setScreen] = useState("home");
  /** Persisted only after Save on Daily Logs. Close (X) discards draft. */
  const [savedDailyLogs, setSavedDailyLogs] = useState(null);
  /** Visible/hidden categories from Edit Daily logs (✓). Tap to toggle; no drag reorder. */
  const [dailyLogsLayout, setDailyLogsLayout] = useState(getDefaultDailyLogsLayout);
  /** Section id to center-scroll when opening from a Home log icon. */
  const [focusSectionId, setFocusSectionId] = useState(null);

  const openDailyLogs = (sectionId = null) => {
    setFocusSectionId(sectionId || null);
    setScreen("daily-logs");
  };

  const closeDailyLogs = () => {
    setFocusSectionId(null);
    setScreen("home");
  };

  return (
    <div className="app-stage">
      <div className="phone">
        {screen === "daily-logs" ? (
          <DailyLogsScreen
            key={`daily-logs-${focusSectionId || "top"}`}
            initialLogs={savedDailyLogs}
            focusSectionId={focusSectionId}
            layout={dailyLogsLayout}
            onLayoutChange={setDailyLogsLayout}
            onClose={closeDailyLogs}
            onSave={(logs) => {
              setSavedDailyLogs(logs);
              closeDailyLogs();
            }}
          />
        ) : (
          <HomeScreen
            savedDailyLogs={savedDailyLogs}
            onOpenDailyLogs={openDailyLogs}
          />
        )}
      </div>
    </div>
  );
}
