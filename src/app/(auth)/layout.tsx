import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dekend - เว็บหาที่ฝึกงาน หางาน สำหรับนักศึกษา",
  description: "เว็บไซต์สำหรับค้นหางาน ฝึกงาน สำหรับนักศึกษาและบัณฑิตจบใหม่",
}


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen">{children}</div>
}
