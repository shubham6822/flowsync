"use client";

import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";
import { BANNER_LINES, TERMINAL_LINES, type TermColor } from "../data";

/* Dark-terminal palette matching the real CLI's colors. */
const COLOR_CLASS: Record<TermColor, string> = {
  white: "text-zinc-100",
  dim: "text-zinc-500",
  cyan: "text-cyan-400",
  green: "text-green-400",
  yellow: "text-yellow-300",
  red: "text-red-400",
  badge: "bg-cyan-400 px-1.5 text-zinc-950",
  heading: "font-semibold text-zinc-100 underline",
};

/**
 * The install → scan story in MagicUI's Terminal, styled like the real CLI
 * in a dark terminal: block-letter banner, cyan badge and accents, green
 * selections, yellow [machine-local], red [secret-bearing]. Commands type
 * out like a user; output lines fade in, all in sequence once in view.
 */
export function TerminalDemo() {
  return (
    <Terminal className="h-96 max-w-none border-zinc-800 bg-zinc-950 font-mono">
      {TERMINAL_LINES.map((line, i) => {
        if (line.kind === "type") {
          return (
            <TypingAnimation key={i} className="font-mono text-zinc-100">
              {line.segs[0]?.t ?? ""}
            </TypingAnimation>
          );
        }
        if (line.kind === "banner") {
          return (
            <AnimatedSpan key={i} className="font-mono">
              {/* The CLI fades the banner top-bright to bottom-dim. */}
              {BANNER_LINES.map((row, r) => (
                <span
                  key={r}
                  className={`block text-[8px] leading-[1.4] ${r < 3 ? "text-zinc-100" : "text-zinc-500"}`}
                >
                  {row}
                </span>
              ))}
            </AnimatedSpan>
          );
        }
        return (
          <AnimatedSpan key={i} className="font-mono text-zinc-100">
            <span>
              {line.segs.map((seg, s) => (
                <span key={s} className={seg.c ? COLOR_CLASS[seg.c] : undefined}>
                  {seg.t}
                </span>
              ))}
            </span>
          </AnimatedSpan>
        );
      })}
    </Terminal>
  );
}
