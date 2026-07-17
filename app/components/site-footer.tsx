import Image from "next/image";

import { LINKS, REPORT_BUG } from "../data";

/** The shared page footer — © line + icon links, identical on every route. */
export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-zinc-100 pt-6">
      <div className="flex items-center justify-between">
        <p className="text-xs text-zinc-400">© 2026 flowsync</p>
        <div className="flex items-center gap-3">
          <a
            href={REPORT_BUG.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-200 px-2.5 py-1 text-[11px] text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900"
          >
            {REPORT_BUG.label}
          </a>
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
  );
}
