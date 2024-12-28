import { WorkHistoryForm } from "@/components/user/work-history-form/WorkHistoryForm"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'เพิ่มประวัติการทำงาน | Dekend เว็บหาที่ฝึกงาน หางาน สำหรับนักศึกษา',
  description: 'เพิ่มประวัติการทำงาน ประสบการณ์ และผลงานที่ผ่านมาของคุณ เพื่อให้ผู้ว่าจ้างเห็นความสามารถ',
}

export default function WorkHistoryPage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <WorkHistoryForm />
      </div>
    </div>
  )
} 