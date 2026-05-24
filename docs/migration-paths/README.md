# Migration Paths

These files define dedicated onboarding pages for developers moving from another language to modern PHP.

Each language-specific file should keep only the parts that are genuinely specific to that source language:

- page purpose and hero copy
- migration value
- migration map
- side-by-side syntax examples
- honest trade-offs
- reverse-path CTA
- contribution CTA

Shared requirements live here so the individual guides do not repeat the same boilerplate.

## Pages

- [JavaScript / TypeScript to PHP](javascript-to-php.md)
- [Python to PHP](python-to-php.md)
- [Go to PHP](go-to-php.md)
- [Java to PHP](java-to-php.md)
- [C# / .NET to PHP](csharp-to-php.md)
- [Ruby to PHP](ruby-to-php.md)
- [Reverse migration paths](reverse-paths.md)

## Required Comparison Topics

Each migration page should support comparisons for:

- variables
- functions
- arrays, lists, and maps
- objects and classes
- constructor patterns
- error handling
- package management
- HTTP routing
- database access
- validation
- testing
- async or background jobs

## Benchmarks And Performance Notes

Use third-party sources only:

- TechEmpower Framework Benchmarks: https://www.techempower.com/benchmarks/
- Computer Language Benchmarks Game: https://benchmarksgame-team.pages.debian.net/benchmarksgame/

Implementation rules:

- Fetch or link to current benchmark data rather than inventing numbers.
- Compare latest stable PHP against the latest stable source-language/runtime version where possible.
- Separate web-framework benchmarks from raw algorithm/runtime benchmarks.
- Do not cherry-pick only favorable PHP cases.
- Show a short methodology note.

Required copy:

> Performance depends heavily on framework, workload, architecture, runtime configuration, database access patterns, and deployment model. Third-party benchmark links are provided for transparency.

## PHP Version Evolution

Show PHP modernization as a timeline:

| Version | Why it matters |
|---|---|
| PHP 7.4 | Typed properties |
| PHP 8.0 | JIT, union types, attributes, named arguments |
| PHP 8.1 | Enums, readonly properties, fibers |
| PHP 8.2 | Readonly classes, DNF types |
| PHP 8.3 | Typed class constants, performance/DX refinements |
| PHP 8.4 | Property hooks, asymmetric visibility, modern DX improvements |
| PHP 8.5 | Latest stable/version slot in site UI |

Reference official support status:

https://www.php.net/supported-versions.php

## Reverse Paths

Every source-language-to-PHP page should include a reverse-path CTA near the end:

```txt
Thinking about moving the other way?
Explore PHP -> <language>.
```

This increases credibility by showing that the guide is not propaganda.

## Contribution CTA Pattern

Each guide should invite developers from that language community to improve comparisons, migration notes, benchmarks, and real-world pain points.

CTA buttons:

- Suggest an improvement
- Open GitHub discussion
- Submit a pull request

## Implementation Notes

- Use a polished two-column comparison layout.
- Use tabs or filters for syntax topics.
- Keep benchmark links visible and transparent.
- Avoid claiming PHP is universally better.
- The goal is to reduce migration friction and modernize PHP perception.
