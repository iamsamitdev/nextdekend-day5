"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { userService } from "@/services/userService"
import { WorkExperience } from "@/types/user"
import { toast, Toaster } from "sonner"
import Cookies from "js-cookie"

const user = Cookies.get('user')
const userData = user ? JSON.parse(user) : null

const emptyFormData: WorkExperience = {
  user_id: userData?.id || 0,
  position: "",
  company_name: "",
  job_description: "",
  start_date: "",
  end_date: "",
  is_current: false
}

export function WorkHistoryForm() {
  const [formData, setFormData] = useState<WorkExperience>(emptyFormData)
  const [isLoading, setIsLoading] = useState(false)

  const months = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ]

  const years = Array.from({ length: 10 }, (_, i) => 2567 - i)

  // โหลดข้อมูลการทำงานเมื่อโหลดคอมโพเนนต์
  useEffect(() => {
    const loadWorkHistory = async () => {
      try {
        const workExperiences = await userService.getWorkExperiences()
        if (workExperiences && workExperiences.length > 0) {
          const work = workExperiences[0]
          // แปลงวันที่จาก "2567-02-17" เป็นวันที่แยกส่วน
          const formatDate = (dateStr: string | undefined) => {
            if (!dateStr) return { year: '', month: '', day: '' }
            const [year, month, day] = dateStr.split('-')
            return {
              year: (parseInt(year) + 543).toString(),
              month,
              day
            }
          }

          const startDate = formatDate(work.start_date)
          const endDate = formatDate(work.end_date)
          
          setFormData({
            ...work,
            start_date: `${startDate.year}-${startDate.month}-${startDate.day}`,
            end_date: work.is_current ? '' : `${endDate.year}-${endDate.month}-${endDate.day}`
          })
        }
      } catch (error) {
        console.error("Error loading work history:", error)
        toast.error("ไม่สามารถโหลดข้อมูลประวัติการทำงานได้")
      }
    }
    loadWorkHistory()
  }, [])

  // ตรวจสอบความถูกต้องของข้อมูล
  const validateForm = (): boolean => {
    if (!formData.position) {
      toast.error("กรุณากรอกชื่อตำแหน่ง")
      return false
    }
    if (!formData.company_name) {
      toast.error("กรุณากรอกชื่อบริษัท")
      return false
    }
    if (!formData.start_date) {
      toast.error("กรุณาเลือกวันที่เริ่มงาน")
      return false
    }
    if (!formData.is_current && !formData.end_date) {
      toast.error("กรุณาเลือกวันที่สิ้นสุดงาน")
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
      const formatDateForAPI = (dateStr: string | undefined) => {
        if (!dateStr) return ''
        const [year, month, day] = dateStr.split('-')
        const christianYear = parseInt(year) - 543
        return `${christianYear}-${month}-${day}`
      }

      const formattedData = {
        ...formData,
        start_date: formatDateForAPI(formData.start_date),
        end_date: formData.is_current ? undefined : formatDateForAPI(formData.end_date)
      }

      if (formData.id) {
        await userService.updateWorkExperience(formattedData)
        toast.success("อัพเดทข้อมูลสำเร็จ")
      } else {
        await userService.createWorkExperience(formattedData)
        toast.success("บันทึกข้อมูลสำเร็จ")
      }
      setFormData(emptyFormData)
    } catch (error) {
      console.error("Error saving work history:", error)
      toast.error("ไม่สามารถบันทึกข้อมูลได้")
    } finally {
      setIsLoading(false)
    }
  }

  // จัดการการเปลี่ยนแปลงข้อมูลในฟอร์ม
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  // จัดการการเลือกวันที่
  const handleDateChange = (dateType: 'start' | 'end') => {
    const day = (document.querySelector(`select[name="${dateType}_day"]`) as HTMLSelectElement).value.padStart(2, '0')
    const month = (document.querySelector(`select[name="${dateType}_month"]`) as HTMLSelectElement).value.padStart(2, '0')
    const year = (document.querySelector(`select[name="${dateType}_year"]`) as HTMLSelectElement).value
    
    const formattedDate = `${year}-${month}-${day}`
    setFormData(prev => ({
      ...prev,
      [`${dateType}_date`]: formattedDate
    }))
  }

  // แยกวันที่เป็นส่วนๆ สำหรับแสดงใน select
  const [startYear, startMonth, startDay] = (formData.start_date || '').split('-')
  const [endYear, endMonth, endDay] = (formData.end_date || '').split('-')

  return (
    <>
      <Toaster richColors position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">เพิ่มประวัติการทำงาน</h2>

        <div className="space-y-4">
          {/* ชื่อตำแหน่ง */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ชื่อตำแหน่ง
            </label>
            <Input 
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="เช่น โปรแกรมเมอร์" 
            />
          </div>

          {/* รายละเอียดงานที่เคยทำ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              รายละเอียดงานที่เคยทำ
            </label>
            <textarea 
              name="job_description"
              value={formData.job_description}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-lg p-3 bg-white border text-gray-900"
              placeholder="เช่น พัฒนาเว็บไซต์ด้วย HTML, CSS และ Javascript"
            />
          </div>

          {/* ชื่อบริษัท */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ชื่อบริษัท
            </label>
            <Input 
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              placeholder="ระบุชื่อบริษัท" 
            />
          </div>

          {/* สถานะการทำงาน */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              สถานะการทำงาน
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="is_current"
                  checked={formData.is_current}
                  onChange={handleChange}
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
              <select 
                name="start_day"
                value={startDay}
                onChange={() => handleDateChange('start')}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900 px-2 py-2">
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d.toString().padStart(2, '0')}>{d}</option>
                ))}
              </select>
              <select 
                name="start_month"
                value={startMonth}
                onChange={() => handleDateChange('start')}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900 px-2 py-2">
                {months.map((m, index) => (
                  <option key={m} value={(index + 1).toString().padStart(2, '0')}>{m}</option>
                ))}
              </select>
              <select 
                name="start_year"
                value={startYear}
                onChange={() => handleDateChange('start')}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900 px-2 py-2">
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          {/* วันที่สิ้นสุดงาน */}
          {!formData.is_current && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                วันที่สิ้นสุดงาน
              </label>
              <div className="grid grid-cols-3 gap-4">
                <select 
                  name="end_day"
                  value={endDay}
                  onChange={() => handleDateChange('end')}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900 px-2 py-2">
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d.toString().padStart(2, '0')}>{d}</option>
                  ))}
                </select>
                <select 
                  name="end_month"
                  value={endMonth}
                  onChange={() => handleDateChange('end')}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900 px-2 py-2">
                  {months.map((m, index) => (
                    <option key={m} value={(index + 1).toString().padStart(2, '0')}>{m}</option>
                  ))}
                </select>
                <select 
                  name="end_year"
                  value={endYear}
                  onChange={() => handleDateChange('end')}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900 px-2 py-2">
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
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