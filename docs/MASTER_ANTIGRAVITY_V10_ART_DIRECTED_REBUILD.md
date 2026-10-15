# JKBF V10 — ART-DIRECTED TOTAL PUBLIC UI REBUILD
## FIGHT NIGHT × JOGJA CULTURE

**EXECUTION MODE: IMPLEMENT IN THE EXISTING NEXT.JS APPLICATION. THIS IS NOT A CONCEPT, MOODBOARD, OR PROTOTYPE-ONLY ASSIGNMENT.**

You are the lead Creative Director, Senior Experience Designer, Editorial Art Director, Mobile UX Lead, Frontend Architect, and QA Engineer for Jogja Kickboxing Festival & Redy Championship 2 (JKBF).

### 0. Non-negotiable outcome
The owner rejects the visual direction of V8, V9 and V9.2 despite improved code and reduced clutter. The site still feels like a generic template: overly repetitive, with undirected empty space, weak storytelling, unconsidered typography and poor differentiation between sports, music, community, shopping and practical information.

**Your assignment is to make the visual and experiential change unmistakable on ALL 23 existing public routes.** Replace public UI compositions, layout patterns, header/footer and visual components where needed. Make the site distinctive, cinematic, editorial, usable and genuinely designed. Do not simply adjust colors, font sizes, padding, or convert cards into empty rectangles. Do not generate more static mockups as the main deliverable.

**Protect all functional/backend investments**: admin UI, admin authentication/authorization/RBAC, server actions, APIs, NextAuth, Prisma schema, database records, checkout/payment kill-switches, RAWOOH/PPV controls, and data approval rules. No live purchases, migrations, deployment, or merges.

### 1. Source of truth and preparation
1. Locate the real project root and inspect `package.json`, route manifest, app layouts, global CSS, current public UI, git status, and security work from Phase 2A. The historical route inventory is a reference, not proof of today's filesystem; verify the actual current routes.
2. Locate the original official JKBF logo, current media, and V9 visual reference assets. Prefer the real logo. Identify missing/placeholder imagery.
3. Create a safe checkpoint and independent branch `design/jkbf-v10-art-directed` without discarding uncommitted changes. If unsafe, stop and explain the specific blocker.
4. Before edits, record screenshots of representative CURRENT pages at desktop 1440×900 and mobile 390×844 for meaningful before/after comparison.
5. Do not overwrite V8/V9 documents or alter public production deployments.

### 2. Editorial art direction — ONE cohesive brand, DIFFERENT scene language
Creative identity: **FIGHT NIGHT × JOGJA CULTURE**. Three distinct content atmospheres sharing one brand system:
- **THE RING**: cinematic/documentary combat, decisive typography, intentional crops, energetic but restrained red.
- **THE STAGE**: real-feeling live music energy, expansive stage imagery, colorful highlights within JKBF red/black framework, expressive pacing.
- **THE CITY / THE PEOPLE**: Jogja street culture and community. The Borobudur, Prambanan and Tugu outline motifs, if included, are delicate optional editorial devices on *select* culture/community compositions, NEVER repeated sitewide and NEVER treated as photos or claims of a specific venue.
- **THE INFORMATION**: warm ivory, dark accessible text, concise functional interfaces, great hierarchy and no unnecessary decorative chrome.

Recommended palette: `#0B0B0B`, `#F4F0E8`, `#D91F2C`, `#77716D`, with controlled supporting neutrals. Keep the original logo's proportions. Select a distinctive, deliberate display/font pairing (do not automatically reuse V8's Barlow Condensed + Inter); make headline typography, UI/body typography and numeric/stat typography visually coherent. Load fonts efficiently and provide fallbacks. Typography must remain legible at 320px.

**Design signature:** energetic editorial image crops, a disciplined baseline/grid, huge contrast between poster-led moments and quiet content areas, occasional thin angled rule / ring-corner line, strong headline scale, and restrained local-cultural references. Use 1–2 signature graphics strategically, not ornamental stickers on every component. The signature must remain visible even before official photography arrives, without faking an official fighter or artist.

**Absolutely avoid:** giant repetitive black cards; repeated badge stacks; copy-heavy introductions; shallow one-photo-one-title templates; meaningless blank 100vh panels; random red gradients; glassmorphism; diffuse neon glows; excessive 3D; overlapping type; repeated identical page heroes; UI designed like SaaS/admin; huge menu/footer with every route; false official data.

### 3. Specific visual composition contracts
These are intended visual compositions, not mere aesthetic adjectives.

**Homepage `/` — Campaign film poster becomes an interactive site:**
- Desktop: immersive photo-led hero with one dominant image and distinct editorial headline grouping (not fifty-fifty fighter and concert images fighting for attention). Clear original JKBF logo, festival identity, `12–14 DESEMBER 2026`, `GOR UNY, YOGYAKARTA`, one primary `INFO TIKET` action and secondary `LIHAT JADWAL` link. No explanatory block of text in opening screen. Actual HTML text/buttons, not burned into photography.
- Mobile: independently crop/recompose art and text; a new visitor sees **what / when / where / next action** immediately. Do not put 4 CTA buttons, a paragraph, and multiple badges over a face.
- Scroll scene changes: bold THE RING combat moment; very different THE STAGE music moment; a quiet ivory practical planning area; a concise culture/community close. No requirement to match V8's exact four-section composition. No repeated feature catalogue cards.

**Championship `/championship`:** fight-night promotion and the match/competition state are dominant. When official matchups are available, show visually strong paired athlete presentation; without approvals show a genuinely designed pre-announcement status, NOT fake `VS` names or claimed draw times. Competition rules/division details sit after the primary narrative or behind clear tabs/disclosures.

**Fighters `/fighters` + `/fighters/[slug]`:** separate expressive athlete portrait from data. Search-first simple directory, optional meaningful filters, reset/empty/loading states. Full profile has one dominant portrait and verified name/division/gym/stats; hide unverified values. Don't use generic athlete imagery to imply real identity.

**Bracket `/bracket`:** desktop readable competition progression; mobile division-first/round-first views, straightforward vertical bout rows. Never show fabricated winners/KO results in public mode. Empty state should be purposeful, not a fake live bracket with disclaimers.

**Lineup `/lineup`:** change visual scene radically from combat: music photography and expressive artist typographic hierarchy; list by day/stage only where actual schedule data exists. If there are no approved artist names, create an elegant teaser rather than fabricated artist cards.

**Schedule `/jadwal`:** prioritize 12/13/14 December tabs and chronological schedule. Warm ivory for legibility, thin dividers, clear time/activity/location/status. Avoid oversized photo heroes and stacked micro-badges. No invented run times. Correct weekdays: Sat 12, Sun 13, Mon 14 December 2026.

**Ticket `/tiket` and venue `/venue`:** utility-first. Ticket status, date/venue and official RAWOOH path only once confirmed; clear map/location and verified arrival details; no unofficial sales tiers, entry promises, parking or venue entrances.

**Merchandise `/merch` + `/merch/[slug]`:** fashion retail rather than combat dashboard; product photography dominates, calm white/ivory canvas, minimal filters, strong PDP image hierarchy, honest variants/stock/price. If vendor items not approved, do not show fake buyable stock. Checkout remains gated.

**City Pride `/city-pride`:** local identity and community spirit with selective Jogja line art, clear region choice, contextual vote status, no fake counts. Do not make it a spreadsheet/progress-bar landing page. Preserve voting anti-abuse enforcement.

**Creator `/creator` + `/creator/dashboard`:** welcoming culture/editorial program introduction, eligibility, a maximum three-step summary before real forms. Dashboard is intentionally quieter and functional with clear status/submissions/history. No invented cash rewards, creator passes, or exclusive access.

**Checkout `/checkout` + `/checkout/success/[orderId]`:** frictionless transaction-state UI, maintain all kill-switches; never render simulated PAID as genuine or activate payments. Support honest unavailable state.

**PPV `/ppv` + `/ppv/watch`:** streaming-focused art direction; preserve all gating and authentication. No fake live indicators/players when unapproved.

**About `/tentang`, FAQ `/faq`, Contact `/kontak`, Terms `/syarat-ketentuan`, Privacy `/kebijakan-privasi`:** readable, editorial information rather than marketing dashboard. Preserve legal text and contact validation. FAQ rows should be truly interactive and accessible.

### 4. Global navigation and interaction contracts
- Mobile navigation should use a restrained, high-quality menu with primary destinations first: **Jadwal, Pertandingan, Musik, Info Tiket**; secondary group for Fighters, Bracket, Merch, City Pride, Creator, Tentang, FAQ, Venue and Kontak. Admin entry does not belong in public primary navigation.
- Desktop keeps navigation concise, with one clear ticket action. Avoid permanent multiple sticky buttons overlapping content.
- Footer is compact, grouped and contextual; no full sitemap repeated as a long mobile wall.
- Retain valid links and route aliases. Do not remove functional pathways merely for minimalism. Keep interactions keyboard-accessible with visible focus states, semantic landmarks, reduced motion support and 44px touch targets where appropriate.
- Every public route must have meaningful loading/empty/error states and preserve its business behavior.

### 5. The route manifest you MUST verify against current source
23 historical public routes:
`/`, `/jadwal`, `/fighters`, `/fighters/[slug]`, `/championship`, `/bracket`, `/lineup`, `/city-pride`, `/creator`, `/creator/dashboard`, `/merch`, `/merch/[slug]`, `/tiket`, `/venue`, `/tentang`, `/faq`, `/kontak`, `/syarat-ketentuan`, `/kebijakan-privasi`, `/checkout`, `/checkout/success/[orderId]`, `/ppv`, `/ppv/watch`.

If current repo differs, document deviations explicitly. Avoid manufacturing routes solely to match a historic document.

### 6. Technical isolation, engineering and content safety
- Implement on the **actual public page components** in the isolated V10 branch, so the local development app truly changes; do NOT create only `/preview` or off-site picture mocks.
- Public styles must be scoped so admin screens and Phase 2A guards remain intact.
- Reuse existing data fetching, Server Actions, route params, form submission handlers, state machines, auth and data interfaces. Replace visual wrappers only. Do not disable features to make styling simpler.
- Do not touch admin routes or alter middleware/server authorization. If UI change requires changing a protected business function, report the blocker instead of silently rewriting its logic.
- Keep all RAWOOH, payment, checkout and PPV safety gates active; do not enable Midtrans or simulate completion of a purchase.
- Never invent fighter identities, fight results, lineup confirmations, time slots, ticket prices, vendor items, inventory or creator reward entitlements. Unsupported details remain unannounced/disabled until approved by the EO.
- Approved high-level event: **12–14 December 2026 at GOR UNY, Yogyakarta**. Campaign: **#JOGJAPUNYANYALI**; narrative: **DI BALIK KALEM**.
- Current imagery can be placeholder in local development only, with a clear asset replacement manifest. Use official logo when present; no stock photo claiming to be an actual artist or fighter.

### 7. Implementation protocol — finish the redesign, self-review at checkpoints
**Batch 0 — Safe foundation:** inspect repo, branch/checkpoint, inventory functionality, take before screenshots.

**Batch 1 — Design signature and flagship scenes:** implement header, mobile menu, footer, scoped tokens and page architecture. Rebuild **Homepage, Championship, Lineup and Jadwal** in the actual local app. Take screenshots 1440×900 and 390×844. Evaluate visual quality before copying any patterns to other pages. If these four still look like old template, redesign them again during this batch. **Continue automatically** after passing the quality gate unless there is a hard safety blocker; do not ask the owner to approve every page.

**Batch 2 — Combat + practical:** Fighters, Fighter Detail, Bracket, Tiket, Venue. Preserve search, filters, tabs and navigation.

**Batch 3 — Culture + commerce:** City Pride, Creator, Creator Dashboard, Merch Catalogue, Merch Detail, Checkout, Order Success, PPV and Watch. Preserve guardrails and the exact existing behaviors.

**Batch 4 — Supporting pages:** Tentang, FAQ, Kontak, Syarat-Ketentuan, Kebijakan-Privasi. Complete consistency pass across global navigation and footer.

**Batch 5 — Full Visual QA and regression:** for every public route capture first-screen desktop 1440×900 and mobile 390×844; for main routes capture full-page too; inspect at 320 and 1920 widths for clipping. Check screenshot image actually matches the route/state. Compare the old and new compositions side-by-side. Run TypeScript, lint if available, production build, runtime navigation, search, filter, date tabs, bracket round selection, creator contact/forms without production submissions, voting safety, variant selection, admin guard regression and 11 commercial safety checks. If a test requires a write, use an authorized isolated test environment, otherwise mark BLOCKED — no unsafe production mutation.

### 8. Explicit objective review rubric (not an invented score)
For each primary page, document YES/NO + evidence for:
1. Clearly more visually authored than V9.2 (not merely larger margins)?
2. Meaningful distinctive composition from adjacent page types?
3. One dominant focal point, no competing labels/badges/cards?
4. Truly well used negative space rather than large empty undecorated strips?
5. First mobile viewport communicates its purpose and primary action?
6. Photography and type intentionally arranged, no collisions at 320/390/1440?
7. Primary interactions retained and tested?
8. Official-vs-demo content properly separated?
9. Admin and commerce invariants intact?
10. Does it feel like a premium kickboxing × music festival rather than a SaaS template?

Every NO must have corrective action. Never claim “100% premium” or “fully verified” without screenshots and executed tests.

### 9. Deliverables
Create `docs/JKBF_V10_ART_DIRECTED_REBUILD/` containing:
- `01_CREATIVE_DECISIONS.md`: what changed aesthetically and why, including typography and visual signatures.
- `02_ROUTE_IMPLEMENTATION_MATRIX.md`: all 23 routes, changed files, UI state and functionality status.
- `03_DESKTOP_MOBILE_BEFORE_AFTER.md`: direct links to before/after evidence at fixed viewports.
- `04_UX_INTERACTION_REGRESSION.md`: real PASS/FAIL/BLOCKED tests with reproduction.
- `05_SECURITY_AND_COMMERCE_INVARIANTS.md`: proof admin/backend/payment untouched and relevant security checks.
- `06_PLACEHOLDER_ASSET_MANIFEST.md`: filename/source/approval status and replacement requirements.
- `07_OPEN_ISSUES_AND_EO_DECISIONS.md`: unresolved approval and vendor dependencies.
- `screenshots/`: real desktop/mobile screenshots for every route, plus first/full page evidence for top routes.

In your final response provide local preview URL, branch, git diff/stat, route completion count, before/after sample screenshots and test results. **Show visual evidence, not just a celebratory text summary.** If not all 23 routes are complete, report actual completed routes and remaining work; continue in the next session from checkpoint, not from scratch.

### 10. Hard safety boundaries
No production deployment. No merge to main. No schema migration, database reset, changes to real passwords/secrets, admin redesign, payment activation, fake PAID orders, third-party purchases, or unapproved event claims. Keep changes reversible. Stop only for genuine security/destructive-action blockers and explain why.

## FINAL COMMAND
**Execute the complete public frontend V10 redesign on the existing app now. Build and inspect the actual website, correct the design until it clearly differs from V9.2, preserve all functionality and safety, and deliver verifiable desktop/mobile results for every public route.**
