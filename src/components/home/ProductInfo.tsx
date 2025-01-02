'use client';

import { Locale } from '@/lib/i18n/config';

interface ProductInfoProps {
  locale: Locale;
}

const content = {
  th: {
    welcome: 'ยินดีต้อนรับสู่ LeoTON',
    description: 'กันขโมย สำหรับบ้าน สำนักงาน ร้านค้า โรงงาน โครงการหมู่บ้าน home alarm',
    expertise: 'ประสบการณ์ยาวนาน เราเชี่ยวชาญระบบกันขโมย',
    slogan: 'designed on Security Solution on Silicon System and Software',
    contact: {
      title: 'สนใจสินค้า หรือบริการติดตั้งกันขโมยบ้าน หรือ กล้องวงจรปิด กล้อง IP ลีโอตอน',
      text: 'ติดต่อสอบถามที่ทีมเจ้าหน้าที่ฝ่ายดูแลลูกค้าโดยตรงที่เบอร์',
      phones: ['081-438-3450', '02-533-2751'],
      person: 'คุณรุ่งโรจน์',
    },
    products: [
      {
        name: 'NiKE TL',
        features: [
          'เสียงดังสุดสุด',
          'มี LCD รองรับทั้งระบบไร้สาย และเดินสาย',
          'ไซเรน เตือนภัย แจ้งโทรออก สั่งงานผ่านทางระบบโทรศัพท์',
          'บันทึกเหตุการณ์ พร้อมระบบบันทึกวันและเวลาจริง',
          'มีระบบเสียงตอบรับการทำงาน เป็นภาษาไทย',
        ],
      },
      {
        name: 'Platinum GSM',
        features: [
          'ไม่ต้องขอสัญญาณโทรศัพท์บ้าน',
          'รองรับระบบ GSM 3 band',
          'ปุ่มแบบ touch pad',
          'ออกแบบทันสมัย รูปทรงเพียวบาง',
          'มีระบบสำรองไฟภายในตัว',
        ],
      },
      {
        name: 'NiKE-ECON',
        features: [
          'สุดยอดประหยัด พร้อมระบบที่ไว้ใจได้',
          'รองรับทั้งระบบ เดินสาย และไร้สาย',
          'แบ่งเป็นโซนได้ 9 โซน',
          'โทรแจ้งเตือนภัย',
          'สั่งงานทางไกลผ่านระบบโทรศัพท์',
        ],
      },
    ],
  },
  en: {
    welcome: 'WELCOME to LeoTON',
    description: 'Security systems for homes, offices, shops, factories, and housing projects',
    expertise: 'Long experience, we specialize in security systems',
    slogan: 'designed on Security Solution on Silicon System and Software',
    contact: {
      title: 'Interested in our products or installation services for home security or CCTV, IP cameras',
      text: 'Contact our customer service team directly at',
      phones: ['081-438-3450', '02-533-2751'],
      person: 'Mr. Rungroj',
    },
    products: [
      {
        name: 'NiKE TL',
        features: [
          'Loudest alarm',
          'LCD display with wireless and wired system support',
          'Siren, alarm, phone notification, phone control system',
          'Event recording with real-time date and time',
          'Thai voice response system',
        ],
      },
      {
        name: 'Platinum GSM',
        features: [
          'No landline required',
          'Supports GSM 3 band',
          'Touch pad buttons',
          'Modern, slim design',
          'Built-in backup power',
        ],
      },
      {
        name: 'NiKE-ECON',
        features: [
          'Most economical with reliable system',
          'Supports both wired and wireless systems',
          '9 zone division',
          'Phone alarm notification',
          'Remote control via phone system',
        ],
      },
    ],
  },
  zh: {
    welcome: '欢迎来到 LeoTON',
    description: '适用于住宅、办公室、商店、工厂和住宅项目的安防系统',
    expertise: '丰富经验，专注于安防系统',
    slogan: '基于硅系统和软件的安全解决方案设计',
    contact: {
      title: '对我们的产品或安装服务感兴趣',
      text: '直接联系我们的客户服务团队',
      phones: ['081-438-3450', '02-533-2751'],
      person: '荣先生',
    },
    products: [
      {
        name: 'NiKE TL',
        features: [
          '最大音量警报',
          'LCD显示屏，支持无线和有线系统',
          '警报器、报警、电话通知、电话控制系统',
          '事件记录与实时日期时间',
          '泰语语音响应系统',
        ],
      },
      {
        name: 'Platinum GSM',
        features: [
          '无需固定电话线',
          '支持GSM 3频段',
          '触摸按键',
          '现代简约设计',
          '内置备用电源',
        ],
      },
      {
        name: 'NiKE-ECON',
        features: [
          '最经济实惠的可靠系统',
          '支持有线和无线系统',
          '9个区域划分',
          '电话报警通知',
          '电话系统远程控制',
        ],
      },
    ],
  },
};

export default function ProductInfo({ locale }: ProductInfoProps) {
  return (
    <section className="py-16">
      {/* Welcome Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
          {content[locale].welcome}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          {content[locale].description}
        </p>
        <p className="text-lg text-primary font-medium">
          {content[locale].expertise}
        </p>
        <p className="text-md text-gray-500 italic">
          {content[locale].slogan}
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {content[locale].products.map((product, index) => (
          <div key={index} className="glass-effect rounded-2xl p-6 hover-effect">
            <h3 className="text-2xl font-bold text-primary mb-4">{product.name}</h3>
            <ul className="space-y-2">
              {product.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-center bg-primary/5 rounded-3xl p-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {content[locale].contact.title}
        </h2>
        <p className="text-lg mb-2">
          {content[locale].contact.text}
        </p>
        <div className="flex items-center justify-center gap-4 text-xl font-bold text-primary">
          {content[locale].contact.phones.map((phone, index) => (
            <a key={index} href={`tel:${phone.replace(/-/g, '')}`} className="hover:underline">
              {phone}
            </a>
          ))}
        </div>
        <p className="mt-2 text-gray-600">
          {content[locale].contact.person}
        </p>
      </div>
    </section>
  );
} 