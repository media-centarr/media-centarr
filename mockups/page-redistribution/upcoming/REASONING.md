# Upcoming — Promoted to its own page

## Style

The same content that lives in `/?zone=upcoming` today, but on its own canvas. Calendar gets two-thirds of the width with the Tracking sidebar to its right. Active shows below in a 2-column grid of backdrop cards. Recent Changes + Unscheduled as a 2-up footer. Glassmorphism inset surfaces, slate-blue dark theme.

## Design decisions

- **Calendar + Tracking sidebar are co-located.** Today these are stacked vertically (calendar full-width, tracking far below the active-shows section). Side-by-side is faster to scan: "what's this month look like" + "what am I tracking" answer related questions.
- **Active shows promoted to second-most prominent block.** This is the section that drives the most interaction (Queue all, per-episode actions). Two-column grid matches the current Library zone-3 implementation.
- **"Track release" CTA top-right.** Same affordance as today, but on a real page header instead of buried in the calendar header. Top-right is the standard place for primary page CTAs.
- **Page header has a real subtitle.** "14 active · 3 completed this month · 5 unscheduled" — shows scope at a glance. Today's zone has none of this.
- **Recent Changes + Unscheduled as compact footer.** Both are reference panels (look at when needed), so they get small panels at the bottom rather than primary real estate.

## Requirements mapping

| Requirement | How it's addressed |
|---|---|
| Upcoming feels misplaced inside Library | Now its own top-level page — no longer competes with browsing |
| "Netflix but yours" | This is the "what's coming up on my services" page — a real Netflix-y idea, but better, because it's *your* stuff |
| Lots of content for one zone | Full canvas — each section gets the room to breathe |

## Trade-offs

- **One more nav link.** "Upcoming" is now in the sidebar Watch group. Users have to learn it exists; the digest row on Home helps.
- **Tracking sidebar pulls focus from the calendar.** On wider screens it works; on narrower screens the grid collapses to single-column and Tracking lands below the calendar (still good).
- **Calendar legibility under hover.** The current implementation has clickable cells that open a day detail panel. The mockup omits the day-detail expand for simplicity, but it should still be there in the production page.
