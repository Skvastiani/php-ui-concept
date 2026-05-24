# Path: Python to PHP

## Purpose

Create a dedicated concept page for developers moving from **Python** to **modern PHP**.

Hero copy:

```txt
From Python to PHP
Already know Python? Learn modern PHP through concepts you already understand.
```

Primary CTAs:

- Compare syntax
- Why PHP?
- View benchmarks
- Contribute to this guide

---

## Why would I need this?

This page must explain real migration value, not generic marketing.

- Use PHP for traditional request-response web apps where hosting and deployment simplicity matter.
- Move web product work away from Python environments optimized mainly for AI/data/scripting.
- Use mature PHP frameworks for SaaS, CMS, dashboards, APIs, and admin tools.

Strategic answer:

> Developers rarely learn new languages from zero. They migrate from what they already know. This page reduces adoption friction by mapping familiar Python concepts to modern PHP.

---

## Migration Map

| Python concept/tool | PHP equivalent/path |
|---|---|
| pip/poetry | Composer |
| Django/FastAPI routes | Laravel/Symfony routes |
| SQLAlchemy/Django ORM | Eloquent/Doctrine |
| Celery/RQ | Laravel queues/Symfony Messenger |
| pytest/unittest | Pest/PHPUnit |

---

## Side-by-Side Syntax Example

```python
user = {'name': 'John', 'active': True}

def greet(user: dict) -> str:
    return f"Hello, {user['name']}"

print(greet(user))
```

```php
$user = ['name' => 'John', 'active' => true];

function greet(array $user): string
{
    return "Hello, {$user['name']}";
}

echo greet($user);
```

See [Migration Paths](README.md) for shared comparison topics, benchmark methodology, PHP version timeline, reverse-path, contribution, and implementation requirements.



---

## Honest Trade-Offs

What PHP will not solve:

- PHP does not replace Python for AI, ML, notebooks, and data science.
- Python remains stronger for automation scripts and scientific libraries.
- Python syntax is usually simpler for first-time programmers.

This section is mandatory. It makes the page trustworthy.

---

## Reverse Path

Add this section near the end:

```txt
Thinking about moving the other way?
Explore PHP → Python.
```

This increases credibility by showing that the guide is not propaganda.

---

## Impact / Contribution CTA

Copy:

```txt
Are you a Python developer using PHP?
Suggest better comparisons, migration notes, benchmarks, or real-world pain points. Help make this guide useful for the next developer.
```

CTA buttons:

- Suggest an improvement
- Open GitHub discussion
- Submit a pull request
