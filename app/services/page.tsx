import type { Metadata } from "next";
import Link from "next/link";
import { profile, stats } from "@/lib/data";
import { briefTemplate, engagements, hourlyRate, process, services } from "@/lib/services";
import CopyBrief from "./CopyBrief";

export const metadata: Metadata = {
  title: "Hire Nikunj Patel | Services",
  description:
    "React, Next.js and React Native development, mobile security, performance audits and technical leadership. Available full-time (EU/UK relocation), on contract, or for fixed-scope projects.",
  openGraph: {
    title: "Hire Nikunj Patel | Services",
    description: "Senior/Lead Frontend & Full Stack Engineer · React · React Native · Next.js",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line/60 bg-bg/75 backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="font-mono text-sm font-semibold">
            <span className="text-accent">&lt;</span>NP<span className="text-accent">/&gt;</span>
          </Link>
          <nav className="flex gap-5 text-sm text-muted">
            <Link href="/" className="hover:text-ink">Profile</Link>
            <a href="#services" className="hidden hover:text-ink sm:inline">Services</a>
            <a href="#engage" className="hidden hover:text-ink sm:inline">Engagement</a>
            <a href="#brief" className="hover:text-ink">Get in touch</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="grid-bg pointer-events-none absolute inset-0 print:hidden" />
          <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-20 sm:px-6 sm:pt-24">
            <p className="font-mono text-sm text-accent">Services · Hire me</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Web and mobile products that scale, built by one engineer who owns them end to end.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">
              I&apos;m {profile.name}, a Senior / Lead Frontend & Full Stack Engineer with 12+ years in React,
              React Native, Next.js and TypeScript. You can hire me full-time, on contract, or for a
              fixed-scope project.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-sm">
              <span className="font-semibold text-accent">{hourlyRate}/hour</span>
              <span className="text-muted">for contract & freelance work</span>
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface p-4">
                  <dt className="text-xs text-muted">{s.label}</dt>
                  <dd className="mt-1 text-xl font-semibold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-24 px-4 pb-24 sm:px-6">
          <section id="services">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">What I can do for you</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {services.map((s, i) => (
                <article key={s.title} className="flex flex-col rounded-xl border border-line bg-surface/60 p-6 break-inside-avoid">
                  <span className="font-mono text-xs text-accent-2">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.blurb}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {s.deliverables.map((d) => (
                      <li key={d} className="relative pl-5 text-ink/85 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/70">
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-5 text-xs text-muted">
                    <span className="text-accent">Proof:</span> {s.proof}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="engage">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Ways to work together</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {engagements.map((e) => (
                <div
                  key={e.name}
                  className={`rounded-xl border p-6 ${e.highlight ? "border-accent/60 bg-accent/5" : "border-line bg-surface/60"}`}
                >
                  <h3 className="font-semibold">{e.name}</h3>
                  <p className="mt-1 text-sm text-muted">{e.fit}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {e.details.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="text-accent">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-line pt-4 text-sm font-semibold text-ink">{e.rate}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">How it works</h2>
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <li key={p.step} className="rounded-xl border border-line p-5">
                  <span className="font-mono text-sm text-accent">Step {i + 1}</span>
                  <h3 className="mt-1 font-semibold">{p.step}</h3>
                  <p className="mt-2 text-sm text-muted">{p.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="brief" className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Start with a short brief</h2>
              <p className="mt-4 text-muted">
                Fill in what you can and send it over. I&apos;ll reply within one business day, usually with
                a time for an intro call.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <p>
                  <span className="text-muted">Email: </span>
                  <a href={`mailto:${profile.email}`} className="text-accent hover:underline">{profile.email}</a>
                </p>
                <p>
                  <span className="text-muted">LinkedIn: </span>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                    linkedin.com/in/patidarnikunj
                  </a>
                </p>
                <p>
                  <span className="text-muted">Profile: </span>
                  <Link href="/" className="text-accent hover:underline">Full experience</Link>
                </p>
              </div>
              <div className="mt-8">
                <CopyBrief text={briefTemplate} email={profile.email} />
              </div>
            </div>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-line bg-surface p-5 font-mono text-sm leading-relaxed text-ink/85">
              {briefTemplate}
            </pre>
          </section>
        </div>
      </main>

      <footer className="border-t border-line py-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name} · {profile.location} · {profile.relocation}
      </footer>
    </>
  );
}
