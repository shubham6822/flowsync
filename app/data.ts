export const SITE = {
  name: "flowsync",
  tagline: "Sync your AI coding setup across machines.",
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

export const LINKS = [
  { label: "github.com/shubham6822/flowsync", href: "https://github.com/shubham6822/flowsync" },
  { label: "npmjs.com/package/flowsync-cli", href: "https://www.npmjs.com/package/flowsync-cli" },
] as const;

/**
 * The full story, install → scan, with shape-accurate output of the real CLI
 * (see flowsync-cli): banner (narrow-terminal wordmark fallback), the scope
 * question asked first, detection, then the inventory. `kind: "type"` lines
 * are typed like a user; `kind: "span"` lines fade in like program output.
 * "danger" is reserved for [secret-bearing] — the only non-zinc color.
 */
export const TERMINAL_LINES = [
  { kind: "type", text: "$ npm install -g flowsync-cli", tone: "command" },
  { kind: "span", text: "added 42 packages in 2s", tone: "muted" },
  { kind: "type", text: "$ flowsync scan", tone: "command" },
  { kind: "span", text: "FLOWSYNC", tone: "banner" },
  { kind: "span", text: "┌  flowsync scan", tone: "plain" },
  { kind: "span", text: "◆  What do you want to scan?", tone: "command" },
  { kind: "span", text: "│  ● Project level  (.claude/ in this repo)", tone: "plain" },
  { kind: "span", text: "│  ○ Global level   ○ Both", tone: "muted" },
  { kind: "span", text: "◇  Found 3 AI coding tools", tone: "plain" },
  { kind: "span", text: "●  You're using Claude Code in this project — pre-selected.", tone: "muted" },
  { kind: "span", text: "│  Project scope  ~/dev/my-app", tone: "plain" },
  { kind: "span", text: "│  Instructions       CLAUDE.md", tone: "plain" },
  { kind: "span", text: "│  Skills             create-doc", tone: "plain" },
  { kind: "span", text: "│  MCPs               github  [secret-bearing]", tone: "danger" },
  { kind: "span", text: "│                     filesystem", tone: "plain" },
  { kind: "span", text: "◇  6 artifacts found", tone: "plain" },
] as const;

export type TerminalLine = (typeof TERMINAL_LINES)[number];
