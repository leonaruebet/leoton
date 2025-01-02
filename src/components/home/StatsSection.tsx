'use client';

import { Locale } from '@/lib/i18n/config';

interface StatsSectionProps {
  locale: Locale;
}

const content = {
  th: {
    title: 'รับประกันคุณภาพจากประสบการณ์มากกว่า 20ปี',
    stats: [
      {
        value: '100+',
        label: 'โครงการ',
      },
      {
        value: '20ปี+',
        label: 'ประสบการณ์',
      },
      {
        value: '12000+',
        label: 'ติดตั้งหลัง',
      },
      {
        value: '98%',
        label: 'พึงพอใจ',
      },
    ],
  },
  en: {
    title: 'Quality Guaranteed with Over 20 Years of Experience',
    stats: [
      {
        value: '100+',
        label: 'Projects',
      },
      {
        value: '20Y+',
        label: 'Experience',
      },
      {
        value: '12000+',
        label: 'Installations',
      },
      {
        value: '98%',
        label: 'Satisfaction',
      },
    ],
  },
  zh: {
    title: '20多年经验质量保证',
    stats: [
      {
        value: '100+',
        label: '项目',
      },
      {
        value: '20年+',
        label: '经验',
      },
      {
        value: '12000+',
        label: '安装',
      },
      {
        value: '98%',
        label: '满意度',
      },
    ],
  },
};

export default function StatsSection({ locale }: StatsSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gradient">
          {content[locale].title}
        </h2>
        
        <div className="relative group mx-auto max-w-5xl">
          {/* Glowing background effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          
          {/* Main content */}
          <div className="relative flex items-stretch bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
            <div className="flex flex-1 justify-around px-8 py-6">
              {content[locale].stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center relative min-w-[140px]">
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium whitespace-nowrap">
                    {stat.label}
                  </div>
                  {/* Divider line */}
                  {index < content[locale].stats.length - 1 && (
                    <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 h-16 w-px bg-gray-200 dark:bg-gray-700"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframes for the tilt animation */}
      <style jsx global>{`
        @keyframes tilt {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0.5deg);
          }
          75% {
            transform: rotate(-0.5deg);
          }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </section>
  );
} 