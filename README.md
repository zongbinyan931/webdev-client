# CS5610 Kambaz — A2

Zongbin Yan

A Next.js App Router implementation of Chapter 2: CSS selectors, the box model, positioning, float and flex layouts, media queries, React Icons, Tailwind utilities, and styled Kambaz screens.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000/labs. The CSS lab is `/labs/lab2`; Tailwind examples are at `/labs/lab2/tailwind`. Kambaz begins at `/account/signin`.

## Verification

```sh
npm run build
npx eslint app
```

The `a2` branch contains Chapter 2. `main` retains A1. Submit the `a2` branch repository URL and its public Vercel branch preview on kambaz.dev/assignments/a2.

## Implementation notes

- Course examples and exercise structure: https://kambaz.dev/book/ch2
- Tailwind theme and utilities are loaded without a global Preflight reset, so navigating between labs preserves the HTML examples' browser styling. Tailwind-specific resets are scoped to its lab.
- Kambaz screens are UI prototypes for Chapter 2. Sign-in links navigate to the profile, and Save/Cancel return to the assignment list. They do not authenticate users or persist edits. Names, dates and course records in the prototype are sample content.
- Chapter 2's additional AI sample exercises are included with their specified identifiers. Code was developed with Codex assistance.
- The left navigation uses a local N monogram. Dashboard images are kept from A1.
