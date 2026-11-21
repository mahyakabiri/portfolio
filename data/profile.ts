// All site content lives here. Edit this file to update the portfolio.
export const profile = {
  name: "Mahya Kabiri",
  initials: "MK",
  roles: ["Senior Frontend Developer", "React & Next.js", "AI-assisted workflows", "Performance & testing"],
  location: "Remote, hybrid or on-site",
  available: true,
  lede:
    "Front-end engineer with <strong>7+ years</strong> building responsive, well-tested web apps with <strong>React, Next.js and TypeScript</strong>. I bring AI-assisted workflows into everyday engineering to speed up testing, code review and documentation.",
  resumeUrl: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Mahya-Kabiri-Resume.pdf`,
  stats: [
    { value: "7+", label: "years building for the web" },
    { value: "60M+", label: "users on the product I work on" },
    { value: "−80%", label: "E2E test-writing time" },
    { value: "+40%", label: "test coverage at Snapp" },
  ],
  // Measured with Lighthouse 12 (mobile, simulated slow 4G) on the production build.
  vitals: [
    { name: "FCP", value: "1.1 s", pct: 95 },
    { name: "LCP", value: "2.4 s", pct: 86 },
    { name: "TBT", value: "60 ms", pct: 96 },
    { name: "CLS", value: "0.01", pct: 98 },
  ],
  lighthouse: 98,
  projects: [
    {
      title: "Super-app integration SDK",
      context: "Snapp",
      description:
        "An NPM package that handles iframe configuration, user authentication and cross-app messaging between the Snapp super app and its ventures. Every venture now plugs into one shared integration layer.",
      impact: ["10+ ventures", "1 shared layer"],
      tags: ["TypeScript", "NPM", "iframe", "Auth"],
      thumb: 0,
      feature: true,
    },
    {
      title: "AI-powered Playwright workflow",
      context: "Snapp",
      description:
        "A standard workflow for generating, running and debugging E2E tests with Claude, Codex and Cursor, shared across the team.",
      impact: ["−80% test-writing time"],
      tags: ["Playwright", "Claude Code", "Cursor"],
      thumb: 3,
    },
    {
      title: "Next.js migration",
      context: "Snapp",
      description:
        "Led the move to Next.js with SSR and SSG, plus code splitting, lazy loading, React Query caching and image optimization.",
      impact: ["+50% SEO score", "−40% load time"],
      tags: ["Next.js", "SSR/SSG", "React Query"],
      thumb: 2,
    },
    {
      title: "KYC & onboarding automation",
      context: "Kian Digital",
      description:
        "KYC tools and a fully automated onboarding flow for a trading app, plus a Gatsby landing page tuned for speed and SEO.",
      impact: ["1 week → < 1 hour", "+90% Lighthouse"],
      tags: ["React", "Gatsby", "Fintech"],
      thumb: 4,
    },
    {
      title: "Villa detail page redesign",
      context: "Shab",
      description:
        "Full rewrite and redesign of the villa detail page for an Airbnb-style vacation rental marketplace.",
      impact: ["+30% engagement"],
      tags: ["React", "Redux-Saga", "styled-components"],
      thumb: 1,
    },
  ],
  skills: [
    {
      title: "Core",
      note: "What I build with every day",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "React Server Components", "Node.js", "HTML5", "CSS / SASS", "Tailwind"],
    },
    {
      title: "Quality & accessibility",
      note: "How I keep releases stable and inclusive",
      items: ["Vitest", "Jest", "React Testing Library", "Playwright", "Cypress", "Storybook", "WCAG 2.1", "ARIA", "Keyboard & focus"],
    },
    {
      title: "State, tooling & AI",
      note: "How I ship and scale",
      items: ["Redux Toolkit", "Zustand", "React Query", "Webpack", "Docker", "GitLab CI", "ArgoCD", "Sentry", "Grafana", "Claude Code", "Cursor", "Copilot"],
    },
  ],
  experience: [
    {
      period: "01/2023 — Present",
      role: "Senior Front End Developer",
      company: "Snapp",
      current: true,
      points: [
        "Built the NPM package that connects the Snapp super app with 10+ ventures (iframe setup, auth, cross-app messaging).",
        "Designed an AI-powered Playwright E2E workflow that cut test-writing time by 80%.",
        "Led the Next.js migration with SSR/SSG, improving SEO scores by 50% and cutting load time by 40%+.",
        "Raised test coverage by 40% with Vitest and Playwright, and introduced AI-assisted code review (−35% routine review time).",
        "Mentored and onboarded new frontend engineers.",
      ],
    },
    {
      period: "05/2022 — 01/2023",
      role: "Front End Developer",
      company: "Karnameh",
      points: [
        "Refactored the app with Next.js and React Query, improving Lighthouse performance by up to 40%.",
        "Managed a three-person frontend team and planned new features.",
      ],
    },
    {
      period: "12/2020 — 05/2022",
      role: "Front End Developer",
      company: "Kian Digital",
      points: [
        "Built KYC tools and automated onboarding, taking user identification from a week to under an hour.",
        "Built a Gatsby landing page that improved Lighthouse performance and SEO by 90%.",
      ],
    },
    {
      period: "11/2019 — 12/2020",
      role: "Front End Developer",
      company: "Shab",
      points: [
        "Rewrote and redesigned the villa detail page, lifting engagement by 30%.",
        "Built an auto-updating React panel that automated call center and CRM work.",
      ],
    },
    {
      period: "09/2015 — 12/2019",
      role: "B.S. Software Engineering",
      company: "University of Science and Culture",
      points: [],
    },
  ],
  contacts: [
    { label: "Email", value: "mahya.kabiri21@gmail.com", href: "mailto:mahya.kabiri21@gmail.com", copy: true },
    { label: "LinkedIn", value: "linkedin.com/in/mahya-kabiri", href: "https://www.linkedin.com/in/mahya-kabiri" },
    { label: "GitHub", value: "github.com/mahyakabiri", href: "https://github.com/mahyakabiri" },
  ],
} as const;

export type Profile = typeof profile;
