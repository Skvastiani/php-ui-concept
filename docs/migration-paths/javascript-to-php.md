# Path: JavaScript to PHP

## Purpose

Create a dedicated concept page for developers moving from **JavaScript / TypeScript** to **modern PHP**.

Hero copy:

```txt
From JavaScript / TypeScript to PHP
Already know JavaScript / TypeScript? Learn modern PHP through concepts you already understand.
```

Primary CTAs:

- Compare syntax
- Why PHP?
- View benchmarks
- Contribute to this guide

---

## Why would I need this?

This page must explain real migration value, not generic marketing.

- Reduce backend stack assembly around Express/Fastify when a batteries-included framework is better.
- Separate frontend churn from backend stability.
- Use Laravel/Symfony for CRUD, auth, validation, queues, mail, and admin workflows with fewer moving parts.

Strategic answer:

> Developers rarely learn new languages from zero. They migrate from what they already know. This page reduces adoption friction by mapping familiar JavaScript / TypeScript concepts to modern PHP.

---

## Migration Map

| JavaScript / TypeScript concept/tool | PHP equivalent/path |
|---|---|
| npm | Composer |
| Express/Fastify routes | Laravel/Symfony routes |
| Prisma/TypeORM | Eloquent/Doctrine |
| BullMQ/queues | Laravel queues/Symfony Messenger |
| Jest/Vitest | Pest/PHPUnit |

---

## Side-by-Side Syntax Example

```js
const user = { name: 'John', active: true };

function greet(user) {
  return `Hello, ${user.name}`;
}

console.log(greet(user));
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

- PHP does not replace JavaScript in the browser.
- Node.js remains strong for realtime/websocket-heavy systems.
- TypeScript has stronger compile-time typing than PHP.

This section is mandatory. It makes the page trustworthy.

---

## Reverse Path

Add this section near the end:

```txt
Thinking about moving the other way?
Explore PHP → JavaScript / TypeScript.
```

## Impact / Contribution CTA

Copy:

```txt
Are you a JavaScript / TypeScript developer using PHP?
Suggest better comparisons, migration notes, benchmarks, or real-world pain points. Help make this guide useful for the next developer.
```

CTA buttons:

- Suggest an improvement
- Open GitHub discussion
- Submit a pull request
