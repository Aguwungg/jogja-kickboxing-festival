# JKBF 2026 — Complete Audit Report

## Executive finding

The strongest redesign foundation is a deliberate combination of GLORY’s competition clarity, UFC’s card and time hierarchy, Sónar’s festival information architecture, BYON’s campaign energy, ONE’s event conversion pairing, and Gymshark’s commerce progression. JKBF should combine these principles under its own black/red/ivory identity and Jogja cultural voice.

## Current JKBF audit

The public website is available at https://jogja-kickboxing-festival-o2tu.vercel.app/. The homepage exposes JADWAL, PERTANDINGAN, MUSIK, PETARUNG, BAGAN, MERCH, PANDUAN and INFO TIKET. It communicates 12–14 December 2026 at GOR UNY, four K-1 gold-belt divisions, the three festival pillars, schedule previews and ticket categories. The current `/jadwal` page already has day selectors and category filters for “Semua Agenda”, “Ring Kickboxing” and “Panggung Musik”. The `/championship` page exposes four divisions, rules, format, scoring and knockdown/TKO sections.

The historical 23-page inventory is not fully verified. The routes directly observed in public navigation are the core festival pages plus guide/legal pages. Creator programme, dashboard, PPV, checkout, product details, confirmation and other historical routes were not found in the public nav during this pass and should be treated as unverified until route inventory or repository access is available.

## Reference findings

### BYON
Campaign-led combat presentation, fighter result cards, ticket/PPV pairing and achievement metrics are useful. Events redirected to login, so public event detail behavior is not verified.

### GLORY
The direct best reference for JKBF Championship and Bracket: event metadata, countdown, ticket CTA, title fights, linked athletes and round tabs for an 8-man grand prix.

### UFC
The strongest information hierarchy: editorial homepage, numbered stories, Main Card/Prelims/Early Prelims, localised times, athlete links, how-to-watch and ticket blocks. Borrow structure, not institutional scale or betting odds.

### ONE
A scalable combat-content ecosystem with events, athletes, watch, stories, language paths and event synopsis. Use selectively so JKBF does not become over-navigated.

### Sónar
A useful festival-information model: edition navigation, practical info, galleries, sponsors, app links and editorial storytelling. The programme route errored in the session, so timetable interaction is not directly verified.

### Gymshark
The best commerce reference: campaign hero, collections, product cards, wishlist/account/cart, product trust cues and footer support. The tested collection routes returned 404; homepage patterns were observed.

## Recommendation

Make the homepage a high-impact event opening with one dominant ticket path, a configurable countdown, real athlete/event imagery, and three connected narratives: championship, music and Jogja. Use the current schedule’s day/category controls as a foundation. Build Championship and Bracket around GLORY/UFC information clarity. Make Fighters factual and searchable. Treat Merch as a compact Gymshark-inspired store. Keep the existing backend and payment logic untouched.

## Evidence and limitations

Real screenshots were viewed in the Cloud Browser and are logged in `09_VISUAL_INDEX/SCREENSHOT_INDEX.xlsx`; persistent image export was unavailable, so the ZIP deliberately contains no fabricated screenshots. Mobile viewport and some restricted/error routes remain unverified. The prior “JKF” conversation was inaccessible in this context.
