import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div style={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '240px',
      height: '100%',
      backgroundColor: '#1f2937',
      color: '#fff',
      padding: '1rem',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ color: '#00bcd4' }}>ReadyNav</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link to="/results" style={{ color: '#fff', textDecoration: 'none' }}>Results</Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link to="/quiz/sample" style={{ color: '#fff', textDecoration: 'none' }}>Take Quiz</Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link to="/admin" style={{ color: '#fff', textDecoration: 'none' }}>Admin</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
