"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ติดต่อเรา | Dekend เว็บหาที่ฝึกงาน หางาน สำหรับนักศึกษา',
  description: 'ติดต่อเราเพื่อสอบถามข้อมูลหรือข้อสงสัย',
}


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // TODO: ส่งข้อมูลไปยัง API
      await new Promise((resolve) => setTimeout(resolve, 1000)) // จำลองการส่งข้อมูล
      toast.success("ส่งข้อความสำเร็จ เราจะติดต่อกลับโดยเร็วที่สุด")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch {
      toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="relative bg-white pt-24 pb-16">
      {/* ส่วนหัว */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          ติดต่อเรา
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          มีคำถามหรือข้อสงสัย? เราพร้อมช่วยเหลือคุณ ติดต่อเราได้ตามช่องทางด้านล่าง
        </p>
      </div>

      {/* เนื้อหา */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* ข้อมูลการติดต่อ */}
        <div>
          <div className="space-y-6">
            {/* ที่อยู่ */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-emerald-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ที่อยู่</h3>
                <p className="text-gray-600">
                  123 ถนนเชียงใหม่-ลำพูน, ตำบลหนองหอย, อำเภอเมือง,
                  จังหวัดเชียงใหม่ 50000
                </p>
              </div>
            </div>

            {/* อีเมล */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-emerald-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">อีเมล</h3>
                <p className="text-gray-600">support@dekend.com</p>
              </div>
            </div>

            {/* เบอร์โทร */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-emerald-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">เบอร์โทร</h3>
                <p className="text-gray-600">052-123-4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* แบบฟอร์มติดต่อ */}
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            ส่งข้อความถึงเรา
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ชื่อ-นามสกุล
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border-gray-300 p-2 shadow-sm focus:outline-none text-black"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                อีเมล
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border-gray-300 p-2 shadow-sm focus:outline-none text-black"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                เรื่อง
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full rounded-lg border-gray-300 p-2 shadow-sm focus:outline-none text-black"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ข้อความ
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border-gray-300 p-2 shadow-sm focus:outline-none text-black"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50"
            >
              {isLoading ? "กำลังส่ง..." : "ส่งข้อความ"}
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}
