import Link from "next/link";

import { SITE } from "../data";
import { DiaTextReveal } from "./ui/dia-text-reveal";

/**
 * The shared page header — wordmark + tagline, identical on every route.
 * The wordmark links home; on `/` that's a no-op, on `/docs` it's the way back.
 */
export function SiteHeader() {
  return (
    <header>
      <div className="flex items-center justify-between gap-4">
        <h1 id="wordmark" className="text-3xl font-semibold tracking-tight">
          {/* sweepOnly: the wordmark is always visible; only the gradient
              band sweeps across it. That also makes it render without JS. */}
          <Link href="/">
            <DiaTextReveal text={SITE.name} sweepOnly replayOnHover />
          </Link>
        </h1>
        <Link
          href="/dashboard"
          className="shrink-0 rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
        >
          Dashboard
        </Link>
      </div>
      <p className="text-zinc-500">{SITE.tagline}</p>
    </header>
  );
}
