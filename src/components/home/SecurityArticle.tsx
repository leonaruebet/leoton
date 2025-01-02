import { Locale } from '@/lib/i18n/config';

interface SecurityArticleProps {
  locale: Locale;
}

type ContentType = Record<Locale, {
  title: string;
  content: string;
}>;

export default function SecurityArticle({ locale }: SecurityArticleProps) {
  const content: ContentType = {
    th: {
      title: 'เรื่อง เลือกติดกล้องหรือกันขโมยดี',
      content: `มีคนจำนวนไม่น้อย ที่ยังสับสนในการจ่ายเงินเพื่อระบบรักษาความปลอดภัย หลายๆตนเลือกติดตั้งกล้องสำหรับดู เพราะเห็นว่ามีข่าวมีหรือโฆษนาให้เห็นอยู่บ่อยๆ ซึ่งตามเป็นจริงแล้ว ในหลายๆกรณี กล้องแทบจะไม่ช่วยป้องกันเหตุอะไร

คำว่า "กล้อง" ซื่อก็บอกอยู่แล้วว่า จุดประสงค์ของมัน คือเอาไว้ดู และจากความเป็นจริงที่ว่า มีหลายกรณีเหลือเกิน ที่กล้องไม่สามารถตรวจสอบอะไรได้...`,
    },
    en: {
      title: 'Choosing Between Security Cameras or Anti-theft Systems',
      content: `Many people are still confused about investing in security systems. Many choose to install cameras because they see news or advertisements frequently. However, in many cases, cameras barely help prevent incidents.

The word "camera" itself indicates its purpose is to watch. In reality, there are many cases where cameras cannot detect anything...`,
    },
    zh: {
      title: '选择安装摄像头还是防盗系统',
      content: `许多人仍然对投资安防系统感到困惑。许多人选择安装摄像头，因为他们经常看到新闻或广告。然而，在许多情况下，摄像头几乎无法预防事件。

"摄像头"这个词本身就表明其目的是观看。实际上，在许多情况下，摄像头无法检测到任何东西...`,
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-24">
      <div className="glass-effect rounded-3xl p-8 hover-effect">
        <h1 className="text-4xl font-bold text-gradient mb-8">
          {content[locale].title}
        </h1>
        <div className="space-y-6">
          {content[locale].content.split('\n\n').map((paragraph: string, index: number) => (
            <p key={index} className="text-lg leading-relaxed opacity-80">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
          <p className="text-primary space-y-2">
            <span className="block font-semibold text-lg mb-4">Leoton Ltd.</span>
            <span className="block">191/19 Moo 3, Lamlukka Road,</span>
            <span className="block">Ladsawai, Lamlukka, Pathumthani 12150</span>
            <span className="block">Tel: 02-533-2751 Fax: 02-533-2752</span>
            <a href="http://www.leoton.com" className="block hover:underline">www.leoton.com</a>
          </p>
        </div>
      </div>
    </article>
  );
} 