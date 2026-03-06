import { notFound } from 'next/navigation';
import { isValidLocale, dictionaries, type Locale } from '@/lib/i18n';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { CTA } from '@/components/landing/cta';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const dict = dictionaries[lang as Locale];

  return (
    <main>
      <Hero dict={dict.hero} lang={lang as Locale} />
      <Features dict={dict.features} />
      <CTA dict={dict.cta} lang={lang as Locale} />
    </main>
  );
}
