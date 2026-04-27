# Sidebar — current vs proposed

## Style

Two side-by-side renderings of the sidebar at the same dimensions, with the same theme. The sidebars are inline (not fixed-position) so they can sit next to each other on the comparison page. The "Library" link is shown active in the current sidebar and the "Home" link is active in the proposed.

## Design decisions

- **No prose-only comparison.** Showing the two sidebars side-by-side surfaces the visual change — the proposed sidebar is taller (more nav items), but each is in a clear group with a header label.
- **Same icons, same colors, same density.** Only the structure changes. This makes the proposal feel evolutionary, not a rewrite.
- **Per-side bullet lists for trade-offs.** Cons under the current; pros under the proposed. Readers can scan one column at a time without crosswalking.

## Trade-offs

- **The proposed sidebar is taller.** 8 links + 2 group labels vs 5 links. Still well within a typical 768px+ viewport. Compresses gracefully on narrow viewports — the nav adapts to icon-only at <720px.
- **Two visual weights for sidebar links.** Watch group at full weight, System group dimmer/smaller. Subtle but adds one more rule to maintain in CSS — captured in `.sidebar-link.system-link`.
