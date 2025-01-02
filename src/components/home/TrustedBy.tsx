import { Locale } from '@/lib/i18n/config';

interface TrustedByProps {
  locale: Locale;
}

const content = {
  th: {
    title: 'ไว้วางใจโดยมากกว่า',
    users: 'ลูกค้า',
  },
  en: {
    title: 'Trusted By More Than',
    users: 'Users',
  },
  zh: {
    title: '受到超过',
    users: '用户的信任',
  },
};

export default function TrustedBy({ locale }: TrustedByProps) {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-12">
        {content[locale].title}{' '}
        <span className="text-primary">+10,000</span>{' '}
        {content[locale].users}
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
        {/* Replace with actual company logos */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="w-32 h-12 rounded-lg bg-gray-200 dark:bg-gray-700" />
        ))}
      </div>
    </section>
  );
} 