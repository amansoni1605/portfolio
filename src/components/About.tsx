import { MapPin, Mail, Phone, GraduationCap, Mountain, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
              About Me
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Architecting experiences that <span className="text-blue-600">perform</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              I&apos;m a Senior Frontend Developer based in Noida, India, with a passion for
              building scalable, high-performance web applications. I specialize in React 19
              and Next.js 15, focusing on App Router, SSR, and CMS-driven architectures.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              At Value Research, I spearheaded the frontend architecture for a financial
              platform serving 50K+ users, achieving a 73% reduction in page load times
              and establishing engineering best practices across the team.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { icon: MapPin, label: "Noida, India" },
                { icon: Mail, label: "amansonidev@gmail.com" },
                { icon: Phone, label: "+91 81153 72454" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-blue-600" />
                  </div>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Cards */}
          <div className="flex flex-col gap-4">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Education</h3>
                  <p className="text-sm text-slate-600">Bachelor of Arts</p>
                  <p className="text-sm text-slate-500">
                    Bundelkhand University, Jhansi — 2020–2023
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                  <Mountain size={20} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Outdoor Enthusiast
                  </h3>
                  <p className="text-sm text-slate-500">
                    High-altitude trekker who brings the same endurance and problem-solving
                    mindset from the mountains to complex engineering challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                  <Users size={20} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Tech Mentor</h3>
                  <p className="text-sm text-slate-500">
                    Mentored 4 junior developers, established CI/CD pipelines, and
                    advocates for code quality and React best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
