import React, { useState } from 'react'
import AdminPanel from './admin/AdminPanel'
//import AdminPanel from './admin/AdminPanel'

const Sidebar = () => {
  const [showAdmin, setShowAdmin] = useState(false)
  const [auth, setAuth] = useState(false)
  const [passInput, setPassInput] = useState('')

  const checkPassword = () => {
    if (passInput === 'readynav123') {
      setAuth(true)
      setShowAdmin(true)
    } else {
      alert('Incorrect password')
    }
  }

  return (
    <div style={{ backgroundColor: '#333', padding: '1rem', color: '#fff', height: '100vh' }}>
      <h2 style={{ color: '#0ff' }}>ReadyNav</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><a href="/" style={{ color: '#ccc' }}>🏠 Home</a></li>
        <li><a href="#" style={{ color: '#ccc' }} onClick={() => setShowAdmin(true)}>🔐 Admin</a></li>
      </ul>

      {showAdmin && !auth && (
        <div style={{ marginTop: '1rem' }}>
          <input
            type="password"
            placeholder="Enter password"
            value={passInput}
            onChange={(e) => setPassInput(e.target.value)}
            style={{ padding: '0.25rem', width: '100%' }}
          />
          <button onClick={checkPassword} style={{ marginTop: '0.5rem', padding: '0.25rem 0.5rem' }}>
            Submit
          </button>
        </div>
      )}

      {auth && showAdmin && <AdminPanel />}
    </div>
  )
}

export default Sidebar
