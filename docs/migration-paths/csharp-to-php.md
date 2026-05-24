# Path: C# to PHP

## Purpose

Create a dedicated concept page for developers moving from **C# / .NET** to **modern PHP**.

Hero copy:

```txt
From C# / .NET to PHP
Already know C# / .NET? Learn modern PHP through concepts you already understand.
```

Primary CTAs:

- Compare syntax
- Why PHP?
- View benchmarks
- Contribute to this guide

---

## Why would I need this?

This page must explain real migration value, not generic marketing.

- Use PHP when cheap hosting, simple deployment, and fast web-product iteration matter.
- Build SaaS, dashboards, APIs, CMS, and marketplace products with a lighter open-source web stack.
- Use mature OOP, DI, ORM, testing, queues, and framework conventions without the Microsoft ecosystem requirement.

Strategic answer:

> Developers rarely learn new languages from zero. They migrate from what they already know. This page reduces adoption friction by mapping familiar C# / .NET concepts to modern PHP.

---

## Migration Map

| C# / .NET concept/tool | PHP equivalent/path |
|---|---|
| NuGet | Composer |
| ASP.NET Core routing | Laravel/Symfony routing |
| Entity Framework | Eloquent/Doctrine |
| xUnit/NUnit/MSTest | Pest/PHPUnit |
| Hosted services | queues/workers/Symfony Messenger |

---

## Side-by-Side Syntax Example

```csharp
public record User(string Name, bool Active);

public string Greet(User user)
{
    return $"Hello, {user.Name}";
}
```

```php
readonly class User
{
    public function __construct(
        public string $name,
        public bool $active,
    ) {}
}

function greet(User $user): string
{
    return "Hello, {$user->name}";
}
```

See [Migration Paths](README.md) for shared comparison topics, benchmark methodology, PHP version timeline, reverse-path, contribution, and implementation requirements.



---

## Honest Trade-Offs

What PHP will not solve:

- C#/.NET has stronger tooling, performance, and enterprise integration.
- .NET is better for Microsoft-heavy organizations.
- C# has stronger static typing and excellent IDE support.

This section is mandatory. It makes the page trustworthy.

---

## Reverse Path

Add this section near the end:

```txt
Thinking about moving the other way?
Explore PHP → C# / .NET.
```

This increases credibility by showing that the guide is not propaganda.

---

## Impact / Contribution CTA

Copy:

```txt
Are you a C# / .NET developer using PHP?
Suggest better comparisons, migration notes, benchmarks, or real-world pain points. Help make this guide useful for the next developer.
```

CTA buttons:

- Suggest an improvement
- Open GitHub discussion
- Submit a pull request
