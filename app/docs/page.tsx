import type { Metadata } from "next";

import { CommandsList } from "../components/commands-list";
import { InstallCommand } from "../components/install-command";
import { InView } from "../components/motion/in-view";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { Highlighter } from "../components/ui/highlighter";

export const metadata: Metadata = {
  title: "flowsync — documentation",
  description:
    "Every flowsync command: scan, push, pull, share, login, logout and whoami — what each does and how to call it.",
};

export default function Docs() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 pb-16 pt-10 sm:pt-14">
      {/* 1 · Header — same as the homepage; the wordmark links back to / */}
      <SiteHeader />

      <main className="flex flex-col gap-10 pt-10">
        {/* 2 · Install */}
        <InView>
          <section aria-label="Install">
            <InstallCommand />
          </section>
        </InView>

        {/* 3 · Command reference. The heading stays outside InView:
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

      {/* 4 · Footer — same as the homepage */}
      <SiteFooter />
    </div>
  );
}
