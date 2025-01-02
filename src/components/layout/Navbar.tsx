import Link from 'next/link';
import { locales, localeNames, Locale } from '@/lib/i18n/config';
import ThemeToggle from '@/components/ui/ThemeToggle';

interface NavbarProps {
  currentLocale: Locale;
}

export default function Navbar({ currentLocale }: NavbarProps) {
  return (
    <nav className="fixed w-full z-20 top-4 px-4">
      <div className="max-w-5xl mx-auto glass-effect rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <Link href={`/${currentLocale}`} className="flex items-center hover-effect">
            <span className="text-2xl font-bold text-gradient">Leoton</span>
          </Link>

          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-8 mr-8">
              <Link href={`/${currentLocale}/about`} className="text-sm hover:text-primary transition-colors">
                About
              </Link>
              <Link href={`/${currentLocale}/services`} className="text-sm hover:text-primary transition-colors">
                Services
              </Link>
              <Link href={`/${currentLocale}/contact`} className="text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-2 border-l pl-4 border-gray-200">
              {locales.map((locale) => (
                <Link
                  key={locale}
                  href={`/${locale}`}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
                    locale === currentLocale
                      ? 'bg-primary text-white'
                      : 'text-primary hover:bg-primary/5'
                  } transition-all duration-200`}
                >
                  {localeNames[locale]}
                </Link>
              ))}
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 