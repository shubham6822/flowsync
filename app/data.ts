export const SITE = {
  name: "flowsync",
  tagline: "Move your AI coding setup between machines and repos.",
  intro:
    "Your agents, skills, MCP servers and instructions live in dotfiles scattered across every machine and repo. flowsync scans them, shows you exactly what you have, and moves it anywhere with one command.",
  installCommand: "npm install -g flowsync-cli",
};

/**
 * The install one-liner per package manager — tabs in the install block
 * (shadcn-style). First entry is the default tab.
 */
export const INSTALL_COMMANDS = [
  { manager: "npm", command: "npm install -g flowsync-cli" },
  { manager: "pnpm", command: "pnpm add -g flowsync-cli" },
  { manager: "yarn", command: "yarn global add flowsync-cli" },
  { manager: "bun", command: "bun add -g flowsync-cli" },
] as const;

export const STEPS = [
  {
    command: "flowsync login",
    description:
      "Log in once in your browser with a one-time device code.",
    soon: false,
  },
  {
    command: "flowsync push",
    description:
      "Scans your config and you pick what to send; anything credential-shaped is excluded by default.",
    soon: false,
  },
  {
    command: "flowsync pull",
    description: "Restore everything on a new machine or repo.",
    soon: false,
  },
] as const;

/**
 * The full command reference — every flowsync-cli command, grouped the way the
 * CLI's own `--help` orders them: the sync workflow first, then account
 * management. Descriptions mirror each command's `summary`/`details` in
 * flowsync-cli (src/commands/<name>/index.ts) so the page never drifts from
 * what the tool actually does. `usage` is the one-line invocation hint.
 */
export interface Command {
  command: string;
  usage: string;
  description: string;
}
export interface CommandGroup {
  title: string;
  commands: Command[];
}

export const COMMAND_GROUPS: CommandGroup[] = [
  {
    title: "Sync workflow",
    commands: [
      {
        command: "scan",
        usage: "flowsync scan [--scope user|project|all] [--tool <id>]",
        description:
          "Detect your Claude Code, Codex and Cursor tools and inventory their config at user and project scope — classifying every artifact as portable, machine-local or secret-bearing.",
      },
      {
        command: "push",
        usage: "flowsync push [--scope …] [--tool <id>]",
        description:
          "Pick which scanned configs to send to your flowsync account. Portable artifacts are pre-checked; anything credential-shaped is excluded unless you opt in. Requires login.",
      },
      {
        command: "pull",
        usage: "flowsync pull [--scope …] [--tool <id>] [--force] [--share <code>]",
        description:
          "Restore your pushed setup onto this machine or repo. Additive — existing files and MCP servers are skipped, never deleted, unless you pass --force.",
      },
      {
        command: "share",
        usage: "flowsync share [--scope …] [--tool <id>]",
        description:
          "Turn one config — a file, a whole skill, or an MCP server — into an npx one-liner anyone can pull. Links expire after 7 days; machine-local and secret-bearing configs can't be shared.",
      },
    ],
  },
  {
    title: "Account",
    commands: [
      {
        command: "login",
        usage: "flowsync login",
        description: "Log in to flowsync in your browser with a one-time device code.",
      },
      {
        command: "logout",
        usage: "flowsync logout",
        description: "Revoke and remove the stored session on this machine.",
      },
      {
        command: "whoami",
        usage: "flowsync whoami",
        description: "Print the currently logged-in account.",
      },
    ],
  },
] as const;

export const TOOLS = [
  { name: "Claude Code", icon: "/tools/claude-code.svg" },
  { name: "OpenAI Codex", icon: "/tools/codex.svg" },
  { name: "Cursor", icon: "/tools/cursor.svg" },
] as const;

/** The footer's "Report a bug" button — goes straight to GitHub issues. */
export const REPORT_BUG = {
  label: "Report a bug",
  href: "https://github.com/shubham6822/flowsync/issues",
} as const;

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
