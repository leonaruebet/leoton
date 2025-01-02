'use client';

import { useState } from 'react';
import { Locale } from '@/lib/i18n/config';

interface GetStartedBoxProps {
  locale: Locale;
}

const content = {
  th: {
    title: 'สนใจสินค้า หรือบริการติดตั้งกันขโมยบ้าน หรือ กล้องวงจรปิด กล้อง IP ลีโอตอน',
    subtitle: 'ติดต่อสอบถามที่ทีมเจ้าหน้าที่ฝ่ายดูแลลูกค้าโดยตรงที่เบอร์',
    phones: ['081-438-3450', '02-533-2751'],
    contact: 'คุณรุ่งโรจน์',
    placeholder: 'อีเมลของคุณ',
    button: 'ติดต่อเรา',
  },
  en: {
    title: 'Interested in our security systems, CCTV, or IP cameras installation services?',
    subtitle: 'Contact our customer service team directly at',
    phones: ['081-438-3450', '02-533-2751'],
    contact: 'Mr. Rungroj',
    placeholder: 'Your email address',
    button: 'Contact Us',
  },
  zh: {
    title: '对我们的安防系统、闭路电视或IP摄像头安装服务感兴趣？',
    subtitle: '直接联系我们的客户服务团队',
    phones: ['081-438-3450', '02-533-2751'],
    contact: '容先生',
    placeholder: '您的电子邮件地址',
    button: '联系我们',
  },
};

export default function GetStartedBox({ locale }: GetStartedBoxProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-2 py-6">
      {/* Background with stronger gradient */}
      <div className="absolute inset-0 rounded-[24px] overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#0080ff,#00bfff)]" />
        <div className="absolute inset-0 bg-white/[0.1] backdrop-blur-3xl" />
        
        {/* Additional gradient overlays for depth */}
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-blue-400/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-blue-600/30 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative px-8 py-6">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-white leading-relaxed max-w-4xl mx-auto">
            {content[locale].title}
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-4">
            {content[locale].subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 mb-4">
            {content[locale].phones.map((phone, index) => (
              <a
                key={index}
                href={`tel:${phone.replace(/-/g, '')}`}
                className="text-2xl md:text-3xl font-bold text-white hover:text-white/80 transition-colors"
              >
                {phone}
              </a>
            ))}
          </div>
          <p className="text-lg text-white/90 font-medium mb-6">
            {content[locale].contact}
          </p>

          {/* Email input form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex items-center bg-white/90 backdrop-blur-lg rounded-[14px] p-1 shadow-xl">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content[locale].placeholder}
                className="flex-1 px-4 py-2 bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-900 text-white rounded-xl flex items-center gap-1.5 hover:bg-gray-800 transition-colors ml-1 text-sm font-medium"
              >
                {content[locale].button}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14m0 0l-6-6m6 6l-6 6"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 