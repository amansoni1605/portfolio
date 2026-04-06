import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const workProjects = projects.filter((p) => p.category === "work");
const personalProjects = projects.filter((p) => p.category === "personal");

export default function Projects() {
  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Projects
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            A mix of production systems built at work and personal projects
            showcasing my depth across the React ecosystem.
          </p>
        </div>

        {/* Impact banner */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "73%", label: "Page load time reduction" },
              { value: "65%", label: "JS bundle size cut" },
              { value: "50K+", label: "Monthly Active Users" },
              { value: "95+", label: "Lighthouse score" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-3xl font-bold mb-1">{m.value}</div>
                <div className="text-xs text-blue-200">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Work projects */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <h2 className="text-xl font-bold text-slate-900">
              Production Work
            </h2>
            <span className="text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100 px-2.5 py-1 rounded-full">
              Value Research
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {workProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        {/* Personal projects */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-violet-500" />
            <h2 className="text-xl font-bold text-slate-900">
              Personal Projects
            </h2>
            <span className="text-xs font-medium bg-violet-50 text-violet-600 border border-violet-100 px-2.5 py-1 rounded-full">
              Open Source & Side Projects
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
