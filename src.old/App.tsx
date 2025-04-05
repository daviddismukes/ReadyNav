import React from 'react'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Sidebar />
      <div style={{ padding: '2rem', flex: 1, backgroundColor: '#1c1c1c', color: '#fff' }}>
        <h1>🧭 Welcome to ReadyNav</h1>
        <p>Select a quiz or use the Admin panel to upload new training content.</p>
      </div>
    </div>
  )
}

export default App
