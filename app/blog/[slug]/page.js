import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS } from "../../../data/posts";
import Stamp from "../../../components/Stamp";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default function PostDetail({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-16">
      <Link
        href="/blog"
        className="text-xs font-bold tracking-[0.15em] mb-8 flex items-center gap-1 font-mono text-oliveBright"
      >
        ← BACK TO FIELD MANUAL
      </Link>
      <div className="flex items-center gap-3 mb-4">
        <Stamp>{post.status}</Stamp>
        <span className="text-[10px] tracking-[0.15em] font-mono text-muted">
          {post.dossier} · {post.read} READ
        </span>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight font-heading text-ink">
        {post.title}
      </h1>
      <p className="text-lg mb-8 text-muted">{post.excerpt}</p>
      <div className="border-t border-cardBorder pt-8 space-y-4">
        <p className="text-ink">
          This dossier is a placeholder — swap in your real write-up here. Keep the tone direct: what
          you tested, what held up, what didn't, and the exact recommendation.
        </p>
        <p className="text-muted">Structure suggestion: Situation → Tools deployed → Results → Verdict.</p>
      </div>
    </div>
  );
}
