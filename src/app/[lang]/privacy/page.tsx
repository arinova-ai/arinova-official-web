import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import { privacyPolicies } from './policy';

const descriptions = {
  en: 'Learn how Arinova collects, uses, and protects your information.',
  'zh-TW': '了解 Arinova 如何蒐集、使用及保護您的資訊。',
  'zh-CN': '了解 Arinova 如何收集、使用和保护您的信息。',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return {
    title: privacyPolicies[lang].title,
    description: descriptions[lang],
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const policy = privacyPolicies[lang];

  return (
    <main lang={lang} className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h1 className="text-3xl font-bold sm:text-4xl">{policy.title}</h1>
      <p className="mt-2 text-sm text-fd-muted-foreground">
        {policy.effectiveDate}
      </p>
      <p className="text-sm text-fd-muted-foreground">{policy.lastUpdated}</p>
      <a href="https://chat.arinova.ai" className="mt-2 inline-block text-sm underline">
        Arinova Chat (chat.arinova.ai)
      </a>

      <div
        className="mt-10 space-y-8 leading-7 text-fd-muted-foreground
          [&_section]:space-y-2 [&_h2]:text-lg [&_h2]:font-semibold
          [&_h3]:pt-2 [&_h3]:font-semibold [&_h2]:text-fd-foreground
          [&_h3]:text-fd-foreground [&_ul]:list-disc [&_ul]:space-y-1
          [&_ul]:ps-6 [&_a]:text-fd-foreground [&_a]:underline
          [&_hr]:border-fd-border [&_hr+p]:text-sm [&_hr+p]:italic"
      >
        {policy.body}
      </div>
    </main>
  );
}
