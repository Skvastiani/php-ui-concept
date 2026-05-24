import { AlertTriangle, Github, X } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <div
      id="disclaimer"
      className="sticky top-0 z-50 flex h-10 items-center justify-center bg-php-amber px-3 text-center text-[10px] font-semibold leading-tight text-php-ink sm:px-4 sm:text-sm"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3">
        <span className="flex min-w-0 flex-1 items-center justify-center gap-2">
          <AlertTriangle className="hidden h-4 w-4 shrink-0 sm:block" aria-hidden="true" />
          <span className="truncate">
            UNOFFICIAL CONCEPT — This is an independent UI/UX exploration inspired by php.net. Not affiliated with PHP.net or The PHP Foundation.
          </span>
        </span>
        <a
          href="/about-concept"
          className="hidden shrink-0 items-center gap-1 rounded-md px-2 py-1 font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-php-ink md:flex"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          Read about this concept →
        </a>
        <span className="hidden h-6 w-6 place-items-center md:grid" aria-hidden="true">
          <X className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}
