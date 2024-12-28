import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side - Images */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-[400px] lg:max-w-[600px] mx-auto">
              {/* Background Shapes */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#E6FAF5] rounded-[32px] -z-10" />
              <div className="absolute -top-8 right-24 w-16 h-16 bg-[#E6FAF5] rounded-full -z-10" />
              <div className="absolute -bottom-4 right-16 w-24 h-24 bg-[#FFF9E6] rounded-[32px] -z-10" />
              <div className="absolute bottom-24 -left-8 w-16 h-16 bg-[#FFE6F1] rounded-full -z-10" />
              
              {/* Hero Images - Mobile */}
              <div className="lg:hidden">
                <div className="absolute top-8 left-0 w-[180px] h-[180px] animate-float-1">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/hero-1.png"
                      alt="Student with megaphone"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute top-8 right-0 w-[180px] h-[180px] animate-float-2">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/hero-2.png"
                      alt="Professional in white shirt"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute top-[220px] left-1/2 -translate-x-1/2 w-[180px] h-[180px] animate-float-3">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/hero-3.png"
                      alt="Student with phone"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Hero Images - Desktop */}
              <div className="hidden lg:block">
                <div className="absolute top-0 left-0 w-[320px] h-[320px] animate-float-1">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/hero-1.png"
                      alt="Student with megaphone"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute top-12 right-0 w-[280px] h-[280px] animate-float-2">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/hero-2.png"
                      alt="Professional in white shirt"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 right-24 w-[280px] h-[280px] animate-float-3">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/hero-3.png"
                      alt="Student with phone"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ค้นหางาน หาที่ฝึกงาน
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Dekend เว็บหาที่ฝึกงาน รวมนักศึกษาฝึกงาน นักศึกษาจบใหม่ เยอะที่สุดในไทย<br/>
              มาพร้อมระบบ Ai จับคู่งานกับโปรไฟล์ของคุณ
            </p>
            
            {/* Search Box */}
            <div className="flex w-full max-w-xl mb-6 bg-white rounded-full overflow-hidden border border-gray-200">
              <input
                type="text"
                placeholder="เช่น โปรแกรมเมอร์ บัญชี"
                className="flex-1 px-6 py-3 bg-transparent focus:outline-none text-gray-900 placeholder:text-gray-500"
              />
              <button className="px-6 py-2 m-1 bg-black text-white rounded-full hover:bg-gray-800 flex items-center gap-2 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                ค้นหา
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {['หาที่ฝึกงาน', 'หางาน', 'งานพาร์ทไทม์', 'นักศึกษาฝึกงาน', 'งานสัมภาษณ์ออนไลน์', 'งาน work from home'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-4 py-1.5 bg-[#E6FAF5] text-[#00A76F] rounded-full text-sm hover:bg-[#CCF5EB] cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Resume Section */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                สร้างบัญชีฝากข้อมูล RESUME
              </h2>
              <p className="text-gray-600 mb-6">
                ผู้หางาน/นักศึกษา สามารถสมัครสมาชิกเพื่อสร้างเรซูเม่ของท่านฟรี เพื่อหาที่ฝึกงาน ได้ที่นี่
              </p>
              <button className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                ลงทะเบียนฝากข้อมูลเรซูเม่
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero