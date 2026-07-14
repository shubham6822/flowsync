"use client";

import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";
import { TERMINAL_LINES } from "../data";

const TONE_CLASS: Record<string, string> = {
  command: "text-zinc-900",
  plain: "text-zinc-700",
  muted: "text-zinc-400",
  danger: "text-zinc-700",
  banner: "font-semibold tracking-widest text-zinc-900",
};

/**
 * The install → scan story in MagicUI's Terminal: commands type out like a
 * user, output lines fade in, all in sequence once the card scrolls into
 * view. Output is shape-accurate to the real CLI (the FLOWSYNC wordmark is
 * its narrow-terminal banner fallback).
 */
export function TerminalDemo() {
  return (
    <Terminal className="max-h-none max-w-none font-mono">
      {TERMINAL_LINES.map((line, i) =>
        line.kind === "type" ? (
          <TypingAnimation key={i} className={`font-mono ${TONE_CLASS[line.tone] ?? ""}`}>
            {line.text}
          </TypingAnimation>
        ) : (
          <AnimatedSpan key={i} className={`font-mono ${TONE_CLASS[line.tone] ?? ""}`}>
            {line.tone === "danger" ? (
              <span>
                {line.text.replace("[secret-bearing]", "")}
                <span className="text-red-600">[secret-bearing]</span>
              </span>
            ) : (
              line.text
            )}
          </AnimatedSpan>
        ),
      )}
    </Terminal>
  );
}
