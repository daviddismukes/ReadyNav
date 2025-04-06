// src/components/Sidebar.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div style={{ width: '200px', background: '#1e1e2f', color: '#fff', height: '100vh', padding: '20px' }}>
      <h3>ReadyNav</h3>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link style={linkStyle} to="/">Dashboard</Link></li>
          <li><Link style={linkStyle} to="/results">Results History</Link></li>
          <li><Link style={linkStyle} to="/live-quiz">Live Quiz</Link></li>
          <li><Link style={linkStyle} to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </div>
  )
}

const linkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  display: 'block',
  padding: '10px 0'
}

export default Sidebar
