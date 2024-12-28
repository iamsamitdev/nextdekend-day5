import Image from "next/image"

// แบ่ง logos เป็น 2 แถว
const topRowLogos = [
  "/images/customer/0b3cf5686cf9f36c11f2644a7d889556.png",
  "/images/customer/2d1ef0efd98d471f9cd293bf064d9f8e.png",
  "/images/customer/3cef7188520ddaa0264a1adb7557c864.png",
  "/images/customer/4a49b2e33ca533deb6a6a14b4dbeaa73.png",
  "/images/customer/4dd7e2959f5fa4db025c02dd89272e34.png",
  "/images/customer/6ec1a703c70a2ab5c1ea2b3ccfb46cea.png",
  "/images/customer/8b0f6b14828d84fb46908f56413b5b79.png",
  "/images/customer/26a91ba7bcf6840e36e744acc2b6b527.png",
  "/images/customer/28b346dbfc71279e489b4928129b161e.png",
  "/images/customer/81b34c8912c81a34088b92d8e5a4c005.png",
  "/images/customer/625da0b8c662e5b3b84a887ade77ca6b.png",
]

const bottomRowLogos = [
  "/images/customer/640ee2ea0970176bbe5bad0e963d2805.png",
  "/images/customer/12863cc11179620c49bbaec2f8692ae3.png",
  "/images/customer/beee099c10f1c315285f28a84cacadaf.png",
  "/images/customer/ca3dd5e719262d928076b9a35b429fb4.png",
  "/images/customer/cfc377a958fc795bd7980087ad49d483.png",
  "/images/customer/d9a158ef2930a75026ac0814eb2cd311.png",
  "/images/customer/d441ec6c5ebdf752b7a46e2ccd2f0cf1.png",
  "/images/customer/d0471efccbc5198e046467191d16322b.png",
  "/images/customer/db6111d55e08d6adcbe92218714a2edc.png",
  "/images/customer/efbfa2641ef680e71146b468f69d47b3.png",
  "/images/customer/f2d112fb09494d2cc5423ec3f9002cbc.png",
  "/images/customer/f19b4368b8112f7a5df53995acb8f9ae.png",
]

const CompanyLogos = () => {
    return (
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold mb-8 text-gray-900">
            บริษัทที่ไว้วางใจเรา
          </h2>
          <p className="text-center text-gray-600">
            มากกว่า 3,500 บริษัทในปี 2024 ที่ลงประกาศรับสมัครงาน ตำแหน่งฝึกงาน กับเรา และอัพเดทเพิ่มขึ้นอย่างต่อเนื่องในทุก ๆ วัน
          </p>
          <p className="text-center text-gray-600 mb-12">เรายังคงมุ่งมั่นพัฒนาระบบ เพื่อส่งมอบประสบการณ์การใช้งานที่ดีที่สุด ให้กับผู้ใช้งานของเราเสมอ</p>
  
          {/* Top row - sliding right to left */}
          <div className="relative mb-8">
            <div className="flex animate-slideRightToLeft">
              {[...topRowLogos, ...topRowLogos].map((logo, index) => (
                <div key={index} className="w-16 h-16 flex-shrink-0 mx-3">
                  <div className="relative w-full h-full overflow-hidden rounded-[25%]">
                    <Image
                      src={logo}
                      alt={`Company logo ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Bottom row - sliding left to right */}
          <div className="relative">
            <div className="flex animate-slideLeftToRight">
              {[...bottomRowLogos, ...bottomRowLogos].map((logo, index) => (
                <div key={index} className="w-16 h-16 flex-shrink-0 mx-3">
                  <div className="relative w-full h-full overflow-hidden rounded-[25%]">
                    <Image
                      src={logo}
                      alt={`Company logo ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CompanyLogos