export const locales = ['en', 'th', 'zh'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  th: 'ไทย',
  zh: '中文',
} as const;

export function getDirection(locale: Locale) {
  return 'ltr';
} 