"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function EducationForm() {
  const [status, setStatus] = useState<"studying" | "graduated">("studying")

  const educationLevels = [
    "มัธยมศึกษาตอนต้น",
    "มัธยมศึกษาตอนปลาย",
    "ประกาศนียบัตรวิชาชีพ (ปวช.)",
    "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
    "ปริญญาตรี",
    "ปริญญาโท",
    "ปริญญาเอก"
  ]

  return (
    <form className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">เพิ่มข้อมูลการศึกษา</h2>

      <div className="space-y-4">
        {/* ระดับการศึกษา */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ระดับการศึกษา
          </label>
          <select className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option value="">กรุณาเลือก</option>
            {educationLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* ชื่อสถานศึกษา */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ชื่อสถานศึกษา
          </label>
          <Input placeholder="เช่น มหาวิทยาลัยเชียงใหม่" />
        </div>

        {/* วุฒิการศึกษา */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            วุฒิการศึกษา
          </label>
          <Input placeholder="เช่น วิศวกรรมศาสตรบัณฑิต" />
        </div>

        {/* สาขาวิชา */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            สาขาวิชา
          </label>
          <Input placeholder="เช่น วิศวกรรมคอมพิวเตอร์" />
        </div>

        {/* เกรดเฉลี่ย */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            GPA (เกรดเฉลี่ยล่าสุด)
          </label>
          <Input placeholder="เช่น 3.50" type="number" step="0.01" min="0" max="4" />
        </div>

        {/* สถานะ */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            สถานะ
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="studying"
                checked={status === "studying"}
                onChange={() => setStatus("studying")}
                className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">อยู่ระหว่างศึกษา</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="graduated"
                checked={status === "graduated"}
                onChange={() => setStatus("graduated")}
                className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">จบแล้ว</span>
            </label>
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