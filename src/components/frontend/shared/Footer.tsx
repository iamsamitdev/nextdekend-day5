import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-gray-900">dekend.com</h2>
              <p className="text-sm text-gray-600">
                อินเทิร์นที่ใช่ตอบ ตอบ
              </p>
              <p className="text-sm text-gray-600">
                เว็บไซต์ที่ฝึกงาน หางาน เพื่อนักศึกษาและบุคลากรที่มองหาที่ฝึกงานและตำแหน่งงานจากบริษัทต่างๆ ครบทุกสายงาน
              </p>
            </div>
          </div>

          {/* For Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">สำหรับบริษัท</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-green-500">ลงประกาศงาน</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-500">อัตราค่าบริการ</Link></li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">สำหรับนักศึกษา, ผู้หางาน</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-green-500">สร้างเรซูเม่ออนไลน์</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-500">ค้นหางาน</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-500">ค้นหาที่ฝึกงาน</Link></li>
            </ul>
          </div>

          {/* Popular Keywords */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">คำค้นหายอดนิยม</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">ฝึกงาน</Link>
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">หาที่ฝึกงาน</Link>
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">เว็บหาที่ฝึกงาน</Link>
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">ลงประกาศงานฟรี</Link>
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">งานสมัครงานออนไลน์</Link>
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">นักศึกษาฝึกงาน</Link>
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">ค้นหาพนักงาน</Link>
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">งาน Part Time</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-sm text-center text-gray-600">
          © Copyright {new Date().getFullYear()} DEKEND, dekend.com is owned and operated by Pasition Co., Ltd
        </div>
      </div>
    </footer>
  );
};

export default Footer