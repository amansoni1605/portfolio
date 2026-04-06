export type LibraryStatus = "new" | "replaces" | "keep" | "upgrade" | "remove";

export type LibraryEntry = {
  name: string;
  npm: string;
  status: LibraryStatus;
  replaces?: string;
  reason: string;
};

export type LibraryCategory = {
  label: string;
  icon: string;
  priority: "P1" | "P2" | "P3";
  description: string;
  items: LibraryEntry[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  highlights: string[];
  metrics?: { value: string; label: string }[];
  github?: string;
  live?: string;
  badge: string;
  badgeColor: "blue" | "violet" | "emerald" | "amber" | "rose";
  category: "work" | "personal";
  libraries?: LibraryCategory[];
};

export const projects: Project[] = [
  {
    slug: "finsight-dashboard",
    title: "FinSight Dashboard",
    tagline: "Financial analytics platform with real-time data visualization",
    description:
      "A high-performance financial analytics dashboard featuring real-time portfolio tracking, candlestick charts, and multi-fund comparison tools. Built with a focus on sub-second data refresh and smooth chart rendering.",
    longDescription:
      "FinSight Dashboard is a production-grade financial analytics tool designed for retail investors and fund researchers. The app streams live market data via WebSocket, renders complex financial charts (OHLC, area, volume), and provides multi-fund side-by-side comparison — all while maintaining 60fps UI performance. Data fetching is handled by TanStack Query with optimistic updates and intelligent cache invalidation. The charting layer uses Recharts extended with custom tooltips and responsive containers.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Recharts",
      "Zustand",
      "Tailwind CSS v4",
      "WebSocket",
    ],
    highlights: [
      "Real-time portfolio tracking with WebSocket data streaming",
      "Candlestick, area, and volume charts with custom tooltips",
      "Multi-fund comparison view with synchronized crosshairs",
      "Optimistic UI updates with TanStack Query cache management",
      "95+ Lighthouse performance score on all pages",
    ],
    metrics: [
      { value: "<1s", label: "Data refresh latency" },
      { value: "60fps", label: "Chart render rate" },
      { value: "95+", label: "Lighthouse score" },
    ],
    github: "https://github.com/amansoni1605/finsight-dashboard",
    badge: "Finance",
    badgeColor: "blue",
    category: "personal",
  },
  {
    slug: "ui-component-library",
    title: "AmanUI — Component Library",
    tagline: "Open-source React component library with 40+ typed components",
    description:
      "A fully typed, accessible React component library with 40+ components, Storybook documentation, and Tailwind CSS v4 theming. Designed using the 3-layer architecture pattern adopted at Value Research.",
    longDescription:
      "AmanUI is an open-source component library built from the learnings of architecting 60+ reusable components at Value Research. Every component follows the 3-layer pattern: a headless logic layer, a styled presentation layer, and an integration layer. All components are WCAG 2.1 AA accessible, fully typed with TypeScript generics, and tree-shakeable. The library ships with Storybook docs, automated visual regression tests via Chromatic, and zero runtime dependencies beyond React.",
    tech: [
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Storybook 8",
      "Rollup",
      "Vitest",
      "Chromatic",
      "npm",
    ],
    highlights: [
      "40+ components following the 3-layer architecture pattern",
      "WCAG 2.1 AA accessible — 95+ Lighthouse accessibility score",
      "Full TypeScript generics with strict prop contracts",
      "Storybook 8 documentation with interactive controls",
      "Automated visual regression testing via Chromatic",
      "Tree-shakeable ESM build with zero runtime dependencies",
    ],
    metrics: [
      { value: "40+", label: "Components" },
      { value: "95+", label: "Accessibility score" },
      { value: "0", label: "Runtime dependencies" },
    ],
    github: "https://github.com/amansoni1605/amanui",
    badge: "Open Source",
    badgeColor: "violet",
    category: "personal",
  },
  {
    slug: "headless-blog",
    title: "HeadlessBlog",
    tagline: "CMS-driven blog platform with ISR and MDX support",
    description:
      "A fully CMS-driven blog platform built on Next.js 15 App Router with Payload CMS v3. Pages are managed entirely through the CMS admin with zero code deployments, demonstrating the same architecture used in production at Value Research.",
    longDescription:
      "HeadlessBlog demonstrates a production-ready headless CMS architecture using Next.js 15 App Router and Payload CMS v3. Content editors manage all pages, posts, authors, and tags from the CMS admin — no developer intervention needed for content changes. The site uses Incremental Static Regeneration (ISR) for near-instant cache updates, MDX for rich in-content components, and JSON-LD structured data for SEO. TypeScript types are auto-generated from the Payload schema, eliminating an entire class of runtime bugs.",
    tech: [
      "Next.js 15",
      "Payload CMS v3",
      "TypeScript",
      "MDX",
      "ISR",
      "Tailwind CSS v4",
      "PostgreSQL",
      "JSON-LD",
    ],
    highlights: [
      "Zero-deployment content management via Payload CMS admin",
      "ISR with on-demand revalidation for instant content updates",
      "Auto-generated TypeScript types from Payload schema",
      "MDX support for rich, component-powered blog content",
      "JSON-LD structured data for top-3 SEO rankings",
      "Image optimization with next/image and CDN delivery",
    ],
    metrics: [
      { value: "0", label: "Code deploys for content" },
      { value: "Top 3", label: "SEO ranking potential" },
      { value: "ISR", label: "Cache strategy" },
    ],
    github: "https://github.com/amansoni1605/headless-blog",
    badge: "CMS",
    badgeColor: "emerald",
    category: "personal",
  },
  {
    slug: "vitals-watch",
    title: "VitalsWatch",
    tagline: "Core Web Vitals monitoring and performance reporting tool",
    description:
      "A developer tool for continuous Core Web Vitals monitoring. Runs scheduled Lighthouse audits, tracks LCP, CLS, and INP trends over time, and sends Slack alerts when scores drop below thresholds.",
    longDescription:
      "VitalsWatch automates the performance monitoring workflow that was previously manual at Value Research. It schedules Lighthouse CI runs via GitHub Actions, persists audit results to a PostgreSQL database, and renders trend charts for LCP, CLS, INP, FID, and TTFB across multiple URLs. The dashboard shows delta between runs, highlights regressions in red, and integrates with Slack for real-time alerting. Built as a Next.js App Router project with a Node.js API layer for running audits on demand.",
    tech: [
      "Next.js 15",
      "Node.js",
      "Lighthouse CI",
      "GitHub Actions",
      "PostgreSQL",
      "Recharts",
      "Tailwind CSS v4",
      "Slack API",
    ],
    highlights: [
      "Automated Lighthouse CI audits on schedule and on PR",
      "Tracks LCP, CLS, INP, FID, TTFB trends over time",
      "Regression alerts via Slack with score delta and diff",
      "Multi-URL monitoring with per-page performance breakdown",
      "GitHub Actions integration for CI/CD performance gates",
    ],
    metrics: [
      { value: "5", label: "Core Web Vitals tracked" },
      { value: "Real-time", label: "Slack alerting" },
      { value: "CI/CD", label: "GitHub Actions integration" },
    ],
    github: "https://github.com/amansoni1605/vitals-watch",
    badge: "DevTools",
    badgeColor: "amber",
    category: "personal",
  },
  {
    slug: "form-craft",
    title: "FormCraft",
    tagline: "Type-safe form builder with runtime validation and smart UX",
    description:
      "A type-safe, schema-driven form builder using React Hook Form and Zod. Supports multi-step forms, conditional field visibility, async validation, and real-time field-level error feedback — all with zero runtime type errors.",
    longDescription:
      "FormCraft was born from the need to standardize form handling across a large Next.js codebase. It wraps React Hook Form with a declarative schema API powered by Zod, so form structure, validation, and TypeScript types are all defined in a single source of truth. It supports multi-step wizards with step-level validation, conditional fields that show/hide based on other field values, async validation against APIs, and deeply nested field arrays. The builder also exports a JSON schema representation of any form, enabling CMS-driven form generation.",
    tech: [
      "React 19",
      "TypeScript",
      "React Hook Form",
      "Zod",
      "Tailwind CSS v4",
      "Next.js 15",
      "t3-env",
    ],
    highlights: [
      "Schema-driven forms — one source of truth for types and validation",
      "Multi-step wizard with per-step Zod validation",
      "Conditional field visibility driven by other field values",
      "Async field validation with debounce and loading states",
      "JSON schema export enabling CMS-driven form generation",
      "60% less form boilerplate vs raw React Hook Form setup",
    ],
    metrics: [
      { value: "60%", label: "Less form boilerplate" },
      { value: "0", label: "Runtime type errors" },
      { value: "100%", label: "Type-safe field access" },
    ],
    github: "https://github.com/amansoni1605/form-craft",
    badge: "Library",
    badgeColor: "rose",
    category: "personal",
  },
  {
    slug: "cms-page-renderer",
    title: "CMS-Driven Page Renderer",
    tagline: "Full layout engine with zero-deployment page management",
    description:
      "Built full layout engine where pages are assembled via CMS admin with zero code changes required for deployment. Implemented skeleton loading, React error boundaries, and TypeScript-typed API contracts.",
    longDescription:
      "The CMS-Driven Page Renderer is the flagship architecture built at Value Research. It enables the marketing and content team to compose any page layout — grids, hero sections, fund tables, comparison widgets — purely from the Strapi v5 admin, without touching a single line of code. The renderer dynamically resolves component types from the CMS payload, lazy-loads heavy components via dynamic imports, and wraps each section in a React error boundary so a single broken component never takes down the whole page.",
    tech: [
      "Next.js 15",
      "Strapi v5",
      "TypeScript",
      "TanStack Query",
      "React 19",
      "Tailwind CSS v4",
    ],
    highlights: [
      "Zero-deployment page management via CMS admin",
      "Dynamic component resolution with lazy loading",
      "Per-section React error boundaries for fault isolation",
      "TypeScript-typed API contracts auto-synced with CMS schema",
      "Skeleton loading states for every dynamic section",
    ],
    metrics: [
      { value: "0", label: "Code deploys for content" },
      { value: "60+", label: "Reusable components" },
      { value: "50K+", label: "Monthly Active Users" },
    ],
    github: undefined,
    badge: "Production",
    badgeColor: "blue",
    category: "work",
  },
  {
    slug: "advisor-web-v2",
    title: "Advisor Web v2",
    tagline: "Full-stack modern migration — legacy to Next.js 15 + Payload CMS",
    description:
      "Replaced 810-line fetch utility with Axios interceptors and TanStack Query, reducing data-layer code by 60%. Introduced type-safe env validation via t3-env + Zod, eliminating runtime configuration bugs.",
    longDescription:
      "Advisor Web v2 was a ground-up modernization of a legacy financial advisor platform. The old codebase had a single 810-line fetch utility handling all API calls with no caching, no retry logic, and no type safety. The migration introduced Axios interceptors for auth token injection and global error handling, TanStack Query for server state management with smart caching, Zustand for client state, and Payload CMS v3 for structured content. The result was a 60% reduction in data-layer code and complete elimination of runtime configuration bugs via t3-env + Zod validation.",
    tech: [
      "Payload CMS v3",
      "Zustand",
      "Axios",
      "Tailwind CSS v4",
      "Zod",
      "TanStack Query",
      "t3-env",
      "TypeScript",
    ],
    highlights: [
      "Replaced 810-line fetch utility with Axios interceptors",
      "60% reduction in data-layer code",
      "Type-safe env validation via t3-env + Zod",
      "Zero runtime configuration bugs post-migration",
      "Migrated to Payload CMS v3 from legacy custom CMS",
    ],
    metrics: [
      { value: "60%", label: "Less data-layer code" },
      { value: "810→0", label: "Legacy fetch utility lines" },
      { value: "0", label: "Runtime config bugs" },
    ],
    github: undefined,
    badge: "Migration",
    badgeColor: "violet",
    category: "work",
  },
  {
    slug: "modern-stack-blueprint",
    title: "Modern React Stack Blueprint",
    tagline:
      "Full audit & library roadmap — replacing ~4,200 lines of custom code with battle-tested libraries",
    description:
      "A comprehensive architectural audit of a production Next.js 15 financial platform. Identified every manually-built system (fetch utilities, modal, toast, forms, auth) and mapped each to the correct library. Documented 23 libraries to add, 8 to replace, and 12 to keep.",
    longDescription:
      "After inheriting an advisor-web codebase with 810-line fetch utilities, a custom 18KB form component handling 15 input types, a jQuery-era carousel, hand-rolled toast notifications connected to Redux, and zero test coverage — I produced a full library audit and migration roadmap. The goal: replace ~4,200 lines of manually-written, under-tested code with production-grade, well-maintained libraries. The document covers 12 categories (data fetching, forms, UI primitives, auth, state, CMS, tables, charts, utilities, testing) with prioritized install order, code examples comparing old vs. new patterns, and a final stack comparison table showing the win for each migration decision.",
    tech: [
      "Next.js 15",
      "TanStack Query",
      "Axios",
      "React Hook Form",
      "Zod",
      "Zustand",
      "Payload CMS v3",
      "Auth.js v5",
      "Sonner",
      "Framer Motion",
      "Radix UI",
      "Vitest",
      "Playwright",
      "Sentry",
    ],
    highlights: [
      "Audited 170+ components and 24 Redux slices across a production codebase",
      "Mapped 810-line fetchUtils.ts → 60 lines of Axios + React Query config",
      "Identified 12 Redux server-cache slices replaceable by TanStack Query",
      "Documented removal of jQuery-era libraries (react-slick, flatpickr, jsencrypt)",
      "Produced prioritized P1/P2/P3 install order to de-risk migration",
      "Compared old vs. new patterns with concrete code examples per category",
    ],
    metrics: [
      { value: "~4,200", label: "Lines of custom code replaced" },
      { value: "23", label: "Libraries added" },
      { value: "8", label: "Libraries removed" },
    ],
    github: "https://github.com/amansoni1605/modern-stack-blueprint",
    badge: "Architecture",
    badgeColor: "emerald",
    category: "work",
    libraries: [
      {
        label: "Data Fetching & Caching",
        icon: "⚡",
        priority: "P1",
        description:
          "Replaces 810-line fetchUtils.ts + all Redux server-cache slices. React Query does in 3 lines of config what fetchUtils did in 810.",
        items: [
          {
            name: "TanStack Query v5",
            npm: "@tanstack/react-query",
            status: "replaces",
            replaces: "fetchUtils caching + 12 Redux server-cache slices",
            reason:
              "Eliminates portfolioSlice, fundDetailsSlice, sifSlice, stockExchangeSlice and more. Auto-caching, deduplication, background refetch, stale-while-revalidate — all out of the box.",
          },
          {
            name: "Axios v1",
            npm: "axios",
            status: "replaces",
            replaces: "fetchApi(), postJsonData(), postFormData(), token refresh logic",
            reason:
              "Interceptor pattern: one place for auth headers, one place for 401 refresh, one place for error normalization. 810 lines → ~60 lines.",
          },
          {
            name: "TanStack Query Devtools",
            npm: "@tanstack/react-query-devtools",
            status: "new",
            reason:
              "Dev-only panel showing all active queries, cache state, stale time, and refetch behavior. Replaces console.log debugging of API calls.",
          },
          {
            name: "ky",
            npm: "ky",
            status: "new",
            reason:
              "Tiny fetch wrapper (2.5KB) for Server Components where Axios doesn't work. Use ky for RSC API calls, Axios + React Query for Client Components.",
          },
        ],
      },
      {
        label: "Forms & Validation",
        icon: "📋",
        priority: "P1",
        description:
          "Replaces custom InputElement.tsx — a single 18KB component handling 15 input types, custom date pickers, currency formatting, and hand-rolled validation logic.",
        items: [
          {
            name: "React Hook Form v7",
            npm: "react-hook-form",
            status: "replaces",
            replaces: "Custom InputElement.tsx + formStateSlice Redux slice",
            reason:
              "Uncontrolled inputs, zero re-renders on keystroke, composable with any input component. formStateSlice is eliminated entirely — form state must not be in Redux.",
          },
          {
            name: "Zod v3",
            npm: "zod",
            status: "replaces",
            replaces: "Custom input_condition validation logic in InputElement",
            reason:
              "z.string().min(1).email() is clearer than { type: 'email', error_msg: '...', input_condition: [...] }. Zod errors are typed — TypeScript knows exactly what fields can have errors.",
          },
          {
            name: "@hookform/resolvers",
            npm: "@hookform/resolvers",
            status: "new",
            reason:
              "Bridges React Hook Form with Zod: useForm({ resolver: zodResolver(schema) }) — fully typed form values, declarative validation, no custom logic.",
          },
          {
            name: "React Day Picker v9",
            npm: "react-day-picker",
            status: "replaces",
            replaces: "flatpickr + custom date_format config in InputElement",
            reason:
              "flatpickr is jQuery-era. React Day Picker is React-native, WCAG accessible, TypeScript-native, and integrates with React Hook Form's Controller.",
          },
          {
            name: "react-phone-number-input",
            npm: "react-phone-number-input",
            status: "replaces",
            replaces: "Custom IntPhoneInput.tsx (~200 lines)",
            reason:
              "3KB library handling 250+ countries, E.164 format, validation via libphonenumber-js, works with React Hook Form out of the box.",
          },
        ],
      },
      {
        label: "UI Components & Primitives",
        icon: "🧩",
        priority: "P2",
        description:
          "Radix UI and ShadCN are already installed but underused. Custom Modal, Tooltip, and Alerts duplicate what Radix already provides — with fewer accessibility guarantees.",
        items: [
          {
            name: "Sonner",
            npm: "sonner",
            status: "replaces",
            replaces: "Custom Alerts.tsx + alertSlice Redux slice (~200 lines)",
            reason:
              "toast.success('Done'), toast.error('Failed'), toast.promise(promise). 1.2KB. alertSlice eliminated entirely.",
          },
          {
            name: "Radix UI Dialog",
            npm: "@radix-ui/react-dialog",
            status: "upgrade",
            replaces: "Custom Modal.tsx (manual focus trap, scrollbar calc, body overflow)",
            reason:
              "Already installed via ShadCN. Handles focus trap, Escape close, portal rendering, and body scroll lock — all correctly per WCAG 2.1.",
          },
          {
            name: "Radix UI Tooltip",
            npm: "@radix-ui/react-tooltip",
            status: "upgrade",
            replaces: "Custom Tooltip.tsx (270 lines) + react-tooltip dependency",
            reason:
              "Already installed. Collision-aware positioning, correct ARIA roles, keyboard support, portal rendering. Use Radix Popover for rich/interactive content.",
          },
          {
            name: "Embla Carousel",
            npm: "embla-carousel-react",
            status: "replaces",
            replaces: "react-slick (jQuery-era, SSR issues, inline styles)",
            reason:
              "3KB, touch-native, SSR-safe, no CSS framework dependencies. ShadCN has a built-in Carousel component using Embla.",
          },
          {
            name: "Framer Motion",
            npm: "framer-motion",
            status: "replaces",
            replaces: "Manual CSS translate-x/y class toggling in 10+ components",
            reason:
              "animate={{ x: 0 }} instead of className toggling. Declarative, composable, GPU-accelerated. Also enables page transitions.",
          },
          {
            name: "cmdk",
            npm: "cmdk",
            status: "replaces",
            replaces: "Custom search-all.tsx + search-input.tsx",
            reason:
              "Command palette used in VSCode, Linear, Vercel. Fuzzy search, keyboard navigation, grouping — zero custom code needed.",
          },
          {
            name: "next-themes",
            npm: "next-themes",
            status: "new",
            reason:
              "Zero-flicker dark mode for Next.js. Adding it day one costs nothing and avoids an expensive refactor later. Works with Tailwind's dark: modifier.",
          },
          {
            name: "react-error-boundary",
            npm: "react-error-boundary",
            status: "new",
            reason:
              "The old project has no error boundaries — a single component throwing crashes the entire page. Wrap each feature section so a broken chart doesn't take down the portfolio page.",
          },
        ],
      },
      {
        label: "Authentication",
        icon: "🔐",
        priority: "P1",
        description:
          "useGlobalServices.ts orchestrates auth validation, token refresh, scroll reset, prefetch patching, body padding, and network status — all in one hook. Auth.js separates the auth concern completely.",
        items: [
          {
            name: "Auth.js v5 (NextAuth)",
            npm: "next-auth@beta",
            status: "replaces",
            replaces:
              "Custom useAuth.ts + refreshAuthToken() + validateAndGetUserData + cookie management + useGlobalServices auth logic (~500 lines)",
            reason:
              "JWT + session management, OAuth providers, credential login, middleware-based route protection, Edge runtime support — all in config. No more manual token refresh with retry logic.",
          },
          {
            name: "jose",
            npm: "jose",
            status: "replaces",
            replaces: "jsencrypt (RSA-only, browser-only, uses window)",
            reason:
              "Web-standard JWT signing/verification. Works in Edge Runtime, Cloudflare Workers, and Node.js. Supports RS256, ES256, HS256 — not just RSA.",
          },
        ],
      },
      {
        label: "State Management",
        icon: "📦",
        priority: "P2",
        description:
          "Replace 24 Redux slices with React Query (server state) + Zustand (4 genuine UI slices). Redux + RTK is ~50KB for managing modal, alert, auth, and accessLevel state.",
        items: [
          {
            name: "Zustand v5",
            npm: "zustand",
            status: "replaces",
            replaces: "Redux + @reduxjs/toolkit (~50KB) for 4 UI slices",
            reason:
              "2KB, no Provider, no actions, no reducers, no dispatch. create() + set() + get(). TypeScript-first. Devtools middleware available.",
          },
          {
            name: "Immer",
            npm: "immer",
            status: "new",
            reason:
              "Immutable state updates with mutable syntax inside Zustand's set(). Useful for complex nested state like accessLevel with nested permissions.",
          },
        ],
      },
      {
        label: "CMS & Content",
        icon: "📄",
        priority: "P1",
        description:
          "Replaces Strapi v5 + 640 JSON schema files + strapi-config.ts utilities + Laravel sync service. TypeScript-native CMS embedded directly in Next.js — no separate process.",
        items: [
          {
            name: "Payload CMS v3",
            npm: "payload",
            status: "replaces",
            replaces: "Strapi v5 + 640 JSON schema files + Laravel sync service",
            reason:
              "TypeScript-first, generates types, lives inside Next.js App Router, no separate process, no allow-list file, no manual DB surgery on publish.",
          },
          {
            name: "Drizzle ORM",
            npm: "drizzle-orm + drizzle-kit",
            status: "replaces",
            replaces: "Knex.js (Strapi's ORM) + manual ALTER TABLE migrations",
            reason:
              "Schema-as-code, automatic migrations. No more: 'add a string field → run ALTER TABLE manually'. drizzle-kit generate + drizzle-kit migrate. All schema in version control.",
          },
          {
            name: "@payloadcms/richtext-lexical",
            npm: "@payloadcms/richtext-lexical",
            status: "replaces",
            replaces: "@strapi/blocks-react-renderer + manual RichText component map",
            reason:
              "Payload's Lexical renderer handles all rich text node types automatically with the correct type system — no manual paragraph/heading/link mapping needed.",
          },
          {
            name: "next-intl",
            npm: "next-intl",
            status: "new",
            reason:
              "i18n infrastructure on day one. Adding Hindi/Marathi later becomes a config change, not a rewrite. Type-safe translation keys, locale routing, pluralization.",
          },
        ],
      },
      {
        label: "Tables & Data Grids",
        icon: "📊",
        priority: "P2",
        description:
          "TanStack Table is already installed but underused. Three custom table components (Table.tsx, CustomMobileTable.tsx, TableWithLegends.tsx) should all be rebuilt as TanStack Table instances.",
        items: [
          {
            name: "TanStack Table v8",
            npm: "@tanstack/react-table",
            status: "upgrade",
            replaces: "Custom Table.tsx, CustomMobileTable.tsx, TableWithLegends.tsx",
            reason:
              "Already in package.json. Sorting, filtering, pagination, column resizing, row selection — all via hooks. The 3 custom table files are eliminated.",
          },
          {
            name: "@tanstack/react-virtual",
            npm: "@tanstack/react-virtual",
            status: "new",
            reason:
              "Financial data tables with 500–5000 rows crash the DOM without virtualization. Works directly with @tanstack/react-table via the row virtualizer. Add before building any screener or listing table.",
          },
        ],
      },
      {
        label: "Charts & Visualization",
        icon: "📈",
        priority: "P3",
        description:
          "Keep Highcharts for complex financial charts. Add Recharts for simple charts (pie, bar, area) to avoid Highcharts' 200KB payload for cases that don't need it.",
        items: [
          {
            name: "Highcharts v12",
            npm: "highcharts + highcharts-react-official",
            status: "keep",
            reason:
              "Irreplaceable for complex financial charts — candlestick, stock range, overlapping series with custom tooltips. 200KB is acceptable for this use case.",
          },
          {
            name: "Recharts",
            npm: "recharts",
            status: "new",
            reason:
              "45KB. For simple charts — pie (allocation, holdings distribution), bar, sparklines. Don't use Highcharts where Recharts is sufficient.",
          },
        ],
      },
      {
        label: "Utilities & Developer Experience",
        icon: "🛠",
        priority: "P2",
        description:
          "Type-safe env validation, correct date/number formatting, error monitoring, and a testing setup established on day one.",
        items: [
          {
            name: "@t3-oss/env-nextjs",
            npm: "@t3-oss/env-nextjs",
            status: "new",
            reason:
              "Zod-validated env vars at build time. TypeScript autocomplete on process.env. Build fails on missing vars instead of silent runtime crashes in production.",
          },
          {
            name: "date-fns v3",
            npm: "date-fns",
            status: "replaces",
            replaces: "Custom date formatters scattered across service files",
            reason:
              "200+ functions, individually tree-shakeable. format(date, 'dd MMM yyyy') is readable, tested, and handles DST/leap year edge cases correctly.",
          },
          {
            name: "numeral.js",
            npm: "numeral",
            status: "replaces",
            replaces:
              "Custom number_formatter: 'IND'|'INT'|'NONE' logic + custom tooltipFormatter",
            reason:
              "numeral('1234567').format('0,0') handles both Indian and International number formatting with locale config.",
          },
          {
            name: "Sentry",
            npm: "@sentry/nextjs",
            status: "new",
            reason:
              "The old project has no error monitoring — bugs are discovered by users. Sentry captures client and server errors automatically, with session replay and source-mapped stack traces.",
          },
          {
            name: "Vitest",
            npm: "vitest",
            status: "new",
            reason:
              "10–100x faster than Jest for TypeScript projects. Unit test service files (portfolio service, fund service) that map API responses. Set up day one — coverage grows with the project.",
          },
          {
            name: "Playwright",
            npm: "@playwright/test",
            status: "new",
            reason:
              "End-to-end testing for financial flows. A broken SIP calculator is a business incident. API mocking means tests don't need a live backend.",
          },
          {
            name: "Storybook v8",
            npm: "storybook",
            status: "new",
            reason:
              "Documents all 170+ components in isolation. New developers understand CardWrapper, FallbackLocked, SideBarProgress without spinning up the full app.",
          },
          {
            name: "@next/bundle-analyzer",
            npm: "@next/bundle-analyzer",
            status: "upgrade",
            reason:
              "Run once per sprint to catch bundle bloat before it ships. Catches accidentally double-bundled libraries. Reveals what can be lazy-loaded.",
          },
        ],
      },
      {
        label: "Remove from New Project",
        icon: "🗑",
        priority: "P1",
        description:
          "These 8 libraries must be removed before writing new code. Each has a direct replacement already documented above.",
        items: [
          {
            name: "react-slick",
            npm: "react-slick",
            status: "remove",
            replaces: "Embla Carousel (via ShadCN)",
            reason: "jQuery-era, SSR issues, poor mobile performance, outdated API.",
          },
          {
            name: "react-tooltip",
            npm: "react-tooltip",
            status: "remove",
            replaces: "Radix UI Tooltip (already installed)",
            reason: "Radix Tooltip is more accessible and handles portal/positioning correctly.",
          },
          {
            name: "flatpickr",
            npm: "flatpickr",
            status: "remove",
            replaces: "React Day Picker v9",
            reason: "jQuery-era date picker. Not React-native, poor accessibility.",
          },
          {
            name: "jsencrypt",
            npm: "jsencrypt",
            status: "remove",
            replaces: "jose (Web Crypto API)",
            reason: "RSA-only, browser-only, uses window. jose works in Edge Runtime and Node.js.",
          },
          {
            name: "@strapi/blocks-react-renderer",
            npm: "@strapi/blocks-react-renderer",
            status: "remove",
            replaces: "@payloadcms/richtext-lexical",
            reason: "Strapi-specific. Payload's Lexical renderer replaces it.",
          },
          {
            name: "@reduxjs/toolkit + react-redux",
            npm: "@reduxjs/toolkit react-redux",
            status: "remove",
            replaces: "Zustand (4 UI slices) + TanStack Query (server state)",
            reason: "50KB+ for managing 4 UI slices. Zustand is 2KB. Server state belongs in React Query.",
          },
          {
            name: "Custom fetchUtils.ts",
            npm: "(internal file)",
            status: "remove",
            replaces: "Axios + React Query",
            reason: "810 lines of manual caching, deduplication, auth refresh → 60 lines of Axios interceptors.",
          },
          {
            name: "formStateSlice (Redux)",
            npm: "(internal Redux slice)",
            status: "remove",
            replaces: "React Hook Form local state",
            reason: "Form state is never global. It resets when the form unmounts. It must not be in Redux.",
          },
        ],
      },
    ],
  },
];
