import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import accountDeletionCopy from '@/lib/account-deletion.json';
import { defaultLocale, isValidLocale, locales } from '@/lib/i18n';

const site = 'https://www.arinova.ai';
const settingsUrl = 'https://chat.arinova.ai/settings?section=security';
const privacyEmail = 'privacy@arinova.ai';

type AccountDeletionProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: AccountDeletionProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const { title, description } = accountDeletionCopy[lang];
  return {
    title,
    description,
    alternates: {
      canonical: `${site}/${lang}/account-deletion`,
      languages: {
        ...Object.fromEntries(locales.map((locale) => [locale, `${site}/${locale}/account-deletion`])),
        'x-default': `${site}/${defaultLocale}/account-deletion`,
      },
    },
  };
}

export default async function AccountDeletionPage({ params }: AccountDeletionProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const copy = accountDeletionCopy[lang];

  return (
    <main lang={lang} className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h1 className="text-3xl font-bold sm:text-4xl">{copy.title}</h1>
      <p className="mt-2 text-sm text-fd-muted-foreground">{copy.publisher}</p>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-lg font-semibold">{copy.appTitle}</h2>
          <p className="mt-2 leading-7 text-fd-muted-foreground">{copy.appBody}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">{copy.webTitle}</h2>
          <p className="mt-2 leading-7 text-fd-muted-foreground">{copy.webBody}</p>
          <a href={settingsUrl} className="mt-2 inline-flex min-h-11 items-center font-semibold underline">
            {copy.settingsLabel}
          </a>
        </section>
        <section>
          <h2 className="text-lg font-semibold">{copy.contactTitle}</h2>
          <p className="mt-2 leading-7 text-fd-muted-foreground">
            {copy.contactBefore}
            <a href={`mailto:${privacyEmail}`} className="text-fd-foreground underline">{privacyEmail}</a>
            {copy.contactAfter}
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">{copy.deletionTitle}</h2>
          <p className="mt-2 leading-7 text-fd-muted-foreground">{copy.deletionBody}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">{copy.retentionTitle}</h2>
          <div className="mt-2 space-y-3 leading-7 text-fd-muted-foreground">
            <p>{copy.retentionBody}</p>
            <p>{copy.backupBody}</p>
            <p>
              {copy.privacyBefore}
              <Link href={`/${lang}/privacy`} className="text-fd-foreground underline">{copy.privacyLabel}</Link>
              {copy.privacyAfter}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
