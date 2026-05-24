import { ecosystemGroups } from '../data/cards';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="border-y border-slate-200 bg-slate-100/70 px-4 py-8 dark:border-white/10 dark:bg-white/[0.03] sm:px-6 lg:px-8" aria-labelledby="ecosystem-title">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <h2 id="ecosystem-title" className="text-base font-bold text-slate-700 dark:text-slate-200">
          Ecosystem proof, grouped by how teams actually evaluate PHP.
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemGroups.map((group) => (
            <div key={group.label} className="rounded-lg border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.05]">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-indigo-700 dark:text-violet-300">{group.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-800 dark:bg-white/10 dark:text-slate-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
