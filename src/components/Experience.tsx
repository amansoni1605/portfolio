import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Value Research Pvt. Ltd.",
    location: "Noida, India",
    period: "May 2022 – Present",
    current: true,
    highlights: [
      "Spearheaded frontend architecture for a financial platform serving 50K+ MAU, owning the full UI lifecycle.",
      "Achieved 73% reduction in page load time (4.2s → 1.1s) and cut JS bundle by 65% via code splitting and CDN.",
      "Architected a CMS-driven dynamic page renderer (Strapi v5 + Next.js 15) enabling zero-deployment page management.",
      "Designed V2 component architecture (3-layer pattern) adopted across a library of 60+ reusable components.",
      "Built and maintained a monorepo of 3 projects: Next.js frontend, Strapi CMS, and Laravel sync service.",
      "Wrote a Node.js AST-based script that automatically rewrote 2,994 import paths across 702 files.",
      "Mentored 4 junior developers and established CI/CD pipelines, reducing production bugs by 60%.",
      "Drove SEO to top-3 organic rankings and achieved 95+ Lighthouse accessibility score via SSR and JSON-LD.",
    ],
    tags: [
      "React 19",
      "Next.js 15",
      "TypeScript",
      "Strapi v5",
      "Tailwind CSS",
      "Node.js",
      "CI/CD",
    ],
  },
  {
    role: "Frontend Developer",
    company: "K.P. Infomedia",
    location: "Kanpur, India",
    period: "Jan 2022 – May 2022",
    current: false,
    highlights: [
      "Designed and deployed 5+ responsive landing pages with W3C compliance and cross-browser compatibility.",
      "Reduced bounce rates by 25% by optimizing page speed based on Google PageSpeed Insights audits.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Performance"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Career
          </span>
          <h2 className="text-4xl font-bold text-slate-900">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-100 hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative md:pl-24">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-5 top-6 w-6 h-6 rounded-full border-4 border-white shadow-md items-center justify-center bg-blue-600">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-slate-900">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-green-50 text-green-700 border border-green-100 px-2.5 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={13} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2 mb-5">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                        <span className="text-sm text-slate-600 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-slate-50 text-slate-600 border border-slate-100 px-3 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
