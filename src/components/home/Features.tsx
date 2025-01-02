'use client';

import { Locale } from '@/lib/i18n/config';

interface FeaturesProps {
  locale: Locale;
}

const content = {
  th: {
    title: 'ผลิตภัณฑ์ของเรา',
    products: [
      {
        title: 'NiKE TL',
        features: [
          'เสียงดังสุดสุด',
          'มี LCD รองรับทั้งระบบไร้สาย และเดินสาย',
          'ไซเรน เตือนภัย แจ้งโทรออก สั่งงานผ่านทางระบบโทรศัพท์',
          'บันทึกเหตุการณ์ พร้อมระบบบันทึกวันและเวลาจริง',
          'มีระบบเสียงตอบรับการทำงาน เป็นภาษาไทย',
        ],
      },
      {
        title: 'Platinum GSM',
        features: [
          'ไม่ต้องขอสัญญาณโทรศัพท์บ้าน',
          'รองรับระบบ GSM 3 band',
          'ปุ่มแบบ touch pad',
          'ออกแบบทันสมัย รูปทรงเพียวบาง',
          'มีระบบสำรองไฟภายในตัว',
        ],
      },
      {
        title: 'NiKE-ECON',
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
    title: 'Our Products',
    products: [
      {
        title: 'NiKE TL',
        features: [
          'Loudest alarm',
          'LCD display with wireless and wired system support',
          'Siren, alarm, phone notification, phone control system',
          'Event recording with real-time date and time',
          'Thai voice response system',
        ],
      },
      {
        title: 'Platinum GSM',
        features: [
          'No landline required',
          'Supports GSM 3 band',
          'Touch pad buttons',
          'Modern, slim design',
          'Built-in backup power',
        ],
      },
      {
        title: 'NiKE-ECON',
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
    title: '我们的产品',
    products: [
      {
        title: 'NiKE TL',
        features: [
          '最大音量警报',
          'LCD显示屏，支持无线和有线系统',
          '警报器、报警、电话通知、电话控制系统',
          '事件记录与实时日期时间',
          '泰语语音响应系统',
        ],
      },
      {
        title: 'Platinum GSM',
        features: [
          '无需固定电话线',
          '支持GSM 3频段',
          '触摸按键',
          '现代简约设计',
          '内置备用电源',
        ],
      },
      {
        title: 'NiKE-ECON',
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

export default function Features({ locale }: FeaturesProps) {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="text-gradient">{content[locale].title}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content[locale].products.map((product, index) => (
          <div
            key={index}
            className="glass-effect rounded-3xl p-8 hover-effect"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      index === 0
                        ? "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        : index === 1
                        ? "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        : "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    }
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary">{product.title}</h3>
            </div>

            <ul className="space-y-3">
              {product.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 