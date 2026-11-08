# CS5610 Web Development

Zongbin Yan

The `a4` branch adds Chapter 4 client state to the Kambaz application.

## Run

```sh
npm ci
npm run dev
```

Open http://localhost:3000/labs/lab4 for the event, form, Context, Zustand, Redux, and custom-hook exercises. Labs 1–3 remain available in the sidebar.

Kambaz starts at `/dashboard`. Courses, modules, assignments, and enrollments use Zustand stores seeded from the local JSON files. The account context manages sign-in, sign-up, and profile changes. Modules and Home display the same shared module state.

Demo sign-in accounts: `nick_fury` (faculty) and `iron_man` (student), both with password `123`. Signed-out visitors can explore the course-editing prototype. Signed-in students see enrollment controls and read-only course content. Profile requires a signed-in user.

Changes last while navigating within Kambaz and reset on a full reload. The Lab 4 saved-note example uses localStorage. This chapter has no backend authentication or server persistence.

## Check

```sh
npm run lint
npm run build
```

Course chapter: https://kambaz.dev/book/ch4
