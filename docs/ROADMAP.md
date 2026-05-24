# PHP Reimagined / phpr.net Roadmap

This roadmap turns `php_site_rebrand_instructions.md` into an implementation plan for a complete frontend prototype of **PHP Reimagined**, an unofficial open-source UI/UX redesign concept inspired by php.net.

## Current Implementation Status

The first homepage prototype is implemented in `src/` using React, TypeScript, Vite, Tailwind CSS, and Lucide React. The visual direction now follows the compact dark developer-site reference:

- Sticky yellow unofficial banner with GitHub link.
- Dark sticky header with PHP branding, navigation, theme toggle, language control, and mobile menu.
- First viewport combines a large `PHP` hero, `Download PHP 8.5` primary CTA, concept label, release metadata, and a comparative PHP / JavaScript / Python code preview.
- Header Documentation Search is the single primary search UI, with grouped autocomplete, `Ctrl K` / `Cmd K`, keyboard navigation, and mobile overlay.
- Bento navigation is ordered by product priority: Documentation, Install PHP, Get Started, Migration Paths, Extensions, Security, Community, RFCs.
- Dedicated Migration Paths section previews JavaScript, Python, Go, Java, C#, and Ruby onboarding paths.
- "Why PHP Today?" uses concrete product and platform benefits instead of broad adjectives.
- Ecosystem strip is grouped by Frameworks, CMS, Tooling, and Cloud.
- Footer includes GitHub, Roadmap, Contribute, License, Migration Paths, Design System, and disclaimer links.
- Concept/project disclosure has been separated from the main homepage: the yellow banner links to `/about-concept`, while the homepage content focuses on PHP downloads, documentation, migration paths, security, ecosystem, and contribution.
- Footer repeats the unofficial disclaimer.
- Migration-path concept docs exist under `docs/migration-paths/`.

Verification so far:

- `node_modules/.bin/tsc -b` passes.
- `git diff --check` passes.
- `vite build` could not be completed in the Codex shell because Rollup's native optional dependency failed to load under the local code-signing environment. Reinstalling dependencies with the user's local `npm` should resolve that environment issue.

## Guiding Principles

- Keep the unofficial status visible and unambiguous on every screen size.
- Build a serious documentation-first developer experience, not a generic startup landing page.
- Use React, TypeScript, Vite, Tailwind CSS, and Lucide React only.
- Avoid external images, official-looking PHP assets, backend calls, or claims that imply affiliation with PHP.net, The PHP Foundation, or the PHP project.
- Make the prototype polished enough to continue developing after the first pass.

## Phase 1: Project Scaffold

Goal: Create the frontend foundation and baseline project files.

Deliverables:

- Initialize a Vite React TypeScript app.
- Install and configure Tailwind CSS.
- Install Lucide React.
- Create the required source structure:

```txt
src/
  App.tsx
  main.tsx
  components/
    DisclaimerBanner.tsx
    Header.tsx
    Hero.tsx
    CodePreview.tsx
    HeaderSearch.tsx
    BentoCards.tsx
    WhyPhp.tsx
    Ecosystem.tsx
    OpenSourceSection.tsx
    Footer.tsx
  data/
    navigation.ts
    cards.ts
  styles/
    globals.css
```

- Add `README.md` with concept status, tech stack, goal, and disclaimer.

Acceptance gate:

- App starts locally with a blank but styled shell.
- Tailwind classes compile correctly.
- README clearly says the project is unofficial.

## Phase 2: Brand, Theme, and Layout System

Goal: Establish the visual foundation before composing sections.

Deliverables:

- Configure dark mode as the default.
- Add light mode support with preference saved in `localStorage`.
- Implement global color tokens and base styles in `src/styles/globals.css`.
- Use a dark navy / purple base theme with restrained gradients, amber disclaimer color, accessible contrast, and subtle borders.
- Create reusable button, link, card, badge, and focus-state class patterns directly with Tailwind utilities.
- Add a clean PHP elephant-inspired placeholder mark that does not use official logos.

Acceptance gate:

- Theme toggle works after refresh.
- Focus states are visible with keyboard navigation.
- The visual system does not look like an official PHP mirror.

## Phase 3: Legal and Trust Surface

Goal: Make the unofficial concept status impossible to miss.

Deliverables:

- Build `DisclaimerBanner.tsx`.
- Add sticky top banner text:

```txt
UNOFFICIAL CONCEPT — Open-source UI/UX redesign experiment inspired by php.net. Not affiliated with PHP.net, The PHP Foundation, or the PHP project.
```

- Use amber/yellow background and near-black text.
- Keep height around `40px-52px`.
- Ensure it is visible on desktop and mobile.
- Add footer disclaimer:

```txt
Disclaimer: This is an independent community design experiment and not an official PHP website.
```

Acceptance gate:

- The disclaimer is the first visible element.
- The footer repeats the disclaimer.
- No copy or CTA implies the site is official.

## Phase 4: Header and Navigation

Goal: Build the persistent navigation and responsive controls.

Deliverables:

- Build `Header.tsx`.
- Include:
  - PHP Reimagined wordmark
  - `phpr.net concept` label
  - Downloads
  - Documentation
  - Get Involved
  - Help
  - Search input
  - Theme toggle
  - Language dropdown
  - GitHub link/button
  - Mobile hamburger menu
- Centralize navigation data in `src/data/navigation.ts`.
- Use Lucide icons where appropriate.
- Add keyboard-usable mobile menu behavior.

Acceptance gate:

- Header remains usable below the sticky disclaimer.
- Mobile menu opens, closes, and can be navigated by keyboard.
- Search and controls do not overflow on small screens.

## Phase 5: Hero and Code Preview

Status: Implemented.

Goal: Make the first viewport communicate the concept clearly.

Deliverables:

- Build `Hero.tsx`.
- Add hero copy:
  - Badge: `PHP 8.5 is available`
  - Title treatment: large `PHP`
  - Subtitle: `Pragmatic web infrastructure for the modern internet.`
  - Description: `Fast, flexible, and battle-tested. PHP powers everything from personal projects to the world’s largest platforms.`
- Add safe CTAs:
  - `Download PHP 8.5`
  - `Read Documentation`
  - `View UX Concept on GitHub`
- Build `CodePreview.tsx`.
- Include tabs for PHP 8.5, PHP 8.4, and PHP 8.3.
- Include a copy button.
- Show a modern PHP example with `readonly class`, constructor property promotion, typed properties, named arguments, and enum or value object usage.

Acceptance gate:

- First viewport clearly identifies the project as a concept.
- CTAs do not read like official PHP actions.
- Code preview is readable on mobile and desktop.

## Phase 6: Documentation-First Sections

Status: Implemented for homepage.

Goal: Build the core information architecture around documentation discovery.

Deliverables:

- Build `HeaderSearch.tsx`.
- Add command-palette-style search copy:

```txt
Search functions, classes, extensions, RFCs...
```

- Include `Ctrl K` and `Cmd K` shortcut hints.
- Build `BentoCards.tsx`.
- Add cards for:
  - Install PHP
  - Documentation
  - Extensions
  - Security
  - RFCs
  - Community
- Store card content in `src/data/cards.ts`.
- Each card has icon, title, short description, and hover state.

Acceptance gate:

- Search area feels primary, not decorative.
- Bento cards are scannable and responsive.
- Repeated content is data-driven instead of hardcoded repeatedly.

## Phase 7: Product Confidence Sections

Status: Implemented for homepage. Migration-path concept docs have also been added under `docs/migration-paths/`.

Goal: Present PHP as modern, mature, and production-grade without sounding defensive.

Deliverables:

- Build `WhyPhp.tsx`.
- Include cards:
  - Fast
  - Reliable
  - Versatile
  - Everywhere
  - Huge Ecosystem
  - Framework-Ready
- Build `Ecosystem.tsx`.
- Add text pills only, labeled as ecosystem context:
  - Laravel
  - Symfony
  - WordPress
  - Composer
  - Drupal
  - JetBrains
  - AWS
  - Azure
- Build `OpenSourceSection.tsx`.
- Add open-source experiment copy:

```txt
This project is open source. The goal is to explore better documentation, navigation, accessibility, and developer experience patterns for language websites.
```

- Add `View on GitHub` CTA.

Acceptance gate:

- Copy is confident, practical, and mature.
- Ecosystem names are not presented as endorsements.
- Open-source concept positioning is clear.

## Phase 8: Footer and README Completion

Status: Implemented.

Goal: Close the page with trustworthy project context.

Deliverables:

- Build `Footer.tsx`.
- Include links:
  - Documentation Concept
  - Download UX Concept
  - Releases
  - Security
  - Contribute
  - GitHub
  - Disclaimer
- Repeat the footer disclaimer.
- Finalize `README.md` with:
  - Project title
  - Unofficial status
  - Goal
  - Status
  - Tech stack
  - Disclaimer

Acceptance gate:

- Footer disclaimer is readable and not hidden.
- README matches the project positioning.
- Links do not imply official PHP ownership.

## Phase 9: Responsive and Accessibility Pass

Goal: Verify the prototype works across devices and input methods.

Checks:

- Desktop, tablet, and mobile layouts.
- Sticky disclaimer plus sticky header behavior.
- Keyboard navigation through header, mobile menu, theme toggle, language dropdown, search, CTAs, and cards.
- Heading hierarchy.
- Button and link accessible labels.
- Color contrast in dark and light mode.
- Text wrapping and overflow.
- No layout shifts from hover states.

Acceptance gate:

- No horizontal overflow on mobile.
- Interactive controls have visible focus states.
- Content remains readable in both themes.

## Phase 10: Final Polish

Goal: Add high-value finishing touches after the core site is complete.

Optional deliverables:

- Keyboard shortcut visual for search.
- Hover glow on primary cards.
- Gradient PHP Reimagined wordmark.
- Small `Latest stable` release info as concept UI.
- GitHub star button placeholder.
- Smooth but subtle section reveal animations.
- Better code block styling.
- Release support timeline card.
- Documentation version switcher.

Acceptance gate:

- Polish improves clarity and perceived quality without weakening accessibility or trust.
- Animations are subtle and do not distract from documentation-first use.

## Final Acceptance Checklist

- Yellow unofficial disclaimer strip is visible at the top on every screen size.
- Footer repeats the unofficial disclaimer.
- The site never claims to be php.net or an official PHP property.
- The homepage looks like a serious 2026 PHP.net-inspired redesign.
- The UI is responsive, accessible, and documentation-first.
- The codebase uses small readable React components.
- Repeated content is centralized in data arrays where practical.
- Dark mode is default and persists user preference.
- Light mode is supported.
- README clearly explains the concept and disclaimer.
- The project can be started and continued by another developer without decoding the original brief.
