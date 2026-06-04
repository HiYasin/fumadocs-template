import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import { Logo } from '@/components/ui/Logo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: <Logo />,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        text: "Documentation",
        url: "/docs",
        active: "nested-url"
      },
      {
        text: "Blog",
        url: "/blog",
        active: "nested-url"
      },
    ]
  };
}
