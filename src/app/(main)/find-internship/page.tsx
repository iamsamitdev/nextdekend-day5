import { Metadata } from 'next'
import FindInternshipContent from '@/app/(main)/find-internship/FindInternshipContent'

export const metadata: Metadata = {
  title: 'ค้นหานักศึกษาฝึกงาน | Dekend เว็บหาที่ฝึกงาน หางาน สำหรับนักศึกษา',
  description: 'ค้นหานักศึกษาฝึกงานที่มีทักษะตรงกับความต้องการของคุณ',
}

export default function FindInternshipPage() {
    return <FindInternshipContent />
}
