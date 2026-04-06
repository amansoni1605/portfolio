export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <span className="text-white font-semibold">Aman Soni</span> — Senior
          Frontend Developer
        </div>
        <div className="text-sm text-center">
          Built with{" "}
          <span className="text-blue-400 font-medium">Next.js 15</span>,{" "}
          <span className="text-blue-400 font-medium">TypeScript</span> &{" "}
          <span className="text-blue-400 font-medium">Tailwind CSS v4</span>
        </div>
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
