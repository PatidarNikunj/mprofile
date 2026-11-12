export const profile = {
  name: "Nikunj Patel",
  title: "Senior / Lead Frontend & Full Stack Engineer",
  stack: "React · React Native · Next.js · TypeScript",
  location: "Pune, India",
  relocation: "Open to relocation (EU & UK)",
  email: "patelnikunjmca93@gmail.com",
  linkedin: "https://www.linkedin.com/in/patidarnikunj/",
  github: "https://github.com/PatidarNikunj",
  summary:
    "Senior and Lead Frontend and Full Stack Engineer with 12+ years building web and mobile products that scale. I work mostly in React, React Native, Next.js and TypeScript. My work covers system design, architecture, security, testing and leading teams, and I usually own features from start to finish on platforms that serve millions of users.",
};

export const stats = [
  { value: "12+", label: "Years of experience" },
  { value: "1.5-2M", label: "Users on retail platform" },
  { value: "150+", label: "Countries served (IoT)" },
  { value: "100K+", label: "Concurrent live-stream users" },
];

export type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  projects?: { name: string; points: string[] }[];
  points?: string[];
};

export const experience: Role[] = [
  {
    company: "Cybage Software Pvt Ltd",
    role: "System Analyst / Tech Lead",
    period: "Feb 2023 – Present",
    location: "Pune, India",
    projects: [
      {
        name: "Large-scale Retail System for Mobile & Web",
        points: [
          "Led and mentored engineers building a React Native and Next.js eCommerce platform for 1.5-2M users. Refactoring, monitoring and more test coverage improved stability by 60%+.",
          "Owned architecture decisions across TypeScript, Redux and design patterns. Built shared design-system components (Material UI, shadcn/ui, Tailwind CSS) in a monorepo.",
          "Built reusable utilities for writing components and calculation logic. They cut boilerplate by 75%+ and multiple teams adopted them.",
          "Owned quality gates with Azure CI/CD, Checkmarx and SonarQube, and managed App Store and Play Store releases.",
        ],
      },
      {
        name: "Enterprise Fraud Detection & Investigation Mobile Platform",
        points: [
          "Led a team of 6 engineers and owned delivery of an app for a global credit bureau that verifies identity and detects suspicious activity.",
          "Was the sole owner of app security: SSL pinning, device fingerprinting, screen protection, OAuth2/JWT and Keychain/Keystore.",
          "Built iOS and Android CI/CD pipelines in Azure that automate code reviews and dev and prod deployments.",
        ],
      },
    ],
  },
  {
    company: "Pedals Up Innovation LLP",
    role: "Senior React Native Development Engineer",
    period: "Dec 2021 – Jan 2023",
    location: "Ahmedabad, India",
    points: [
      "Owned the mobile and web experience for a global residential, commercial and industrial IoT ecosystem, with customers in 150+ countries.",
      "Connected 30+ BLE devices with React Native and native modules, for millions of end users.",
      "Created SDKs and shared component libraries, published to npm and documented in Storybook. Developer adoption rose by up to 70%.",
      "Applied clean architecture and SOLID principles with Jest testing. The SonarQube quality-gate pass rate rose by 30%+.",
    ],
  },
  {
    company: "Gigs Live (Y Combinator startup)",
    role: "Senior Software Engineer",
    period: "Aug 2020 – Dec 2021",
    location: "Remote",
    points: [
      "Built a live-streaming product from 0 to 1 on mobile, tablet, web and TV with React Native and React, for 100K+ concurrent users.",
      "Owned the single-order checkout for event tickets and merchandise, plus live conversation during events.",
      "Created shared components and test utilities that cut repetitive code by 70%+.",
    ],
  },
  {
    company: "NINtec Systems Ltd (Gateway Group)",
    role: "Senior Software Engineer",
    period: "Feb 2017 – Aug 2020",
    location: "Ahmedabad, India",
    points: [
      "Delivered React, React Native and native Android apps for international clients in automotive, logistics, insurance, eCommerce and mining.",
      "Worked with international client, product and design teams to turn requirements into well-tested features.",
    ],
  },
  {
    company: "Early Career",
    role: "Software Engineer",
    period: "Apr 2014 – Feb 2017",
    location: "India",
    points: [
      "Built native Android apps in Java and Kotlin, including barcode scanning, social networking, VOIP and streaming apps, and a custom keyboard with in-app purchases.",
      "Designed and built ERP systems from scratch.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend & UI Architecture",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "shadcn/ui", "Storybook", "Monorepo", "Server-Driven UI", "WCAG 2.1"],
  },
  {
    group: "Mobile & Security",
    items: ["React Native", "Expo", "Android (Java/Kotlin)", "Native Modules (Swift)", "SSL Pinning", "Device Fingerprinting", "OAuth2/JWT", "Keychain/Keystore"],
  },
  {
    group: "State & APIs",
    items: ["Redux Toolkit", "Zustand", "React Query", "GraphQL", "REST APIs", "Axios"],
  },
  {
    group: "Architecture & Quality",
    items: ["Clean Architecture", "SOLID", "Performance Optimization", "Jest", "RN Testing Library", "SonarQube", "Checkmarx"],
  },
  {
    group: "Cloud & Delivery",
    items: ["Azure", "CI/CD", "App & Play Store Releases", "Vite", "Webpack", "Sentry", "Crashlytics"],
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "Python (FastAPI)", "PostgreSQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    group: "AI & Ways of Working",
    items: ["GitHub Copilot", "Claude", "Agile/Scrum", "Figma", "Technical Leadership"],
  },
];

export const achievements = [
  "Improved enterprise eCommerce platform stability by 60%+ for 1.5-2M users.",
  "Owned the mobile and web experience for a global IoT ecosystem used in 150+ countries.",
  "Built a live-streaming platform that handles 100K+ concurrent users.",
  "Led 6 engineers to design and secure an enterprise fraud-detection mobile platform.",
  "Led a cross-functional team to the finals of the Cybage Internal Hackathon with an AI-driven NFR tool (Next.js, FastAPI, single-agent LLM system).",
];

export const education = [
  { title: "Master of Computer Applications (MCA)", place: "Kadi Sarva Vishwa Vidyalaya, Gujarat", grade: "7.77 / 10" },
  { title: "Bachelor of Computer Applications (BCA)", place: "Ganpat University, Gujarat", grade: "7.87 / 10" },
  { title: "Advanced Executive Program in Cybersecurity", place: "IIIT Bangalore", grade: "3.98 / 4.00" },
];
