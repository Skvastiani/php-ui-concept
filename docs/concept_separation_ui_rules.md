# UI Fix: Separate PHP Site Experience From Concept Disclosure

## Goal

The product should look and feel like a serious PHP website experience, not like a portfolio mockup or design case study.

Only the yellow top banner should communicate that the site is an unofficial concept. All other homepage content must behave as if this is a polished PHP language website.

## Core Rule

Do not mention the words below anywhere in the main homepage UI except inside the yellow disclaimer banner and the dedicated concept/about page:

- concept
- prototype
- experiment
- reimagined
- redesign
- unofficial
- not affiliated
- UI/UX concept
- community experiment

The main website content should focus on PHP itself:

- downloads
- documentation
- installation
- migration paths
- benchmarks
- ecosystem
- security
- RFCs
- community
- contribution

## Required UX Change

### 1. Keep the yellow disclaimer bar

The yellow bar must be the only persistent disclosure element.

Recommended copy:

```text
UNOFFICIAL CONCEPT — This is an independent UI/UX exploration inspired by php.net. Not affiliated with PHP.net or The PHP Foundation. Read about this concept →
```

Requirements:

- Full width
- Sticky at the very top
- Minimal yellow design
- High contrast text
- Link to `/about-concept` or `/concept`
- No noisy animation
- Optional close button is allowed, but it should not hide the disclaimer forever unless saved intentionally in localStorage

Suggested Tailwind style:

```tsx
<div className="sticky top-0 z-50 border-b border-yellow-300 bg-yellow-300 text-slate-950">
  <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-sm font-medium">
    <span>UNOFFICIAL CONCEPT — Independent UI/UX exploration inspired by php.net.</span>
    <a href="/about-concept" className="underline underline-offset-4 hover:no-underline">
      Read about this concept →
    </a>
  </div>
</div>
```

## 2. Remove concept language from homepage

Remove or rewrite the current lower section:

```text
OPEN SOURCE EXPERIMENT
A public prototype for better language website UX.
```

Replace with a PHP-focused section.

Better replacement:

```text
Modern PHP, organized for developers.
Find downloads, documentation, migration paths, release details, security notes, and contribution routes in one clear developer experience.
```

CTA options:

- Explore Documentation
- Compare Migration Paths
- View PHP Releases

Do not use:

- View concept
- Open-source experiment
- Prototype
- UI/UX showcase

## 3. Rename branding in the header

Current branding may say:

```text
PHP Reimagined
by the community
```

This exposes the concept too early and makes the page feel unofficial.

Change to:

```text
PHP
Developer Portal
```

or:

```text
PHP
Documentation & Downloads
```

The yellow bar already handles disclosure.

## 4. Move all concept explanation to a separate page

Create a new page:

```text
/about-concept
```

Page title:

```text
About This Concept
```

Purpose:

Explain that the project is:

- independent
- unofficial
- open-source
- a UI/UX redesign exploration
- not affiliated with PHP.net or The PHP Foundation
- focused on improving developer experience, navigation, onboarding, migration guides, and information architecture

This page can have a different visual style.

## 5. About Concept page design direction

Use a minimalist yellow design that clearly separates the concept explanation from the PHP-like main site.

Design:

- White or very light yellow background
- Black/dark text
- Minimal layout
- Large title
- Clear disclaimer card
- Links to GitHub and README
- No PHP docs-style content hierarchy

Suggested layout:

```text
[Yellow minimalist header]
About This Concept

This is an independent open-source UI/UX exploration inspired by php.net.
It is not affiliated with PHP.net, The PHP Foundation, or the PHP project.

Why this exists:
- Explore better documentation navigation
- Improve onboarding for new developers
- Add migration paths from other languages
- Present PHP as modern, stable, and production-ready
- Test cleaner information architecture for language websites

[View GitHub Repository]
[Read README]
[Back to PHP Experience]
```

## 6. Optional modal/popup alternative

Instead of sending users directly to `/about-concept`, the yellow banner can open a modal.

Modal requirements:

- Background blur
- Minimal yellow/white card
- Clear disclaimer
- Link to full README/about page
- Close button
- Must be accessible with keyboard
- Must trap focus while open
- Escape key closes modal

Example modal copy:

```text
About this concept

This is an independent open-source UI/UX exploration inspired by php.net.
It is not affiliated with PHP.net or The PHP Foundation.

The goal is to explore how a modern PHP website could improve documentation discovery, migration paths, release information, and developer onboarding.

[Read full concept README]
[View on GitHub]
[Close]
```

## 7. README placement

Create or update:

```text
README.md
```

The README should contain the full concept explanation, legal disclaimer, project goals, setup instructions, screenshots, and roadmap.

The homepage should only link to it from the yellow banner or About Concept page.

## 8. Homepage should behave like a PHP site

Homepage sections should be PHP/product focused:

1. Header
2. Hero
3. Main docs/download search
4. Install PHP
5. Documentation
6. Migration paths
7. Release timeline
8. Benchmarks
9. Security
10. Ecosystem
11. Contribution / RFCs
12. Footer

Do not include portfolio-style explanations in these sections.

## 9. Footer disclaimer

Avoid repeating the full concept disclaimer in the footer if the yellow bar is visible.

Footer can include one subtle link:

```text
About this concept
```

Do not place large disclaimer text in the footer unless required.

## 10. Acceptance criteria

This task is complete when:

- The homepage looks like a real PHP language website.
- The only concept/unofficial mention on the homepage is the yellow top bar.
- The header no longer says `PHP Reimagined` or `by the community`.
- Concept explanation is moved to `/about-concept` and README.
- The yellow bar links to the concept explanation.
- Any modal/popup uses minimalist yellow styling and background blur.
- Main homepage content is fully focused on PHP, not on the design project itself.
