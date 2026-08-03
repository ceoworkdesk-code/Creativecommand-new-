import Link from "next/link";
import { Radio, ArrowUpRight, ChevronRight, Video, PenTool, Mic, Zap } from "lucide-react";
import PostCard from "../components/PostCard";
import Newsletter from "../components/Newsletter";
import { POSTS, TAGS } from "../data/posts";

const ICONS = { VIDEO: Video, WRITING: PenTool, VOICE: Mic, AUTOMATION: Zap };

export default function Home() {
  return (
    <div>
      <section className="border-b border-cardBorder relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, #7A8B4F 39px, #7A8B4F 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #7A8B4F 39px, #7A8B4F 40px)",
          }}
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 relative">
          <div className="flex items-center gap-3 mb-6">
            <Radio size={16} className="text-accent" />
            <span className="text-xs tracking-[0.25em] font-bold font-mono text-accent">
              TRANSMISSION ACTIVE — NEW INTEL WEEKLY
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] mb-6 font-heading text-ink">
            CREATIVE
            <br />
            <span className="text-oliveBright">COMMAND</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-10 text-muted">
            Field-tested AI tools and tactics for creators who mean business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="px-6 py-3 text-sm font-bold tracking-[0.1em] flex items-center gap-2 bg-oliveBright text-bg font-mono"
            >
              ENTER THE FIELD MANUAL <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 text-sm font-bold tracking-[0.1em] border border-cardBorder text-ink font-mono"
            >
              MEET THE GENERAL
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-cardBorder bg-card">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-wrap gap-x-8 gap-y-3">
          {TAGS.map((t) => {
            const Icon = ICONS[t.label];
            return (
              <div key={t.label} className="flex items-center gap-2">
                <Icon size={14} className={t.color === "accent" ? "text-accent" : "text-oliveBright"} />
                <span className="text-xs tracking-[0.2em] font-bold font-mono text-muted">{t.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.2em] font-bold block mb-2 font-mono text-oliveBright">
              LATEST INTEL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-ink">Field Reports</h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-1 text-sm font-semibold text-oliveBright">
            View all <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {POSTS.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
