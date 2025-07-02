import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AuthContextType {
  userId: string | null
  login: (id: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(() => {
    return localStorage.getItem('userId') || null
  })

  const login = (id: string) => {
    localStorage.setItem('userId', id)
    setUserId(id)
  }

  const logout = () => {
    localStorage.removeItem('userId')
    setUserId(null)
  }

  return (
    <AuthContext.Provider value={{ userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
