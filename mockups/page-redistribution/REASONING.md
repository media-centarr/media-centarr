# Page redistribution — overall reasoning

## The observation

Today's `/` (Library) does three different jobs: Continue Watching, Browse, Upcoming. Each is a different mental mode (present / atemporal / future). Because they share one URL and one page header, the user has no clear sense of "which mode am I in" — and the Upcoming surface (calendar + tracking + active shows) feels misplaced because it's competing for visual weight with a poster grid you're trying to scan to pick something to watch.

The user's framing: "television cinematic experience. Netflix but in your control." Netflix's lesson is that the landing surface is *curated and assembled*, not a database dump — Continue Watching at the top, then content rows, then a separate Browse mode you opt into.

## The proposal in one paragraph

Split the sidebar into two visually distinct groups — **Watch** (cinematic, content-first) and **System** (operator, admin). Add a new **Home** page at `/` that's the assembled cinematic landing (hero + Continue Watching + Coming Up This Week + Recently Added + Watched Recently). Reduce **Library** to a pure catalog browser at `/library`. Promote **Upcoming** to its own page at `/upcoming`. Promote **Watch History** out of hidden to `/history` in the nav. Leave the operate-mode pages (Downloads, Review, Status, Settings, Console drawer) functionally unchanged — they just cluster under the System group.

## What changes, at a glance

| Page | Before | After |
|---|---|---|
| `/` | Library (3 zones) | New: cinematic Home |
| `/library` | (alias of `/`) | Pure catalog browser |
| `/upcoming` | doesn't exist (zone of `/`) | New top-level page |
| `/history` | exists but hidden | Promoted, in nav |
| `/download` | "Downloads" link, conditional | "Downloads" under System |
| `/review` | top-level | under System |
| `/status` | top-level | under System |
| `/settings` | top-level | under System |
| Console drawer | unchanged | unchanged |

## What this gains

- **Each page has one mental mode.** No more "what page am I on" when scrolling Library.
- **Home becomes the cinematic surface** — composable, curated, the front door.
- **Library becomes pure** — a catalog browser, not a Swiss army knife.
- **Hidden pages get promoted** — Watch History is too good to bury.
- **The nav splits cleanly into two groups** — System pages don't compete with Watch pages for visual weight.
- **The Downloads link no longer disappears** when Prowlarr isn't configured — it's always present in System; clicking it leads to a "set up Prowlarr" empty state instead of vanishing silently.

## What this costs

- **One brand-new page (Home) to design and build.** Has to assemble data from three contexts (Library, ReleaseTracking, WatchHistory). The biggest carry-cost.
- **One sidebar restructure** with two visual weights. Small CSS change, captured in `shared.css`.
- **A new top-level route for Upcoming.** Mostly a `live "/upcoming", UpcomingLive` line plus extracting current zone-3 logic into its own LiveView. The existing `UpcomingCards` component largely doesn't need to change.
- **A nav link for History.** Trivial — five lines.
- **Bookmark redirects.** Anyone who bookmarked `/?zone=upcoming` should be redirected to `/upcoming`; same for `/?zone=continue` → `/`. One controller plug.

## What this doesn't include (deliberately)

- **Downloads/Review/Status/Settings redesign.** Out of scope. They're shown in mockups only to validate the new sidebar grouping.
- **Recommendations / "Because you watched X" on Home.** Tempting but needs a recommender — separate project.
- **A merged Activity feed (Downloads + WatchHistory).** Two distinct mental modes, leave separate.
- **A search-everything bar.** Not part of the IA question — could be added later.

## Order of operations (if implemented)

1. Promote `/history` to the nav. Lowest risk; pure delight.
2. Add `/upcoming` route, extract zone-3 logic into UpcomingLive. Same content, new home. Bookmarks redirect from `/?zone=upcoming`.
3. Reduce `/library` to the Browse zone only. Bookmarks redirect from `/?zone=library`.
4. Build new `/` Home page. The biggest piece — assembled data from three contexts.
5. Sidebar two-group restructure can land at any point. Independent of page changes.

Each step is independently shippable and reversible. None of them block the others.
