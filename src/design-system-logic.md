 # Monad Studios — Design System & Consistency Logic

A reference document for how to make every page on monadmethod.lovable.app feel as coherent and "designed" as founderos.com. Built from a live audit of your site and theirs.

Use this as the source of truth when writing Lovable prompts. Point prompts back here (or paste the relevant section inline) rather than re-specifying tokens every time.

---

## 1. The principle: one system, five moves

FounderOS feels designed not because it has better colours, but because it only uses **five visual moves**, repeated across every page. Each section is one of these five. That is what you should copy.

The five moves are:

1. **Hero** — big centred statement, no card, no background.
2. **Full-bleed band** — a section with a tinted background (they use a soft teal, you have cream + soft teal). Used for emphasis.
3. **Two-column feature** — heading + body on one side, photo or diagram on the other. Used to slow the page down.
4. **Bento grid of cards** — 2, 3, or 4 equal-weight cards on a row. Used for lists of things that want parity (values, modalities, topics, pillars).
5. **Quote / stat row** — one or three large emotional beats, stacked vertically, centred.

Nothing else. No random decorative blocks. No one-off sections. If a section doesn't fit one of these five moves, rebuild it as one that does.

---

## 2. Typography scale — the final answer

You currently use Poppins everywhere. Keep that. **Playfair italic is allowed in one place only: the quote text inside Component E (Quote strip) and Component C (stat / quote block).** Nowhere else on the website — no headings, no pull-outs, no eyebrows, no decorative accents. The entire typographic rhythm of your site can be held by **five sizes, three weights** in Poppins, with Playfair italic reserved as the single tonal accent inside quotes.

### The scale

| Role | Size (desktop) | Size (mobile) | Weight | Used for |
|---|---|---|---|---|
| **H1 — hero** | 60–64px | 40px | 700 | The single big line on any page hero |
| **H2 — section** | 48px | 30–32px | 700 | Every major section heading ("My values.", "Three modalities.", "The backstory.") |
| **H3 — sub** | 28–32px | 22px | 700 | Feature column headings, book titles, anything directly under an H2 |
| **H4 — card / eyebrow** | 20px / 13px | 18px / 13px | 600 / 700 | Card titles (20/600) and eyebrows (13/700 uppercase) |
| **Body** | 16–17px | 15–16px | 400 | All paragraph text |
| **Body lede** | 18px | 16px | 400 | The one intro paragraph under an H2 |
| **Small / caption** | 14px | 13px | 400–500 | Captions, attributions, secondary links |

### The rule

**Every H1 is 60/700. Every H2 is 48/700. Every card title is 20/600. No exceptions.**

That is the whole consistency logic. Right now parts of your site use 64/800 and parts use 48/700 and parts use odd in-between weights — that is what makes it feel homemade. FounderOS is consistent because every H2 on every page is the *same* H2.

### Line-height rules

- H1, H2 → 1.1–1.2
- H3 → 1.3
- Body → 1.7–1.75 (this is the single most important move — tight body text reads cheap)
- Body lede → 1.7

### Colour-for-text rules

- Primary text (headings, punch statements): `#1a1a1a`
- Secondary text (all paragraphs, descriptions, captions): `#444`
- Eyebrows + small accents: `#7ec8c8` (teal)
- Teal links: `#3f8d8d` (darker teal — passes contrast)

Never use pure black. Never use grey below `#444`. That is why your site sometimes looks washed out.

---

## 3. Colour system — what goes where

You already have the palette. What was missing was **rules for when to use each**. Here they are.

### The palette

- **White** `#ffffff` — default section background
- **Mist teal** `#f3f9f9` — barely-there background, used exactly where FounderOS uses their light beige. Gives depth without drawing attention.
- **Soft teal** `#def7f7` (or `#b2e5e5`) — emphasis band background (the "look here" colour)
- **Teal** `#7ec8c8` — primary accent: eyebrows, monad symbol, illustrative blocks, quote-strip backgrounds
- **Darker teal** `#3f8d8d` — links only
- **Red** `#ff3131` — primary CTA button, plus small signature accents (a period, a word underline, a thin divider, the dot in a signature). Never a card background or a heading colour.
- **Near-black** `#1a1a1a` — text, book cover backgrounds, very sparing "anchor" elements
- **Body grey** `#444` — all paragraph text

Cream (`#faf9f7`) is off the website palette. We're replacing its role with **mist teal** so the whole site stays in the cool/teal family instead of drifting warm. Notion brand doc stays unchanged — this is just how it lives on the site.

### Rules for backgrounds

Alternate sections between **white** and **mist teal** (or white and **soft teal** for one or two emphasis sections per page). Never two soft-teal sections in a row. Never a grey section. Never a dark-mode section unless it's a single anchor moment on the whole page.

A good page reads: `white → mist teal → white → soft teal → white → mist teal`. That rhythm is what makes FounderOS feel spacious. Mist teal is the "quiet" background; soft teal is the "loud" background; white is the reset.

### The red rule

Red is her signature colour, so it stays on the page — just never loud. The primary button (Book a Call / Apply) is always red. Beyond that, red can appear in **small signature accents**: a period at the end of a single phrase, a short underline under a key word, a 1–2px divider line, a dot inside the monad signature. Never as a heading colour, a card background, a border on a Content card, or anything that reads as "look at me" in a hero area.

Rule of thumb: if you cover the red accents with your thumb and the section still looks composed, the red is at the right level. If the section falls apart without them, there's too much.

### The teal rule

Teal is the brand colour. It should appear:
- In every eyebrow (13px uppercase)
- In the monad symbol (always teal, never red)
- In one background band per page (the soft-teal band)
- In one feature element per section group (a card left-border, a quote-strip background, an underline)

Never use teal for body text. Never use teal for card backgrounds (it looks dated — use white).

---

## 4. Component library — the bento boxes

Five components hold the entire site. Every card on every page should be one of these five. This is what gives FounderOS its "compartmentalised" feel and it is exactly what you want.

Think of these as **LEGO bricks**. Future Lovable prompts should reference the component by name ("use the Content card") instead of re-specifying styles.

### Component A — Content card

**Use for:** values, modalities, pillars, benefits, topic descriptions — any 3- or 4-up list of equally-weighted ideas.

```
background: #ffffff
border: 1px solid rgba(128, 198, 198, 0.4)   ← the "nav border"
border-radius: 12px
padding: 32px
```

Inside:
- Optional eyebrow (13px/700 uppercase, teal `#7ec8c8`, `letter-spacing: 0.12em`, `margin-bottom: 14px`)
- Title: 20px/600, `#1a1a1a`, `margin-bottom: 12px`
- Body: 15px/400, `#444`, `line-height: 1.7`

### Component B — Accent-left card

**Use for:** the same content as Component A, but on a cream or soft-teal background where a white card would wash out. Rule: pick A or B per section, don't mix them.

```
background: #ffffff
border-left: 4px solid #7ec8c8
border-radius: 12px
padding: 32px
```

### Component C — Stat / quote block

**Use for:** the vertical stacked testimonials on the About page, result numbers, or any "punch" moment. Always centred, always on a white or cream background.

- Headline: 28px/600, `#1a1a1a`, `line-height: 1.4`, `max-width: 700px`, centred
- Attribution: 16px/400, `#444`, centred
- Between items: `padding: 60px 0`

### Component D — Feature row (two-column)

**Use for:** anything where a photo anchors a body of text — mission, backstory, speaking feature.

- Layout: `grid-template-columns: 1fr 1fr; gap: 50px; align-items: center`
- Photo column: `border-radius: 8px`, `object-fit: cover`, fills column
- Text column: left-aligned, body 16px/1.75/`#444`
- Alternate which side the photo is on from one Feature row to the next (left in Mission → right in Backstory). This is what creates visual rhythm.
- Mobile: single column, photo above text

### Component E — Quote strip

**Use for:** the one hero quote per page, always teal background for maximum contrast.

```
background: #7ec8c8
border-radius: 12px
padding: 52px 56px
text-align: center
```

- Quote: 22px/400, Playfair Display italic, `#1a1a1a` (near-black), `line-height: 1.55`, `max-width: 720px`, centred
- Attribution: 14px/400, Poppins, `rgba(26,26,26,0.7)`

**Global rule:** On solid teal backgrounds, all text must be near-black (`#1a1a1a` / `text-foreground`), never white. White-on-teal lacks sufficient contrast.

One of these per page, maximum. Two quote strips in a row becomes theatrical.

**Note:** Quote text is the *one* place Playfair italic appears on the website. The attribution below it stays in Poppins. Same rule applies to Component C (Stat / quote block) — the headline can be Playfair italic when the block is a quote, Poppins when it's a stat or punch statement.

---

## 5. The grid — how bento boxes actually sit

This is the piece most sites get wrong. FounderOS looks composed because every card grid uses the **same container width, same gap, same column count**.

### Container

Every section's inner content lives in a container:
- `max-width: 1100px`
- `margin: 0 auto`
- `padding: 0 32px` (left/right breathing room)

### Grid widths

| Content count | Desktop | Tablet | Mobile |
|---|---|---|---|
| 2 items (feature row) | `1fr 1fr` gap 50px | `1fr 1fr` gap 32px | `1fr` gap 24px |
| 3 items (pillars, stats row) | `1fr 1fr 1fr` gap 28px | `1fr 1fr` gap 24px | `1fr` gap 20px |
| 4 items (values, topics, modalities) | `1fr 1fr 1fr 1fr` gap 16px | `1fr 1fr` gap 20px | `1fr` gap 16px |

### Section padding (vertical rhythm)

- Default section: `padding: 100px 0`
- Short divider section (CTA strip): `padding: 60px 0`
- Hero: `padding: 180px 24px 100px`
- Don't vary this. Consistent vertical rhythm is 60% of what makes a site feel designed.

---

## 6. Buttons — one of three, never anything else

### Primary (the red button)

```
background: #ff3131
color: #ffffff
font-size: 12px
font-weight: 600
text-transform: uppercase
letter-spacing: 0.3px
padding: 10px 24px
border-radius: 9999px    ← fully pill-shaped, NOT FounderOS's squarer 6–8px
```

**Button-shape rule:** every button on the site is a full pill (`border-radius: 9999px`). FounderOS uses a small radius which reads modern-tech. We use pill which reads warmer and more premium. Do not copy their button shape.

Text: `BOOK A CALL` or `GET IN TOUCH` or `APPLY`. Nothing else.

### Secondary (outline / ghost)

Same size and shape, but:
```
background: transparent
color: #1a1a1a
border: 1px solid #1a1a1a
```

Use when there are two CTAs and one is lower-weight (e.g. "Learn more" next to "Book a call").

### Tertiary (text link)

For "Read more →" links inside cards. Plain teal text, no pill.

```
font-size: 14px
font-weight: 500
color: #3f8d8d
text-decoration: none
(optional underline on hover)
```

**Never invent a fourth button style.** If you find yourself writing one, pick the closest of these three and trim.

---

## 7. Section anatomy — how to build any section

Every section on the site follows this skeleton. Four optional elements, in this order:

1. **Eyebrow** (optional) — 13px/700 uppercase teal
2. **H2 heading** — 48/700 near-black
3. **Lede paragraph** (optional) — 18/400/1.7, max-width 700px, centred if heading is centred
4. **Component** — one of A, B, C, D, or E from section 4

A section that uses all four elements:

```
[Eyebrow:        SPEAKING & FACILITATION        ]
[H2:             I speak on alignment, energy,   ]
[                and the future of leadership.   ]
[Lede:           One sentence of context.        ]
[Feature row D:  photo left · text right         ]
```

A section that uses two:

```
[H2:             My values.                      ]
[Grid of 4 Content cards A:  ■  ■  ■  ■          ]
```

That's it. If you ever feel a section needs "something more", you probably need another section, not more stuff in this one.

---

## 8. Applying this to the Monad Method page

The Monad Method page has solid bones (same section scale, same heading weights as Home). What it's missing is the **component discipline** above. Here's how to bring it in line.

### Current sections on /the-method

From the audit, your Monad Method page has headings like:
- "Three modalities. One integrated method." (H2)
- "Working with Sidsel." (H2)
- "Beneath every ceiling is a belief." (H2)
- Plus method-specific content

### What each section should become

| Section | Move | Component |
|---|---|---|
| Hero (one big line, no button) | Hero | — |
| "Beneath every ceiling is a belief" | Full-bleed band (soft teal) | Centred H2 + lede |
| "Three modalities. One integrated method." | Bento grid (3 cards) | Component A × 3 (Activations / Inquiry / Sessions) |
| How the modalities work together (process) | Feature row | Component D (diagram or photo + text) |
| Monad OS / LTS (the offers) | Bento grid (2 cards) | Component B × 2 (one per offer), accent-left so they read as distinct |
| Working with Sidsel | Feature row | Component D (your photo + short bio) |
| One quote from a client | Quote strip | Component E |
| Final CTA | Short band | H2 + primary button, `padding: 80px 0` |

### The three modality cards (flagship component of this page)

These should be Content cards (Component A), 3-up grid, identical internal structure:

```
[Eyebrow:   01 · ACTIVATION]         [02 · INQUIRY]         [03 · SESSIONS]
[Title:     Monad Activations]       [Voice-note]           [Strategic]
[                                     [self-inquiry]         [sessions]
[Body:      Guided, music-driven     [Structured workbook   [Private 1:1 sessions
[           energy sessions that...]  questions answered...] that translate...]
```

Numbering them `01 · 02 · 03` with a mid-dot is the cheapest "designed" move you can make and it works.

---

## 9. What to stop doing

Hard rules extracted from the audit. These are where the site is leaking consistency.

- **Don't mix heading weights** in one page (no 800 on one H1 and 700 on another). Every H1 is 700. Every H2 is 700.
- **Don't use Playfair anywhere except quote text** in Component E or Component C. No Playfair in headings, eyebrows, body, or decorative accents on the website.
- **Don't use grey backgrounds** (`#f5f5f5`, `#eee`, etc). Use white, cream, or soft teal.
- **Don't use dark mode as a section background.** One dark anchor per page maximum (e.g. the book cover).
- **Don't invent card shapes.** If a section needs cards, it uses Component A, B, or C.
- **Don't put the red anywhere that reads as loud.** No red card backgrounds, no red headings, no red fills at hero scale. Small signature accents (a period, a word underline, a thin divider, the dot in a signature) are allowed — that's her colour.
- **Don't leave body text at 1.4–1.5 line-height.** Body is always 1.7–1.75.
- **Don't write a new section layout that isn't one of the five moves in section 1.**

---

## 10. How to use this doc in Lovable prompts

Whenever you write a Lovable prompt from now on, the first line should be:

> *Follow the Monad Studios design system: Poppins only, every H2 is 48/700, every card is Component A (white background, 1px teal-40% border, 12px radius, 32px padding), every primary button is red pill uppercase 10px/24px. Don't invent new components.*

Then specify **what content goes where**, not how it should be styled. That separation — content in the prompt, style in the system — is what will stop you from having to re-debug the same grey-border or heavy-weight issues every time.

When you need a new layout, describe it as one of the five moves from section 1 (e.g. "a Feature row with the photo on the right") rather than as a custom block.

---

## Quick reference — the cheat sheet

**Typography:** Poppins only. H1 60/700, H2 48/700, H3 28/700, card title 20/600, body 16/400/1.75, eyebrow 13/700 uppercase teal.

**Colours:** white, mist teal `#f3f9f9`, soft teal `#def7f7`, teal `#7ec8c8`, darker teal `#3f8d8d` (links), red `#ff3131` (one button), black `#1a1a1a`, body `#444`. No greys. No dark mode sections.

**Components:** A Content card (white + teal-40% border), B Accent-left card, C Stat/quote block, D Feature row (photo + text), E Quote strip (teal bg). Nothing else.

**Grid:** container 1100px, 32px side padding. 2-up gap 50, 3-up gap 28, 4-up gap 16. Section padding 100px vertical.

**Section rhythm:** eyebrow → H2 → lede → component. Four parts maximum.

**Page rhythm:** white → mist teal → white → soft teal → white. Never two tinted bands in a row.

**Buttons:** primary red pill (9999px radius, full pill — not FounderOS-square), secondary outline pill, tertiary teal text link. No other styles.
