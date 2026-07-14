"use client";

import { STEPS } from "../data";
import { HoverHighlight } from "./motion/hover-highlight";

const stepFor = (command: string) => STEPS.find((s) => s.command === command);

export function StepsList() {
  return (
    <HoverHighlight
      items={STEPS.map((s) => s.command)}
      className="-mx-3 flex flex-col"
      render={(command) => {
        const step = stepFor(command);
        if (step === undefined) return null;
        return (
          <div className="flex flex-col gap-0.5 px-3 py-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-zinc-900">
                {step.command}
              </span>
              {step.soon && (
                <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-[11px] text-zinc-500">
                  coming soon
                </span>
              )}
            </div>
            <p className="text-sm text-zinc-500">
              {step.description}
            </p>
          </div>
        );
      }}
    />
  );
}
