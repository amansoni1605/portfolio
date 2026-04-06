import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Contact
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            I&apos;m open to senior frontend roles, contract work, and interesting
            engineering challenges. Let&apos;s build something great.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Get in touch
            </h3>

            {[
              {
                icon: Mail,
                label: "Email",
                value: "amansonidev@gmail.com",
                href: "mailto:amansonidev@gmail.com",
                color: "blue",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+91 81153 72454",
                href: "tel:+918115372454",
                color: "green",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Noida, India",
                href: null,
                color: "amber",
              },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-100 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    color === "blue"
                      ? "bg-blue-50"
                      : color === "green"
                      ? "bg-green-50"
                      : "bg-amber-50"
                  }`}
                >
                  <Icon
                    size={17}
                    className={
                      color === "blue"
                        ? "text-blue-600"
                        : color === "green"
                        ? "text-green-600"
                        : "text-amber-600"
                    }
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-400 mb-0.5">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-slate-700">
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://linkedin.com/in/aman-soni-296b29222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-xl hover:border-blue-100 transition-colors"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/amansoni1605"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-xl hover:border-blue-100 transition-colors"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
            </div>
          </div>

          {/* CTA card */}
          <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Ready to collaborate?</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Whether you need a senior frontend engineer to architect a system,
                lead a migration, or optimize performance — I&apos;d love to hear
                about your project.
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-8">
              {[
                "React / Next.js architecture",
                "Performance optimization & Core Web Vitals",
                "CMS-driven dynamic systems",
                "Team mentoring & code review",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
                  <span className="text-sm text-blue-100">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:amansonidev@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Send me an email
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
