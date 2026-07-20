import type { Metadata } from "next";

import { CommandsList } from "@/app/components/commands-list";
import { InstallCommand } from "@/app/components/install-command";
import { InView } from "@/app/components/motion/in-view";
import { Highlighter } from "@/app/components/ui/highlighter";

export const metadata: Metadata = {
  title: "flowsync — documentation",
  description:
    "Every flowsync command: scan, push, pull, share, login, logout and whoami — what each does and how to call it.",
};

export default function Docs() {
  return (
    <main className="flex flex-col gap-10 pt-10">
      {/* 1 · Install */}
      <InView>
        <section aria-label="Install">
          <InstallCommand />
        </section>
      </InView>

      {/* 2 · Command reference. The heading stays outside InView:
          rough-notation measures the element when it draws, and a mid-flight
          translate on an ancestor puts the annotation at the wrong coordinates. */}
      <section>
        <h2 className="mb-4 text-sm font-medium text-zinc-900">
          <Highlighter action="highlight" color="#f59e0b66" isView>
            Documentation
          </Highlighter>
        </h2>
        <p className="mb-6 text-sm text-zinc-500">
          Every flowsync command — run any of them with <code className="font-mono text-[13px] text-zinc-700">--help</code> for
          the same reference in your terminal.
        </p>
        <InView>
          <CommandsList />
        </InView>
      </section>
    </main>
  );
}
