"use client";

import { useState } from "react";
import Link from "next/link";
import { Crosshair, Menu, X } from "lucide-react";

const LINKS = [
  { label: "HOME", href: "/" },
  { label: "BLOG", href: "/blog" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cardBorder bg-bg/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Crosshair size={20} className="text-oliveBright" />
          <span className="text-lg tracking-wide font-bold font-heading text-ink">
            CREATIVE<span className="text-oliveBright">COMMAND</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-xs tracking-[0.2em] font-semibold font-mono text-muted hover:text-oliveBright pb-1 border-b-2 border-transparent hover:border-oliveBright transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-xs tracking-[0.15em] font-bold font-mono px-4 py-2 bg-accent text-ink"
          >
            JOIN THE COMMAND
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X color="#EDEDED" /> : <Menu color="#EDEDED" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-cardBorder px-5 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.2em] font-semibold font-mono text-muted"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
