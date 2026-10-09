# CS5610 — A1: HTML, Next.js, and Kambaz

Zongbin Yan

## Run locally

Use Node.js 24, then run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000/labs/lab1 for the HTML exercises or http://localhost:3000 for Kambaz. Keep the terminal running while using the app.

```sh
npm run lint
npm run build
npm start
```

## Pages

- `/labs`: name, repository link, and links to Labs 1–5.
- `/labs/lab1`: headings, paragraphs, lists, tables, images, links, forms, and reusable highlighted components.
- `/account/signin`, `/account/signup`, `/account/profile`: account mockups.
- `/dashboard`: three course cards.
- `/courses/1234/home`: modules and course status.
- `/courses/1234/modules`: three weeks of module content.
- `/courses/1234/assignments`: assignment list.
- `/courses/1234/assignments/123`: assignment editor.

A1 is an HTML interface prototype. Sign in navigates to the dashboard; it does not authenticate. Assignment Save and Cancel return to the list; data is not persisted. Labs 2–5 and the remaining course pages are placeholders for later chapters. Calendar and Inbox show the custom not-found page, as in Chapter 1.

The personal form contains editable sample interests and blank school email, graduation year, and date fields. Review these samples before submission. Do not put real passwords in the source code.

## Deploy and submit

1. Import `zongbinyan931/webdev-client` into Vercel with the Next.js preset and repository root as the root directory.
2. Deploy the `main` branch. No environment variables or database are needed for A1.
3. Check `/labs/lab1`, `/dashboard`, and a course assignment editor on the deployed site.
4. Sign in at https://kambaz.dev/assignments/a1 with your school email and submit the GitHub repository URL and the live Vercel URL there, not in Canvas.

Repository: https://github.com/zongbinyan931/webdev-client

## Course references

Components, exercise identifiers, sample quiz data, and HTML structure follow https://kambaz.dev/book/ch1. Course card and Tesla Bot images come from the course website. A1 intentionally uses simple browser HTML styling; A2 styling belongs on a separate `a2` branch.
