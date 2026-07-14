"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";

/**
 * Nim-style animated hover background: a soft rounded highlight that
 * follows the hovered item in a list (motion-primitives' AnimatedBackground,
 * simplified). Items render above the shared highlight via layoutId.
 */
export function HoverHighlight({
  items,
  render,
  className,
  itemClassName,
}: {
  items: readonly string[];
  render: (item: string) => ReactNode;
  className?: string;
  itemClassName?: string;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={className} onMouseLeave={() => setActive(null)}>
      {items.map((item) => (
        <div
          key={item}
          className={`relative ${itemClassName ?? ""}`}
          onMouseEnter={() => setActive(item)}
        >
          <AnimatePresence>
            {active === item && (
              <motion.div
                layoutId="hover-highlight"
                className="absolute inset-0 rounded-xl bg-zinc-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />
            )}
          </AnimatePresence>
          <div className="relative">{render(item)}</div>
        </div>
      ))}
    </div>
  );
}
