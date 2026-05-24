import { ArrowLeft, Github } from 'lucide-react';

export default function AboutConcept() {
  return (
    <main className="min-h-screen bg-yellow-50 text-slate-950">
      <header className="border-b border-yellow-300 bg-yellow-300 px-4 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-2 rounded-md text-sm font-black focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to PHP Experience
          </a>
          <a
            href="https://github.com/Skvastiani/php-ui-concept"
            className="inline-flex items-center gap-2 rounded-md text-sm font-black focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-700">Project disclosure</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-black leading-tight sm:text-6xl">About This Concept</h1>
        <div className="mt-8 max-w-3xl rounded-lg border-2 border-slate-950 bg-white p-6 shadow-[8px_8px_0_#111827]">
          <p className="text-xl font-bold leading-8">
            This is an independent open-source UI/UX exploration inspired by php.net. It is not affiliated with PHP.net, The PHP Foundation, or the PHP project.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-black">Why this exists</h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              The goal is to explore how a modern PHP website could improve documentation discovery, migration paths, release information, and developer onboarding.
            </p>
          </div>
          <ul className="grid gap-3 text-base font-semibold text-slate-800">
            <li className="rounded-lg bg-white p-4">Explore better documentation navigation.</li>
            <li className="rounded-lg bg-white p-4">Improve onboarding for new developers.</li>
            <li className="rounded-lg bg-white p-4">Add migration paths from other languages.</li>
            <li className="rounded-lg bg-white p-4">Present PHP as modern, stable, and production-ready.</li>
            <li className="rounded-lg bg-white p-4">Test cleaner information architecture for language websites.</li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://github.com/Skvastiani/php-ui-concept"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-black text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            View GitHub Repository
          </a>
          <a
            href="/README.md"
            className="inline-flex items-center justify-center rounded-lg border-2 border-slate-950 bg-white px-5 py-3 text-sm font-black focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
          >
            Read README
          </a>
        </div>
      </section>
    </main>
  );
}
