# Inito — Product Overview

Source: Figma file "INITO | IOS – Home" (fileKey `OymPscs7lt9KeT6o7upwtY`), nodes `325:82113`, `128:105483`, `128:152148`, `132:668916`, `341:386011`, `132:668917`. Findings below are based on direct visual inspection of screenshots exported from these nodes (plus light metadata inspection to navigate each node's substructure — these are large "flow" canvases, not single screens).

## What Inito is

Inito is an iOS fertility-tracking and hormone-monitoring app built around an at-home hormone test kit (test strips read by a companion device — "Strips tracker"/reader is referenced in the design legend, and an "InTemp" smart basal-body-thermometer integration is referenced in daily logging). The core loop is: the app tells the user which cycle day they're on and what their fertility status is *today*, tells them whether they need to take a hormone test today, and asks them to log a broad set of daily health data (symptoms, BBT, medications, sex, mood, etc.). Over a cycle, it uses the logged hormone values (E3G, LH, PdG, FSH, hCG) to detect the LH surge, confirm ovulation, and adapt the next testing schedule.

The product also extends into two adjacent modes: **trying-to-conceive (TTC)** tracking (the default) and **pregnancy tracking** (triggered once a positive pregnancy test is logged), each with a differently-tailored home card and daily-log field set. It also has a lightweight consumables/inventory layer (test-strip stock tracking tied to a shop) and an in-app medication reminder/adherence system, suggesting the product supports users going through fertility treatment (e.g., taking prescribed fertility medications on a schedule) in addition to natural cycle tracking.

## Core screens/flows found

### 1. Home — Day Status Card (all states) — node `325:82113`, section "Main card states" (`246:57921`)
This section is a state-matrix for a single component: the big gradient card at the top of the Home screen that tells the user their status *today*. Observed states include:
- **Fertility phase, color-coded:** Low Fertility, High Fertility (green), Peak Fertility (purple) — each labeled "Cycle day N" + phase name, each with a distinct notification message below (e.g. Peak Fertility: "Your chances of conception are the highest today. Don't miss the opportunity to have sex."; High Fertility: "...we're looking for signs of your LH surge to help identify your Peak Fertility...").
- **Testing status:** "Take a Test Today", "Test Required Day" (teal), "Test not required", "Missed test", "Optional test day / Future", "Test required day / Future" — plus "/Past" variants of most states (so the card also renders correctly for days already elapsed in the calendar view).
- **Period:** "Period day N" (red/pink), with Future variants ("this cycle" / "next cycle").
- **Pregnancy:** "Preg" states — once pregnant, the card becomes a magenta "First trimester, N weeks" card with a due-date countdown ("32 weeks and 1 day left / Due 10 Jun") and a progress bar, plus an "Edit details" action.
- **PdG rising / "Waiting for PdG rise"** states — mid-luteal-phase states used to communicate that the app is watching for a progesterone (PdG) rise to confirm ovulation happened.

Every card sits above a horizontal week calendar strip (Mon–Sun) with small icon markers per day (heart = had sex, colored dot = test taken/required/missed), and below it a "Fill in your daily logs" progress row ("0/15 logged" in TTC mode, "0/12 logged" in pregnancy mode) with quick-log icon shortcuts (Preg test, Symptoms, Period, BBT, Meds, ...). Below that: a Notifications feed and (in fertile-phase states) a "Test Results / Hormones" card showing the day's logged hormone values.

### 2. Daily Logs — node `128:105483`
The main data-entry surface of the app. A single scrollable form (opened as a modal, "Daily logs" with an "X" close and a cycle-day/DPO header) broken into sections a user can log per day:
- Medications (add/take/skip, tied to the medication tracker below)
- Period and intensity (Light/Medium/Heavy/Very Heavy)
- Sex (Didn't have sex / Protected / Unprotected) and Orgasm
- Sex Drive (High/Neutral/Low)
- BBT — basal body temperature, with a "Log with InTemp" device-sync button as well as manual entry
- Mood (multi-select tags: Calm, Happy, Energetic, Sad, Irritated, Anxious, Obsessive thoughts, Low energy, Apathetic, Confused, Very self-critical, Mood swings, Unable to focus)
- Symptoms (large tag list: Cramps, Tender breasts, Headache, Acne, Hair loss, Excess hair, Backache, Fatigue, Cravings, Insomnia, Nausea, Bloating, Constipation, Diarrhea, Vaginal itching/burning/dryness, etc.)
- Abdominal pain, Vaginal Discharge, Other (Travel, Stress, Injury, Meditation, Journaling, Angel exercise, Breathing exercise)
- Physical Activity (Yoga, Gym, Aerobics & Dancing, Swimming, Team Sports, Running, Cycling, Walking)
- Follicle Tracking (follicle size, endometrial thickness, ovary side, "Fluid in Pod", "LUF Detected" — luteinized unruptured follicle)
- Blood Test Values (manual entry of clinical labs: Progesterone/P4, Estradiol, AMH, FSH, LH, TSH, PRL, hCG — each with a numeric keypad entry screen and unit)
- Pregnancy Test result (Did Not Test / Positive / Negative / Faint Positive / Invalid Test)
- Insemination (for users tracking IUI/IVF-adjacent timing)
- "Write your journal" free-text field
- A "Save" button at the bottom

Pregnancy mode swaps in different fields (Appetite, Swelling, Activity in place of BBT-forward TTC fields) — same card layout, different content, confirming the app re-purposes the same daily-log surface across TTC and pregnancy modes. There are Empty vs. Filled visual states for every field group.

### 3. Medication management — node `128:152148`
A full medication-tracking sub-module, reached from the Medications section of Daily Logs:
- **Add Medication wizard:** search/select a medication (with "possible match" suggestions, ingredient search, "add custom ingredient" for unlisted meds), choose form (Tablet, Capsule, Liquid, Drops, Gel, Injection, Cream, Foam, Oil, Ointment, Powder, Spray, Suppository, Topical, Device, Patch, Inhaler), choose strength (numeric keypad with unit picker: mg/mcg/g/mL), and set dose/frequency and schedule.
- **History of Intake:** a per-medication calendar view (month grid) with colored day markers for Taken / Skipped / Not logged, plus an "Intake summary" count and a scrollable log list.
- **Medication reminders:** iOS lock-screen push notifications ("Medication Reminder — Time to take and log your medication", scheduled time shown) with inline actions — Snooze / Skip / Taken — and an expanded notification offering "Log All as Taken", "Log All as Skipped", "Remind me in 10 minutes" for users on multiple concurrent medications. In-app equivalents mirror this (Medication card list with Snooze/Skip/Taken buttons and a "Done" confirmation).

This is a meaningfully deep feature — closer to a medication-adherence tool (as used in IVF/fertility-drug protocols) than a simple "log I took a vitamin" checkbox.

### 4. Period & pregnancy logging, and predictive push notifications — node `132:668916`
- **Log period from the Home card:** tapping "Log period" on an "Expected period day" card opens a "Select period dates" calendar (multi-select, shows prior period history and predicted upcoming dates) with a "Next" confirmation.
- **Log pregnancy from the Home card:** an adjacent "Log pregnancy" action walks the user through "When did you take your first positive pregnancy test?" (date picker) into a "Pregnancy term" congratulations screen summarizing Start of last period, Positive test day, Expected due date, and Gestational age (all editable) — this is the moment the app formally switches the account into pregnancy mode.
- **Predictive push notifications:** a 7-day sequence of lock-screen notifications around the expected period date (Day −3 through Day +3), each with an escalating message nudging the user to test and log a result if their period is late — e.g. "Time to check in," "Any signs yet?," "So far, so good!," "Looking good so far!," "A little late? Maybe a good sign?," "This could be it!," "Set yourself up for success" — clearly built to catch a possible pregnancy right around a missed period.

### 5. Home-card feedback & app-rating flows — node `341:386011`
- **Per-notification feedback:** small thumbs-up/down controls on Home-card notification items ("Do you like the info on the card?"), expanding into a reason checklist (Incorrect information / Not useful / It's offensive / Other, with free text) and a Submit button — used to let users flag or reinforce specific in-app guidance messages (visible on the Dislike/Like/Dismiss trio under notification cards).
- **App-store style rating & feedback:** a "Rate your experience" star-rating prompt, a longer feedback form with quick-select improvement tags (More prediction accuracy, Lesser test errors, Personalized guidance, Better customer support, More result explanation) plus free text, a "Thank you!" confirmation, and — notably — a cross-promotion into an **Amazon review request** card ("Rate Your Experience on Amazon") when the in-app sentiment is high, implying the physical test-strip/reader hardware is sold as a listed product on Amazon.
- Lock-screen push notifications also solicit feedback directly ("Your Feedback Matters").

### 6. Home dashboard, hormone results & strip stock — node `132:668917`
- **Home** (`23:53045`): shows the full assembled Home screen — week calendar strip, Day Status Card, "Fill in your daily logs" row, Notifications feed, and a **Hormones / Test Results card** listing that day's logged hormone readings by name (labels matching E3G/LH/PdG/FSH conventions from the design system) with a timestamp (e.g. "2:45 PM") and numeric values — this is the at-a-glance readout of the day's test result. Bottom tab bar confirmed here: **Home / Chart / Test / Shop / Profile**, with "Test" as the elevated center action.
- **"My Strips Stock"** (`23:53488`, "Your strips stockage"): a manual inventory screen where the user tells the app how many test strips they currently have (stepper or numeric keypad), and the app returns a status message — green "You're stocked for now," amber "Delivery can take a few days, order now," or red "You're almost out of strips, order now and select Express Delivery" — plus a "Go to shop" CTA, directly linking strip inventory to commerce.
- **"Required Test Days"** (`412:240912`): an info modal explaining the app's per-cycle adaptive testing schedule via a horizontal "Cycle start → Cycle end" timeline with a "Today" marker and three explained phases: **Reference tests** (cycle days 5–9, sets the user's hormone baseline for more accurate predictions), **Test allotted phase** (tests scheduled across the fertile window to detect the LH surge and confirm ovulation), and **Optional test days** (not required for predictions, but let the user collect extra data / track hormone trends). A disclaimer notes the actual required-test count varies by user.

## Navigation / IA observations

- **Bottom tab bar (5 tabs):** Home, Chart, Test (center, visually emphasized as a filled circular button — the primary daily action), Shop, Profile.
- **Home screen structure (top to bottom):** week calendar strip → big gradient Day Status Card (fertility phase / test status / period / pregnancy) → "Fill in your daily logs" progress + shortcuts → Notifications feed (contextual guidance, alerts like low strip stock, feedback prompts) → Test Results / Hormones card.
- **Daily Logs** is a modal/sheet reached from the Home screen (via the "Fill in your daily logs" row or its quick-log icons), not a separate tab — it's the universal data-entry surface for the day.
- A **Shop** tab exists, and strip-stock alerts, "Test strips alert" notifications, and low-stock states all route to it — commerce (buying more test strips) is a first-class, integrated flow, not an afterthought.
- **Chart** tab was not opened directly in this pass (no node given for it) — likely where hormone trend lines over time live, given the "track hormone trends" language in the Required Test Days modal and the design system's hormone color tokens (E3G/PdG/LH/FSH/hCG).

## Domain / health-tracking observations

- **Hormones tracked via at-home test:** E3G (estrone-3-glucuronide, an estrogen metabolite), LH (luteinizing hormone), PdG (pregnanediol glucuronide, a progesterone metabolite), FSH, and hCG — consistent with a multi-hormone urine test strip system (this matches the hormone color tokens noted previously in the design-system pass).
- **Manually-entered clinical blood values** (separate from the at-home strip test) are also supported: Progesterone (P4), Estradiol, AMH, FSH, LH, TSH, PRL, hCG — for users who get bloodwork done at a clinic and want it in the same timeline.
- **Day-status logic** is rich and explicit: the app distinguishes Low/High/Peak Fertility, several flavors of "test required/optional/missed/not required" (each with Past/Future variants), a "waiting for PdG rise" post-ovulation state, Period days (current + predicted future, this-cycle vs next-cycle), and Pregnancy (first trimester week count + due date). This state machine is the spine of the whole Home experience.
- **Adaptive testing schedule:** rather than a fixed daily test, the app schedules "Reference tests" early in the cycle (baseline), a denser "Test allotted phase" across the predicted fertile window (to catch the LH surge), and optional extra test days — visualized as a single horizontal cycle timeline.
- **Ovulation confirmation:** uses follicle tracking data (follicle size, endometrial thickness, which ovary, fluid in pod, LUF detected) alongside hormone rises — suggesting the app is designed to work alongside clinical ultrasound monitoring, not just hormone strips alone.
- **Device integrations referenced:** "InTemp" (smart BBT thermometer, "logs your temperature automatically") for basal body temperature, and a hardware strip-reader ("Strips tracker" device) implied throughout, plus a possible Amazon retail listing for the hardware kit.
- **Two operating modes** (TTC vs. Pregnancy) reshape both the Home card and the Daily Logs field set — this bifurcation is a core piece of the app's information architecture, not a minor toggle.

## Open questions / not covered by these 6 nodes

- The **Chart** tab (hormone trend visualization over time) was not in scope for these node IDs and wasn't seen directly — only inferred from copy elsewhere.
- The **Shop** tab's actual product/purchase flow (beyond the "Go to shop" strip-restock CTA) wasn't opened.
- **Onboarding** (account setup, initial cycle-length input, connecting the hardware reader/InTemp device) wasn't included in these nodes.
- **Settings/Profile** screen content wasn't opened — only referenced via the tab bar icon and an "Edit details" link on the pregnancy card.
- The exact meaning of some design-legend labels seen only in passing (e.g. "NG", "OG & No device" on the `325:82113` Header/legend section) is unclear — these read as internal design annotations rather than in-app copy, so they were not treated as product facts.
- The "Insemination" daily-log field suggests IUI support, but no dedicated insemination-tracking flow/screen was in scope here to confirm scope or depth.
