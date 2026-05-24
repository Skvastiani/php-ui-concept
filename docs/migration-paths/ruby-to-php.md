# Path: Ruby to PHP

## Purpose

Create a dedicated concept page for developers moving from **Ruby** to **modern PHP**.

Hero copy:

```txt
From Ruby to PHP
Already know Ruby? Learn modern PHP through concepts you already understand.
```

Primary CTAs:

- Compare syntax
- Why PHP?
- View benchmarks
- Contribute to this guide

---

## Why would I need this?

This page must explain real migration value, not generic marketing.

- Use PHP when you want Rails-like productivity with broader hosting availability and a larger general web deployment footprint.
- Use Laravel/Symfony for mature MVC, queues, ORM, validation, mail, and testing workflows.
- Adopt modern PHP syntax while keeping fast product iteration.

Strategic answer:

> Developers rarely learn new languages from zero. They migrate from what they already know. This page reduces adoption friction by mapping familiar Ruby concepts to modern PHP.

---

## Migration Map

| Ruby concept/tool | PHP equivalent/path |
|---|---|
| Bundler/Gems | Composer/packages |
| Rails routes/controllers | Laravel/Symfony routing/controllers |
| ActiveRecord | Eloquent/Doctrine |
| Sidekiq | Laravel queues/Symfony Messenger |
| RSpec/Minitest | Pest/PHPUnit |

---

## Side-by-Side Syntax Example

```ruby
user = { name: 'John', active: true }

def greet(user)
  "Hello, #{user[:name]}"
end

puts greet(user)
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

- Ruby/Rails remains highly elegant and productive for teams invested in that ecosystem.
- Ruby syntax is often more expressive.
- Rails conventions are still extremely strong for certain product teams.

This section is mandatory. It makes the page trustworthy.

---

## Reverse Path

Add this section near the end:

```txt
Thinking about moving the other way?
Explore PHP → Ruby.
```

This increases credibility by showing that the guide is not propaganda.

---

## Impact / Contribution CTA

Copy:

```txt
Are you a Ruby developer using PHP?
Suggest better comparisons, migration notes, benchmarks, or real-world pain points. Help make this guide useful for the next developer.
```

CTA buttons:

- Suggest an improvement
- Open GitHub discussion
- Submit a pull request
