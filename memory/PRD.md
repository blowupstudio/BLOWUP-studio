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
