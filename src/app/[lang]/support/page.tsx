import { notFound } from 'next/navigation';
import { isValidLocale, dictionaries, type Locale } from '@/lib/i18n';
import { Mail, Phone, MapPin } from 'lucide-react';

export default async function SupportPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const dict = dictionaries[lang as Locale].support;

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">{dict.title}</h1>
        <p className="mt-4 text-lg text-fd-muted-foreground">
          {dict.subtitle}
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-3">
        {/* Email */}
        <div className="rounded-xl border p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950/50">
            <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="mt-4 font-semibold">{dict.emailLabel}</h2>
          <a
            href={`mailto:${dict.email}`}
            className="mt-2 block text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
          >
            {dict.email}
          </a>
        </div>

        {/* Phone */}
        <div className="rounded-xl border p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950/50">
            <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="mt-4 font-semibold">{dict.phoneLabel}</h2>
          <a
            href={`tel:${dict.phone.replace(/[\s-]/g, '')}`}
            className="mt-2 block text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
          >
            {dict.phone}
          </a>
        </div>

        {/* Address */}
        <div className="rounded-xl border p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950/50">
            <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="mt-4 font-semibold">{dict.addressLabel}</h2>
          <p className="mt-2 text-sm text-fd-muted-foreground whitespace-pre-line">
            {dict.address}
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-fd-muted-foreground">
        {dict.companyName}
      </div>
    </main>
  );
}
