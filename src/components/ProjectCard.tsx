import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

const colorMap = {
  blue: {
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    dot: "bg-blue-400",
    hover: "hover:border-blue-200",
    metric: "text-blue-600",
  },
  violet: {
    badge: "bg-violet-50 text-violet-700 border-violet-100",
    dot: "bg-violet-400",
    hover: "hover:border-violet-200",
    metric: "text-violet-600",
  },
  emerald: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
    dot: "bg-emerald-400",
    hover: "hover:border-emerald-200",
    metric: "text-emerald-600",
  },
  amber: {
    badge: "bg-amber-50 text-amber-700 border-amber-100",
    dot: "bg-amber-400",
    hover: "hover:border-amber-200",
    metric: "text-amber-600",
  },
  rose: {
    badge: "bg-rose-50 text-rose-700 border-rose-100",
    dot: "bg-rose-400",
    hover: "hover:border-rose-200",
    metric: "text-rose-600",
  },
};

export default function ProjectCard({ project }: { project: Project }) {
  const c = colorMap[project.badgeColor];

  return (
    <div
      className={`bg-white rounded-2xl border border-slate-100 shadow-sm p-7 flex flex-col transition-all duration-200 ${c.hover} hover:shadow-md group`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <span
          className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${c.badge}`}
        >
          {project.badge}
        </span>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">
        {project.title}
      </h3>
      <p className="text-xs text-slate-400 mb-3 font-medium">{project.tagline}</p>
      <p className="text-sm text-slate-500 leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Metrics */}
      {project.metrics && (
        <div className="flex gap-5 mb-5 pb-5 border-b border-slate-50">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className={`text-lg font-bold ${c.metric}`}>{m.value}</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-snug">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Highlights */}
      <ul className="flex flex-col gap-1.5 mb-5">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex items-start gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 shrink-0`} />
            <span className="text-xs text-slate-500 leading-relaxed">{h}</span>
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.slice(0, 5).map((t) => (
          <span
            key={t}
            className="text-xs font-medium bg-slate-50 text-slate-600 border border-slate-100 px-2.5 py-1 rounded-lg"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 5 && (
          <span className="text-xs font-medium bg-slate-50 text-slate-400 border border-slate-100 px-2.5 py-1 rounded-lg">
            +{project.tech.length - 5} more
          </span>
        )}
      </div>

      {/* Footer CTA */}
      <div className="mt-auto">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors group-hover:text-blue-600"
        >
          View details
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
