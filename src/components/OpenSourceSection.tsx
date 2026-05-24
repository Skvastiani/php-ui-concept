import { ArrowRight, GitPullRequestArrow, Star } from 'lucide-react';
import { developerResources } from '../data/cards';

export default function OpenSourceSection() {
  return (
    <section id="open-source" className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="developer-resources-title">
      <div className="mx-auto grid max-w-7xl gap-8 border-y border-slate-200 py-10 dark:border-white/10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-700 dark:text-indigo-300">Developer resources</p>
          <h2 id="developer-resources-title" className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
            Modern PHP, organized for developers.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Find downloads, documentation, migration paths, release details, security notes, and contribution routes in one clear developer experience.
          </p>
          <a
            href="#documentation"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:bg-white dark:text-php-navy dark:hover:bg-indigo-100"
          >
            Explore Documentation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {developerResources.map((item, index) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/50">
              {index % 2 === 0 ? <Star className="h-5 w-5 text-php-amber" aria-hidden="true" /> : <GitPullRequestArrow className="h-5 w-5 text-indigo-500 dark:text-indigo-300" aria-hidden="true" />}
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
