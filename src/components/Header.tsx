import { ChevronDown, Github, Languages, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { navigationItems } from '../data/navigation';
import HeaderSearch from './HeaderSearch';

type HeaderProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export default function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-10 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary">
        <a href="#" className="group flex min-w-0 shrink-0 items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber lg:w-64 xl:w-72">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-php-purple/35 bg-gradient-to-br from-indigo-500 to-violet-700 text-xl font-black text-white shadow-glow">
            ◔
          </span>
          <span className="min-w-0">
            <span className="block truncate text-lg font-black tracking-normal text-slate-950 dark:text-white">PHP</span>
            <span className="block truncate text-xs font-medium text-slate-600 dark:text-slate-300">Documentation & Downloads</span>
          </span>
        </a>

        {!searchOpen && (
          <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:gap-2 lg:flex">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`inline-flex h-10 items-center gap-1 whitespace-nowrap rounded-md px-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white xl:px-3 ${item.label === 'Help' ? 'hidden 2xl:inline-flex' : ''}`}
              >
                {item.label}
                {item.label !== 'Downloads' && <ChevronDown className="h-3 w-3" aria-hidden="true" />}
              </a>
            ))}
          </div>
        )}

        <div className={`hidden min-w-0 items-center justify-end gap-2 md:flex ${searchOpen ? 'flex-1' : 'shrink-0'}`}>
          <HeaderSearch onOpenChange={setSearchOpen} />

          <button
            type="button"
            onClick={onToggleTheme}
            className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:bg-white/10"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
          </button>

          <button
            type="button"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:bg-white/10"
            aria-label="Language selector"
          >
            <Languages className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="h-8 w-px shrink-0 bg-slate-200 dark:bg-white/10" aria-hidden="true" />
          <button
            type="button"
            className="inline-flex h-12 shrink-0 items-center gap-2 rounded-lg px-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:text-slate-200 dark:hover:bg-white/10"
          >
            English
            <ChevronDown className="h-3 w-3" aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:border-white/10 dark:bg-white/[0.06] dark:text-white md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
        <div className="md:hidden">
          <HeaderSearch />
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl dark:border-white/10 dark:bg-slate-950 md:hidden">
          <div className="grid gap-2">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:text-slate-200"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onToggleTheme}
              className="flex items-center gap-2 rounded-lg px-3 py-3 text-left text-sm font-semibold text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:text-slate-200"
            >
              {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
              {isDark ? 'Light theme' : 'Dark theme'}
            </button>
            <a
              href="https://github.com/Skvastiani/php-ui-concept"
              className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:text-slate-200"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub Repository
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
