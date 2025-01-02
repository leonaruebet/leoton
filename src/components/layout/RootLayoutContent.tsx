'use client';

import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

interface RootLayoutContentProps {
  children: React.ReactNode;
  locale: string;
}

export default function RootLayoutContent({ children, locale }: RootLayoutContentProps) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
} 