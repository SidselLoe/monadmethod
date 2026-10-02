# Rebuild Monad OS application flow

## Outcome
Replace the current `/apply` draft with the new photo-led Monad OS Cohort 1 VSL page, add the post-booking page at `/apply/booked`, and store completed applications securely. Existing pages and their calls-to-action remain unchanged, and nothing is published.

## Page build
- Rebuild `/apply` in the exact section order provided: dark VSL hero, light proof strip, dark ceiling statement, light Monad OS details, dark cohort pricing, fit criteria, three-step process, dark application, light FAQ, and dark closing section.
- Use Poppins throughout, large confident type, spacious layouts, existing founder/headshot photography, near-black and white section bands, red pill buttons, and teal only for restrained accents.
- Keep `VSL_EMBED_URL` as an empty, clearly named constant. Show a polished 16:9 poster placeholder until a Wistia embed URL is supplied, then render the iframe.
- Reuse the existing founder avatar imagery and supplied testimonial copy.
- Give the shared navigation an apply-page-only CTA option: “APPLY” scrolls to `#apply`; all other pages retain their current navigation and Calendly link.

## Application flow
- Build the nine-question, one-at-a-time form with progress, Back/Next controls, Enter-key advancement where appropriate, optional handling for Q9, and clear validation errors.
- Validate and trim all inputs with Zod before submission, including email format, phone length, choice allowlists, and sensible text limits.
- Save every answer with server-generated timestamps to a new `applications` table.
- Allow anonymous and signed-in visitors to create an application, while preventing all public reading, listing, editing, and deletion. Keep administrative access available only to trusted backend services.
- Route the completion screen from the investment answer:
  - ready now: show the inline Calendly widget with name/email prefilled and listen for a successful booking event before navigating to `/apply/booked`;
  - not right now: show the Monad Activation message and external Luma link.
- Preserve a clear retry state if saving fails, so no visitor is shown booking options before their application is recorded.

## Booked page
- Add `/apply/booked` with the supplied dark, centered confirmation content, shared navigation/footer, numbered voice-note prompts, WhatsApp CTA, and secondary Luma text link.
- Keep `WHATSAPP_NUMBER` as a clearly named empty constant; until it is filled, the WhatsApp control will remain visibly unavailable rather than opening an invalid destination.
- Add a page-specific title and description, self-referencing canonical/Open Graph tags, and a `noindex, nofollow` robots directive.

## Technical details
- Add the new route without changing any existing route or redirect.
- Extend the existing page metadata hook only as needed to support robots metadata, preserving current metadata behavior everywhere else.
- Use the generated Lovable Cloud client and a migration with explicit grants and row-level access rules.
- Record the application data contract and page-only navigation override as project architecture rules.

## Verification
- Confirm the removed offer language no longer exists on `/apply`.
- Check desktop and mobile layouts, section order, navigation scrolling, all nine questions, validation, both completion branches, anonymous database insertion, Calendly prefilling, booking-event navigation, `/apply/booked`, metadata, and browser/runtime errors.
- Do not publish.
