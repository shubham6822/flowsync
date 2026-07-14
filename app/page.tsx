import Image from "next/image";

import { CopyButton } from "./components/copy-button";
import { InView } from "./components/motion/in-view";
import { StepsList } from "./components/steps-list";
import { TerminalDemo } from "./components/terminal-demo";
import { DiaTextReveal } from "./components/ui/dia-text-reveal";
import { Highlighter } from "./components/ui/highlighter";
import { LINKS, SITE, TOOLS } from "./data";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 pb-16 pt-10 sm:pt-14">
      {/* 1 · Header */}
      <header>
        <h1 id="wordmark" className="text-3xl font-semibold tracking-tight">
          {/* sweepOnly: the wordmark is always visible; only the gradient
              band sweeps across it. That also makes it render without JS. */}
          <DiaTextReveal text={SITE.name} sweepOnly replayOnHover />
        </h1>
        <p className="text-zinc-500">{SITE.tagline}</p>
      </header>

      <main className="flex flex-col gap-10 pt-10">
        {/* 2 · Intro */}
        <p className="text-zinc-600">{SITE.intro}</p>

        {/* 3 · Install */}
        <InView>
          <section aria-label="Install">
            <div className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-zinc-50 py-2 pl-4 pr-2">
              <code className="overflow-x-auto font-mono text-[13px] text-zinc-900">
                {SITE.installCommand}
              </code>
              <CopyButton text={SITE.installCommand} />
            </div>
          </section>
        </InView>

        {/* 4 · Terminal demo */}
        <InView>
          <TerminalDemo />
        </InView>

        {/* 5 · How it works. The heading stays outside InView: rough-notation
            measures the element when it draws, and a mid-flight translate on
            an ancestor puts the annotation at the wrong coordinates. */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-zinc-900">
            <Highlighter action="highlight" color="#f59e0b66" isView>
              How it works
            </Highlighter>
          </h2>
          <InView>
            <StepsList />
          </InView>
        </section>

        {/* 6 · Works with */}
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

      {/* 7 · Footer */}
      <footer className="mt-10 border-t border-zinc-100 pt-6">
        <div className="flex items-center justify-between">
          <p className="text-xs text-zinc-400">© 2026 flowsync</p>
          <div className="flex items-center gap-3">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
                className="opacity-60 transition-opacity hover:opacity-100"
              >
                <Image src={link.icon} alt={link.label} width={16} height={16} className="h-4 w-auto" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
