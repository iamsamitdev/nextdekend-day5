import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

                {/* Logo */}
                <Link href='/' className='flex items-center'>
                    <Image src='/images/dekend-logo.png' alt='Dekend Logo' width={120} height={32} />
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

                {/* Auth Login/Register Button */}
                <div className='flex items-center space-x-4'>
                    <Link href="/login" className="text-gray-600 hover:text-green-500">
                        เข้าสู่ระบบ
                    </Link>
                    <Link href="/register" 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                        ลงทะเบียน
                    </Link>
                </div>

            </div>
        </div>
    </nav>
  )
}
