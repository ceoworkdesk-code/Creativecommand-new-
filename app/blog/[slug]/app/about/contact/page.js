"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-5 md:px-8 py-16">
      <span className="text-xs tracking-[0.2em] font-bold block mb-2 font-mono text-oliveBright">
        OPEN CHANNEL
      </span>
      <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading text-ink">Contact</h1>

      {sent ? (
        <div className="border border-oliveBright bg-card p-8 text-center">
          <ShieldCheck className="mx-auto mb-3 text-oliveBright" size={28} />
          <p className="font-bold font-mono text-ink">MESSAGE RECEIVED. RESPONSE INCOMING.</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            // TODO: wire to your form backend (Formspree, Resend, API route, etc.)
          }}
          className="space-y-4"
        >
          <div>
            <label className="text-xs font-bold tracking-[0.15em] block mb-2 font-mono text-muted">
              NAME
            </label>
            <input required className="w-full px-4 py-3 text-sm border border-cardBorder bg-card text-ink outline-none" />
          </div>
          <div>
            <label className="text-xs font-bold tracking-[0.15em] block mb-2 font-mono text-muted">
              EMAIL
            </label>
            <input required type="email" className="w-full px-4 py-3 text-sm border border-cardBorder bg-card text-ink outline-none" />
          </div>
          <div>
            <label className="text-xs font-bold tracking-[0.15em] block mb-2 font-mono text-muted">
              MESSAGE
            </label>
            <textarea required rows={5} className="w-full px-4 py-3 text-sm border border-cardBorder bg-card text-ink outline-none resize-none" />
          </div>
          <button
            type="submit"
            className="px-6 py-3 text-sm font-bold tracking-[0.1em] bg-accent text-ink font-mono"
          >
            SEND TRANSMISSION
          </button>
        </form>
      )}
    </div>
  );
}
