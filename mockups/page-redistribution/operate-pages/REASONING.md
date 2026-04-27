# Operate-mode pages

## Style

These four pages — Downloads, Review, Status, Settings — keep their current functional shape. They're shown here primarily so that the proposed sidebar's "SYSTEM" group is visible in context, and so an end-to-end click-through of every nav link is possible.

## Design decisions

- **No major changes to functionality.** Downloads keeps the queue + activity + manual search structure. Review keeps the master/detail layout. Status keeps the operator dashboard. Settings keeps the sectioned layout with sidebar nav.
- **Visually clustered under "SYSTEM" in the sidebar.** Smaller font, dimmer color than Watch links — see `shared.css` `.sidebar-link.system-link`. This is the only intentional visual change to these pages.
- **Console drawer is unchanged.** Still toggled by `` ` `` (backtick); not part of the sidebar nav.

## Why include them in the mockup set

The user asked to see "literally everything." If the proposal is judged purely by its Watch surfaces (Home, Library, Upcoming, History) without seeing how Operate looks in the new nav grouping, the visual hierarchy is hard to evaluate. Clicking from Home to Downloads should *feel* like switching from a frontstage to a backstage area — these mockups let that be tested.

## Trade-offs

- **No production changes proposed for these pages.** If the user wants to also redesign Downloads/Review/Status/Settings, that's a separate brainstorming session. Keeping them stable here is intentional — fewer moving parts in the IA proposal.
- **Sidebar "SYSTEM" grouping is the only behavioral difference.** A small change but it's the lever that makes the two-mode split feel real.
