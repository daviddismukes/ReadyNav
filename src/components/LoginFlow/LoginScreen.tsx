import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {
  const [userId, setUserId] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (userId.trim()) {
      localStorage.setItem('userId', userId.trim())
      navigate('/')
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
