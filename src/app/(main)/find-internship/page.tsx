'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ค้นหานักศึกษาฝึกงาน | Dekend เว็บหาที่ฝึกงาน หางาน สำหรับนักศึกษา',
  description: 'ค้นหานักศึกษาฝึกงานที่มีทักษะตรงกับความต้องการของคุณ',
}

interface Intern {
  id: number
  name: string
  university: string
  major: string
  skills: string[]
  avatar: string
}

export default function FindInternshipPage() {
  const [searchTerm, setSearchTerm] = useState('')
  
  // ข้อมูลตัวอย่าง (ในอนาคตควรดึงจาก API)
  const interns: Intern[] = [
    {
      id: 1,
      name: "สมชาย ใจดี",
      university: "มหาวิทยาลัยเชียงใหม่",
      major: "วิศวกรรมคอมพิวเตอร์",
      skills: ["JavaScript", "React", "Node.js"],
      avatar: "/images/google.webp"
    },
    {
      id: 2,
      name: "สมหญิง ใจดี",
      university: "มหาวิทยาลัยเชียงใหม่",
      major: "วิศวกรรมคอมพิวเตอร์",
      skills: ["JavaScript", "React", "Node.js"],
      avatar: "/images/google.webp"
    },
    {
      id: 3,
      name: "สมชาย ใจดี",
      university: "มหาวิทยาลัยเชียงใหม่",
      major: "วิศวกรรมคอมพิวเตอร์",
      skills: ["JavaScript", "React", "Node.js"],
      avatar: "/images/google.webp"
    }
  ]

  // กรองข้อมูลตามคำค้นหา
  const filteredInterns = interns.filter(intern =>
    intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    intern.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
    intern.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
    intern.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="relative bg-white pt-24 pb-16">
      {/* ส่วนหัว */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ค้นหานักศึกษาฝึกงาน
        </h1>
        <p className="text-lg text-gray-600">
          ค้นหานักศึกษาฝึกงานที่มีทักษะตรงกับความต้องการของคุณ
        </p>
      </div>

      {/* ช่องค้นหา */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="text"
            placeholder="ค้นหาตามชื่อ, มหาวิทยาลัย, สาขา หรือทักษะ"
            className="flex-1 bg-transparent border-0 focus:outline-none text-gray-900 placeholder:text-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* แสดงผลการค้นหา */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInterns.map(intern => (
            <div key={intern.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                        src={intern.avatar}
                        alt={intern.name}
                        fill
                        className="object-cover"
                    />
                    </div>
                    <div>
                    <h3 className="text-lg font-semibold text-gray-900">{intern.name}</h3>
                    <p className="text-sm text-gray-500">{intern.university}</p>
                    </div>
                </div>
                <div className="mb-4">
                    <p className="text-gray-600">{intern.major}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {intern.skills.map(skill => (
                    <span
                        key={skill}
                        className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm"
                    >
                        {skill}
                    </span>
                    ))}
                </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <button className="w-full px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                    ดูโปรไฟล์
                </button>
                </div>
            </div>
            ))}
        </div>
      </div>

      {/* แสดงเมื่อไม่พบผลการค้นหา */}
      {filteredInterns.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">ไม่พบผลการค้นหา</p>
        </div>
      )}
    </div>
  )
}
