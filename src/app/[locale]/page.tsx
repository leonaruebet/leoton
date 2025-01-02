import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import Features from '@/components/home/Features';
import GetStartedBox from '@/components/home/GetStartedBox';
import StatsSection from '@/components/home/StatsSection';
import ClientLogos from '@/components/home/ClientLogos';
import { Locale } from '@/lib/i18n/config';

interface PageProps {
  params: { locale: Locale };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({ params }: PageProps) {
  const { locale } = params;
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar currentLocale={locale} />
      <div className="max-w-7xl mx-auto px-4">
        <HeroSection locale={locale} />
        <StatsSection locale={locale} />
        <ClientLogos locale={locale} />
        <Features locale={locale} />
        <div className="mb-32">
          <GetStartedBox locale={locale} />
        </div>
      </div>
      <Footer locale={locale} />
    </main>
  );
} 