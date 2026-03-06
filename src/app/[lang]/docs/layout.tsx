import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import type { Locale } from '@/lib/i18n';
import { ArinovaLogo } from '@/components/logo';

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <DocsLayout
      tree={source.getPageTree(lang as Locale)}
      nav={{
        title: (
          <span className="flex items-center gap-2">
            <ArinovaLogo size={24} />
            Arinova
          </span>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
