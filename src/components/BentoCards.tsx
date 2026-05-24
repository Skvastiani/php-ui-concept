import { bentoCards } from '../data/cards';

export default function BentoCards() {
  return (
    <section className="px-4 pb-10 sm:px-6 lg:px-8" aria-labelledby="bento-title">
      <div className="mx-auto max-w-7xl">
        <h2 id="bento-title" className="sr-only">
          PHP navigation
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bentoCards.map((card, index) => {
            const Icon = card.icon;
            const isPrimary = card.priority === 'primary';
            const isAdvanced = card.priority === 'advanced';
            return (
              <a
                key={card.title}
                href={card.href}
                className={`group rounded-lg border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:bg-white/[0.05] ${
                  isPrimary
                    ? 'border-indigo-300 ring-1 ring-indigo-200 dark:border-violet-400/60 dark:ring-violet-400/20'
                    : isAdvanced
                      ? 'border-slate-200 opacity-90 dark:border-white/10'
                      : 'border-slate-200 dark:border-white/10'
                } ${index < 4 ? 'lg:min-h-56' : 'lg:min-h-48'}`}
              >
                <span className={`grid h-11 w-11 place-items-center rounded-lg transition group-hover:bg-indigo-600 group-hover:text-white ${
                  isPrimary ? 'bg-indigo-100 text-indigo-700 dark:bg-violet-400/20 dark:text-violet-200' : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-violet-300'
                }`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-black text-slate-950 dark:text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{card.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-indigo-700 dark:text-violet-300">
                  {card.cta ?? 'Explore'} <span aria-hidden="true">→</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
