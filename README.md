# CS5610 Web Development

Zongbin Yan

Next.js coursework for HTML, CSS, JavaScript, and React. The `a3` branch contains Chapter 3.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000/labs. Lab 3 is at `/labs/lab3`, with TypeScript examples at `/labs/lab3/types`. Labs 1 and 2 remain available from the sidebar.

Kambaz starts at `/account/signin`. The dashboard at `/dashboard` lists the courses in `app/(kambaz)/database/courses.json`. Each course has its own modules, assignments, and people, selected by the course ID in the URL.

## Check the project

```sh
npm run lint
npm run build
```

The application uses local JSON files for course data. Sign-in and assignment editing are interface exercises: they do not authenticate users or save changes. Save and Cancel return to the assignment list. Calendar, Inbox, History, and Announcements are navigation placeholders for this chapter.

Course instructions and reference data: https://kambaz.dev/book/ch3
