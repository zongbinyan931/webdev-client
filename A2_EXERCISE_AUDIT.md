# A2 technical coverage audit

Checked against Chapter 2 at https://kambaz.dev/book/ch2. This records implementation coverage of the On Your Own and With AI exercise pairs; it is not a statement of independent authorship or a grading guarantee.

Lab paths below are relative to `app/labs/lab2`; Kambaz paths are relative to `app/(kambaz)`.

| Section | File(s) | Implementation checked |
|---|---|---|
| Inline styles | `page.tsx` | Green/yellow paragraph; purple/white sample |
| Tag selectors | `index.css` | Scoped h3 styling; navy/white h2 |
| ID selectors | `page.tsx, index.css` | Third ID and additional sample ID |
| Class selectors | `page.tsx, index.css` | Two shared classes on paragraphs and headings |
| Document selectors | `page.tsx, index.css` | Direct child and additional descendant |
| Cascade | `page.tsx, index.css` | Tag/class/ID specificity; red sample winner |
| Foreground | `ForegroundColors.tsx` | Mixed text/span colors and sample |
| Background | `BackgroundColors.tsx` | Contrasting example; corrected yellow/black sample |
| Borders | `Borders.tsx` | Extra combination; dashed yellow sample |
| Padding and box model | `Padding.tsx, BoxModel.tsx` | Per-side padding and border-box comparison |
| Corners | `Corners.tsx` | Extra corner combination and left-rounded sample |
| Dimensions/display | `Dimensions.tsx, Display.tsx` | Fixed dimensions, inline comparison and 120x60 sample |
| Relative positioning | `Positions.tsx` | Both extra boxes within relative demo |
| Absolute positioning | `Positions.tsx` | Both extra boxes within original positioned parent |
| Fixed positioning | `Positions.tsx` | Corner badges, including bottom-left sample |
| Z-index | `Zindex.tsx` | Five boxes in one stack; sample z-index 20 |
| Float | `Float.tsx` | Opposite float; right sample and clearing |
| Float grid | `GridLayout.tsx` | Additional unequal grids |
| Flex | `Flex.tsx` | Fourth and fifth rows; fixed/growing columns |
| Media queries | `MediaQueriesDemo.tsx/.css` | Extra wide border, narrow purple rule, matching checklist |
| React Icons | `ReactIconsSampler.tsx` | Additional icon families and sample icons |
| Tailwind spacing | `tailwind/TailwindSpacing.tsx` | Directional spacing plus sample |
| Tailwind typography | `tailwind/TailwindTypography.tsx` | Named text plus medium-weight sample |
| Tailwind backgrounds | `tailwind/TailwindBackgroundColors.tsx` | Teal and indigo examples |
| Tailwind responsive card | `tailwind/TailwindResponsiveDesign.tsx` | Personalized card and separate image/text sample |
| Tailwind filters | `tailwind/TailwindFilters.tsx` | Contrast, grayscale and brightness examples |
| Tailwind grids | `tailwind/TailwindGrids.tsx` | 5/7 and 3/9 columns |
| Kambaz navigation | `Navigation.tsx` | Icons and sample Help link |
| Dashboard | `dashboard/page.tsx` | Personalized card and fourth sample card |
| Course navigation | `courses/[cid]/Navigation.tsx` | Links, active border and sample link |
| Modules | `courses/[cid]/modules/` | CSS Layout Practice and sample module |
| Home/status | `courses/[cid]/home/` | Status actions and sample action; responsive visibility |
| People | `courses/[cid]/people/table/page.tsx` | Ten rows, including three additional sample people |
| Assignments | `courses/[cid]/assignments/page.tsx` | Practice assignment plus separate sample assignment |
| Assignment editor | `courses/[cid]/assignments/[aid]/page.tsx` | Labeled form and sample notes; Cancel/Save navigation |
| Account screens | `account/` | Styled forms/navigation and sample sign-in note |

## Validation

- Production build and TypeScript passed.
- ESLint: zero errors, one existing anonymous-default-export warning in postcss.config.mjs.
- 55 local browser assertions passed, covering exercise elements, computed colors/positioning, seven media-query boundary widths, extra roster/assignment entries, editor return navigation and root redirect.
- Reviewed screenshots of the five-box stack, mobile sample card and mobile sign-in screen.
- Followed the explicit Home exercise instruction to hide Status below lg and sidebars below md. The end-of-chapter summary says “stacks,” which conflicts with that detailed instruction and its AI prompt.
- Authentication and persistent assignment saving are outside this styling exercise; Save/Cancel navigate back to the list.
- Course-site grading checks must be rerun separately on the deployed URL; local assertions are not the official grader.
