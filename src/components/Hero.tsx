"use client";

import { Mail } from "lucide-react";
import Link from "next/link";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative bg-linear-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
      {/* Background grid decoration */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blob decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-indigo-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
            Hi, I&apos;m{" "}
            <span className="text-blue-600">Aman Soni</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 mb-6">
            Senior Frontend Developer
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
            Results-driven engineer with{" "}
            <span className="font-semibold text-slate-700">4+ years</span>{" "}
            building high-performance, SEO-optimized web apps. Reduced page load
            times by{" "}
            <span className="font-semibold text-blue-600">73%</span> and
            architected a CMS-driven platform serving{" "}
            <span className="font-semibold text-blue-600">50K+ MAU</span>.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mb-10">
            {[
              { value: "4+", label: "Years Experience" },
              { value: "73%", label: "Load Time Reduction" },
              { value: "50K+", label: "Monthly Active Users" },
              { value: "60+", label: "Reusable Components" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-700 font-medium px-6 py-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors shadow-sm"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">Find me on</span>
            <a
              href="https://linkedin.com/in/aman-soni-296b29222"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-colors shadow-sm"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:amansonidev@gmail.com"
              className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-colors shadow-sm"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/amansoni1605"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-colors shadow-sm"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
