'use client'

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRegisterForm } from './useRegisterForm'
import { SocialButton } from '@/components/ui/social-button'

export function RegisterForm() {
  const {
    formData,
    showPassword,
    showConfirmPassword,
    isLoading,
    error,
    setShowPassword,
    setShowConfirmPassword,
    handleSubmit,
    handleInputChange,
  } = useRegisterForm()

  return (
    <div className="w-full max-w-md">
      <div className="mb-8">
        <Link href="/" className="text-gray-500 hover:text-gray-700 flex items-center gap-2 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          กลับสู่หน้าหลัก
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">ลงทะเบียน</h1>
        <p className="text-gray-600 mt-2">สำหรับนักศึกษา ผู้หางาน และบริษัทประกาศงาน</p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          id="username"
          name="username"
          label="ชื่อผู้ใช้"
          value={formData.username}
          onChange={handleInputChange}
          required
        />

        <Input
          type="email"
          id="email"
          name="email"
          label="อีเมล"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <Input
          type="password"
          id="password"
          name="password"
          label="รหัสผ่าน"
          value={formData.password}
          onChange={handleInputChange}
          showPassword={showPassword}
          onShowPasswordClick={() => setShowPassword(!showPassword)}
          required
        />

        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          label="ยืนยันรหัสผ่าน"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          showPassword={showConfirmPassword}
          onShowPasswordClick={() => setShowConfirmPassword(!showConfirmPassword)}
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            id="first_name"
            name="first_name"
            label="ชื่อ"
            value={formData.first_name}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            id="last_name"
            name="last_name"
            label="นามสกุล"
            value={formData.last_name}
            onChange={handleInputChange}
            required
          />
        </div>

        <Input
          type="tel"
          id="tel"
          name="tel"
          label="เบอร์โทรศัพท์"
          value={formData.tel}
          onChange={handleInputChange}
          required
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'กำลังดำเนินการ...' : 'ดำเนินการต่อ'}
        </Button>

        <div className="mt-6 flex flex-col gap-4">
          <SocialButton provider="line" type="button">
            ลงทะเบียนด้วย LINE
          </SocialButton>
          <SocialButton provider="google" type="button">
            ลงทะเบียนด้วย GOOGLE
          </SocialButton>
        </div>

        <p className="text-center text-gray-600 mt-6">
          มีบัญชีอยู่แล้ว?{' '}
          <Link href="/login" className="text-green-500 hover:text-green-600">
            เข้าสู่ระบบ
          </Link>
        </p>
      </form>
    </div>
  )
} 