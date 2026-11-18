import Link from 'next/link';
import accountDeletionCopy from '@/lib/account-deletion.json';
import type { Locale } from '@/lib/i18n';
import { dictionaries } from '@/lib/i18n';
import { ArinovaLogo } from './logo';

export function Footer({ lang }: { lang: Locale }) {
  const dict = dictionaries[lang].footer;

  return (
    <footer className="border-t bg-fd-background">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2 font-bold text-lg">
            <ArinovaLogo size={24} />
            Arinova
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-sm text-fd-muted-foreground">
            <Link
              href={`/${lang}/privacy`}
              className="hover:text-fd-foreground transition-colors"
            >
              {dict.privacy}
            </Link>
            <Link
              href={`/${lang}/account-deletion`}
              className="hover:text-fd-foreground transition-colors"
            >
              {accountDeletionCopy[lang].footerLabel}
            </Link>
            <Link
              href={`/${lang}/terms`}
              className="hover:text-fd-foreground transition-colors"
            >
              {dict.terms}
            </Link>
            <Link
              href={`/${lang}/support`}
              className="hover:text-fd-foreground transition-colors"
            >
              {dict.support}
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-xs text-fd-muted-foreground">
          {dict.copyright}
        </div>
      </div>
    </footer>
  );
}
