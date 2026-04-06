import { projects } from "@/lib/projects";
import type { LibraryCategory, LibraryEntry, LibraryStatus } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

const projectColorMap = {
  blue: { badge: "bg-blue-50 text-blue-700 border-blue-100", metric: "text-blue-600", dot: "bg-blue-400" },
  violet: { badge: "bg-violet-50 text-violet-700 border-violet-100", metric: "text-violet-600", dot: "bg-violet-400" },
  emerald: { badge: "bg-emerald-50 text-emerald-700 border-emerald-100", metric: "text-emerald-600", dot: "bg-emerald-400" },
  amber: { badge: "bg-amber-50 text-amber-700 border-amber-100", metric: "text-amber-600", dot: "bg-amber-400" },
  rose: { badge: "bg-rose-50 text-rose-700 border-rose-100", metric: "text-rose-600", dot: "bg-rose-400" },
};

const statusConfig: Record<LibraryStatus, { label: string; classes: string }> = {
  new: { label: "NEW", classes: "bg-blue-50 text-blue-700 border-blue-100" },
  replaces: { label: "REPLACES", classes: "bg-red-50 text-red-700 border-red-100" },
  keep: { label: "KEEP", classes: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  upgrade: { label: "MAXIMIZE", classes: "bg-amber-50 text-amber-700 border-amber-100" },
  remove: { label: "REMOVE", classes: "bg-slate-100 text-slate-500 border-slate-200 line-through" },
};

const priorityConfig = {
  P1: { label: "P1 — Day One", classes: "bg-red-100 text-red-700" },
  P2: { label: "P2 — Sprint 1", classes: "bg-amber-100 text-amber-700" },
  P3: { label: "P3 — Pre-launch", classes: "bg-green-100 text-green-700" },
};

function LibraryCard({ item }: { item: LibraryEntry }) {
  const s = statusConfig[item.status];
  const isRemove = item.status === "remove";

  return (
    <div
      className={`rounded-xl border p-5 flex flex-col gap-3 ${
        isRemove
          ? "bg-slate-50 border-slate-100 opacity-70"
          : item.status === "keep"
          ? "bg-white border-emerald-100"
          : item.status === "new"
          ? "bg-white border-blue-100"
          : item.status === "replaces"
          ? "bg-white border-red-100"
          : "bg-white border-amber-100"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded border tracking-wider ${s.classes}`}
        >
          {s.label}
        </span>
      </div>

      <div>
        <div className={`font-bold text-sm text-slate-900 mb-0.5 ${isRemove ? "line-through" : ""}`}>
          {item.name}
        </div>
        <div className="text-xs font-mono text-blue-500">{item.npm}</div>
      </div>

      {item.replaces && (
        <div className="text-xs text-red-600 bg-red-50 rounded-lg px-3 py-2 leading-snug">
          <span className="font-semibold">Replaces:</span> {item.replaces}
        </div>
      )}

      <p className="text-xs text-slate-500 leading-relaxed">{item.reason}</p>
    </div>
  );
}

function LibraryCategorySection({ category }: { category: LibraryCategory }) {
  const p = priorityConfig[category.priority];

  return (
    <div className="mb-10">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span className="text-xl">{category.icon}</span>
        <h2 className="text-lg font-bold text-slate-900">{category.label}</h2>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.classes}`}>
          {p.label}
        </span>
      </div>
      <p className="text-sm text-slate-500 mb-5 leading-relaxed max-w-3xl">
        {category.description}
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.items.map((item) => (
          <LibraryCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Aman Soni`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const c = projectColorMap[project.badgeColor];

  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-10"
        >
          <ArrowLeft size={15} />
          All Projects
        </Link>

        {/* Hero card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-10 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${c.badge}`}>
              {project.badge}
            </span>
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg transition-colors"
                >
                  <GithubIcon size={15} />
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            {project.title}
          </h1>
          <p className="text-slate-500 font-medium mb-8">{project.tagline}</p>

          {/* Metrics */}
          {project.metrics && (
            <div className="flex flex-wrap gap-8 pb-8 mb-8 border-b border-slate-100">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <div className={`text-3xl font-bold ${c.metric}`}>{m.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          <p className="text-slate-600 leading-relaxed text-[15px]">
            {project.longDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Highlights */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
            <h2 className="font-bold text-slate-900 mb-5">Key Highlights</h2>
            <ul className="flex flex-col gap-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-2 shrink-0`} />
                  <span className="text-sm text-slate-600 leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
            <h2 className="font-bold text-slate-900 mb-5">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm font-medium bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Library breakdown — only for projects with library data */}
        {project.libraries && project.libraries.length > 0 && (
          <div className="mb-12">
            {/* Section header */}
            <div className="bg-slate-900 rounded-2xl p-8 mb-8 text-white">
              <h2 className="text-2xl font-bold mb-2">Library Audit & Recommendations</h2>
              <p className="text-slate-400 text-sm max-w-2xl">
                Full audit of the advisor-web production codebase. Every manually-built system
                identified and mapped to the correct battle-tested library. Organized by category
                with priority order for migration.
              </p>
              {/* Legend */}
              <div className="flex flex-wrap gap-3 mt-6">
                {(Object.entries(statusConfig) as [LibraryStatus, typeof statusConfig[LibraryStatus]][]).map(
                  ([, cfg]) => (
                    <span
                      key={cfg.label}
                      className={`text-xs font-bold px-2.5 py-1 rounded border ${cfg.classes}`}
                    >
                      {cfg.label}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Summary stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { value: "~4,200", label: "Lines of custom code replaced", color: "text-blue-600" },
                { value: "23", label: "Libraries to add", color: "text-emerald-600" },
                { value: "8", label: "Libraries to remove", color: "text-red-500" },
                { value: "12", label: "Libraries to keep", color: "text-amber-600" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 text-center"
                >
                  <div className={`text-2xl font-bold mb-1 ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Categories */}
            {project.libraries.map((category) => (
              <LibraryCategorySection key={category.label} category={category} />
            ))}

            {/* Stack comparison table */}
            <div className="bg-slate-900 rounded-2xl p-8 mt-4 overflow-x-auto">
              <h3 className="text-lg font-bold text-white mb-6">Old vs. New — At a Glance</h3>
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left text-slate-400 font-semibold pb-3 pr-4 w-28">Concern</th>
                    <th className="text-left text-slate-400 font-semibold pb-3 pr-4">Old (Manual / Wrong Tool)</th>
                    <th className="text-left text-slate-400 font-semibold pb-3 pr-4">New (Library)</th>
                    <th className="text-left text-slate-400 font-semibold pb-3">Win</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {[
                    { concern: "API calls", old: "fetchUtils.ts — 810 lines, manual deduplication & 401 retry", next: "Axios + React Query — 60 lines of config", win: "−750 lines" },
                    { concern: "Server state", old: "12 Redux slices — stale data, race conditions", next: "React Query — staleTime, auto-refetch, invalidateQueries", win: "−12 slices" },
                    { concern: "UI state", old: "Redux + RTK — 50KB+, actions/reducers boilerplate", next: "Zustand — 2KB, no boilerplate, TypeScript-first", win: "−48KB" },
                    { concern: "Forms", old: "InputElement.tsx — 18KB, 15 input types, hand-rolled validation", next: "React Hook Form + Zod — composable, type-safe", win: "−18KB" },
                    { concern: "Toast", old: "Custom Alerts.tsx + alertSlice — 200 lines, manual animation", next: "Sonner — toast.success(), 1.2KB", win: "−200 lines, −1 slice" },
                    { concern: "Auth", old: "Custom cookie logic, manual refresh, useGlobalServices", next: "Auth.js v5 — config-driven, Edge-compatible", win: "−500 lines" },
                    { concern: "CMS schema", old: "640 JSON files — no types, no autocomplete", next: "Payload CMS v3 — TypeScript blocks, generated types", win: "−470 files" },
                    { concern: "Testing", old: "Zero test coverage", next: "Vitest (unit) + Playwright (e2e)", win: "Regressions caught pre-prod" },
                  ].map((row) => (
                    <tr key={row.concern}>
                      <td className="py-3 pr-4 text-slate-300 font-medium align-top">{row.concern}</td>
                      <td className="py-3 pr-4 text-red-400 align-top text-xs leading-relaxed">{row.old}</td>
                      <td className="py-3 pr-4 text-emerald-400 font-medium align-top text-xs leading-relaxed">{row.next}</td>
                      <td className="py-3 text-blue-400 font-bold align-top text-xs whitespace-nowrap">{row.win}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Related projects */}
        {related.length > 0 && (
          <div>
            <h2 className="font-bold text-slate-900 mb-5">Related Projects</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {related.map((p) => {
                const rc = projectColorMap[p.badgeColor];
                return (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 hover:border-blue-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${rc.badge}`}>
                        {p.badge}
                      </span>
                      <ArrowLeft size={14} className="text-slate-300 rotate-180" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1 text-sm">{p.title}</h3>
                    <p className="text-xs text-slate-500">{p.tagline}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
