'use client'

import {useState, useEffect} from 'react'
import { UserProfile } from '@/components/user/UserProfile'
import { UserStats } from '@/components/user/UserStats'
import { UserActivityChart } from './UserActivityChart'
import { authService } from '@/services/authService'
import { User } from '@/types/auth'

export function UserDashboard() {

  const [user, setUser] = useState<User | null>(null) // สร้าง state สำหรับเก็บข้อมูลผู้ใช้

  useEffect(() => {
    const userData = authService.getUser() // ดึงข้อมูลผู้ใช้จาก localStorage
    setUser(userData) // กำหนดข้อมูลผู้ใช้ใน state
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-gray-900 mb-6">สวัสดี {user?.first_name + " " + user?.last_name + " (" + user?.username +")"}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Profile Section */}
        <div className="lg:col-span-4">
          <UserProfile />
        </div>

        {/* Stats Section */}
        <div className="lg:col-span-8">
          <UserStats />
          <UserActivityChart />
        </div>
      </div>
    </div>
  )
} 