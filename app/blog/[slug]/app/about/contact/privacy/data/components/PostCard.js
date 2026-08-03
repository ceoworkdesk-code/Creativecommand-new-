import Link from "next/link";
import { ChevronRight, Video, PenTool, Mic, Zap } from "lucide-react";
import Stamp from "./Stamp";

const ICONS = { VIDEO: Video, WRITING: PenTool, VOICE: Mic, AUTOMATION: Zap };

export default function PostCard({ post }) {
  const Icon = ICONS[post.tag] || Zap;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="text-left border border-cardBorder bg-card p-5 flex flex-col gap-4 transition-transform hover:-translate-y-1 group"
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] tracking-[0.15em] font-bold font-mono text-muted">
          {post.dossier}
        </span>
        <Stamp>{post.status}</Stamp>
      </div>

      <div className="flex items-center gap-2">
        <Icon size={14} className="text-oliveBright" />
        <span className="text-[10px] tracking-[0.2em] font-bold font-mono text-oliveBright">
          {post.tag}
        </span>
      </div>

      <h3 className="text-xl font-bold leading-snug font-heading text-ink group-hover:underline">
        {post.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>

      <div className="flex items-center justify-between pt-2 border-t border-cardBorder">
        <span className="text-[10px] tracking-[0.15em] font-mono text-muted">{post.read} READ</span>
        <ChevronRight size={16} className="text-oliveBright" />
      </div>
    </Link>
  );
}
