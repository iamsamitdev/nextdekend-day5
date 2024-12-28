import type { Metadata } from "next"
import Footer from "@/components/frontend/shared/Footer"
import Navbar from "@/components/frontend/shared/Navbar"

export const metadata: Metadata = {
  title: "Dekend - เว็บหาที่ฝึกงาน หางาน สำหรับนักศึกษา",
  description: "เว็บไซต์สำหรับค้นหางาน ฝึกงาน สำหรับนักศึกษาและบัณฑิตจบใหม่",
}

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}
