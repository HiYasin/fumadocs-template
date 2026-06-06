import { blogSource } from '@/lib/source';
// We can create a custom layout for our blog pages by using 'blogSource' instead of 'source'. Everything else can stay same.
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { tabItems } from '@/lib/shared';

export default function Layout({ children }: LayoutProps<'/blogs'>) {
  return (
    <DocsLayout tree={blogSource.getPageTree()} {...baseOptions()} tabs={tabItems}>
      {children}
    </DocsLayout>
  );
}
