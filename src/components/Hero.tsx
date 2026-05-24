import { ArrowRight, BookOpen, Download, Rocket, Sparkles } from 'lucide-react';
import CodePreview from './CodePreview';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-indigo-50 via-white to-slate-50 dark:border-white/10 dark:from-slate-950 dark:via-php-navy dark:to-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-20 lg:pt-10">
        <div className="flex flex-col justify-center">
          <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-300/70 bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-800 dark:border-indigo-300/20 dark:bg-indigo-400/10 dark:text-indigo-100">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            PHP 8.5 is available
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
          <h1 className="max-w-4xl text-7xl font-black leading-none tracking-normal text-slate-950 dark:bg-gradient-to-br dark:from-violet-400 dark:via-indigo-300 dark:to-white dark:bg-clip-text dark:text-transparent sm:text-8xl lg:text-9xl">
            PHP
          </h1>
          <p className="mt-4 max-w-2xl text-3xl font-black leading-tight text-slate-800 dark:text-slate-100 sm:text-4xl">
            The pragmatic backend for <span className="text-indigo-600 dark:text-violet-400">modern web apps.</span>
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            Fast, flexible, and battle-tested. PHP powers everything from personal projects to the world&apos;s largest platforms.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#downloads"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download PHP 8.5
            </a>
            <a
              href="#documentation"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:border-white/15 dark:bg-white/[0.08] dark:text-white dark:hover:bg-white/[0.12]"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Read Documentation
            </a>
            <a
              href="https://github.com/Skvastiani/php-ui-concept"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-transparent px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:border-white/15 dark:text-white dark:hover:bg-white/10"
            >
              <Rocket className="h-4 w-4" aria-hidden="true" />
              Get Started
            </a>
          </div>
          <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
            Latest stable: <span className="font-black text-emerald-600 dark:text-emerald-300">8.4.6</span>
            <span className="px-2 text-slate-400">•</span>
            Upcoming: 8.5.0
            <span className="px-2 text-slate-400">•</span>
            Released: 28 Nov 2024
          </p>
        </div>

        <div className="grid content-center" aria-label="Modern PHP code example">
          <CodePreview compact />
        </div>
      </div>
    </section>
  );
}
