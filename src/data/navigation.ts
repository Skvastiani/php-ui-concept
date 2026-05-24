export type NavigationItem = {
  label: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { label: 'Downloads', href: '#downloads' },
  { label: 'Documentation', href: '#documentation' },
  { label: 'Get Involved', href: '#open-source' },
  { label: 'Help', href: '#help' },
];

export const footerLinks: NavigationItem[] = [
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Contribute', href: '#open-source' },
  { label: 'License', href: '#license' },
  { label: 'Migration Paths', href: '#migration' },
  { label: 'Supported Versions', href: '#releases' },
];
