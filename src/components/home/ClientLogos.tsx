'use client';

import { Locale } from '@/lib/i18n/config';
import Image from 'next/image';

interface ClientLogosProps {
  locale: Locale;
}

const content = {
  th: {
    title: 'ไว้วางใจโดยมากกว่า +10,000 ลูกค้า',
  },
  en: {
    title: 'Trusted by more than 10,000+ customers',
  },
  zh: {
    title: '超过10,000+客户信赖',
  },
};

const clients = [
  { 
    name: 'Siam Munkong', 
    logo: '/clients/LOGOSIAMMUNKONG.png',
    width: 180,
    height: 90,
    scale: 1.2,
  },
  { 
    name: 'Sammakorn', 
    logo: '/clients/sammakorn.png',
    width: 200,
    height: 80,
    scale: 1.3,
  },
  { 
    name: 'Client 3', 
    logo: '/clients/images.png',
    width: 160,
    height: 80,
    scale: 1.4,
  },
  { 
    name: 'Client 4', 
    logo: '/clients/images (1).png',
    width: 170,
    height: 85,
    scale: 1.3,
  },
  { 
    name: 'Client 5', 
    logo: '/clients/images (2).png',
    width: 180,
    height: 90,
    scale: 1.4,
  },
  { 
    name: 'Client 6', 
    logo: '/clients/Untitled-9_05.png',
    width: 190,
    height: 95,
    scale: 1.2,
  },
];

export default function ClientLogos({ locale }: ClientLogosProps) {
  return (
    <section className="py-16 overflow-hidden bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gradient">
          {content[locale].title}
        </h2>

        {/* Logos container with continuous scroll animation */}
        <div className="relative mx-auto max-w-[1200px]">
          {/* Gradient overlay left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent dark:from-gray-900 z-10"></div>
          
          {/* Gradient overlay right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent dark:from-gray-900 z-10"></div>

          {/* Scrolling wrapper */}
          <div className="overflow-hidden">
            {/* Scrolling logos */}
            <div className="flex gap-12 animate-scroll py-8">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-none w-[220px] h-[140px] relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center overflow-hidden"
                >
                  <div 
                    className="relative w-full h-full flex items-center justify-center"
                    style={{
                      transform: `scale(${client.scale || 1})`,
                    }}
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      style={{
                        maxWidth: '90%',
                        maxHeight: '90%',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add scroll animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          animation: scroll 45s linear infinite;
          width: fit-content;
        }
      `}</style>
    </section>
  );
} 