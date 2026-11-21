# CS5610 Web Development

Zongbin Yan

The `a5` branch connects Kambaz to an Express server and adds the Chapter 5 HTTP exercises.

## Run locally

Start [webdev-server](https://github.com/zongbinyan931/webdev-server/tree/a5) on port 4000 first. In this project:

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000/labs/lab5 for the HTTP exercises or `/dashboard` for Kambaz. Labs 1–4 remain in the sidebar.

Courses, modules, assignments, enrollments, and accounts are read from Express. Zustand caches the responses for the UI. Changes survive page refreshes while the server is running; restarting the server restores the seed data. Sign-in uses a server session.

Demo accounts: `nick_fury` (faculty) and `iron_man` (student), password `123`. Faculty can edit course content. Students can enroll, unenroll, and view their courses.

## Deployment

Set `NEXT_PUBLIC_HTTP_SERVER` on Vercel to the Render server's HTTPS origin without a trailing slash. Include the Preview environment for the `a5` branch and redeploy after changing the value. The server's `CLIENT_URL` must include the Vercel origin.

## Check

```sh
npm run lint
npm run build
```

Course chapter: https://kambaz.dev/book/ch5
