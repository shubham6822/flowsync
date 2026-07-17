# Architecture

`flowsync` (this repo) is the marketing landing page for **flowsync-cli**. It's a
two-page Next.js App Router site (`/` + `/docs`) — no backend, no database, no auth. Its only
job is to explain the CLI and get people to `npm install -g flowsync-cli`.

This repo is unrelated to the `flowsync-api` / `flowsync-cli` codebases beyond
sharing content (install command, banner ASCII, step descriptions).

## Stack

- **Next.js 16** (App Router, `app/`) with **React 19**
- **Tailwind CSS 4** via `@tailwindcss/postcss` — no `tailwind.config`, styling
  lives in `app/globals.css` and utility classes
- **motion** (`motion/react`) for scroll-triggered and hover animations
- **rough-notation** for the hand-drawn highlight effect on "How it works"
- TypeScript throughout, `cn()` helper (`lib/utils.ts`) wraps `clsx` + `tailwind-merge`

Per `AGENTS.md`: this Next.js version has breaking changes from training data —
check `node_modules/next/dist/docs/` before relying on remembered Next.js APIs.

## Layout

```
app/
  layout.tsx          Root layout: fonts (Geist), <html>/<body>, metadata/OG tags
  page.tsx             The homepage — sectioned by HTML comments; links to /docs
  docs/page.tsx        The documentation page — same header/footer, full command
                        reference rendered from COMMAND_GROUPS
  data.ts              All copy and content: SITE, STEPS, COMMAND_GROUPS, TOOLS,
                        LINKS, BANNER_LINES, colors/etc. for the terminal demo —
                        the single source of truth for text shown on the page
  globals.css          Tailwind entry + global styles
  components/
    site-header.tsx     Shared header (wordmark + tagline); wordmark links home
    site-footer.tsx     Shared footer (© line + icon LINKS)
    install-command.tsx  shadcn-style install block: package-manager tabs (npm/
                          pnpm/yarn/bun from INSTALL_COMMANDS) + copy button
    copy-button.tsx     "Copy" button for the install command
    steps-list.tsx      Renders STEPS from data.ts ("How it works")
    commands-list.tsx    Renders COMMAND_GROUPS from data.ts (/docs command reference)
    terminal-demo.tsx    Wires BANNER_LINES/demo content into ui/terminal.tsx
    motion/
      in-view.tsx        Fade/slide-in wrapper triggered on scroll into view
      hover-highlight.tsx Hover-triggered highlight animation
    ui/
      terminal.tsx        Fake terminal UI (typing animation, banner render)
      dia-text-reveal.tsx  Gradient-sweep text reveal (used on the "flowsync" wordmark)
      highlighter.tsx      rough-notation wrapper (underline/highlight/circle marks)

lib/
  utils.ts             cn() — clsx + tailwind-merge

public/tools/           Tool logos (Claude Code, Codex, Cursor, GitHub, npm)
```

`page.tsx` is intentionally flat: one component, numbered sections
(header → intro → install → terminal demo → how it works → works with →
footer). Content is not hardcoded in JSX — it's pulled from `data.ts` so copy
changes don't touch component code.

## Rendering model

Everything is a **Server Component** by default (App Router). Interactive
pieces (`copy-button`, `terminal-demo`, `in-view`, `dia-text-reveal`,
`highlighter`) opt into `"use client"` individually — the header wordmark is
built to render meaningfully with JS disabled (`sweepOnly` on
`DiaTextReveal`), with the animation layered on top.

There are two routes — `/` and `/docs` — with no API routes and no data
fetching; both pages are static and fully prerendered.

## Extending

- **New copy/content** → edit `app/data.ts`, not the components.
- **New page section** → add a numbered section in `page.tsx`, following the
  existing comment-numbering convention.
- **New tool logo** → drop an SVG in `public/tools/`, add an entry to `TOOLS`
  in `data.ts`.
- **New animation primitive** → goes in `components/motion/` (behavior) vs.
  `components/ui/` (visual components that use motion/rough-notation
  internally, e.g. `highlighter.tsx`, `dia-text-reveal.tsx`).
