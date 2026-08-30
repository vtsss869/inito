import { IosStatusChrome } from "../device/IosStatusChrome.jsx";
import { HomeIndicator } from "../components/ds/StatusBar.jsx";
import { Navbar, NAV_ICONS } from "../components/ds/Navbar.jsx";
import { Calendar } from "../components/ds/Calendar.jsx";
import { DayStatusCard } from "../components/ds/DayStatusCard.jsx";
import {
  HomeNotificationCard,
} from "../components/ds/HomeNotificationCard.jsx";
import { Subtitle } from "../components/ds/Subtitle.jsx";
import { TabBar } from "../components/ds/TabBar.jsx";
import pictogramNotifications from "../assets/icons/pictogram-notifications.svg";
import pictogramTestResults from "../assets/icons/pictogram-test-results.svg";

const WEEK = [
  { dow: "MO", day: "28", muted: true, sex: true },
  { dow: "TU", day: "29", muted: true },
  { dow: "WE", day: "30", muted: true },
  { dow: "TH", day: "1", sex: true },
  { dow: "FR", day: "2", chosen: true },
  { dow: "SA", day: "3" },
  { dow: "SU", day: "4" },
];

export function HomeScreen() {
  return (
    <div className="home">
      <IosStatusChrome />
      <Navbar
        title="Today"
        titleSize="h4"
        rightIcons={[
          { src: NAV_ICONS.device, label: "Device" },
          { src: NAV_ICONS.drop, label: "Log period" },
        ]}
      />
      <Calendar days={WEEK} />
      <div className="home__scroll">
        <DayStatusCard pill="Cycle day 20" title="High Fertility" state="high-fertility" />
        <HomeNotificationCard content="daily-logs" />
        <Subtitle icon={pictogramNotifications}>Notifications</Subtitle>
        <HomeNotificationCard content="message" />
        <Subtitle icon={pictogramTestResults}>Test Results</Subtitle>
        <HomeNotificationCard content="hormones" />
      </div>
      <TabBar active="home" />
      <HomeIndicator />
    </div>
  );
}
