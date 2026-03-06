import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

type HeroDict = {
  title: string;
  subtitle: string;
  cta: string;
};

export function Hero({ dict, lang }: { dict: HeroDict; lang: Locale }) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-transparent to-transparent dark:from-indigo-950/30" />

      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl whitespace-pre-line">
          {dict.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-fd-muted-foreground max-w-2xl mx-auto">
          {dict.subtitle}
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href={`/${lang}/docs/agent-sdk`}
            className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
          >
            {dict.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
