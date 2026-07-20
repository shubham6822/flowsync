import Image from "next/image";
import Link from "next/link";

import { InstallCommand } from "@/app/components/install-command";
import { InView } from "@/app/components/motion/in-view";
import { StepsList } from "@/app/components/steps-list";
import { TerminalDemo } from "@/app/components/terminal-demo";
import { Highlighter } from "@/app/components/ui/highlighter";
import { SITE, TOOLS } from "@/app/data";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 pt-10">
      {/* 1 · Intro */}
      <p className="text-zinc-600">{SITE.intro}</p>

      {/* 2 · Install */}
      <InView>
        <section aria-label="Install">
          <InstallCommand />
        </section>
      </InView>

      {/* 3 · Terminal demo */}
      <InView>
        <TerminalDemo />
      </InView>

      {/* 4 · How it works. The heading stays outside InView: rough-notation
          measures the element when it draws, and a mid-flight translate on
          an ancestor puts the annotation at the wrong coordinates. */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-medium text-zinc-900">
            <Highlighter action="highlight" color="#f59e0b66" isView>
              How it works
            </Highlighter>
          </h2>
          <Link
            href="/docs"
            className="group flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
          >
            more info
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
        <InView>
          <StepsList />
        </InView>
      </section>

      {/* 5 · Works with */}
      <InView>
        <section>
          <h2 className="mb-4 text-sm font-medium text-zinc-900">
            Works with
          </h2>
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((tool) => (
              <span
                key={tool.name}
                className="group flex cursor-pointer items-center border border-dotted border-zinc-300 p-3"
              >
                {/* h-5 w-auto keeps non-square marks (Cursor) at their real ratio. */}
                <Image src={tool.icon} alt={tool.name} width={20} height={20} className="h-5 w-auto" />
                {/* Collapsed via max-width so the square expands smoothly on hover. */}
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm text-zinc-600 transition-all duration-300 group-hover:ml-2 group-hover:max-w-40">
                  {tool.name}
                </span>
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-zinc-500">
            Each tool is one adapter — more on the way.
          </p>
        </section>
      </InView>
    </main>
  );
}
