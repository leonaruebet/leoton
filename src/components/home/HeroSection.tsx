'use client';

import { Locale } from '@/lib/i18n/config';

interface HeroSectionProps {
  locale: Locale;
}

const content = {
  th: {
    title: 'ระบบรักษาความปลอดภัยที่ไว้ใจได้',
    subtitle: 'มั่นใจด้วยประสบการณ์มากกว่า 20 ปี',
    cta: 'เริ่มต้นใช้งาน',
  },
  en: {
    title: 'Reliable Security Systems',
    subtitle: 'Trusted with over 20 years of experience',
    cta: 'Get Started',
  },
  zh: {
    title: '可靠的安防系统',
    subtitle: '超过20年的信赖经验',
    cta: '立即开始',
  },
};

export default function HeroSection({ locale }: HeroSectionProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          {content[locale].title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12">
          {content[locale].subtitle}
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition-colors">
          {content[locale].cta}
        </button>
      </div>
    </section>
  );
} 