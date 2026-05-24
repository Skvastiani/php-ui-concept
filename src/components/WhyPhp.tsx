import { whyPhpCards } from '../data/cards';

export default function WhyPhp() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="why-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_2.1fr] lg:items-center">
          <div>
            <h2 id="why-title" className="text-2xl font-black text-slate-950 dark:text-white">
              Why PHP Today?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              PHP continues to evolve and power the web with performance, stability and flexibility.
            </p>
            <a href="#documentation" className="mt-4 inline-flex text-sm font-bold text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:text-violet-300">
              Learn more about PHP →
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {whyPhpCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="grid grid-cols-[48px_1fr] gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-slate-300 text-indigo-600 dark:border-white/20 dark:text-violet-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-black text-slate-950 dark:text-white">{card.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
