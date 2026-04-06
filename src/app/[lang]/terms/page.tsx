import { notFound } from 'next/navigation';
import { isValidLocale, dictionaries, type Locale } from '@/lib/i18n';

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const dict = dictionaries[lang as Locale].terms;

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h1 className="text-3xl font-bold sm:text-4xl">{dict.title}</h1>
      <p className="mt-2 text-sm text-fd-muted-foreground">
        {dict.lastUpdated}
      </p>

      <div className="mt-10 space-y-8">
        {dict.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold">{section.heading}</h2>
            <p className="mt-2 leading-7 text-fd-muted-foreground">
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
