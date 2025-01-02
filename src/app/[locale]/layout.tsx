'use client';

import { use } from 'react';
import Providers from '@/components/Providers';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = use(params);
  
  return <Providers>{children}</Providers>;
} 