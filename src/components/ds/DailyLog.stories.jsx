import {
  DailyLog,
  DailyLogRow,
  DAILY_LOG_CATEGORIES,
  DAILY_LOG_CATEGORY_IDS,
  HOME_DAILY_LOGS,
} from "./DailyLog.jsx";

const meta = {
  title: "DS/Data / Analytics/DailyLog",
  component: DailyLog,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    category: {
      control: "select",
      options: DAILY_LOG_CATEGORY_IDS,
    },
    state: {
      control: "select",
      options: ["default", "selected", "filled"],
    },
  },
};

export default meta;

function SectionLabel({ children }) {
  return (
    <p
      style={{
        margin: "0 0 12px",
        fontFamily: "Montserrat, sans-serif",
        fontSize: 12,
        fontWeight: 600,
        color: "#7F8598",
        letterSpacing: "0.1px",
      }}
    >
      {children}
    </p>
  );
}

function RowShell({ children, width }) {
  return (
    <div
      style={{
        width: width || "100%",
        maxWidth: width || undefined,
        background: "#fff",
        borderRadius: 28,
        border: "1px solid #EAECED",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

/** Per-category stories — IDs must stay stable (e.g. ds-dailylog--preg-test). */
export const PregTest = {
  name: "Preg Test",
  args: { category: "preg-test", state: "default" },
};

export const Symptoms = {
  name: "Symptoms",
  args: { category: "symptoms", state: "default" },
};

export const Period = {
  name: "Period",
  args: { category: "periods", label: "Period", state: "default" },
};

export const BBT = {
  name: "BBT",
  args: { category: "bbt", state: "default" },
};

export const Meds = {
  name: "Meds",
  args: { category: "meds", state: "default" },
};

export const Moods = {
  name: "Moods",
  args: { category: "moods", state: "default" },
};

export const Tests = {
  name: "Tests",
  args: { category: "tests", state: "default" },
};

export const Activities = {
  name: "Activities",
  args: { category: "activities", state: "default" },
};

export const Sex = {
  name: "Sex",
  args: { category: "sex", state: "default" },
};

export const Diary = {
  name: "Diary",
  args: { category: "diary", state: "default" },
};

export const Appetite = {
  name: "Appetite",
  args: { category: "appetite", state: "default" },
};

export const AllCategories = {
  name: "All Categories",
  render: () => (
    <div style={{ display: "flex", gap: 4, overflowX: "auto", padding: 8, background: "#fff" }}>
      {Object.values(DAILY_LOG_CATEGORIES).map((c) => (
        <DailyLog key={c.id} category={c.id} />
      ))}
    </div>
  ),
};

export const Overview = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
        padding: 24,
        background: "#F6F6F6",
      }}
    >
      <section>
        <SectionLabel>
          All categories — default (70× item, 44 button, 32 icon slot)
        </SectionLabel>
        <RowShell>
          <div style={{ display: "flex", gap: 4, padding: "8px 8px 8px", overflowX: "auto" }}>
            {DAILY_LOG_CATEGORY_IDS.map((id) => (
              <DailyLog key={id} category={id} state="default" />
            ))}
          </div>
        </RowShell>
      </section>

      <section>
        <SectionLabel>States — Meds (default / selected / filled)</SectionLabel>
        <div style={{ display: "flex", gap: 16, padding: 16, background: "#fff", borderRadius: 16 }}>
          <DailyLog category="meds" state="default" />
          <DailyLog category="meds" state="selected" />
          <DailyLog category="meds" state="filled" />
        </div>
      </section>

      <section>
        <SectionLabel>Filled — category soft backgrounds</SectionLabel>
        <RowShell>
          <div style={{ display: "flex", gap: 4, padding: 8, overflowX: "auto" }}>
            {DAILY_LOG_CATEGORY_IDS.map((id) => (
              <DailyLog key={id} category={id} state="filled" />
            ))}
          </div>
        </RowShell>
      </section>

      <section>
        <SectionLabel>
          Home HF row — 342 card width, horizontal scroll (partial Meds at edge)
        </SectionLabel>
        <RowShell width={342}>
          <div style={{ paddingTop: 8 }}>
            <p
              style={{
                margin: "0 16px 4px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: "#112D35",
              }}
            >
              Fill in your daily logs
            </p>
            <p
              style={{
                margin: "0 16px 8px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: "#7F8598",
              }}
            >
              0/15 logged
            </p>
            <DailyLogRow items={HOME_DAILY_LOGS} />
          </div>
        </RowShell>
      </section>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  args: {
    category: "preg-test",
    state: "default",
  },
};

export const States = {
  name: "Variants/States",
  render: () => (
    <div style={{ display: "flex", gap: 24, padding: 16, background: "#fff" }}>
      <DailyLog category="bbt" state="default" />
      <DailyLog category="bbt" state="selected" />
      <DailyLog category="bbt" state="filled" />
    </div>
  ),
};

export const HomeRow = {
  name: "Variants/Home row scroll",
  render: () => (
    <div style={{ width: 342, background: "#fff", border: "1px solid #EAECED", borderRadius: 28 }}>
      <DailyLogRow />
    </div>
  ),
};
