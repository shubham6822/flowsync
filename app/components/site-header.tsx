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
      <h1 id="wordmark" className="text-3xl font-semibold tracking-tight">
        {/* sweepOnly: the wordmark is always visible; only the gradient
            band sweeps across it. That also makes it render without JS. */}
        <Link href="/">
          <DiaTextReveal text={SITE.name} sweepOnly replayOnHover />
        </Link>
      </h1>
      <p className="text-zinc-500">{SITE.tagline}</p>
    </header>
  );
}
