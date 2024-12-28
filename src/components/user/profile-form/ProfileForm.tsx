"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ProfileForm() {
  const [gender, setGender] = useState<"male" | "female">("male")
  const [englishLevel, setEnglishLevel] = useState<"poor" | "fair" | "good" | "excellent">("fair")
  const [selectedProvinces, setSelectedProvinces] = useState<string[]>([])

  const provinces = [
    "กรุงเทพมหานคร", "กระบี่", "กาญจนบุรี", "กาฬสินธุ์", "กำแพงเพชร", "ขอนแก่น", "จันทบุรี", "ฉะเชิงเทรา", 
    "ชลบุรี", "ชัยนาท", "ชัยภูมิ", "ชุมพร", "เชียงราย", "เชียงใหม่", "ตรัง", "ตราด", "ตาก", "นครนายก",
    "นครปฐม", "นครพนม", "นครราชสีมา", "นครศรีธรรมราช", "นครสวรรค์", "นนทบุรี", "นราธิวาส", "น่าน", 
    "บึงกาฬ", "บุรีรัมย์", "ปทุมธานี", "ประจวบคีรีขันธ์", "ปราจีนบุรี", "ปัตตานี", "พระนครศรีอยุธยา", 
    "พังงา", "พัทลุง", "พิจิตร", "พิษณุโลก", "เพชรบุรี", "เพชรบูรณ์", "แพร่", "พะเยา", "ภูเก็ต", 
    "มหาสารคาม", "มุกดาหาร", "แม่ฮ่องสอน", "ยะลา", "ยโสธร", "ร้อยเอ็ด", "ระนอง", "ระยอง", "ราชบุรี",
    "ลพบุรี", "ลำปาง", "ลำพูน", "เลย", "ศรีสะเกษ", "สกลนคร", "สงขลา", "สตูล", "สมุทรปราการ", 
    "สมุทรสงคราม", "สมุทรสาคร", "สระแก้ว", "สระบุรี", "สิงห์บุรี", "สุโขทัย", "สุพรรณบุรี", "สุราษฎร์ธานี",
    "สุรินทร์", "หนองคาย", "หนองบัวลำภู", "อ่างทอง", "อุดรธานี", "อุทัยธานี", "อุตรดิตถ์", "อุบลราชธานี",
    "อำนาจเจริญ"
  ]

  return (
    <form className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">โปรดกรอกข้อมูลเรซูเม่ของคุณ</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ชื่อจริง */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ชื่อจริง
          </label>
          <Input placeholder="First name" />
        </div>

        {/* นามสกุล */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            นามสกุล
          </label>
          <Input placeholder="Last name" />
        </div>

        {/* เพศ */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            เพศ
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender("male")}
                className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">ชาย</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={() => setGender("female")}
                className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">หญิง</span>
            </label>
          </div>
        </div>

        {/* วันเกิด */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              วันที่
            </label>
            <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900">
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              เดือน
            </label>
            <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900">
              {["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."].map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              พ.ศ.
            </label>
            <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900">
              {Array.from({ length: 50 }, (_, i) => 2567 - i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* สัญชาติ */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            สัญชาติ
          </label>
          <Input placeholder="Nationality" />
        </div>

        {/* ศาสนา */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ศาสนา
          </label>
          <Input placeholder="Religion" />
        </div>

        {/* น้ำหนัก */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            น้ำหนัก
          </label>
          <div className="relative">
            <Input placeholder="Weight" type="number" />
            <span className="absolute right-3 top-2 text-gray-500">กก.</span>
          </div>
        </div>

        {/* ส่วนสูง */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ส่วนสูง
          </label>
          <div className="relative">
            <Input placeholder="Height" type="number" />
            <span className="absolute right-3 top-2 text-gray-500">ซม.</span>
          </div>
        </div>
      </div>

      {/* ระดับภาษาอังกฤษ */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ระดับภาษาอังกฤษ
        </label>
        <div className="flex gap-4">
          {[
            { value: "poor", label: "พอใช้" },
            { value: "fair", label: "ปานกลาง" },
            { value: "good", label: "ดี" },
            { value: "excellent", label: "ยอดเยี่ยม" },
          ].map((level) => (
            <label key={level.value} className="flex items-center">
              <input
                type="radio"
                name="englishLevel"
                value={level.value}
                checked={englishLevel === level.value}
                onChange={() => setEnglishLevel(level.value as typeof englishLevel)}
                className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">{level.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">ข้อมูลติดต่อ & ช่องทางติดตามผลงาน</h3>
        
        {/* เบอร์โทรศัพท์ */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            เบอร์โทรศัพท์
          </label>
          <Input placeholder="เบอร์โทรศัพท์" type="tel" />
        </div>

        {/* อีเมล */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            อีเมล
          </label>
          <Input placeholder="อีเมล" type="email" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">ข้อมูลที่อยู่</h3>
        
        {/* รหัสไปรษณีย์ */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            รหัสไปรษณีย์
          </label>
          <Input placeholder="กรอกตัวเลข" />
        </div>

        {/* ตำบล/แขวง */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ตำบล/แขวง
          </label>
          <Input placeholder="ตำบล/แขวง" />
        </div>

        {/* อำเภอ/เขต */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            อำเภอ/เขต
          </label>
          <Input placeholder="อำเภอ/เขต" />
        </div>

        {/* จังหวัด */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            จังหวัด
          </label>
          <Input placeholder="จังหวัด" />
        </div>

        {/* ที่อยู่ */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ที่อยู่
          </label>
          <textarea 
            rows={3}
            className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="เลขที่ บ้าน ถนน ซอย"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">ความต้องการ</h3>
        
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="jobType"
              value="internship"
              className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
            />
            <span className="ml-2 text-gray-700">หาที่ฝึกงาน</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="jobType"
              value="job"
              className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
            />
            <span className="ml-2 text-gray-700">หางาน</span>
          </label>
        </div>

        {/* ตำแหน่งที่สนใจ */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ตำแหน่งที่สนใจ
          </label>
          <Input placeholder="ระบุได้หลายตำแหน่ง เช่น HR, บัญชี, ธุรการ" />
        </div>

        {/* จังหวัดที่สนใจ */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            จังหวัดที่สนใจ (เลือกได้สูงสุด 3 จังหวัด)
          </label>
          <select 
            className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value=""
            onChange={(e) => {
              if (selectedProvinces.length < 3) {
                setSelectedProvinces([...selectedProvinces, e.target.value])
              }
            }}
          >
            <option value="">เลือกจังหวัด</option>
            {provinces
              .filter(p => !selectedProvinces.includes(p))
              .map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
          </select>

          {/* แสดงจังหวัดที่เลือก */}
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedProvinces.map((province) => (
              <div 
                key={province}
                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
              >
                {province}
                <button
                  type="button"
                  onClick={() => setSelectedProvinces(selectedProvinces.filter(p => p !== province))}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="submit">บันทึก</Button>
        <Button variant="outline" type="button">ล้างข้อมูล</Button>
      </div>
    </form>
  )
} 