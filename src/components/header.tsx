'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { dictionaries, localeLabels, locales, type Locale } from '@/lib/i18n';
import { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { ArinovaLogo } from './logo';

export function Header({ lang }: { lang: Locale }) {
  const dict = dictionaries[lang].nav;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function switchLocale(target: Locale) {
    // Replace the locale segment in the current path
    const segments = pathname.split('/');
    segments[1] = target;
    return segments.join('/');
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-fd-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link href={`/${lang}`} className="flex items-center gap-2 font-bold text-lg">
          <ArinovaLogo size={28} />
          Arinova
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href={`/${lang}/docs/agent-sdk`}
            className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
          >
            {dict.docs}
          </Link>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
            >
              <Globe className="h-4 w-4" />
              {localeLabels[lang]}
              <ChevronDown className="h-3 w-3" />
            </button>
            {open && (
              <>
                <div className="fixed inset-0" onClick={() => setOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-36 rounded-md border bg-fd-background p-1 shadow-lg">
                  {locales.map((locale) => (
                    <Link
                      key={locale}
                      href={switchLocale(locale)}
                      onClick={() => setOpen(false)}
                      className={`block rounded-sm px-3 py-1.5 text-sm transition-colors ${
                        locale === lang
                          ? 'bg-fd-accent text-fd-accent-foreground'
                          : 'text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground'
                      }`}
                    >
                      {localeLabels[locale]}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
