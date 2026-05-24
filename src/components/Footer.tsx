import { footerLinks } from '../data/navigation';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-4 py-5 dark:border-white/10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-600 text-sm font-black text-white">PHP</span>
              <div>
                <p className="text-base font-black text-slate-950 dark:text-white">PHP</p>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Documentation & Downloads</p>
              </div>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Footer">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:text-slate-300 dark:hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
