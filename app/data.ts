export const SITE = {
  name: "flowsync",
  tagline: "Move your AI coding setup between machines and repos.",
  intro:
    "Your agents, skills, MCP servers and instructions live in dotfiles scattered across every machine and repo. flowsync scans them, shows you exactly what you have, and moves it anywhere with one command.",
  installCommand: "npm install -g flowsync-cli",
};

export const STEPS = [
  {
    command: "flowsync scan",
    description:
      "Inventories your Claude Code, Codex and Cursor config at user and project scope.",
    soon: false,
  },
  {
    command: "flowsync push",
    description:
      "You pick the artifacts; anything credential-shaped is excluded by default.",
    soon: false,
  },
  {
    command: "flowsync pull",
    description: "Restore everything on a new machine.",
    soon: true,
  },
] as const;

export const TOOLS = [
  { name: "Claude Code", icon: "/tools/claude-code.svg" },
  { name: "OpenAI Codex", icon: "/tools/codex.svg" },
  { name: "Cursor", icon: "/tools/cursor.svg" },
] as const;

/** Icon-only footer links; label is the accessible name and hover tooltip. */
export const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/shubham6822/flowsync",
    icon: "/tools/github.svg",
  },
  {
    label: "npm",
    href: "https://www.npmjs.com/package/flowsync-cli",
    icon: "/tools/npm.svg",
  },
] as const;

/** The real CLI's block-letter banner (src/ui/banner.ts in flowsync-cli). */
export const BANNER_LINES = [
  "███████╗██╗      ██████╗ ██╗    ██╗███████╗██╗   ██╗███╗   ██╗ ██████╗",
  "██╔════╝██║     ██╔═══██╗██║    ██║██╔════╝╚██╗ ██╔╝████╗  ██║██╔════╝",
  "█████╗  ██║     ██║   ██║██║ █╗ ██║███████╗ ╚████╔╝ ██╔██╗ ██║██║     ",
  "██╔══╝  ██║     ██║   ██║██║███╗██║╚════██║  ╚██╔╝  ██║╚██╗██║██║     ",
  "██║     ███████╗╚██████╔╝╚███╔███╔╝███████║   ██║   ██║ ╚████║╚██████╗",
  "╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝ ╚══════╝   ╚═╝   ╚═╝  ╚═══╝ ╚═════╝",
];

export type TermColor =
  | "white" | "dim" | "cyan" | "green" | "yellow" | "red" | "badge" | "heading";
export interface TermSeg { t: string; c?: TermColor }
export interface TermLine { kind: "type" | "span" | "banner"; segs: TermSeg[] }

/**
 * The full story, install → scan, colored exactly like the real CLI in a
 * dark terminal: cyan badge/accents, green selections, yellow machine-local,
 * red secret-bearing, dim rails. `kind: "type"` lines are typed like a user;
 * `kind: "span"` lines fade in like program output; `kind: "banner"` renders
 * BANNER_LINES with the CLI's top-bright/bottom-dim fade.
 */
export const TERMINAL_LINES: TermLine[] = [
  { kind: "type", segs: [{ t: "$ npm install -g flowsync-cli" }] },
  { kind: "span", segs: [{ t: "added 42 packages in 2s", c: "dim" }] },
  { kind: "type", segs: [{ t: "$ flowsync scan" }] },
  { kind: "banner", segs: [] },
  { kind: "span", segs: [{ t: "┌  ", c: "dim" }, { t: " flowsync scan ", c: "badge" }] },
  { kind: "span", segs: [{ t: "◆  ", c: "cyan" }, { t: "What do you want to scan?" }] },
  { kind: "span", segs: [{ t: "│  ", c: "dim" }, { t: "● ", c: "green" }, { t: "Project level " }, { t: " (.claude/ in this repo)", c: "dim" }] },
  { kind: "span", segs: [{ t: "│  ○ Global level   ○ Both", c: "dim" }] },
  { kind: "span", segs: [{ t: "◇  ", c: "green" }, { t: "Found " }, { t: "3", c: "green" }, { t: " AI coding tools" }] },
  { kind: "span", segs: [{ t: "●  ", c: "cyan" }, { t: "You're using " }, { t: "Claude Code", c: "cyan" }, { t: " in this project — pre-selected." }] },
  { kind: "span", segs: [{ t: "│  ", c: "dim" }, { t: "The others were only found in your home folder.", c: "dim" }] },
  { kind: "span", segs: [{ t: "◆  ", c: "cyan" }, { t: "Which tools do you want to scan?" }] },
  { kind: "span", segs: [{ t: "│  ", c: "dim" }, { t: "■ ", c: "green" }, { t: "Claude Code " }, { t: "(used in this project)", c: "dim" }] },
  { kind: "span", segs: [{ t: "│  □ OpenAI Codex   □ Cursor", c: "dim" }] },
  { kind: "span", segs: [{ t: "●  ", c: "cyan" }, { t: "Selected 1 tool: " }, { t: "Claude Code", c: "cyan" }] },
  { kind: "span", segs: [{ t: "│", c: "dim" }] },
  { kind: "span", segs: [{ t: "│  ", c: "dim" }, { t: "Claude Code", c: "heading" }] },
  { kind: "span", segs: [{ t: "│  ", c: "dim" }, { t: "Project scope  " }, { t: "~/dev/my-app", c: "cyan" }] },
  { kind: "span", segs: [{ t: "│  ", c: "dim" }, { t: "Instructions       ", c: "dim" }, { t: "CLAUDE.md" }] },
  { kind: "span", segs: [{ t: "│  ", c: "dim" }, { t: "Settings           ", c: "dim" }, { t: "settings.local.json  " }, { t: "[machine-local]", c: "yellow" }] },
  { kind: "span", segs: [{ t: "│  ", c: "dim" }, { t: "Skills             ", c: "dim" }, { t: "create-doc" }] },
  { kind: "span", segs: [{ t: "│  ", c: "dim" }, { t: "MCPs               ", c: "dim" }, { t: "github  " }, { t: "[secret-bearing]", c: "red" }] },
  { kind: "span", segs: [{ t: "│", c: "dim" }] },
  { kind: "span", segs: [{ t: "│  ", c: "dim" }, { t: "1 secret-bearing artifact", c: "red" }, { t: " — push excludes these by default" }] },
  { kind: "span", segs: [{ t: "│  ", c: "dim" }, { t: "1 machine-local artifact", c: "yellow" }, { t: " — push excludes these by default" }] },
  { kind: "span", segs: [{ t: "└  ", c: "dim" }, { t: "5 artifacts found" }] },
];
