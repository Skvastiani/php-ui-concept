# PHP Reimagined / phpr.net

An unofficial open-source UI/UX redesign concept inspired by php.net.

This project is a frontend design experiment only. It is not affiliated with php.net, The PHP Foundation, or the PHP project.

## Goal

Explore how a modern PHP language and documentation website could look in 2026, with stronger documentation search, cleaner navigation, accessibility, and a more polished developer experience.

## Status

Concept prototype. The current homepage implements the compact dark developer-site direction with:

- Sticky yellow unofficial disclaimer banner
- Dark sticky header branded as `PHP` / `Documentation & Downloads`, with theme toggle, language control, and mobile menu
- Large PHP hero treatment with a clear primary `Download PHP 8.5` CTA
- Scalable PHP-first code comparison selector for JavaScript, Python, Go, Java, C#, and Ruby
- Interactive header documentation search with grouped autocomplete, keyboard navigation, and mobile overlay
- Priority navigation cards with Documentation, Install, and Get Started emphasized
- Dedicated Migration Paths section for JavaScript, Python, Go, Java, C#, and Ruby
- Concrete "Why PHP Today?" feature row
- Grouped ecosystem proof strip
- PHP-focused Developer Resources section
- Footer navigation with a subtle `About this concept` link
- Separate `/about-concept` page for project disclosure, keeping the homepage focused on PHP

## Local Development

```bash
npm install
npm run dev
```

Then open the local Vite URL, usually:

```txt
http://localhost:5173
```

Build check:

```bash
npm run build
```

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Documentation Concepts

Migration-path docs are stored in `docs/migration-paths/`. Start with `docs/migration-paths/README.md` for shared rules and page requirements:

- C# / .NET to PHP
- Go to PHP
- Java to PHP
- JavaScript / TypeScript to PHP
- Python to PHP
- Ruby to PHP
- Reverse paths from PHP to other languages

## Disclaimer

PHP and related trademarks belong to their respective owners. This is an independent community design experiment.
