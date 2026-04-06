const skillGroups = [
  {
    label: "Frontend",
    color: "blue",
    skills: [
      "React 19",
      "Next.js 15",
      "TypeScript",
      "JavaScript (ES2024)",
      "Tailwind CSS v4",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    label: "Backend & APIs",
    color: "emerald",
    skills: [
      "Node.js",
      "Payload CMS v3",
      "Strapi v5",
      "Laravel 11",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
      "Axios",
    ],
  },
  {
    label: "Architecture",
    color: "violet",
    skills: [
      "App Router",
      "SSR / SSG / ISR",
      "RSC",
      "Monorepo Design",
      "CMS-Driven Rendering",
      "3-Layer Component Pattern",
      "Code Splitting",
      "Dynamic Imports",
    ],
  },
  {
    label: "Performance & Tools",
    color: "amber",
    skills: [
      "Core Web Vitals",
      "Lighthouse",
      "Webpack",
      "Docker",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Jest",
      "JSON-LD / SEO",
    ],
  },
];

const colorMap: Record<
  string,
  { tag: string; header: string; dot: string }
> = {
  blue: {
    tag: "bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100",
    header: "text-blue-600",
    dot: "bg-blue-500",
  },
  emerald: {
    tag: "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100",
    header: "text-emerald-600",
    dot: "bg-emerald-500",
  },
  violet: {
    tag: "bg-violet-50 text-violet-700 border-violet-100 hover:bg-violet-100",
    header: "text-violet-600",
    dot: "bg-violet-500",
  },
  amber: {
    tag: "bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100",
    header: "text-amber-600",
    dot: "bg-amber-500",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Technical Skills
          </span>
          <h2 className="text-4xl font-bold text-slate-900">
            Tools & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => {
            const c = colorMap[group.color];
            return (
              <div
                key={group.label}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
                  <h3 className={`font-bold text-lg ${c.header}`}>
                    {group.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-default ${c.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
