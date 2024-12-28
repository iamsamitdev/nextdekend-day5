"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function WorkHistoryForm() {
  const months = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ]

  const years = Array.from({ length: 10 }, (_, i) => 2567 - i)

  return (
    <form className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">เพิ่มประวัติการทำงาน</h2>

      <div className="space-y-4">
        {/* ชื่อตำแหน่ง */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ชื่อตำแหน่ง
          </label>
          <Input placeholder="เช่น โปรแกรมเมอร์" />
        </div>

        {/* รายละเอียดงานที่เคยทำ */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            รายละเอียดงานที่เคยทำ
          </label>
          <textarea 
            rows={4}
            className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="เช่น พัฒนาเว็บไซต์ด้วย HTML, CSS และ Javascript"
          />
        </div>

        {/* ชื่อบริษัท */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ชื่อบริษัท
          </label>
          <Input placeholder="ระบุชื่อบริษัท" />
        </div>

        {/* สถานะการทำงาน */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            สถานะการทำงาน
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="workStatus"
                value="left"
                defaultChecked
                className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">ออกจากงานแล้ว</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="workStatus"
                value="working"
                className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">ยังทำงานที่นี่อยู่</span>
            </label>
          </div>
        </div>

        {/* วันที่เริ่มงาน */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            วันที่เริ่มงาน
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

        {/* วันที่สิ้นสุดงาน */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            วันที่สิ้นสุดงาน
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