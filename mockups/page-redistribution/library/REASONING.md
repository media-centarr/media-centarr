# Library — Pure catalog browser

## Style

Single tool surface: type tabs (pill group), sort + filter on the right, then a clean poster grid that fills the full content width. No zone tabs, no Continue Watching strip, no Upcoming calendar. The page exists to do exactly one job: browse the catalog.

## Design decisions

- **Removed all zones.** The current `/` has three zones (Continue, Browse, Upcoming) with URL-driven switching. This page is the Browse zone alone, taking full advantage of the canvas.
- **Filter bar is the only chrome.** Type tabs on the left (with counts), sort pill + filter input on the right. Same vocabulary as today's library so it doesn't feel foreign.
- **Wider grid (8 columns).** With Continue Watching and Upcoming gone, the page can spend its full width on posters. Today's library shares horizontal space with the active-shows backdrop cards which forces fewer columns.
- **No empty-state hand-holding.** Today's library sometimes shows watch-dirs configuration prompts when empty. That can stay (it's a real first-run flow), but it's an edge case the mockup doesn't need to dwell on — the empty-state stays where it is.

## Requirements mapping

| Requirement | How it's addressed |
|---|---|
| Library does too many jobs | Now it does exactly one: catalog browse |
| Upcoming felt misplaced inside Library | Upcoming is gone from this page entirely |
| "Netflix but yours" | Library is the *Browse* surface, distinct from Home |

## Trade-offs

- **Existing URL `/?zone=upcoming` becomes a redirect.** Bookmarks and code that links to "library upcoming zone" need to redirect to `/upcoming`. Trivial mechanic, just don't forget it.
- **No Continue Watching strip here.** Some users may have built muscle memory for "open Library → my last show is right there". They'll learn that's now on Home (which is also `/`, so the muscle memory still works for one click) — but a few may want to set Library as their landing. Could add a settings preference for "default to Library on `/`" if anyone asks.
- **Loses the zone-tab landmark.** The current zone tabs at the top of `/` are a clear visual landmark. With those gone, the page header (`Library` + count) does the job — slightly quieter.
