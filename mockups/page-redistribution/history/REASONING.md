# History — Promoted out of hidden

## Style

A real top-level page. Stat tiles up top (titles, hours, streak, last watched), GitHub-style activity heatmap in a glass-surface card below, then the recent activity log. The heatmap is generated client-side from synthetic data so the mockup actually shows the visual density pattern — production wires the same shape to real watch events.

## Design decisions

- **Promoted from hidden URL to nav link.** This page already exists at `/history` but is not in the sidebar today. Adding it to the Watch group costs ~5 lines of code and unlocks a feature that's already built.
- **Stat tiles got upgraded from a single bar to a 4-tile grid.** More visual weight, easier to read at a glance, room for one more metric ("Last watched").
- **Heatmap got a card surface.** Today the heatmap is loose on the page; here it lives in a glass-surface that gives it visual weight matching its importance.
- **Activity log uses the same row pattern as Recent Changes on Upcoming.** Consistency: any "log of things over time" looks the same throughout the app.

## Requirements mapping

| Requirement | How it's addressed |
|---|---|
| Watch History was hidden from nav | Now a primary nav link in the Watch group |
| "Netflix but yours" | The "what have I watched" page is exactly the kind of personal data Netflix can't show you about your own library — making it discoverable is a feature unique to a self-hosted media center |
| Cinematic | The heatmap + stats give the page a "year in review" vibe, which is rare and rewarding |

## Trade-offs

- **One more nav slot used.** The Watch group goes from 3 to 4 links. Still well within the budget for a sidebar.
- **The page is ~95% existing functionality with cosmetic upgrades.** Easy to ship, low risk. Could be done independently of the rest of the redistribution.
- **Heatmap requires real data to be meaningful.** The mockup uses synthetic density; production needs the watch events query (already exists in WatchHistory).
