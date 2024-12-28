import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">เกี่ยวกับเรา</h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Dekend  (เด็กอ็น)
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            เราคือ เว็บไซต์หางาน หาที่ฝึกงาน ที่ใช้เทคโนโลยีจาก AI เข้ามาช่วยในการเพิ่มศักยภาพจากเว็บไซต์หางานธรรมดา ให้มี
            ความสามารถเรียนรู้สิ่งที่เชื่อมโยงของข้อมูลระหว่าง บริษัท ผู้หางาน และนักศึกษาฝึกงาน ได้อย่างชาญฉลาด ทำให้ผู้หางานได้
            งานตรงใจ น้องนักศึกษาได้ที่ฝึกงานที่เหมาะสม และบริษัทได้คนที่เหมาะสมกับตำแหน่งงานที่สุด
          </p>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            ที่ Dekend มีอะไรให้คุณค้นหาบ้าง ?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video">
            <Image
              src="/images/dekendin.png"
              alt="About Internth"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              ที่ฝึกงาน
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-500 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>เราคือ เว็บไซต์หางาน หาที่ฝึกงาน ที่ใช้เทคโนโลยีจาก AI เข้ามาช่วยในการเพิ่มศักยภาพจากเว็บไซต์หางานธรรมดา</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-500 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>ให้มีความสามารถเรียนรู้สิ่งที่เชื่อมโยงของข้อมูลระหว่าง บริษัท ผู้หางาน และนักศึกษาฝึกงาน ได้อย่างชาญฉลาด</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-500 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>ทำให้ผู้หางานได้งานตรงใจ น้องนักศึกษาได้ที่ฝึกงานที่เหมาะสม และบริษัทได้คนที่เหมาะสมกับตำแหน่งงานที่สุด</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 