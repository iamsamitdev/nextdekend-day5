import Image from 'next/image';

const Resume = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ฝากเรซูเม่ไว้กับเรา <span className="text-green-500">ได้งาน ที่ฝึกงาน ชัวร์ 100%</span>
            </h2>
            <h3 className="text-xl text-gray-900 mb-6">
              สร้างเรซูเม่ออนไลน์ กับ Dekend ดียังไง ?
            </h3>
            <ul className="space-y-4">
              {[
                'เรามี AI แนะนำงาน ช่วยคัดกรองงานที่เหมาะกับโปรไฟล์ของคุณ มาให้เลือกอัตโนมัติ',
                'แชร์เรซูเม่ของท่านในรูปแบบ Link URL หรือ QR Code ได้เลย',
                'อัพเดตแจ้งเตือนอัตโนมัติ เมื่อบริษัทเรียกดูเรซูเม่ หรือคุณสมัครงาน',
                'กราฟแสดงผล จำนวนบริษัทที่เปิดดูเรซูเม่ของคุณแต่ละวัน',
                'Encryption Resume เข้ารหัสบัญชี ความปลอดภัยสูง'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.75 12.75L10 15.25L16.25 8.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              เริ่มสร้าง Resume Online
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/images/trainee-new.jpg"
              alt="Resume Preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 