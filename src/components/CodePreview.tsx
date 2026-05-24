import { Check, Clipboard } from 'lucide-react';
import { useState } from 'react';

const examples = {
  PHP: `<?php
declare(strict_types=1);

#[Attribute(Attribute::TARGET_CLASS)]
final class ServiceTarget {}

enum Region: string {
    case Europe = 'eu';
    case Americas = 'amer';
}

#[ServiceTarget]
readonly class RuntimeTarget
{
    public function __construct(
        public string $service,
        public Region $region,
        public int $replicas = 3,
    ) {}
}

$target = new RuntimeTarget(
    service: 'checkout-api',
    region: Region::Europe,
);`,
  JavaScript: `type Region = 'eu' | 'amer';

class RuntimeTarget {
  readonly service: string;
  readonly region: Region;
  readonly replicas: number;

  constructor(args: {
    service: string;
    region: Region;
    replicas?: number;
  }) {
    this.service = args.service;
    this.region = args.region;
    this.replicas = args.replicas ?? 3;
  }
}`,
  Go: `type Region string

const (
    Europe Region = "eu"
    Americas Region = "amer"
)

type RuntimeTarget struct {
    Service string
    Region Region
    Replicas int
}

target := RuntimeTarget{
    Service: "checkout-api",
    Region: Europe,
    Replicas: 3,
}`,
  Java: `enum Region {
    EUROPE,
    AMERICAS
}

public record RuntimeTarget(
    String service,
    Region region,
    int replicas
) {}

var target = new RuntimeTarget(
    "checkout-api",
    Region.EUROPE,
    3
);`,
  'C#': `public enum Region
{
    Europe,
    Americas
}

public sealed record RuntimeTarget(
    string Service,
    Region Region,
    int Replicas = 3
);

var target = new RuntimeTarget(
    Service: "checkout-api",
    Region: Region.Europe
);`,
  Python: `from dataclasses import dataclass
from enum import StrEnum

class Region(StrEnum):
    EUROPE = "eu"
    AMERICAS = "amer"

@dataclass(frozen=True)
class RuntimeTarget:
    service: str
    region: Region
    replicas: int = 3

target = RuntimeTarget(
    service="checkout-api",
    region=Region.EUROPE,
)`,
  Ruby: `Region = Data.define(:value)

EUROPE = Region.new("eu")
AMERICAS = Region.new("amer")

RuntimeTarget = Data.define(
  :service,
  :region,
  :replicas
)

target = RuntimeTarget.new(
  service: "checkout-api",
  region: EUROPE,
  replicas: 3
)`,
};

type ExampleVersion = keyof typeof examples;

type CodePreviewProps = {
  compact?: boolean;
};

export default function CodePreview({ compact = false }: CodePreviewProps) {
  const [active, setActive] = useState<ExampleVersion>('PHP');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(examples[active]);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className={compact ? '' : 'px-4 py-8 sm:px-6 lg:px-8'} aria-labelledby="code-preview-title">
      <div className={`${compact ? '' : 'mx-auto max-w-7xl'} overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-2xl dark:border-white/10`}>
        <div className="flex flex-col gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <p className="text-sm font-black text-white">Primary example: PHP</p>
            <label htmlFor="code-comparison-language" className="text-xs font-semibold text-slate-400">
              Compare syntax with another language
            </label>
          </div>
          <div className="flex items-center gap-2">
            <select
              id="code-comparison-language"
              value={active}
              onChange={(event) => setActive(event.target.value as ExampleVersion)}
              className="h-10 rounded-md border border-white/15 bg-slate-900 px-3 text-sm font-bold text-slate-100 outline-none transition focus:border-php-amber focus:ring-2 focus:ring-php-amber"
            >
              {(Object.keys(examples) as ExampleVersion[]).map((version) => (
                <option key={version} value={version}>
                  {version}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex h-10 shrink-0 items-center gap-2 rounded-md px-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-php-amber"
              aria-label="Copy current code example"
            >
              {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Clipboard className="h-4 w-4" aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
        <h2 id="code-preview-title" className="sr-only">Modern PHP example</h2>
        <pre className="overflow-x-auto px-4 py-4 text-sm leading-7 text-slate-100">
          <code>
            {examples[active]
              .split('\n')
              .map((line, index) => (
                <span key={`${active}-${index}`} className="block">
                  <span className="mr-5 inline-block w-6 select-none text-right text-slate-600">{index + 1}</span>
                  <span className={line.includes('readonly') || line.includes('enum') ? 'text-indigo-200' : line.includes('$') ? 'text-emerald-200' : 'text-slate-100'}>
                    {line || ' '}
                  </span>
                </span>
              ))}
          </code>
        </pre>
      </div>
    </section>
  );
}
