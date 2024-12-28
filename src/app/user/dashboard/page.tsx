import { UserDashboard } from '@/components/user/UserDashboard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'แดชบอร์ด | Dekend เว็บหาที่ฝึกงาน หางาน สำหรับนักศึกษา',
  description: 'จัดการข้อมูลส่วนตัว ดูสถิติการสมัครงาน และติดตามสถานะการสมัครงานของคุณ',
}

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <UserDashboard />
      </div>
    </div>
  )
} 