"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { userService } from "@/services/userService"
import { Intern } from "@/types/user"
import { toast, Toaster } from "sonner"
import Cookies from "js-cookie"

const user = Cookies.get('user')
const userData = user ? JSON.parse(user) : null

// ตรวจสอบให้แน่ใจว่าทุก field มีค่าเริ่มต้น
const emptyFormData: Intern = {
  user_id: userData?.id || 0,
  first_name: "",
  last_name: "",
  gender: "male",
  birth_date: "",
  nationality: "",
  religion: "",
  weight: "",
  height: "",
  english_level: "fair",
  skills: "",
  phone_number: "",
  email: "",
  address: "",
  province: "",
  district: "",
  subdistrict: "",
  zipcode: "",
  position_type: "internship",
  position_interest: "",
  preferred_provinces: ""
}

export function ProfileForm() {
  const [formData, setFormData] = useState<Intern>(emptyFormData)

  const [isLoading, setIsLoading] = useState(false)

  // โหลดข้อมูลโปรไฟล์เมื่อโหลดคอมโพเนนต์
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await userService.getProfile()
        if (profile) {
          // แปลงวันที่จาก "2524-06-21" เป็นวันที่แยกส่วน
          const [year, month, day] = (profile.birth_date || '').split('-')
          const buddhistYear = parseInt(year) + 543 // แปลงปี ค.ศ. เป็น พ.ศ.
          
          // อัพเดทฟอร์มด้วยข้อมูลใหม่
          setFormData({
            ...profile,
            // แยกเก็บวัน เดือน ปี เพื่อให้ select แต่ละตัวแสดงค่าถูกต้อง
            birth_day: day,
            birth_month: month,
            birth_year: buddhistYear.toString()
          })
        }
      } catch (error) {
        console.error("Error loading profile:", error)
        toast.error("ไม่สามารถโหลดข้อมูลโปรไฟล์ได้")
      }
    }
    loadProfile()
  }, [])

  // เพิ่มฟังก์ชัน validate
  const validateForm = (): boolean => {
    // ตรวจสอบฟิลด์ที่จำเป็น
    if (!formData.first_name.trim()) {
      toast.error("กรุณากรอกชื่อจริง")
      return false
    }
    if (!formData.last_name.trim()) {
      toast.error("กรุณากรอกนามสกุล")
      return false
    }
    if (!formData.birth_date) {
      toast.error("กรุณาเลือกวันเกิด")
      return false
    }
    if (!formData.phone_number.trim()) {
      toast.error("กรุณากรอกเบอร์โทรศัพท์")
      return false
    }
    if (!formData.email.trim()) {
      toast.error("กรุณากรอกอีเมล")
      return false
    }
    
    // ตรวจสอบรูปแบบอีเมล
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error("รูปแบบอีเมลไม่ถูกต้อง")
      return false
    }

    // ตรวจสอบรูปแบบเบอร์โทร (ตัวเลข 9-10 หลัก)
    const phoneRegex = /^[0-9]{9,10}$/
    if (!phoneRegex.test(formData.phone_number)) {
      toast.error("รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง")
      return false
    }

    // ถ้าผ่านทั้งหมด
    return true
  }

  // จัดการการส่งฟอร์ม
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // แปลงวันที่กลับเป็นรูปแบบที่ API ต้องการ
      const buddhistYear = parseInt(formData.birth_year || '')
      const christianYear = buddhistYear - 543
      const formattedData = {
        ...formData,
        birth_date: `${christianYear}-${formData.birth_month}-${formData.birth_day}`
      }

      const profile = await userService.getProfile()
      if (profile) {
        await userService.updateProfile(formattedData)
      } else {
        await userService.createProfile(formattedData)
      }
      toast.success("บันทึกข้อมูลสำเร็จ")
    } catch (error) {
      console.error("Error saving profile:", error)
      toast.error("ไม่สามารถบันทึกข้อมูลได้")
    } finally {
      setIsLoading(false)
    }
  }

  // จัดการการเปลี่ยนแปลงข้อมูลในฟอร์ม
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    if (name === 'preferred_provinces' && value) {
      // ตรวจสอบว่ามีจังหวัดที่เลือกแล้วหรือไม่
      const currentProvinces = formData.preferred_provinces ? formData.preferred_provinces.split(',').filter(Boolean) : []
      
      // ตรวจสอบว่าเลือกได้ไม่เกิน 3 จังหวัด
      if (currentProvinces.length < 3 && !currentProvinces.includes(value)) {
        const newProvinces = [...currentProvinces, value].join(',')
        setFormData(prev => ({
          ...prev,
          preferred_provinces: newProvinces
        }))
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value || ""
      }))
    }
  }

  // เพิ่มฟังก์ชันลบจังหวัดที่เลือก
  const handleRemoveProvince = (provinceToRemove: string) => {
    const currentProvinces = (formData.preferred_provinces || '').split(',').filter(Boolean)
    const newProvinces = currentProvinces.filter(p => p !== provinceToRemove).join(',')
    setFormData(prev => ({
      ...prev,
      preferred_provinces: newProvinces
    }))
  }

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
    <>
      <Toaster richColors position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">โปรดกรอกข้อมูลเรซูเม่ของคุณ</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ชื่อจริง */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ชื่อจริง
            </label>
            <Input
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="First name"
            />
          </div>

          {/* นามสกุล */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              นามสกุล
            </label>
            <Input
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last name"
            />
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
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
                />
                <span className="ml-2 text-gray-700">ชาย</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
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
              <select
                name="birth_day"
                value={formData.birth_day}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900 px-2 py-2"
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day.toString().padStart(2, '0')}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                เดือน
              </label>
              <select
                name="birth_month"
                value={formData.birth_month}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900 px-2 py-2"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <option key={month} value={month.toString().padStart(2, '0')}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                พ.ศ.
              </label>
              <select
                name="birth_year"
                value={formData.birth_year}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900 px-2 py-2"
              >
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
            <Input
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              placeholder="Nationality"
            />
          </div>

          {/* ศาสนา */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ศาสนา
            </label>
            <Input
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              placeholder="Religion"
            />
          </div>

          {/* น้ำหนัก */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              น้ำหนัก
            </label>
            <div className="relative">
              <Input
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                type="number"
                placeholder="Weight"
              />
              <span className="absolute right-3 top-2 text-gray-500">กก.</span>
            </div>
          </div>

          {/* ส่วนสูง */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ส่วนสูง
            </label>
            <div className="relative">
              <Input
                name="height"
                value={formData.height}
                onChange={handleChange}
                type="number"
                placeholder="Height"
              />
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
                  name="english_level"
                  value={level.value}
                  checked={formData.english_level === level.value}
                  onChange={handleChange}
                  className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
                />
                <span className="ml-2 text-gray-700">{level.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ความถนัดและทักษะ */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ความถนัดและทักษะ
          </label>
          <Input
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="ระบุได้หลายอย่าง เช่น การสื่อสาร, การทำงานกลุ่ม, การคิดวิเคราะห์, การตัดสินใจ, การจัดการเวลา, การทำงานภายใต้ความกดัน"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">ข้อมูลติดต่อ & ช่องทางติดตามผลงาน</h3>
          
          {/* เบอร์โทรศัพท์ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              เบอร์โทรศัพท์
            </label>
            <Input
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="เบอร์โทรศัพท์"
              type="tel"
            />
          </div>

          {/* อีเมล */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              อีเมล
            </label>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="อีเมล"
              type="email"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">ข้อมูลที่อยู่</h3>
          
          {/* รหัสไปรษณีย์ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              รหัสไปรษณีย์
            </label>
            <Input
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              placeholder="กรอกตัวเลข"
            />
          </div>

          {/* ตำบล/แขวง */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ตำบล/แขวง
            </label>
            <Input
              name="subdistrict"
              value={formData.subdistrict}
              onChange={handleChange}
              placeholder="ตำบล/แขวง"
            />
          </div>

          {/* อำเภอ/เขต */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              อำเภอ/เขต
            </label>
            <Input
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="อำเภอ/เขต"
            />
          </div>

          {/* จังหวัด */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              จังหวัด
            </label>
            <Input
              name="province"
              value={formData.province}
              onChange={handleChange}
              placeholder="จังหวัด"
            />
          </div>

          {/* ที่อยู่ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ที่อยู่
            </label>
            <textarea 
              name="address"
              value={formData.address}
              onChange={handleChange}
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
                name="position_type"
                value="internship"
                checked={formData.position_type === "internship"}
                onChange={handleChange}
                className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">หาที่ฝึกงาน</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="position_type"
                value="job"
                checked={formData.position_type === "job"}
                onChange={handleChange}
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
            <Input
              name="position_interest"
              value={formData.position_interest}
              onChange={handleChange}
              placeholder="ระบุได้หลายตำแหน่ง เช่น HR, บัญชี, ธุรการ"
            />
          </div>

          {/* จังหวัดที่สนใจ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              จังหวัดที่สนใจ (เลือกได้สูงสุด 3 จังหวัด)
            </label>
            <select 
              name="preferred_provinces"
              value="" // ตั้งค่าเป็นค่าว่างเพื่อให้ select กลับมาที่ตัวเลือกแรกหลังจากเลือก
              onChange={handleChange}
              className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">เลือกจังหวัด</option>
              {provinces
                .filter(p => !(formData.preferred_provinces || '').includes(p))
                .map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
            </select>

            {/* แสดงจังหวัดที่เลือก */}
            <div className="mt-2 flex flex-wrap gap-2">
              {(formData.preferred_provinces || '').split(',').filter(Boolean).map((province) => (
                <div 
                  key={province}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                >
                  {province}
                  <button
                    type="button"
                    onClick={() => handleRemoveProvince(province)}
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
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "กำลังบันทึก..." : "บันทึก"}
          </Button>
          <Button 
            variant="outline" 
            type="button" 
            onClick={() => setFormData(emptyFormData)}
          >
            ล้างข้อมูล
          </Button>
        </div>
      </form>
    </>
  )
} 