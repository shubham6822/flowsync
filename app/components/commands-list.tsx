"use client";

import { COMMAND_GROUPS } from "../data";
import { HoverHighlight } from "./motion/hover-highlight";

/** Flat lookup so HoverHighlight (which keys on a string) can find each row. */
const ALL = COMMAND_GROUPS.flatMap((g) => g.commands);
const commandFor = (name: string) => ALL.find((c) => c.command === name);

/**
 * The full command reference — every flowsync-cli command, rendered from
 * COMMAND_GROUPS in data.ts and grouped exactly as the CLI's --help orders
 * them. Mirrors steps-list.tsx's hover idiom.
 */
export function CommandsList() {
  return (
    <div className="flex flex-col gap-8">
      {COMMAND_GROUPS.map((group) => (
        <div key={group.title}>
          <h3 className="mb-1 px-3 text-[11px] font-medium uppercase tracking-wider text-zinc-400">
            {group.title}
          </h3>
          <HoverHighlight
            items={group.commands.map((c) => c.command)}
            className="-mx-3 flex flex-col"
            render={(name) => {
              const command = commandFor(name);
              if (command === undefined) return null;
              return (
                <div className="flex flex-col gap-1 px-3 py-3">
                  <code className="w-fit overflow-x-auto font-mono text-[13px] text-zinc-900">
                    {command.usage}
                  </code>
                  <p className="text-sm text-zinc-500">{command.description}</p>
                </div>
              );
            }}
          />
        </div>
      ))}
    </div>
  );
}
