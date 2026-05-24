import { ArrowRight, BarChart3 } from 'lucide-react';
import { migrationPaths } from '../data/cards';

export default function MigrationPaths() {
  return (
    <section id="migration" className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="migration-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-violet-300">Migration paths</p>
            <h2 id="migration-title" className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
              Coming from another language?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              Learn modern PHP by mapping patterns you already know from JavaScript, Python, Go, Java, C#, or Ruby.
            </p>
            <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex gap-3">
                <BarChart3 className="mt-1 h-5 w-5 shrink-0 text-indigo-600 dark:text-violet-300" aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                  Performance claims should be transparent. Migration pages use third-party benchmark sources and explain trade-offs by workload instead of claiming one language wins everywhere.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {migrationPaths.map((path) => (
              <a
                key={path.title}
                href={path.href}
                className="group rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:border-white/10 dark:bg-white/[0.05]"
              >
                <h3 className="text-lg font-black text-slate-950 dark:text-white">{path.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{path.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-indigo-700 dark:text-violet-300">
                  Compare syntax
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
