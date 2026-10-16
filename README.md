# CS5610 - A1: HTML, Next.js, and Kambaz

Zongbin Yan

HTML exercises and a Kambaz interface prototype built with Next.js and TypeScript for CS5610. The `main` branch contains A1; CSS and Tailwind work for A2 is on the `a2` branch.

## Run locally

With Node.js 24 installed:

```sh
npm ci
npm run dev
```

Open http://localhost:3000 for Kambaz or http://localhost:3000/labs/lab1 for the HTML exercises.

To lint or build the project:

```sh
npm run lint
npm run build
npm start
```

## Main pages

- `/labs`: lab navigation and repository link.
- `/labs/lab1`: HTML exercises covering text, lists, tables, images, links, and forms.
- `/account/signin`, `/account/signup`, `/account/profile`: account screens.
- `/dashboard`: course cards.
- `/courses/1234/home` and `/courses/1234/modules`: course modules.
- `/courses/1234/assignments`: assignment list.
- `/courses/1234/assignments/123`: assignment editor.

## Scope

A1 is a static interface prototype with basic HTML styling. Sign in links to the dashboard without authentication. Assignment Save and Cancel return to the list without saving data. Form values are sample data. Labs 2-5 and the remaining course pages are placeholders in this branch; Calendar and Inbox lead to the not-found page.

## Course reference

The exercises and Kambaz structure follow [Chapter 1](https://kambaz.dev/book/ch1). Course card and Tesla Bot images are from the course website.
