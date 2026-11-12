"use client";

import { useState } from "react";

export default function CopyBrief({ text, email }: { text: string; email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const mailto = `mailto:${email}?subject=${encodeURIComponent("Hiring enquiry")}&body=${encodeURIComponent(text)}`;

  return (
    <div className="flex flex-wrap gap-3 print:hidden">
      <a
        href={mailto}
        className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
      >
        Email this brief
      </a>
      <button
        type="button"
        onClick={copy}
        className="rounded-lg border border-line px-5 py-2.5 text-sm transition-colors hover:border-accent"
      >
        {copied ? "Copied ✓" : "Copy template"}
      </button>
    </div>
  );
}
