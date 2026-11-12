export const services = [
  {
    title: "React & Next.js Web Development",
    blurb: "Fast, accessible web apps with a frontend architecture that can grow with your product.",
    deliverables: [
      "Next.js apps (App Router, SSR/SSG) in TypeScript",
      "Design systems with Tailwind CSS, shadcn/ui or Material UI",
      "Monorepo setup and shared component libraries",
      "WCAG 2.1 accessibility and Core Web Vitals tuning",
    ],
    proof: "Next.js eCommerce platform for 1.5-2M users",
  },
  {
    title: "React Native Mobile Apps",
    blurb: "iOS and Android apps from one codebase, through to App Store and Play Store release.",
    deliverables: [
      "New apps built from 0 to 1, or migrations of existing apps",
      "Native modules (Swift, Kotlin) and BLE / IoT integration",
      "Offline-first data, push notifications and deep links",
      "Store submission and release management",
    ],
    proof: "Pentair IoT app used in 150+ countries",
  },
  {
    title: "Mobile App Security Hardening",
    blurb: "Find and fix app security gaps before an auditor or attacker does.",
    deliverables: [
      "SSL pinning, device fingerprinting and screen protection",
      "OAuth2/JWT and secure Keychain/Keystore storage",
      "Fixes for Checkmarx and SonarQube findings",
      "Security review report with prioritised fixes",
    ],
    proof: "Sole security owner on a fraud-detection app for a global credit bureau",
  },
  {
    title: "Full-Stack Feature Delivery",
    blurb: "One engineer owning a feature end to end, from API to UI.",
    deliverables: [
      "REST and GraphQL APIs with Node.js or Python (FastAPI)",
      "PostgreSQL, MongoDB and Redis data layers",
      "State management with Redux Toolkit, Zustand or React Query",
      "Checkout, live streaming and real-time features",
    ],
    proof: "Live-streaming product for 100K+ concurrent users",
  },
  {
    title: "Performance & Stability Audit",
    blurb: "A fixed-scope review of your web or mobile app with a clear, prioritised action plan.",
    deliverables: [
      "Profiling of rendering, bundle size, startup time and memory",
      "Review of crash and error logs (Sentry, Crashlytics)",
      "Architecture and code-quality review",
      "Written report and a walkthrough call",
    ],
    proof: "Improved platform stability by 60%+",
  },
  {
    title: "Tech Lead & Team Enablement",
    blurb: "Fractional or embedded technical leadership that helps your team ship faster with fewer regressions.",
    deliverables: [
      "Architecture decisions and technical roadmap",
      "Code-review standards, mentoring and onboarding guides",
      "CI/CD pipelines (Azure DevOps, GitHub Actions) and quality gates",
      "Testing strategy with Jest and React Native Testing Library",
    ],
    proof: "Led a team of 6; reusable utilities cut boilerplate by 75%+",
  },
];

export const hourlyRate = "$35";

export const engagements = [
  {
    name: "Full-time role",
    fit: "Senior or Lead Frontend, Full Stack or React Native roles",
    details: ["Open to relocating to the EU or UK", "Needs visa sponsorship", "Available immediately"],
    rate: "Salary: let's discuss",
    highlight: true,
  },
  {
    name: "Contract / Freelance",
    fit: "Ongoing product work or extra team capacity",
    details: ["Remote, overlapping with EU/UK hours", "Billed hourly or monthly", "Weekly progress updates"],
    rate: "$35 / hour",
  },
  {
    name: "Fixed-scope project",
    fit: "Audits, MVPs and clearly defined builds",
    details: ["Agreed scope and timeline up front", "Milestone-based payments", "Handover docs included"],
    rate: "Fixed quote, based on $35 / hour",
  },
];

export const process = [
  { step: "Intro call", text: "A 30-minute call about your goals, constraints and timeline." },
  { step: "Proposal", text: "A written scope with deliverables, milestones and the engagement model." },
  { step: "Build", text: "Short iterations, with demos and async updates every week." },
  { step: "Handover", text: "Documented code, tests, CI/CD and a knowledge-transfer session." },
];

export const briefTemplate = `Hi Nikunj,

Company / Team:
Role or project type: (full-time / contract / fixed project)
What we're building:
Tech stack:
Main goals or problems to solve:
Timeline / start date:
Budget range or salary band:
Location / time zone:

Thanks!`;
