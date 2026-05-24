# Path: Java to PHP

## Purpose

Create a dedicated concept page for developers moving from **Java** to **modern PHP**.

Hero copy:

```txt
From Java to PHP
Already know Java? Learn modern PHP through concepts you already understand.
```

Primary CTAs:

- Compare syntax
- Why PHP?
- View benchmarks
- Contribute to this guide

---

## Why would I need this?

This page must explain real migration value, not generic marketing.

- Use PHP when enterprise-style web features are needed without JVM-level ceremony.
- Move faster on CRUD/API/internal tools where a lighter runtime and Laravel/Symfony conventions help.
- Reduce boilerplate while keeping OOP, dependency injection, testing, and package management.

Strategic answer:

> Developers rarely learn new languages from zero. They migrate from what they already know. This page reduces adoption friction by mapping familiar Java concepts to modern PHP.

---

## Migration Map

| Java concept/tool | PHP equivalent/path |
|---|---|
| Maven/Gradle | Composer |
| Spring MVC | Laravel/Symfony controllers |
| Hibernate/JPA | Doctrine/Eloquent |
| JUnit | PHPUnit/Pest |
| Spring Boot jobs | Symfony Messenger/Laravel queues |

---

## Side-by-Side Syntax Example

```java
public record User(String name, boolean active) {}

public String greet(User user) {
    return "Hello, " + user.name();
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

- Java remains stronger for JVM enterprise ecosystems, large multi-threaded systems, and mature corporate tooling.
- Spring has very deep enterprise integration support.
- Java has stronger static typing guarantees.

This section is mandatory. It makes the page trustworthy.

---

## Reverse Path

Add this section near the end:

```txt
Thinking about moving the other way?
Explore PHP → Java.
```

This increases credibility by showing that the guide is not propaganda.

---

## Impact / Contribution CTA

Copy:

```txt
Are you a Java developer using PHP?
Suggest better comparisons, migration notes, benchmarks, or real-world pain points. Help make this guide useful for the next developer.
```

CTA buttons:

- Suggest an improvement
- Open GitHub discussion
- Submit a pull request
