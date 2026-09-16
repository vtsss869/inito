import { useState } from "react";
import { IosStatusChrome } from "../device/IosStatusChrome.jsx";
import { HomeIndicator } from "../components/ds/StatusBar.jsx";
import { Navbar, NAV_ICONS } from "../components/ds/Navbar.jsx";
import { Calendar } from "../components/ds/Calendar.jsx";
import { DayStatusCard } from "../components/ds/DayStatusCard.jsx";
import {
  HomeNotificationCard,
  TEST_NOT_REQUIRED_MESSAGE,
} from "../components/ds/HomeNotificationCard.jsx";
import { Subtitle } from "../components/ds/Subtitle.jsx";
import { TabBar } from "../components/ds/TabBar.jsx";
import pictogramNotifications from "../assets/icons/system/sys-calendar-pictograms-state-new.svg";
import pictogramTestResults from "../assets/icons/system/sys-calendar-pictograms-state-default-type-test-results.svg";

const WEEK = [
  { dow: "MO", day: "28", muted: true, sex: true },
  { dow: "TU", day: "29", muted: true },
  { dow: "WE", day: "30", muted: true },
  { dow: "TH", day: "1", sex: true },
  { dow: "FR", day: "2", chosen: true },
  { dow: "SA", day: "3" },
  { dow: "SU", day: "4" },
];

export function HomeScreen({ onOpenDailyLogs, savedDailyLogs = null }) {
  const [selectedDay, setSelectedDay] = useState("2");
  const isYesterday = selectedDay === "1";

  const days = WEEK.map((d) => ({
    ...d,
    chosen: d.day === "2",
    selected: isYesterday && d.day === "1",
    stroke: !(isYesterday && d.day === "2"),
    selectable: d.day === "1" || d.day === "2",
  }));

  return (
    <div className="home">
      <IosStatusChrome />
      <Navbar
        title={isYesterday ? "Yesterday" : "Today"}
        titleSize="h4"
        todayChip={isYesterday}
        onTodayClick={() => setSelectedDay("2")}
        rightIcons={[
          { src: NAV_ICONS.device, label: "Device" },
          { src: NAV_ICONS.drop, label: "Log period" },
        ]}
      />
      <Calendar days={days} onDaySelect={(day) => setSelectedDay(day)} />
      <div className="home__scroll">
        {isYesterday ? (
          <DayStatusCard
            state="test-not-required"
            chips={["Cycle day 19"]}
            headline="Test not required"
          />
        ) : (
          <DayStatusCard
            state="high-fertility"
            chips={["Cycle day 20"]}
            headline="High Fertility"
          />
        )}
        <HomeNotificationCard
          content="daily-logs"
          savedDailyLogs={savedDailyLogs}
          onOpenDailyLogs={onOpenDailyLogs}
        />
        <Subtitle icon={pictogramNotifications}>Notifications</Subtitle>
        {isYesterday ? (
          <HomeNotificationCard content="message" {...TEST_NOT_REQUIRED_MESSAGE} />
        ) : (
          <HomeNotificationCard content="message" />
        )}
        {!isYesterday ? (
          <>
            <Subtitle icon={pictogramTestResults}>Test Results</Subtitle>
            <HomeNotificationCard content="hormones" />
          </>
        ) : null}
      </div>
      <TabBar active="home" />
      <HomeIndicator />
    </div>
  );
}
