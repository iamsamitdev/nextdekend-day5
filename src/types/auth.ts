export interface LoginFormData {
  username: string
  password: string
}

export interface RegisterFormData {
  email: string
  password: string
  confirmPassword: string
  username: string
  first_name: string
  last_name: string
  tel: string
}

export interface AuthTokens {
  access: string
  refresh: string
}

export interface User {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  tel: string
}
