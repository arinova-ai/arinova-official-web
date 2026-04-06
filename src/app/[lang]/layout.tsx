import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { isValidLocale, type Locale } from '@/lib/i18n';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <>
      <Header lang={lang as Locale} />
      <div className="flex-1">{children}</div>
      <Footer lang={lang as Locale} />
    </>
  );
}
