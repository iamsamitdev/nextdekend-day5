'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { authService } from '@/services/authService'
import { User } from '@/types/auth'

export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false) // สร้าง state สำหรับเก็บค่าการล็อกอิน
    const [isDropdownOpen, setIsDropdownOpen] = useState(false) // สร้าง state สำหรับเก็บค่าการเปิดปิด dropdown
    const [user, setUser] = useState<User | null>(null) // สร้าง state สำหรับเก็บข้อมูลผู้ใช้

    useEffect(() => {
        const token = localStorage.getItem("accessToken") // ดึงค่า token จาก localStorage
        const userData = authService.getUser() // ดึงข้อมูลผู้ใช้จาก localStorage
        setIsLoggedIn(!!token) // !! คือการเปลี่ยนค่าให้เป็น boolean โดยถ้ามีค่าจะเป็น true ถ้าไม่มีค่าจะเป็น false
        setUser(userData) // กำหนดข้อมูลผู้ใช้ใน state
    }, [])

    // สร้างฟังก์ชันสำหรับการออกจากระบบ
    const handleLogout = () => {
        authService.clearAuth() // เรียกใช้งานฟังก์ชัน clearAuth จาก authService
        window.location.href = "/login" // ให้เรียกพาธไปที่ /login
    }

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                    src="/images/dekend-logo.png"
                    alt="Dekend Logo"
                    width={150}
                    height={40}
                    className="w-[150px] h-[40px] object-contain"
                    priority
                    />
                </Link>

                {/* Navigation Link */}
                <div className='hidden md:flex items-center space-x-8'>
                    <Link href="/find-internship" className="text-gray-600 hover:text-green-500">
                        ค้นหานักศึกษาฝึกงาน
                    </Link>
                    <Link href="/articles" className="text-gray-600 hover:text-green-500">
                        บทความ
                    </Link>
                    <Link href="/contact" className="text-gray-600 hover:text-green-500">
                        ติดต่อเรา
                    </Link>
                </div>

                {/* Auth Section */}
                <div className="flex items-center space-x-4">
                    {isLoggedIn ? (
                        <div className="relative">
                            <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2 text-gray-400 hover:text-gray-900"
                            >
                            <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center">
                                {user?.first_name?.charAt(0) || user?.username?.charAt(0) || 'U'}
                            </div>
                            <span className="text-sm font-medium">
                                {user?.first_name || user?.username}
                            </span>
                            </button>
            
                            {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border">
                                <Link
                                href="/user/dashboard"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                >
                                <div className="flex items-center gap-3">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                    />
                                    </svg>
                                    ภาพรวม
                                </div>
                                </Link>
            
                                <Link
                                href="/user/profile"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                >
                                <div className="flex items-center gap-3">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    </svg>
                                    โปรไฟล์
                                </div>
                                </Link>
            
                                <Link
                                href="/user/education"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                >
                                <div className="flex items-center gap-3">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                                    />
                                    </svg>
                                    ข้อมูลการศึกษา
                                </div>
                                </Link>
            
                                <Link
                                href="/user/certificate"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                >
                                <div className="flex items-center gap-3">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                    </svg>
                                    ประวัติการอบรม
                                </div>
                                </Link>
            
                                <Link
                                href="/user/work-history"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                >
                                <div className="flex items-center gap-3">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                                    />
                                    </svg>
                                    ประวัติการทำงาน
                                </div>
                                </Link>
            
                                <button
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                                >
                                <div className="flex items-center gap-3">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                    />
                                    </svg>
                                    ออกจากระบบ
                                </div>
                                </button>
                            </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link
                            href="/login"
                            className="text-gray-600 hover:text-green-500"
                            >
                            เข้าสู่ระบบ
                            </Link>
                            <Link
                            href="/register"
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                            >
                            ลงทะเบียน
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </div>
    </nav>
  )
}
