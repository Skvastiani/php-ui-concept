import { Search, X } from 'lucide-react';
import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';

type Suggestion = {
  group: string;
  label: string;
  href: string;
};

type HeaderSearchProps = {
  onOpenChange?: (open: boolean) => void;
};

const suggestions: Suggestion[] = [
  { group: 'Popular docs', label: 'Composer', href: '#documentation' },
  { group: 'Popular docs', label: 'Laravel', href: '#ecosystem' },
  { group: 'Functions', label: 'array_map', href: '#documentation' },
  { group: 'Language features', label: 'readonly classes', href: '#documentation' },
  { group: 'Language features', label: 'enums', href: '#documentation' },
  { group: 'Language features', label: 'attributes', href: '#documentation' },
  { group: 'Migration paths', label: 'PHP 8.5 migration', href: '#migration' },
  { group: 'Migration paths', label: 'JavaScript -> PHP', href: '#migration' },
];

const groupedSuggestions = suggestions.reduce<Record<string, Suggestion[]>>((groups, suggestion) => {
  groups[suggestion.group] = [...(groups[suggestion.group] ?? []), suggestion];
  return groups;
}, {});

export default function HeaderSearch({ onOpenChange }: HeaderSearchProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return suggestions;
    }

    return suggestions.filter((suggestion) => suggestion.label.toLowerCase().includes(normalized) || suggestion.group.toLowerCase().includes(normalized));
  }, [query]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (window.matchMedia('(max-width: 767px)').matches) {
          setMobileOpen(true);
          window.setTimeout(() => mobileInputRef.current?.focus(), 0);
        } else {
          setOpen(true);
          inputRef.current?.focus();
        }
      }

      if (event.key === 'Escape') {
        setOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    onOpenChange?.(open || mobileOpen);
  }, [mobileOpen, onOpenChange, open]);

  const openSuggestion = (suggestion: Suggestion) => {
    window.location.href = suggestion.href;
    setOpen(false);
    setMobileOpen(false);
  };

  const handleSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!open && !mobileOpen) {
      setOpen(true);
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, Math.max(filtered.length - 1, 0)));
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    }

    if (event.key === 'Enter' && filtered[activeIndex]) {
      event.preventDefault();
      openSuggestion(filtered[activeIndex]);
    }

    if (event.key === 'Escape') {
      setOpen(false);
      setMobileOpen(false);
    }
  };

  const renderSuggestions = () => (
    <div className="max-h-[70vh] overflow-y-auto p-2">
      {Object.entries(groupedSuggestions).map(([group, groupSuggestions]) => {
        const visible = groupSuggestions.filter((suggestion) => filtered.includes(suggestion));
        if (visible.length === 0) {
          return null;
        }

        return (
          <div key={group} className="py-2">
            <p className="px-3 pb-1 text-xs font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{group}</p>
            <div className="grid gap-1">
              {visible.map((suggestion) => {
                const index = filtered.indexOf(suggestion);
                return (
                  <button
                    key={`${suggestion.group}-${suggestion.label}`}
                    type="button"
                    onClick={() => openSuggestion(suggestion)}
                    className={`rounded-md px-3 py-2 text-left text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber ${
                      index === activeIndex ? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10'
                    }`}
                  >
                    {suggestion.label}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div ref={rootRef} className={`relative h-12 min-w-0 transition-all duration-200 ${open ? 'md:w-[min(42vw,36rem)]' : 'md:w-72 xl:w-80'}`}>
      <button
        type="button"
        onClick={() => {
          setMobileOpen(true);
          window.setTimeout(() => mobileInputRef.current?.focus(), 0);
        }}
        className="grid h-12 w-12 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 md:hidden"
        aria-label="Open documentation search"
      >
        <Search className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="hidden md:block">
        <div className="flex h-12 w-full items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-600 shadow-sm transition focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-php-amber dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
          <Search className="h-5 w-5 shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onFocus={() => setOpen(true)}
            onKeyDown={handleSearchKeyDown}
            className="min-w-0 flex-1 bg-transparent font-semibold outline-none placeholder:text-slate-500"
            placeholder="Search docs"
            aria-label="Search documentation"
            aria-expanded={open}
            aria-controls="header-search-results"
          />
          <kbd className="shrink-0 rounded border border-slate-200 px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 dark:border-white/15 dark:text-slate-300">⌘ K</kbd>
        </div>

        {open && (
          <div id="header-search-results" className="absolute left-0 right-0 top-14 z-50 w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-950">
            {renderSuggestions()}
          </div>
        )}
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 p-4 backdrop-blur-sm md:hidden" role="dialog" aria-modal="true" aria-label="Documentation search">
          <div className="mx-auto mt-16 max-w-lg overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-950">
            <div className="flex items-center gap-2 border-b border-slate-200 p-3 dark:border-white/10">
              <Search className="h-5 w-5 text-indigo-600 dark:text-violet-300" aria-hidden="true" />
              <input
                ref={mobileInputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleSearchKeyDown}
                className="min-w-0 flex-1 bg-transparent text-base font-semibold text-slate-950 outline-none placeholder:text-slate-500 dark:text-white"
                placeholder="Search documentation"
                aria-label="Search documentation"
              />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-md text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber dark:text-slate-300"
                aria-label="Close search"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            {renderSuggestions()}
          </div>
        </div>
      )}
    </div>
  );
}
