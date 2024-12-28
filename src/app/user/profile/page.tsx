import { ProfileForm } from "@/components/user/profile-form/ProfileForm"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'แก้ไขโปรไฟล์ | Dekend เว็บหาที่ฝึกงาน หางาน สำหรับนักศึกษา',
  description: 'แก้ไขข้อมูลส่วนตัว ประวัติการศึกษา และข้อมูลการติดต่อของคุณ',
}

export default function ProfilePage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <ProfileForm />
      </div>
    </div>
  )
} 