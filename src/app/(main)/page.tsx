// rfc
import AboutUs from '@/components/frontend/AboutUs'
import CompanyLogos from '@/components/frontend/CompanyLogos'
import Hero from '@/components/frontend/Hero'
import NewsUpdate from '@/components/frontend/NewsUpdate'
import Resume from '@/components/frontend/Resume'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'หน้าหลัก | Dekend เว็บหาที่ฝึกงาน หางาน สำหรับนักศึกษา',
  description: 'หน้าหลัก Dekend เพื่อหาที่ฝึกงาน หางาน และจัดการโปรไฟล์ของคุณ',
}

export default function App() {
  return (
    <main>
      <Hero />
      <CompanyLogos />
      <AboutUs />
      <NewsUpdate />
      <Resume />
    </main>
  )
}
