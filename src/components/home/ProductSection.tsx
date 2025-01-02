'use client';

import { useState } from 'react';
import { Locale } from '@/lib/i18n/config';

interface ProductSectionProps {
  locale: Locale;
}

const content = {
  th: {
    title: 'ผลิตภัณฑ์ของเรา',
    products: [
      {
        title: 'Start-ups',
        description: 'ระบบรักษาความปลอดภัยสำหรับธุรกิจเริ่มต้น',
        icon: '👨‍💼',
      },
      {
        title: 'Freelancers',
        description: 'โซลูชันที่เหมาะสมสำหรับฟรีแลนซ์',
        icon: '💼',
      },
      {
        title: 'Enterprise',
        description: 'ระบบรักษาความปลอดภัยระดับองค์กร',
        icon: '🏢',
      },
    ],
  },
  en: {
    title: 'Our Products',
    products: [
      {
        title: 'Start-ups',
        description: 'Security solutions for starting businesses',
        icon: '👨‍💼',
      },
      {
        title: 'Freelancers',
        description: 'Perfect solution for freelancers',
        icon: '💼',
      },
      {
        title: 'Enterprise',
        description: 'Enterprise-grade security systems',
        icon: '🏢',
      },
    ],
  },
  zh: {
    title: '我们的产品',
    products: [
      {
        title: '初创企业',
        description: '适合初创企业的安全解决方案',
        icon: '👨‍💼',
      },
      {
        title: '自由职业者',
        description: '适合自由职业者的完美解决方案',
        icon: '💼',
      },
      {
        title: '企业',
        description: '企业级安全系统',
        icon: '🏢',
      },
    ],
  },
};

export default function ProductSection({ locale }: ProductSectionProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const products = content[locale].products;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const getCardClassName = (index: number) => {
    const baseClass = "glass-effect rounded-3xl p-8 transition-all duration-500";
    if (index === activeIndex) {
      return `${baseClass} w-[400px] h-[300px] scale-100 opacity-100 z-10`;
    }
    if (index === (activeIndex + 1) % products.length || index === (activeIndex - 1 + products.length) % products.length) {
      return `${baseClass} w-[320px] h-[240px] scale-90 opacity-60`;
    }
    return `${baseClass} w-[280px] h-[200px] scale-75 opacity-30`;
  };

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="text-gradient">{content[locale].title}</span>
      </h2>

      <div className="relative max-w-6xl mx-auto px-4">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex items-center justify-center gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={getCardClassName(index)}
            >
              <div className={`h-full flex flex-col ${index === activeIndex ? 'justify-between' : 'justify-center'}`}>
                <div>
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <p className={`text-gray-600 dark:text-gray-300 transition-all duration-500 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {product.description}
                  </p>
                </div>
                {index === activeIndex && (
                  <button className="mt-6 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors">
                    Learn More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'w-8 bg-primary' : 'bg-gray-300 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 