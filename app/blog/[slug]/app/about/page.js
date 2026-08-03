import Link from "next/link";

export const metadata = { title: "About — CreativeCommand" };

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-5 md:px-8 py-16">
      <span className="text-xs tracking-[0.2em] font-bold block mb-2 font-mono text-oliveBright">
        PERSONNEL FILE
      </span>
      <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading text-ink">The General</h1>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4 text-muted">
          <p>
            CreativeCommand is run by one operator, testing every tool in the field before it makes
            it into a report. No sponsored placements dressed up as reviews — every recommendation
            comes from actual deployment across real content production.
          </p>
          <p>
            The mission is simple: cut through the noise of a thousand "best AI tools" lists with
            reports that state exactly what worked, what broke, and what's worth your budget.
          </p>
          <p>
            Every post is filed like a mission report — situation, tools deployed, results, verdict —
            so you can act on it in minutes, not hours.
          </p>
        </div>
        <div className="border border-cardBorder bg-card p-6 h-fit">
          <div className="text-xs font-bold tracking-[0.15em] mb-4 font-mono text-oliveBright">
            RANK & FILE
          </div>
          <ul className="text-sm space-y-3 text-muted">
            <li><span className="text-ink">Callsign:</span> The General</li>
            <li><span className="text-ink">Unit:</span> CreativeCommand</li>
            <li><span className="text-ink">Specialty:</span> AI Tools & Workflow Ops</li>
            <li><span className="text-ink">Status:</span> Active Deployment</li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 block text-center w-full py-2 text-xs font-bold tracking-[0.15em] bg-oliveBright text-bg font-mono"
          >
            OPEN CHANNEL
          </Link>
        </div>
      </div>
    </div>
  );
}
