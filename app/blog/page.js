"use client";

import { useState } from "react";
import PostCard from "@/components/PostCard";
import { POSTS, TAGS } from "@/data/posts";

export default function Blog() {
  const [filter, setFilter] = useState("ALL");
  const filtered = filter === "ALL" ? POSTS : POSTS.filter((p) => p.tag === filter);

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
      <span className="text-xs tracking-[0.2em] font-bold block mb-2 font-mono text-oliveBright">
        ARCHIVE
      </span>
      <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading text-ink">Field Manual</h1>

      <div className="flex flex-wrap gap-2 mb-10">
        {["ALL", ...TAGS.map((t) => t.label)].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-xs font-bold tracking-[0.15em] border font-mono ${
              filter === f
                ? "bg-oliveBright text-bg border-oliveBright"
                : "text-muted border-cardBorder"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}
