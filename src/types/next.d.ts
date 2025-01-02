import { Locale } from '@/lib/i18n/config';

declare module 'next' {
  export interface PageProps {
    params: {
      locale: Locale;
    };
    searchParams?: { [key: string]: string | string[] | undefined };
  }
}

declare module 'next/dist/shared/lib/app-router-context' {
  interface LayoutProps {
    children: React.ReactNode;
    params: {
      locale: Locale;
    };
  }
} 