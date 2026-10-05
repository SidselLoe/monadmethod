# Apply page redesign and Instagram correction

## Changes
- Update the shared footer Instagram icon to open the Monad Method Instagram profile on every page.
- Restyle `/apply` only using the existing white, pale-teal, teal, red, foreground, border, and overlay tokens.
- Preserve the application form, lead saving, notifications, Wistia player, Calendly/Luma routing, section order, and all existing copy.
- Recompose the existing sections into the requested layouts: centered Monad mark, portrait proof tiles, image-and-copy ceiling section, three-card outcomes, comparison cards, four-step row, three playable testimonial tiles plus two text stories, qualifier cards, divider FAQ, and image-backed closing section.
- Keep the minimal `/apply` footer and leave `/apply/booked` unchanged.

## Technical details
- Reuse existing client portraits, local testimonial videos/posters, homepage portrait, button component, count-up component, and semantic color tokens.
- Add only page-scoped presentation helpers where needed; no database or form-flow changes.
- Verify desktop, tablet, and 390px mobile layouts, interactions, video playback, horizontal overflow, console errors, and the latest build result.
- Do not publish.
