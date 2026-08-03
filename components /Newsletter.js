"use client";

import { useState } from "react";
import { ShieldCheck, Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
      <div className="border border-oliveBright bg-card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck size={18} className="text-oliveBright" />
            <span className="text-xs tracking-[0.2em] font-bold font-mono text-oliveBright">
              JOIN THE COMMAND
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-2 font-heading text-ink">Daily Orders, delivered.</h3>
          <p className="text-sm max-w-md text-muted">
            One dispatch a week. New tools, tested workflows, zero fluff.
          </p>
        </div>
        {sent ? (
          <div className="text-sm font-bold font-mono text-oliveBright">
            ORDERS CONFIRMED. CHECK YOUR INBOX.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSent(true);
              // TODO: wire to your email provider (Resend, ConvertKit, Mailchimp, etc.)
            }}
            className="flex w-full md:w-auto gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="px-4 py-3 text-sm flex-1 md:w-64 outline-none border border-cardBorder bg-bg text-ink"
            />
            <button
              type="submit"
              className="px-5 py-3 text-sm font-bold flex items-center gap-2 shrink-0 bg-accent text-ink font-mono"
            >
              DEPLOY <Mail size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
