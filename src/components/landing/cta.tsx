import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

type CTADict = {
  title: string;
  subtitle: string;
  button: string;
};

export function CTA({ dict, lang }: { dict: CTADict; lang: Locale }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 p-10 sm:p-16 text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">{dict.title}</h2>
          <p className="mt-4 text-indigo-100">{dict.subtitle}</p>
          <Link
            href={`/${lang}/docs/agent-sdk/getting-started`}
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 transition-colors"
          >
            {dict.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
