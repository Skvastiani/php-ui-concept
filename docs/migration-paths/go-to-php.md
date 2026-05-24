# Path: Go to PHP

## Purpose

Create a dedicated concept page for developers moving from **Go** to **modern PHP**.

Hero copy:

```txt
From Go to PHP
Already know Go? Learn modern PHP through concepts you already understand.
```

Primary CTAs:

- Compare syntax
- Why PHP?
- View benchmarks
- Contribute to this guide

---

## Why would I need this?

This page must explain real migration value, not generic marketing.

- Use PHP when delivery speed and web framework productivity matter more than raw low-level throughput.
- Avoid rebuilding common SaaS/web features manually when Laravel/Symfony already provide strong defaults.
- Use PHP for content-heavy, CRUD-heavy, admin, marketplace, or CMS-style products.

Strategic answer:

> Developers rarely learn new languages from zero. They migrate from what they already know. This page reduces adoption friction by mapping familiar Go concepts to modern PHP.

---

## Migration Map

| Go concept/tool | PHP equivalent/path |
|---|---|
| go mod | Composer |
| net/http/chi/gin | Laravel/Symfony routing |
| sqlc/GORM | Eloquent/Doctrine |
| goroutines/workers | queues/workers, Swoole, RoadRunner |
| testing package | Pest/PHPUnit |

---

## Side-by-Side Syntax Example

```go
type User struct {
    Name string
    Active bool
}

func Greet(user User) string {
    return "Hello, " + user.Name
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

- Go usually wins for low-memory services, infrastructure tools, and concurrency-heavy daemons.
- Go produces simple static binaries; PHP has a different runtime/deployment model.
- Go is stronger for cloud-native infrastructure components.

This section is mandatory. It makes the page trustworthy.

---

## Reverse Path

Add this section near the end:

```txt
Thinking about moving the other way?
Explore PHP → Go.
```

This increases credibility by showing that the guide is not propaganda.

---

## Impact / Contribution CTA

Copy:

```txt
Are you a Go developer using PHP?
Suggest better comparisons, migration notes, benchmarks, or real-world pain points. Help make this guide useful for the next developer.
```

CTA buttons:

- Suggest an improvement
- Open GitHub discussion
- Submit a pull request
