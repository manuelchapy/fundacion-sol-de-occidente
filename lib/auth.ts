// Authentication utilities for Masonic planchas section

export interface AuthUser {
  username: string
  isAuthenticated: boolean
}

export const AUTH_CREDENTIALS = {
  username: 'SDO283',
  password: 'mediodia283'
}

export const STORAGE_KEYS = {
  AUTHENTICATED: 'masonic_authenticated',
  USER: 'masonic_user'
}

export const checkAuthentication = (): boolean => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(STORAGE_KEYS.AUTHENTICATED) === 'true'
}

export const getCurrentUser = (): string | null => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(STORAGE_KEYS.USER)
}

export const login = (username: string, password: string): boolean => {
  if (username === AUTH_CREDENTIALS.username && password === AUTH_CREDENTIALS.password) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.AUTHENTICATED, 'true')
      localStorage.setItem(STORAGE_KEYS.USER, username)
    }
    return true
  }
  return false
}

export const logout = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEYS.AUTHENTICATED)
    localStorage.removeItem(STORAGE_KEYS.USER)
  }
}

export const requireAuth = (): boolean => {
  return checkAuthentication()
}
