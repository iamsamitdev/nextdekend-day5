import Navbar from "@/components/frontend/shared/Navbar"
import { Sidebar } from "@/components/user/shared/Sidebar"
import { MobileNav } from "@/components/user/shared/MobileNav"

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Sidebar />
      <div className="lg:pl-64 pt-16 pb-20 lg:pb-0">
        <main className="container mx-auto">
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  )
} 