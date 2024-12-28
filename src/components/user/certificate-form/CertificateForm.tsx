"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function CertificateForm() {
  const months = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ]

  const years = Array.from({ length: 10 }, (_, i) => 2567 - i)

  return (
    <form className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">เพิ่มประวัติการอบรม</h2>

      <div className="space-y-4">
        {/* หัวข้อฝึกอบรม */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            หัวข้อฝึกอบรม
          </label>
          <Input placeholder="เช่น ภาษาอังกฤษเพื่อการสื่อสาร" />
        </div>

        {/* รายละเอียด ความรู้ที่ได้รับ */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            รายละเอียด ความรู้ที่ได้รับ
          </label>
          <textarea 
            rows={4}
            className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="เช่น ได้เรียนรู้เกี่ยวกับการใช้งานภาษาอังกฤษสำหรับสื่อสารเบื้องต้น"
          />
        </div>

        {/* ผู้ให้การอบรม */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ผู้ให้การอบรม
          </label>
          <Input placeholder="เช่น ชื่อบริษัท, ชื่ออาจารย์" />
        </div>

        {/* วันที่ทำการอบรม */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            วันที่ทำการอบรม (สามารถใส่ข้อมูลคร่าวๆ ได้)
          </label>
          <div className="grid grid-cols-3 gap-4">
            <select className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
            <select className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              {months.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <select className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
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