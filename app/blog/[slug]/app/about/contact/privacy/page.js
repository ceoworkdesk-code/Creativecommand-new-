export const metadata = { title: "Privacy Policy — CreativeCommand" };

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-16">
      <span className="text-xs tracking-[0.2em] font-bold block mb-2 font-mono text-oliveBright">
        CLASSIFIED — READER ACCESS
      </span>
      <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading text-ink">Privacy Policy</h1>
      <div className="space-y-6 text-sm leading-relaxed text-muted">
        <p>
          CreativeCommand collects only what's needed to run the site: email addresses for newsletter
          signups, and basic analytics on which reports get read. We don't sell data, and we don't
          share it beyond the tools required to run this blog (email delivery, hosting, analytics).
        </p>
        <p>
          Some links on this site are affiliate links — if you buy a tool through one, we may earn a
          commission at no extra cost to you. Every recommendation is based on real use, not payout size.
        </p>
        <p>
          You can unsubscribe from Daily Orders at any time via the link in any email. To request your
          data be removed, use the Contact page.
        </p>
        <p className="text-ink">Last updated: July 2026.</p>
      </div>
    </div>
  );
}
