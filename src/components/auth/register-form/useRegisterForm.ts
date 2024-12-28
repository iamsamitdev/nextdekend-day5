import { useState } from 'react'
import { RegisterFormData } from '@/types/auth'

export function useRegisterForm() {
  const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    first_name: '',
    last_name: '',
    tel: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError('รหัสผ่านไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง')
      setIsLoading(false)
      return
    }
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          email: formData.email,
          first_name: formData.first_name,
          last_name: formData.last_name,
          tel: formData.tel
        }),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      window.location.href = '/login'
    } catch (error) {
      setError('การลงทะเบียนล้มเหลว กรุณาลองใหม่อีกครั้ง')
      console.error('Registration failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return {
    formData,
    showPassword,
    showConfirmPassword,
    isLoading,
    error,
    setShowPassword,
    setShowConfirmPassword,
    handleSubmit,
    handleInputChange,
  }
} 