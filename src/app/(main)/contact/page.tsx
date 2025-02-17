import { Metadata } from "next"
import ContactContent from "@/app/(main)/contact/ContactContent"

export const metadata: Metadata = {
  title: "ติดต่อเรา | Dekend เว็บหาที่ฝึกงาน หางาน สำหรับนักศึกษา",
  description: "ติดต่อเราเพื่อสอบถามข้อมูลหรือข้อสงสัย",
}

export default function ContactPage() {
  return <ContactContent />
}
