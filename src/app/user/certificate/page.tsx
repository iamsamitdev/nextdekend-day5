import { CertificateForm } from "@/components/user/certificate-form/CertificateForm"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'เพิ่มประวัติการอบรม | Dekend เว็บหาที่ฝึกงาน หางาน สำหรับนักศึกษา',
  description: 'เพิ่มประวัติการอบรม ใบรับรอง และทักษะพิเศษต่างๆ เพื่อแสดงศักยภาพของคุณ',
}

export default function CertificatePage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <CertificateForm />
      </div>
    </div>
  )
} 