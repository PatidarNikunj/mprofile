import { achievements, education, experience, profile, skills, stats } from "@/lib/data";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Highlights" },
  { href: "#contact", label: "Contact" },
  { href: "/services", label: "Services" },
];

function SectionTitle({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-10 flex items-baseline gap-3 text-2xl font-semibold tracking-tight sm:text-3xl">
      <span className="font-mono text-sm text-accent">{index}</span>
      {children}
    </h2>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-5 leading-relaxed text-muted before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/70">
      {children}
    </li>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line/60 bg-bg/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="font-mono text-sm font-semibold">
            <span className="text-accent">&lt;</span>NP<span className="text-accent">/&gt;</span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-ink">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="/services"
            className="rounded-full border border-line px-4 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            Hire me
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="grid-bg pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-accent-2/20 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 sm:pt-32">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs text-muted">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available now · {profile.relocation}
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                {profile.name}
              </span>
              .
            </h1>
            <p className="mt-4 text-xl text-ink/90 sm:text-2xl">{profile.title}</p>
            <p className="mt-2 font-mono text-sm text-muted">{profile.stack}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
              >
                View experience
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-line px-5 py-2.5 text-sm transition-colors hover:border-accent"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-line px-5 py-2.5 text-sm transition-colors hover:border-accent"
              >
                GitHub
              </a>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface p-5">
                  <dt className="text-xs text-muted">{s.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-28 px-4 pb-24 sm:px-6">
          {/* About */}
          <section id="about">
            <SectionTitle index="01.">About</SectionTitle>
            <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
              <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
              <ul className="space-y-3 text-sm">
                {[
                  ["Based in", profile.location],
                  ["Open to", "EU & UK roles"],
                  ["Focus", "Frontend, mobile, full stack"],
                  ["Languages", "English (fluent), learning German"],
                ].map(([k, v]) => (
                  <li key={k} className="flex justify-between gap-4 border-b border-line pb-3">
                    <span className="text-muted">{k}</span>
                    <span className="text-right">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Experience */}
          <section id="experience">
            <SectionTitle index="02.">Experience</SectionTitle>
            <ol className="relative space-y-12 border-l border-line pl-6 sm:pl-8">
              {experience.map((job) => (
                <li key={job.company} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[39px]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold">
                      {job.role} <span className="text-accent">@ {job.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{job.location}</p>

                  {job.projects?.map((p) => (
                    <div key={p.name} className="mt-5 rounded-xl border border-line bg-surface/60 p-5">
                      <h4 className="mb-3 text-sm font-medium text-ink">{p.name}</h4>
                      <ul className="space-y-2 text-sm">
                        {p.points.map((pt) => (
                          <Bullet key={pt}>{pt}</Bullet>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {job.points && (
                    <ul className="mt-4 space-y-2 text-sm">
                      {job.points.map((pt) => (
                        <Bullet key={pt}>{pt}</Bullet>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </section>

          {/* Skills */}
          <section id="skills">
            <SectionTitle index="03.">Skills</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((g) => (
                <div key={g.group} className="rounded-xl border border-line bg-surface/60 p-5">
                  <h3 className="mb-4 text-sm font-semibold">{g.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li
                        key={s}
                        className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section id="achievements">
            <SectionTitle index="04.">Highlights</SectionTitle>
            <ul className="grid gap-4 md:grid-cols-2">
              {achievements.map((a, i) => (
                <li key={a} className="flex gap-4 rounded-xl border border-line bg-surface/60 p-5">
                  <span className="font-mono text-sm text-accent-2">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-relaxed text-muted">{a}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section id="education">
            <SectionTitle index="05.">Education & Certifications</SectionTitle>
            <ul className="divide-y divide-line rounded-xl border border-line">
              {education.map((e) => (
                <li key={e.title} className="flex flex-wrap items-baseline justify-between gap-2 p-5">
                  <div>
                    <p className="font-medium">{e.title}</p>
                    <p className="text-sm text-muted">{e.place}</p>
                  </div>
                  <span className="font-mono text-xs text-muted">Grade {e.grade}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section id="contact" className="text-center">
            <p className="font-mono text-sm text-accent">06. What&apos;s next?</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s build something.</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              I&apos;m looking for Senior or Lead Frontend, Full Stack and React Native roles. I&apos;m
              open to relocating to the EU or UK.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
              >
                Say hello
              </a>
              <a
                href="/services"
                className="inline-block rounded-lg border border-line px-6 py-3 text-sm transition-colors hover:border-accent"
              >
                See services
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-line py-8 text-center text-xs text-muted">
        <div className="flex justify-center gap-6">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-ink">GitHub</a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink">Email</a>
        </div>
        <p className="mt-3">© {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </>
  );
}
