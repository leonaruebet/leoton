import { Locale } from '@/lib/i18n/config';
import Image from 'next/image';

interface HeroSectionProps {
  locale: Locale;
}

const content = {
  th: {
    title: 'ระบบรักษาความปลอดภัยที่ทันสมัย',
    subtitle: 'เพื่อธุรกิจของคุณ',
    cta: 'ติดต่อเรา',
  },
  en: {
    title: 'Advanced Security Systems',
    subtitle: 'for Your Business',
    cta: 'Contact Us',
  },
  zh: {
    title: '先进的安全系统',
    subtitle: '为您的企业',
    cta: '联系我们',
  },
};

export default function HeroSection({ locale }: HeroSectionProps) {
  return (
    <section className="pt-32 pb-16 relative">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="relative">
        {/* Hero content */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{content[locale].title}</span>
            <br />
            {content[locale].subtitle}
          </h1>
          <button className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors">
            {content[locale].cta}
          </button>
        </div>

        {/* Floating cards */}
        <div className="relative h-[400px] max-w-4xl mx-auto">
          {/* Main card */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <div className="glass-effect rounded-2xl p-6 shadow-xl hover-effect">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Security System</h3>
                    <p className="text-sm text-gray-500">Advanced Protection</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-primary">$1,050.00</span>
              </div>
            </div>
          </div>

          {/* Floating side cards */}
          <div className="absolute left-0 top-20 w-64 transform -translate-x-1/4 rotate-[-15deg]">
            <div className="glass-effect rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">Installation Complete</span>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-20 w-64 transform translate-x-1/4 rotate-[15deg]">
            <div className="glass-effect rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-medium">24/7 Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 