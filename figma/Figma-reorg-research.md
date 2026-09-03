# Reorganizing Figma: how large teams structure files + a recommendation for Inito

Research for the PM request "bring order to our design files." Structured in five blocks: general recommendations, the common organization variants, the conclusion + the Inito structure, why our mess happens, and how to fix it.

---

## TL;DR

- **There is no single standard** — that's Figma's own official position. There are a few base models that teams mix and match per product. Your intuition ("each product is its own organism") matches what Figma, Uber and Spotify all say.
- **Our real problem isn't folders — it's governance:** the missing rules for who moves work from "in development" to "current," and what happens to designs that never shipped.
- **What you intuitively described (main file = source of truth + an "in development" page + shared "drafts" + a dated sync) is almost exactly Figma's official "by production state" model + named versions + a quality day.** You're already on the right track; it just needs to be formalized.
- The "new file per task" approach (like at Universe Group) is valid too, but only works with branching + strict naming — otherwise it's the same version chaos you remember.

---

## 1. General recommendations (Figma + tech giants)

### 1.1 What Figma itself recommends (in detail)

Figma's official guide ([Team, project & file organization](https://www.figma.com/best-practices/team-file-organization/)) is the most authoritative source. Its core message is explicit: **there is no one correct structure — pick the approach that fits your team, and combine them as needed. Simplicity is your friend.** A good test Figma offers: *could a new designer understand your structure at a glance, or would it require training?*

Everything in Figma nests like this:
**Organization → Workspace → Team → Project → File → Page → Frame → Branch.**
The guide breaks the advice into three layers — Teams, Projects, and Files.

**A) Structuring Teams.** Teams aren't just groups of people — Figma treats them as the main way to separate workstreams, each with its own permissions:

- **Permission types:** *Open* (anyone in the org can join — best default, encourages open design culture), *Closed* (join by request — limits who edits), *Secret* (hidden from the org — for unreleased projects).
- **Start by mirroring your product team's structure** (e.g. split by platform: web, iOS, Android — all guided by one overarching design system).
- **Give the Design System its own dedicated team**, with its own project, file and permissions. This frames it as a distinct workstream and makes it unambiguous where the source of truth lives.
- Five recognized ways to structure teams: **by lines of business** (umbrella companies / separate products — like Alphabet's Maps, Gmail, Search), **by platforms** (iOS / Android / Web — when teams or engineering are platform-specific), **by initiatives** (the "squad model" — cross-functional teams around a feature/epic; this is the model Spotify documented), **by pillars** (distinct features under one product — how Figma itself is organized), and **by scale**.
- **The "two-pizza rule" for editors.** Keep the number of *editors* per team small (think guests at a dinner table — too many and the work gets messy). But be *liberal with viewers* (there's no limit) — invite all designers, and even developers, as viewers of the design-system team so they can browse without requesting access each time.

**B) Organizing Projects.** Projects live inside teams (unlimited on paid plans). Figma highlights three approaches that work best (these are the variants detailed in §2 of this doc):

- **By product surface** — a project per logical user flow/section (Account, Profile, Products, Purchase). Files carry "just enough context." The easiest framework to start with.
- **By feature or production state** — split into *Production* (designed, signed-off, live — updated on a monthly/quarterly cadence) vs *Feature* (one file per in-progress task) vs *Archive*. Best when you need visibility into what's "live" and what isn't. Bonus: project-level permissions let you, e.g., expose only *Shipped/Production* files to developers.
- **By stage of design process** — projects as pipeline stages: *WIP → Review → Development → Shipped → Archive*. Files are dragged from one stage-project to the next. Great for stakeholder management (common in agencies).

Across any of these, Figma recommends two extra habits: keep **one project with the full end-to-end user journey** (so a VP/dev/CEO can always demo the current product), and align on a **governance procedure** — e.g. a recurring "quality day" where admins move work between states so the source of truth stays clean.

**C) Managing Files.** Three rules:

- **Size:** keep files small and nimble. Teams that migrate one giant file should create a new file or branch per feature update, then *merge that work back into the main flow* on a monthly/quarterly cadence, moving smaller files into Archive.
- **Naming:** be descriptive but follow a repeatable convention — no more `Account–Auth–v3.01–final2–copy-edits`. E.g. `Account → Auth`, or ticket-aligned `TWIG-813 – Button A/B test` (file or branch).
- **Version history:** Figma auto-saves versions; **supercharge this with "named versions"** to flag significant changes (e.g. `January 2023 — Full profile user flow`).

Sources: [Figma — Team, project & file organization](https://www.figma.com/best-practices/team-file-organization/) · [Figma Best Practices hub](https://www.figma.com/best-practices/) · [Best Practices for Branching](https://www.figma.com/scaling-design/best-practices-for-branching-in-figma/)

### 1.2 How the tech giants structure their files (concrete examples)

Short captions per product — what's actually public about their file structure. Note: only Spotify lets you open the real file; the rest is from docs and libraries.

**🇸🇪 Spotify** — Teams = product areas. Projects = state: Work in Progress → In Development → In Production. One spec file per team, one page per feature = the single source of truth. *(The model we lean on most.)*
[Ways of Working (open file)](https://www.figma.com/community/file/832911648132248625/spotify-ways-of-working) · [Article](https://spotify.design/article/how-spotify-organises-work-in-figma-to-improve-collaboration)

**🇺🇸 Uber — Base** — Public Base Gallery = instances of an internal master library, refreshed at least monthly. One private source of truth; a separate public "shop window." In Figma it's all on one page; in the web gallery everything is split apart.
[Design with Figma](https://base.uber.com/6d2425e9f/p/73bec4-design-with-figma) · [Base Gallery](https://www.figma.com/community/file/805195278314519508/base-gallery)

**🦊 GitLab — Pajamas** — The opposite of Uber: the system is split across many single-purpose files (tokens, components, icons…), each its own published library.
[File structure](https://design.gitlab.com/get-started/uik-file-structure/) · [Figma for GitLab](https://www.figma.com/community/file/865712003986807756/figma-for-gitlab)

> **Uber ↔ GitLab takeaway:** few files on fewer pages (Uber) vs many single-purpose files (GitLab). For Inito's size, Uber's concentrated approach is closer to right.

**🍎 Apple** — No public file structure, just the principle: one shared foundation, adapted per device. A new device isn't a new silo. [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/)

**🇺🇦 Ukraine**

- **Headway (Genesis)** — the most useful one for our drift problem. They bake a **status language into file/frame/layer names** (emoji prefix), visible in Figma and in live embeds, so a screen's state is readable at a glance:
  ✏️ In Design · 👁️ Ready for Review · ✅ Approved / Ready for Dev · 🌀 In Development · 🅿️ Deployed / Live · 📁 Archive · ❌ Do not use.
  On top of that: **cover pages** (file status, owners, file type) and a **status + notes element** dropped onto each frame. This is exactly the "in review / in development / live" tracking we want. [Headway — managing a design system in Figma](https://www.headway.io/blog/managing-your-design-system-in-figma)
- **Universe Group (Genesis)** *(past setup, may differ now)* — one main file + one design system, plus a separate folder where each task lives as its own file. Valid model, but a new file per task without branching + naming becomes version chaos. The gap was governance, not the idea.
- *(Grammarly's public Figma article is only about variable light/dark modes — nothing on file organization, so skip it for this topic.)*

### 1.3 Other public examples of file organization (not design systems)

Setting design systems aside — here the focus is **global file structure** (teams → projects) and **organization inside a file** (pages, sections).

**A note on reality (worth saying to the PM):** big apps almost always publish their **design system** (a component library meant to be shared), but **rarely their internal file-organization playbook** — because that's private workflow, not a product. **Spotify is the rare full open example** (you can open the file and see the team/project/page model). For everyone else, the structure shows up in **blog posts, public handbooks, or conference talks** rather than an open Figma file. Below is essentially everything useful that's public:

**Real company examples (file/project organization):**
- **Linear** — every file split into four areas: Components · Inspirations · Playground · Ready for Dev. Closest to what we want. [Figmalion](https://figmalion.com/topics/linear) · [Figma "In the File"](https://www.youtube.com/watch?v=lW2BYuyLoXA)
- **GitLab** — documents its Figma ways of working in the public handbook (text). [Handbook — How we work](https://handbook.gitlab.com/handbook/product/ux/how-we-work/)
- **Figma** — wrote up its product design team's process; structures teams "by pillars." [Inside Figma](https://www.figma.com/blog/inside-figma-the-product-design-teams-process/)
- **Hygraph** — projects per product area; file covers show status, timeline and owner in the grid. [Article](https://hygraph.com/blog/how-we-organize-our-files-and-projects-in-figma)
- **Knowde** — projects mapped to design pods; every new file starts from one baseline template. [Article](https://blog.knowde.com/design-team-and-figma-file-organization/)
- **Lee Munroe (Customer.io)** — full team → project → file → page breakdown with naming. [Article](https://leemunroe.medium.com/how-we-organize-figma-projects-and-files-on-our-design-team-adc4a6109dce)
- **Uptime** — a small product team's end-to-end setup. [Article](https://medium.com/uptime-design/how-weve-organised-our-figma-files-at-uptime-ba7bdccdd84f)

**Ready-made templates you can open and screenshot:**
- **Figma — Design system structure for teams, projects and files** (Figma's own community file). [Open ↗](https://www.figma.com/community/file/985175703891677674/design-system-structure-for-teams-projects-and-files)
- **Figma File Organization — TEMPLATE.** [Open ↗](https://www.figma.com/community/file/1118798750032023285/figma-file-organization-template)
- **Figma File Structure Template.** [Open ↗](https://www.figma.com/community/file/1484972829833724402/figma-file-structure-template)
- **General how-tos with visuals:** [LogRocket — Organizing Figma files](https://blog.logrocket.com/ux-design/organizing-figma-files-team-collaboration/) · [Paralect — Organize your Figma workspace](https://www.paralect.com/blog/post/how-to-organize-your-design-workspace-in-figma)

**General mechanics worth stealing (about file organization, recurring across all of the above):**

- **Project = state.** The single most repeated pattern: projects named by maturity (*WIP / In development / In production / Archive*), so the project list itself tells you what's live.
- **One file per feature/flow; pages = sub-flows inside it.** Keeps each file light and focused instead of one mega-file.
- **Inside a file, use a cover page + spacer/divider pages** (a page named with dashes `———`) to visually separate "shipped" from "in progress."
- **File covers as status labels.** A cover image showing owner / date / status, so the project grid is scannable at a glance (Hygraph's trick).
- **Naming tied to tickets** (`INITO-123 — Onboarding`) so files/branches map 1:1 to tasks.
- **Keep one always-current end-to-end flow** per area, for demos and onboarding new people.
- **Small group per file** (Figma's "two-pizza" rule for editors), but invite everyone else as viewers.

### 1.4 Summary — cross-cutting principles

Distilling everything above into the rules that hold regardless of which structure you pick:

- **Keep files small and nimble.** One file for the whole system eventually "explodes" — split by feature/section, and merge work back on a cadence.
- **Separate "done & in prod" from "in progress."** The source of truth must not mix with experiments.
- **Keep the Design System as its own team/library.** So it's unambiguous where the source of truth lives; invite everyone as viewers.
- **Descriptive naming + named versions.** Replace `Auth_v3_final2_copy` with a named version + date in the file's history; align file/branch names to tickets.
- **A governance ritual + an owner.** Agree who moves work between states and when (Figma's "quality day"). Without an owner, any structure goes stale.

---

## 2. The common organization variants

Six common models, all living inside Figma's nesting (Team → Project → File → Page → Branch):

| Model | How it works | + | − |
|---|---|---|---|
| **A · One file, pages** | Every section is a page in one file | Simple; everything in one place | Gets heavy; version conflicts; **doesn't scale** |
| **B · File / branch per task** | One file or branch per ticket, merged back to main | Clean main; tasks isolated; maps to tickets | Version chaos without branching + naming; **doesn't scale** with volume |
| **C · By state** | Projects = Production / Feature / Archive | Clear source of truth; what's live is obvious | Needs a sync ritual |
| **D · By stage** | Projects = WIP → Review → Dev → Shipped | Transparent status for stakeholders | Lots of manual dragging |
| **E · Modular DS** | System split across files (tokens, components, icons) | One source for components; fast files | Overkill early on |
| **F · Branching** | A branch off main per change | Safe experiments; built-in review | Paid plan; team habit |

**Conclusion: there's no winner — you always mix.** Real teams combine several: typically **state (C)** for product files + **modular DS (E)** for the system + **branching (F)** for safe iteration. The right blend depends on the product and the team.

**Different projects can use different approaches — that's also normal.** The workflow doesn't have to be built the same way everywhere; the organization model varies with a project's size and requirements.

### Inside a single project — how files are organized

Separating projects is settled. The next question is what happens *inside one project*:

- **One file per feature/flow** — not one mega-file. Named clearly or by ticket (`INITO-123 — Onboarding`).
- **A cover / index page first** in each file — file status, owner, type (Headway / Hygraph style).
- **Pages = sub-flows** inside the file (Onboarding · Zoom · Settings…).
- **Sections on a page split state** — ✅ In production vs 🚧 In development, separated by a `———` spacer.
- **Status labels on frames** — e.g. Headway's In Design → Ready for Review → Approved → In Dev → Live.
- **Branches for changes**, merged back into the file when done.

---

## 3. Conclusion + the structure for Inito

**There's no single standard — and that's fine.** The right structure is the one the team is comfortable with and can actually follow every day. Choice criteria: (1) is it easy to find the current version, (2) is it clear what's in prod, (3) will the team actually stick to it.

### What we already do
We already split work into projects — **iOS APP, BBT APP, Inito Community, Inito Redesigns, Inito old files & drafts** — and inside files we already divide by flow and use separators. So we're already following Figma's standards; a lot is in place. The issue is that it isn't unified: it grew intuitively, and designers work in different ways. So the job is mainly to **(1) split a bit more cleanly into projects** and **(2) unify what happens inside the files.**

### Proposed structure — projects, each with its own team
Everything is separated into dedicated projects from the start. Each project is a folder (you share one link to it) with only the team working on it added:

- **iOS APP** — pages by section inside: Home · Onboarding · Settings · Shop · Chart… *(status labels already in place)*
- **Design System** — its own project
- **HCG Test App**
- **Wireless device**
- **BBT device**
- **Protline + Emails**
- **Web**
- **Community** — separated from the main iOS app (treated as its own product); its project lives here
- **Inito Playground / Old files / Drafts**

No separate Research project — research and supporting files live **inside each project as pages.**

### How files look inside
Inside a file, pages are split **by flow**. Today it's a mix — some sections (e.g. Settings) sit on a single page, while big ones (e.g. Wireless device) are already split by flow because the flows are huge. **Proposal: unify — split everything by flow.**

Inside each flow page, divide into **sections by state**:
- ✅ **In production** — the live design (source of truth)
- ✏️ **In progress** — design work underway
- 👁️ **In review** — moved to review
- 🌀 **In development** — handed to dev

When a feature is **deployed**, designers move it from *In development* into *In production*. That way everyone outside design always knows where to look, and the file always shows what's shipped vs not and at what stage.

**Example:** project *Inito iOS* → page *Settings* → each sub-page is a flow (Edit Profile, Modes, Referral System…). The *Referral System* flow has an **In production** section and an **In development** section. When the new design ships, the old version moves to **Inito Playground / Old files / Drafts** (so old versions are archived somewhere), and the file keeps only the current version.

Our old single **"iOS Inito"** file (everything in one) gets deleted.

### Why this is the right call
This structure is the best option because it satisfies **all three criteria**: it's easy to find the current version, it's clear what's in prod, and it's simple enough that the team will actually follow it. It maps cleanly onto Figma's standards. We'll rebuild the relevant files and present the structure to all PMs in one meeting.

**Next:** for "In production / In development" sections to be truly meaningful, we also need to **unify designs with prod** — covered in the following blocks.

---

## 4. What causes the mess in Inito

Honestly, it's simple. We started with **one file that grew and grew**, and as it grew we kept organizing intuitively, without a clear structure. It's not that we ignored the rules — we've actually been following Figma's standards all along, and a lot is already in place. We mainly need to **split things a bit more into projects and unify what's inside the files** — because right now Anya and I work in different ways. That's the design side of the problem.

**On the product / process side.** We need a regular sync — every two weeks or once a month — where we go through the progress of tasks together. After design, work moves on to QA and development. The key thing we're missing: we should always know **what actually ships to production.** Changes are sometimes made in prod without us, and then the prod version and the design version drift apart. By the time we come back to a screen a year later, half of it has been redone — exactly what happened with Settings.

**Why prod drifts from design — onboarding is the clearest case.** The developers work **without a design system.** So when we update, say, the inputs in Settings, those updates *should* propagate everywhere across the product — but they don't. Each one needs its own separate task. As a result the whole onboarding now looks outdated, when in reality it mostly needs a **component-wise refresh** — fix the button states, the titles — and it would already be ~90% better. Without a design system that's a multi-day job; **with** a design system, replacing one component means replacing it everywhere at once.

**And it only gets harder as we grow.** We've already changed the font and the colors in Community — which is great — and we'll want to roll the same changes into the main app. But first we have to **bring all the existing design flows into order.** The zoom screen is a major one. We've been saying for a long time that there's no properly built notifications component, and what's in prod differs from the design. All of it needs to be **unified with design.** We've started with Settings and Onboarding — we need to do the same for every other screen.

So the mess really has two roots: an **unstructured file history** (which the new structure fixes) and **design ↔ prod drift** (which only gets fixed by unifying design with prod and owning the sync) — that's what the next block is about.

---

## 5. How it's solved

The good news: none of this is exotic. A handful of moves, and the drift stops.

**One source of truth.** The Production file shows only what's really live — experiments live somewhere else. Open it, and there's nothing to second-guess.

**Branch, don't copy.** Each task gets its own branch off main. The designer can experiment freely while dev keeps looking at a stable main — no more `Settings_v2_final`.

**Statuses you can see at a glance.** Every screen is labeled right in the file — in prod, in progress, in review, in dev (Headway's trick). Nobody has to ask "is this the latest?"

**Real version names, with dates.** "2026-06 — Onboarding v2 shipped" tells a story; `final2` tells you nothing.

**A handshake with dev.** If a screen changes in prod, it gets an "update Figma" ticket. It's a team agreement, not a Figma feature — but without it, the drift quietly crawls back.

**Someone owns the sync.** One person runs the prod ↔ Figma check every sprint. A system with no owner slowly rots.

### How we roll it out
- **First — the skeleton.** Set up the projects we agreed on, plus a file template with the "in prod / in dev" sections.
- **Then — the audit.** Walk every screen against real prod: current → Production, drafts → Playground, dead → Archive.
- **Then — the rules.** Lock in naming, dated versions, and the dev handshake in one short agreement everyone signs off on.
- **Forever after — the ritual.** Once a sprint, sync prod ↔ Figma. One owner keeps it honest.

### Worth deciding together first
- Do all devices get their own files, or a shared foundation + device pages? (Partly a file-performance call.)
- Will dev actually buy into the "changed in prod → Figma ticket" handshake? Without that, no structure saves us.
- Projects vs pages for splitting current / in-dev — depends on how much permission control we want.

---

## Sources

**Figma (official):**
[Team, project & file organization](https://www.figma.com/best-practices/team-file-organization/) ·
[Best Practices hub](https://www.figma.com/best-practices/) ·
[Best Practices for Branching](https://www.figma.com/scaling-design/best-practices-for-branching-in-figma/) ·
[Guide to developer handoff](https://www.figma.com/best-practices/guide-to-developer-handoff/) ·
[Optimize files for dev handoff](https://help.figma.com/hc/en-us/articles/360040521453-Optimize-design-files-for-developer-handoff)

**Tech giants:**
[Uber Base — Design with Figma](https://base.uber.com/6d2425e9f/p/73bec4-design-with-figma) ·
[Base Gallery](https://www.figma.com/community/file/805195278314519508/base-gallery) ·
[Spotify — Ways of Working](https://www.figma.com/community/file/832911648132248625/spotify-ways-of-working) ·
[Spotify — How they organise work in Figma](https://spotify.design/article/how-spotify-organises-work-in-figma-to-improve-collaboration) ·
[GitLab Pajamas — File structure](https://design.gitlab.com/get-started/uik-file-structure/) ·
[Figma for GitLab](https://www.figma.com/community/file/865712003986807756/figma-for-gitlab) ·
[Apple HIG](https://developer.apple.com/design/human-interface-guidelines/)

**Ukraine:**
[Headway — Design system in Figma](https://www.headway.io/blog/managing-your-design-system-in-figma) ·
[Grammarly — Figma variables](https://www.grammarly.com/blog/engineering/demystifying-figma/) ·
[Universe Group (Genesis) — profile](https://happymonday.ua/en/company/universe)

**Deeper reading:**
[Structuring & Splitting Large-Scale Figma Design Systems (2025)](https://medium.com/@claus.nisslmueller/structuring-and-splitting-large-scale-figma-design-systems-a-2025-master-guide-for-scalable-c1c3a7dabb0e) ·
[LogRocket — Organizing Figma files](https://blog.logrocket.com/ux-design/organizing-figma-files-team-collaboration/) ·
[DECODE — Figma branching](https://decode.agency/article/figma-branching/) ·
[Smashing — Better handoff file](https://www.smashingmagazine.com/2023/05/designing-better-design-handoff-file-figma/) ·
[zeroheight — Organize Figma files for your design system](https://help.zeroheight.com/hc/en-us/articles/36473914948379-How-to-organize-your-Figma-files-for-your-design-system)
