import Link from "next/link";
import { Crosshair } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-cardBorder mt-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Crosshair size={18} className="text-oliveBright" />
            <span className="font-heading font-bold tracking-wide text-ink">CREATIVECOMMAND</span>
          </div>
          <p className="text-sm max-w-xs text-muted">
            Field-tested AI tools and tactics for creators who mean business.
          </p>
        </div>
        <div className="flex gap-12">
          <div>
            <div className="text-xs tracking-[0.2em] mb-3 font-bold font-mono text-oliveBright">SITE</div>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <Link href="/">Home</Link>
              <Link href="/blog">Blog Posts</Link>
              <Link href="/about">About</Link>
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] mb-3 font-bold font-mono text-oliveBright">LEGAL</div>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-4 border-t border-cardBorder text-muted font-mono">
        © 2026 CREATIVECOMMAND — ALL UNITS ACCOUNTED FOR
      </div>
    </footer>
  );
}
