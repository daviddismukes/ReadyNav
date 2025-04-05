import React from 'react'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '2rem', flex: 1, backgroundColor: '#1c1c1c', color: '#fff' }}>
        {/* Main app content will go here */}
        <h1>Welcome to ReadyNav</h1>
      </div>
    </div>
  )
}

export default App
