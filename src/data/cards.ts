import {
  BookOpen,
  Boxes,
  Code2,
  Download,
  FileText,
  LucideIcon,
  MessagesSquare,
  ShieldCheck,
  Gauge,
  Globe2,
  Layers3,
  PackageCheck,
  Server,
  Rocket,
} from 'lucide-react';

export type CardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  priority?: 'primary' | 'secondary' | 'advanced';
  cta?: string;
};

export const bentoCards: CardItem[] = [

  {
    title: 'Extensions',
    description: 'Browse core and community extensions with compatibility and install context.',
    icon: Boxes,
    href: '#extensions',
    priority: 'secondary',
    cta: 'Browse extensions',
  },
  {
    title: 'Security',
    description: 'Release support, advisories, and secure upgrade paths surfaced in one place.',
    icon: ShieldCheck,
    href: '#security',
    priority: 'secondary',
    cta: 'View advisories',
  },
  {
    title: 'Community',
    description: 'Connect contributors, working groups, events, and practical support resources.',
    icon: MessagesSquare,
    href: '#community',
    priority: 'secondary',
    cta: 'Join community',
  },
  {
    title: 'RFCs',
    description: 'Track language proposals with clearer status, timelines, and implementation notes.',
    icon: FileText,
    href: '#rfcs',
    priority: 'advanced',
    cta: 'View RFCs',
  },
];

export const whyPhpCards: CardItem[] = [
  {
    title: 'Optimized for web requests',
    description: 'Built around practical request-response workloads, server rendering, APIs, and forms.',
    icon: Gauge,
    href: '#runtime',
  },
  {
    title: 'Decades in production',
    description: 'Battle-tested across publishing, commerce, internal tools, SaaS, and public platforms.',
    icon: PackageCheck,
    href: '#releases',
  },
  {
    title: 'Straight path to shipping',
    description: 'Composer, mature frameworks, and simple deployment keep teams moving quickly.',
    icon: Code2,
    href: '#versatile',
  },
  {
    title: 'Runs from shared hosting to cloud',
    description: 'Deploy on traditional hosts, containers, managed platforms, and cloud infrastructure.',
    icon: Globe2,
    href: '#platforms',
  },
  {
    title: 'Massive practical ecosystem',
    description: 'Laravel, Symfony, WordPress, Drupal, Composer, and tooling cover real app needs.',
    icon: Server,
    href: '#ecosystem',
  },
  {
    title: 'Modern language features',
    description: 'Enums, attributes, readonly classes, typed properties, and first-class package tooling.',
    icon: Layers3,
    href: '#frameworks',
  },
];

export const ecosystemGroups = [
  { label: 'Frameworks', items: ['Laravel', 'Symfony'] },
  { label: 'CMS', items: ['WordPress', 'Drupal'] },
  { label: 'Tooling', items: ['Composer', 'JetBrains'] },
  { label: 'Cloud', items: ['AWS', 'Azure'] },
];

export const migrationPaths = [
  {
    title: 'JavaScript → PHP',
    description: 'Move from Node backend complexity to a stable request-response web stack.',
    href: '/docs/migration-paths/javascript-to-php.md',
  },
  {
    title: 'Python → PHP',
    description: 'Translate scripting and web patterns into PHP’s production-focused web ecosystem.',
    href: '/docs/migration-paths/python-to-php.md',
  },
  {
    title: 'Go → PHP',
    description: 'Understand where PHP trades raw concurrency for faster web product delivery.',
    href: '/docs/migration-paths/go-to-php.md',
  },
  {
    title: 'Java → PHP',
    description: 'Map familiar typed application patterns to modern PHP and Composer tooling.',
    href: '/docs/migration-paths/java-to-php.md',
  },
  {
    title: 'C# → PHP',
    description: 'Compare .NET patterns with PHP’s web-first runtime and framework ecosystem.',
    href: '/docs/migration-paths/csharp-to-php.md',
  },
  {
    title: 'Ruby → PHP',
    description: 'Move Rails-era product instincts into Laravel, Symfony, and modern PHP syntax.',
    href: '/docs/migration-paths/ruby-to-php.md',
  },
];

export const developerResources = [
  'Downloads and installation',
  'Documentation search',
  'Migration paths',
  'Release timeline',
  'Security advisories',
  'RFCs and contribution',
  'Extension browser',
  'Supported versions',
];
