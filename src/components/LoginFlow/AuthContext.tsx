import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const savedId = localStorage.getItem('userId')
    if (savedId) {
      setUserId(savedId)
    }
  }, [])

  const login = (id) => {
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

export const useAuth = () => useContext(AuthContext)
