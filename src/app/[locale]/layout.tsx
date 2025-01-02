import '@/styles/globals.css';
import { Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';
import { Locale } from '@/lib/i18n/config';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Leoton',
    default: 'Leoton - Professional Security Systems',
  },
  description: 'Professional security systems and solutions',
  keywords: ['security systems', 'CCTV', 'alarm systems', 'home security', 'business security'],
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
} 