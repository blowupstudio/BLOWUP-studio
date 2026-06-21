# BLOWUP studio — Product Requirements & Build Log

## Original problem statement
"Gør denne hjemmeside 10x bedre: https://blowupstudio.dk/ (også: https://blowup-studio-redesign.vercel.app/)"

BLOWUP studio is a music recording studio in Hedehusene, Denmark (producer Patrick Forslund). Services: recording, vocal/flow coaching, mix & master, beats/topline. Audience: mostly mobile, hip-hop/trap/pop artists. Content is in Danish.

## User direction (chronological)
1. Make it 10x better — focus on visuals/wow, premium, start fresh, dark + elegant, "go all in", keep Danish + reuse studio photos.
2. Make it far simpler and mobile friendly; use the RIGHT font and the RIGHT yellow color; divide sections more clearly.
3. Don't just redesign — rethink everything completely: mega cool features, lots of animation, sleek & simple, minimal text.

## Brand
- Accent color: YELLOW `#FFD834` (from the logo SVG).
- Fonts: Barlow Condensed (display/headlines) + Inter (body).
- Theme: near-black `#0A0A0A`, dark surfaces, yellow accent.

## Architecture
- Frontend: React 18 (CRA) + Tailwind + framer-motion + lenis + lucide-react. Served by supervisor `frontend` on :3000.
- Backend: FastAPI + Motor/MongoDB. Supervisor `backend` (uvicorn) on :8001. All routes prefixed `/api`.
- Assets: `/app/frontend/public/assets/site/` (studio video, gallery, patrick, youtube thumbs, logo). Original Vite source preserved in `/app/.legacy_vite/`.

## Implemented (2026-06-21)
- Preloader "fly-through-W" intro: counter 0–100, then the BLOWUP wordmark rushes/blurs toward the viewer and a centered **W-shaped SVG cutout** scales up (accelerating ease + motion blur), revealing the live site *through* the growing W. Honors `prefers-reduced-motion` (skips the zoom). See `src/components/Preloader.jsx`.
- Interactive single-page experience:
  - Preloader (counter + BLOWUP reveal), custom magnetic cursor (desktop), scroll-progress bar, grain overlay, Lenis smooth scroll.
  - Hero: video bg, kinetic headline "Fra idé til hit.", sound toggle w/ equalizer, magnetic CTA.
  - Yellow word-marquee, animated stats (CountUp), Services (hover-fill cards).
  - **Configurator** "Byg din session": select package + add-on → animated price (CountUp) → Book (Planway). Verified: early=1.450, +addon=1.850, weekend=2.400.
  - Releases: title marquee + Spotify embed. Artists: horizontal drag carousel + modal YouTube player. Gallery: tilt cards + lightbox. Reviews: dual auto-marquee. Contact: form -> POST /api/contact (Mongo). Footer: giant wordmark + magnetic socials.
- Backend: /api/health, POST /api/contact (persists), GET /api/contacts (id, not _id).
- Testing: iteration_3 — backend 4/4 pass; desktop + mobile (390x844) all pass; no horizontal overflow; configurator price logic verified.

## Known notes
- Third-party Spotify/YouTube embeds log harmless console errors in headless browsers only.
- No authentication (public marketing site).

## Backlog / next ideas (P1/P2)
- P1: Email/Slack notification on new contact (SendGrid/Resend) so the studio actually receives inquiries (currently stored in DB only).
- P1: Real Web-Audio visualizer driven by the hero video audio (currently animated equalizer).
- P2: Admin view for contact inquiries; SEO/OG tags & sitemap; deploy pipeline.
- P2: Booking availability preview pulled from Planway, multi-language (EN) toggle.
EOF

## Update 2026-06-21 — Visual identity & polish pass
- Removed custom cursor RING (Cursor.jsx now only renders .cursor-dot, 10px).
- Removed decorative divider line above section titles (SectionHeader.jsx: dropped `h-px w-8 bg-brand`).
- Yellow keyword marquee (Marquee.jsx): 4x repeats + responsive padding `px-8 sm:px-14 lg:px-20` → keywords now span full width on desktop, no right-side white space.
- Brand identity aligned: fonts → Barlow (headings Barlow Black/900 via `font-black`, body Barlow Regular/400). Loaded Barlow from Google Fonts (replaced Barlow Condensed + Inter).
- Palette set in tailwind.config.js: brand #FFD834, tide(turquoise) #70C9C4, ink #000000, bone #FFFFFF. Turquoise used on non-yellow Releases marquee asterisks.
- Verified frontend-only by testing agent (iteration_4.json): 5/5 visual checks pass, no mobile horizontal overflow.

### Backlog / Notes
- Spotify iframe in #lyt shows a client-side error white box in headless Chromium only (pre-existing, out of scope). Consider a graceful fallback CTA if the embed fails.

## Update 2026-06-21 (b) — Content & UX changes
- Removed full-width divider lines (border-t/border-y) above ALL section titles (Stats, Configurator, Releases, Artists, Gallery, Reviews, Contact, Footer) + Releases marquee border. Sections separated only by alternating bg.
- Removed the "Hvad vi laver" Services section entirely + "Studie" nav item. Section indices renumbered 01–06.
- Configurator: removed the "Ekstra custom beat" add-on so sessions are single-select only (no package combining). Sessions still book via Planway.
- Added two outbound beat-purchase buttons in the session section: "Køb færdigt beat" → BeatStars (links.readyBeat), "Køb skræddersyet beat" → Instagram co-prod (links.customBeat, updated URL). NOTE: these buttons did not exist before; placed under the session selector — relocate if a different spot is preferred.
- Contact "Sig hej": removed the email form (backend /api/contact now unused). Kept email + address links + map, and added a "Klar i studiet?" CTA card (Book → Planway + Instagram/YouTube/Discord) to balance the layout.
- Artists title "Energien i rummet." → "Oplev artisterne."
- Fixed black-square scroll artifact: removed `mix-blend-mode: difference` + `will-change` from the fixed `.cursor-dot` (now solid brand-yellow dot).
- Verified by testing agent (iteration_5.json): 7/7 frontend checks pass; exact hrefs confirmed; no mobile horizontal overflow.

### Backlog
- Pre-existing non-blocking React minified error #418 (likely Preloader/motion hydration) — investigate later.
- Dead code: Services.jsx unused + addonBeat/topics exports in data.js unused — optional cleanup.

## Update 2026-06-21 (c) — Square identity + UX cleanup (verified 10/10)
- Removed all remaining divider lines (header border-b, mobile menu/nav borders, footer copyright border, stats divide-x) — no lines over titles.
- SectionHeader now shows only index number + ONE big title (small uppercase label no longer rendered).
- Stats: "6t / Max session" → "3–6t / Timers session" (Stats uses `display` field; data.js updated).
- Hero: removed sound on/off toggle (no audio); secondary link now upsells to #session ("Se sessions & beats", data-testid hero-products-btn) instead of playlist.
- Beats redesigned to cohere with session options: "Beats — køb direkte" subgroup with matching squared turquoise BeatRow cards in same column. Ready→BeatStars, Custom→Instagram coprod. Sessions still → Planway.
- Contact (06): title "Sig hej." → "Kontakt.".
- Black-square scroll artifact FIXED: removed custom Cursor + Noise/grain overlay + backdrop-filter on .glass (now solid). Cursor.jsx & Noise.jsx deleted.
- Global SQUARE aesthetic: all rounded-* → rounded-none (buttons/cards/badges border-radius 0).
- Verified by testing agent iteration_6.json: 10/10 pass, no black square across full scroll, no mobile overflow.

### Known (pre-existing, third-party, not a regression)
- Spotify embed in Releases can throw a locale RangeError + blank white box in automated/odd-locale browsers; normal DK users unaffected. React minified #418 on load (non-blocking).

## Update 2026-06-21 (d) — New video, owner section, socials (verified 7/7)
- Hero video replaced with user's high-quality clip: converted .mov → web mp4 (H.264, faststart, no audio) at /assets/site/studio-hero.mp4 + new poster studio-hero-poster.jpg. Added preload="auto".
- NEW Owner.jsx section (id="om", index 05, "Manden bag." — Patrick Forslund) with photo /assets/site/patrick.jpeg (white-bg portrait framed on dark), bio, quote, Book→Planway. Inserted after Gallery.
- NEW Socials.jsx subtle band after Contact ("Følg BLOWUP": Instagram/YouTube/TikTok/Discord). Removed duplicate social icons from Footer and Contact CTA card.
- Hero secondary link text → "Se sessions, beats og dine andre muligheder" (still → #session).
- Header brand → "BLOWUP studio". Gallery(04) title → "Oplev studiet.". Reviews(06) title → "Hvad artisterne siger.". Contact index → 07. Nav adds "Om" → #om.
- Section order: Hero→marquee→Stats→01 Session→02 Lyt→03 Artister→04 Studiet→05 Manden bag→06 Artisterne siger→07 Kontakt→Socials→Footer.
- Verified by testing agent iteration_7.json: 100% pass, positive aesthetic verdicts on Owner + Socials, no overflow/regressions.

## Update 2026-06-21 (e) — Owner section refinements
- Replaced Patrick Forslund bio with user-provided text (3 paragraphs: passion since age 9, live+studio experience/DAWs FL Studio, focus on quality/identity).
- Owner section title "Manden bag." → "Om os." (role line now "Stifter & producer · Patrick Forslund").
- Removed the "BLOWUP · Hedehusene" yellow tag overlay on Patrick's photo.
- Removed the "Book en session med Patrick" button from the Owner section.
- Sound on/off toggle: already removed in iteration (d); only the bg video `muted` attribute remains (no UI control).

## Update 2026-06-21 (f) — Fix overline lines + revert index-number removal
- Reverted the previous change: section index numbers (05, 06...) are back above titles.
- ROOT CAUSE of "line over the texts": the custom `.overline` class collided with Tailwind's built-in `overline` utility (text-decoration-line: overline), drawing a yellow line above every overline-class label (hero eyebrow, nav items, SCROLL). Fixed by adding `text-decoration: none;` to `.overline` in index.css. Verified gone via screenshot.
- Confirmed the new hero video contains no baked-in text/line (all frames clean).
