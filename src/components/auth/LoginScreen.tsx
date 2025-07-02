import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'  // ✅ Use auth context

const LoginScreen = () => {
  const [userId, setUserId] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()  // ✅ Pull login function from AuthContext

  const handleLogin = () => {
    if (userId.trim()) {
      login(userId.trim())       // ✅ Set user ID via context
      navigate('/dashboard')     // ✅ Navigate after login
    }
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Welcome to ReadyNav</h2>
      <input
        type="text"
        placeholder="Enter your Sailor ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <br /><br />
      <button onClick={handleLogin} style={{ padding: '0.5rem 1rem' }}>
        Login
      </button>
    </div>
  )
}

export default LoginScreen
