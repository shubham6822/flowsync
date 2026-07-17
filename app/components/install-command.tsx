"use client";

import { useState } from "react";

import { INSTALL_COMMANDS } from "../data";
import { CopyButton } from "./copy-button";

/**
 * shadcn-style install block: a header row with a terminal mark, package-
 * manager tabs (active one rendered as a white pill) and a copy button,
 * with the selected manager's one-liner below. Commands live in
 * INSTALL_COMMANDS in data.ts; the first entry is the default tab.
 */
export function InstallCommand() {
  const [active, setActive] = useState<(typeof INSTALL_COMMANDS)[number]>(
    INSTALL_COMMANDS[0],
  );

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
      <div className="flex items-center gap-1 border-b border-zinc-200 px-2 py-1.5">
        {/* Terminal mark */}
        <span className="mr-1 flex h-5 w-5 items-center justify-center rounded bg-zinc-900 text-zinc-50" aria-hidden>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 7 5 5-5 5" />
            <path d="M13 17h6" />
          </svg>
        </span>
        {INSTALL_COMMANDS.map((entry) => (
          <button
            key={entry.manager}
            type="button"
            onClick={() => setActive(entry)}
            aria-pressed={entry.manager === active.manager}
            className={`cursor-pointer rounded-md px-2 py-0.5 font-mono text-[13px] transition-colors ${
              entry.manager === active.manager
                ? "border border-zinc-200 bg-white font-semibold text-zinc-900 shadow-sm"
                : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            {entry.manager}
          </button>
        ))}
        <span className="ml-auto">
          <CopyButton text={active.command} />
        </span>
      </div>
      <code className="block overflow-x-auto px-4 py-3 font-mono text-[13px] text-zinc-900">
        {active.command}
      </code>
    </div>
  );
}
