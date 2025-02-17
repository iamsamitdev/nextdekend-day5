"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { userService } from "@/services/userService"
import { Training } from "@/types/user"
import { toast, Toaster } from "sonner"
import Cookies from "js-cookie"

const user = Cookies.get('user')
const userData = user ? JSON.parse(user) : null

const emptyFormData: Training = {
  user_id: userData?.id || 0,
  topic: "",
  details: "",
  trainer: "",
  training_date: ""
}

export function CertificateForm() {
  const [formData, setFormData] = useState<Training>(emptyFormData)
  const [isLoading, setIsLoading] = useState(false)

  const months = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ]

  const years = Array.from({ length: 10 }, (_, i) => 2567 - i)

  // โหลดข้อมูลการอบรมเมื่อโหลดคอมโพเนนต์
  useEffect(() => {
    const loadTraining = async () => {
      try {
        const trainings = await userService.getTrainings()
        if (trainings && trainings.length > 0) {
          const training = trainings[0]
          // แปลงวันที่จาก "2567-02-17" เป็นวันที่แยกส่วน
          const [year, month, day] = (training.training_date || '').split('-')
          const buddhistYear = parseInt(year) + 543 // แปลงปี ค.ศ. เป็น พ.ศ.
          
          setFormData({
            ...training,
            training_date: `${buddhistYear}-${month}-${day}`
          })
        }
      } catch (error) {
        console.error("Error loading training:", error)
        toast.error("ไม่สามารถโหลดข้อมูลการอบรมได้")
      }
    }
    loadTraining()
  }, [])

  // ตรวจสอบความถูกต้องของข้อมูล
  const validateForm = (): boolean => {
    if (!formData.topic) {
      toast.error("กรุณากรอกหัวข้อฝึกอบรม")
      return false
    }
    if (!formData.details) {
      toast.error("กรุณากรอกรายละเอียด")
      return false
    }
    if (!formData.trainer) {
      toast.error("กรุณากรอกผู้ให้การอบรม")
      return false
    }
    if (!formData.training_date) {
      toast.error("กรุณาเลือกวันที่ทำการอบรม")
      return false
    }
    return true
  }

  // จัดการการส่งฟอร์ม
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)

    try {
      // แปลงวันที่กลับเป็นรูปแบบที่ API ต้องการ
      const [year, month, day] = (formData.training_date || '').split('-')
      const christianYear = parseInt(year) - 543
      const formattedData = {
        ...formData,
        training_date: `${christianYear}-${month}-${day}`
      }

      if (formData.id) {
        await userService.updateTraining(formattedData)
        toast.success("อัพเดทข้อมูลสำเร็จ")
      } else {
        await userService.createTraining(formattedData)
        toast.success("บันทึกข้อมูลสำเร็จ")
      }
    } catch (error) {
      console.error("Error saving training:", error)
      toast.error("ไม่สามารถบันทึกข้อมูลได้")
    } finally {
      setIsLoading(false)
    }
  }

  // จัดการการเปลี่ยนแปลงข้อมูลในฟอร์ม
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value || ""
    }))
  }

  // จัดการการเลือกวันที่
  const handleDateChange = () => {
    const day = (document.querySelector('select[name="day"]') as HTMLSelectElement).value.padStart(2, '0')
    const month = (document.querySelector('select[name="month"]') as HTMLSelectElement).value.padStart(2, '0')
    const year = (document.querySelector('select[name="year"]') as HTMLSelectElement).value
    
    const formattedDate = `${year}-${month}-${day}`
    setFormData(prev => ({
      ...prev,
      training_date: formattedDate
    }))
  }

  // แยกวันที่เป็นส่วนๆ สำหรับแสดงใน select
  const [year, month, day] = (formData.training_date || '').split('-')

  return (
    <>
      <Toaster richColors position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">เพิ่มประวัติการอบรม</h2>

        <div className="space-y-4">
          {/* หัวข้อฝึกอบรม */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              หัวข้อฝึกอบรม
            </label>
            <Input 
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="เช่น ภาษาอังกฤษเพื่อการสื่อสาร" 
            />
          </div>

          {/* รายละเอียด ความรู้ที่ได้รับ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              รายละเอียด ความรู้ที่ได้รับ
            </label>
            <textarea 
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-lg p-3 bg-white border text-gray-900"
              placeholder="เช่น ได้เรียนรู้เกี่ยวกับการใช้งานภาษาอังกฤษ"
            />
          </div>

          {/* ผู้ให้การอบรม */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ผู้ให้การอบรม
            </label>
            <Input 
              name="trainer"
              value={formData.trainer}
              onChange={handleChange}
              placeholder="เช่น ชื่อบริษัท, ชื่ออาจารย์" 
            />
          </div>

          {/* วันที่ทำการอบรม */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              วันที่ทำการอบรม (สามารถใส่ข้อมูลคร่าวๆ ได้)
            </label>
            <div className="grid grid-cols-3 gap-4">
              <select 
                name="day"
                value={day}
                onChange={handleDateChange}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900 px-2 py-2">
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d.toString().padStart(2, '0')}>{d}</option>
                ))}
              </select>
              <select 
                name="month"
                value={month}
                onChange={handleDateChange}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900 px-2 py-2">
                {months.map((m, index) => (
                  <option key={m} value={(index + 1).toString().padStart(2, '0')}>{m}</option>
                ))}
              </select>
              <select 
                name="year"
                value={year}
                onChange={handleDateChange}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900 px-2 py-2">
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
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