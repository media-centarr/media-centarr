# Home — Cinematic landing

## Style

A full-bleed hero followed by horizontal "rows" of curated content, each capped at one row of cards (no overflow scroll). The page assembles content from four sources — Library (Continue Watching, Recently Added), ReleaseTracking (Coming Up This Week), and WatchHistory (Watched Recently) — into a single content-first surface. Visual language matches the existing app: glassmorphism cards, slate-blue dark theme, primary blue accent.

## Design decisions

- **Hero on top, no other chrome.** The first thing the user sees is one large title, not a poster grid. This is the lever that creates the "Netflix but yours" feel; the rest of the page is rows below it.
- **Continue Watching is the first row.** Highest-frequency action ("resume what I was watching") gets the prime row position, immediately under the hero.
- **Coming Up This Week is a digest, not the full Upcoming page.** 4 cards with status badges (Grabbed / Pending / Scheduled). "See all →" links to the dedicated `/upcoming` page. This solves the discoverability problem of moving Upcoming out of Library.
- **Recently Added and Watched Recently are poster rows.** Smaller card density (8 across) — these are signal-rich rows where you want to scan many titles at once.
- **No filters, no sort, no tabs on Home.** Home is a destination, not a tool. Library is for the tool work.

## Requirements mapping

| Requirement | How it's addressed |
|---|---|
| "Netflix but yours" cinematic feel | Hero + curated rows is exactly Netflix's home shape; first row is Continue Watching |
| Upcoming feels misplaced inside Library | Removed from `/`; replaced with a 4-card digest row that links to its own page |
| Watch History was hidden in nav | "Watched Recently" row points to `/history`, which now lives in the Watch nav group |
| Library does too many jobs | Library is no longer the home page — it's a focused catalog browser at `/library` |

## Trade-offs

- **Adds a new page to maintain.** Home is brand-new — needs assembly logic that joins data from three contexts. The biggest carry-cost of this proposal.
- **Two clicks to get to the catalog.** Power users who want to browse the full library now click "Library" instead of just being there. Compensated by Continue Watching being immediately visible without a tab switch.
- **Hero requires a curation rule.** "Featured" / "Tonight's pick" needs a deterministic seed (random with daily key, or "newest backdrop-rich added", or "tracked release dropping today"). Trivial but it's a decision the implementation has to make.
- **More backdrop-filter surfaces.** Glassmorphism on a content-rich page costs more compositing than the current Library. Probably fine on modern hardware; worth measuring.
