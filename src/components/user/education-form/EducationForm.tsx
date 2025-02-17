"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { userService } from "@/services/userService"
import { Education } from "@/types/user"
import { toast, Toaster } from "sonner"
import Cookies from "js-cookie"

const user = Cookies.get('user')
const userData = user ? JSON.parse(user) : null

const emptyFormData: Education = {
  user_id: userData?.id || 0,
  level: "",
  institution_name: "",
  faculty: "",
  field_of_study: "",
  gpa: "",
  status: "studying"
}

export function EducationForm() {
  const [formData, setFormData] = useState<Education>(emptyFormData)
  const [isLoading, setIsLoading] = useState(false)

  // โหลดข้อมูลการศึกษาเมื่อโหลดคอมโพเนนต์
  useEffect(() => {
    const loadEducation = async () => {
      try {
        const education = await userService.getEducation()
        if (education) {
          setFormData(education)
        }
      } catch (error) {
        console.error("Error loading education:", error)
        toast.error("ไม่สามารถโหลดข้อมูลการศึกษาได้")
      }
    }
    loadEducation()
  }, [])

  // ตรวจสอบความถูกต้องของข้อมูล
  const validateForm = (): boolean => {
    if (!formData.level) {
      toast.error("กรุณาเลือกระดับการศึกษา")
      return false
    }
    if (!formData.institution_name) {
      toast.error("กรุณากรอกชื่อสถานศึกษา")
      return false
    }
    if (!formData.faculty) {
      toast.error("กรุณากรอกคณะที่เรียน")
      return false
    }
    if (!formData.field_of_study) {
      toast.error("กรุณากรอกสาขาวิชา")
      return false
    }
    if (formData.gpa && (parseFloat(formData.gpa) < 0 || parseFloat(formData.gpa) > 4)) {
      toast.error("เกรดเฉลี่ยต้องอยู่ระหว่าง 0-4")
      return false
    }
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
      const education = await userService.getEducation()
      if (education) {
        await userService.updateEducation(formData)
      } else {
        await userService.createEducation(formData)
      }
      toast.success("บันทึกข้อมูลสำเร็จ")
    } catch (error) {
      console.error("Error saving education:", error)
      toast.error("ไม่สามารถบันทึกข้อมูลได้")
    } finally {
      setIsLoading(false)
    }
  }

  // จัดการการเปลี่ยนแปลงข้อมูลในฟอร์ม
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value || ""
    }))
  }

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
    <>
      <Toaster richColors position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">เพิ่มข้อมูลการศึกษา</h2>

        <div className="space-y-4">
          {/* ระดับการศึกษา */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ระดับการศึกษา
            </label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
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
            <Input
              name="institution_name"
              value={formData.institution_name}
              onChange={handleChange}
              placeholder="เช่น มหาวิทยาลัยเชียงใหม่"
            />
          </div>

          {/* คณะที่เรียน */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              คณะที่เรียน
            </label>
            <Input
              name="faculty"
              value={formData.faculty}
              onChange={handleChange}
              placeholder="เช่น วิศวกรรมศาสตร์"
            />
          </div>

          {/* สาขาวิชา */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              สาขาวิชา
            </label>
            <Input
              name="field_of_study"
              value={formData.field_of_study}
              onChange={handleChange}
              placeholder="เช่น เทคโนโลยีสารสนเทศ"
            />
          </div>

          {/* เกรดเฉลี่ย */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              GPA (เกรดเฉลี่ยล่าสุด)
            </label>
            <Input
              name="gpa"
              value={formData.gpa || ""}
              onChange={handleChange}
              placeholder="เช่น 3.50"
              type="number"
              step="0.01"
            />
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
                  checked={formData.status === "studying"}
                  onChange={handleChange}
                  className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
                />
                <span className="ml-2 text-gray-700">อยู่ระหว่างศึกษา</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="graduated"
                  checked={formData.status === "graduated"}
                  onChange={handleChange}
                  className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
                />
                <span className="ml-2 text-gray-700">จบแล้ว</span>
              </label>
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