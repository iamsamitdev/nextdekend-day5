import Image from 'next/image';
import { RegisterForm } from '@/components/auth/register-form/RegisterForm';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ลงทะเบียน | Dekend เว็บหาที่ฝึกงาน หางาน สำหรับนักศึกษา',
  description: 'สมัครสมาชิก Dekend สำหรับนักศึกษา ผู้หางาน และบริษัทที่ต้องการประกาศงาน',
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/images/login-bg.jpeg"
          alt="Students"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/dekend-logo.png"
            alt="Dekend Logo"
            width={150}
            height={40}
            className="w-[150px] h-[40px] object-contain"
            priority
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 lg:px-16 py-12">
        <RegisterForm />
      </div>
    </div>
  );
} 