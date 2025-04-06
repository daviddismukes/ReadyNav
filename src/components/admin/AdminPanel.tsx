import React, { useState } from 'react'
import AdminUpload from './AdminUpload'

const AdminPanel = () => {
  const [view, setView] = useState('upload')

  return (
    <div>
      <h2>Admin Tools</h2>
      {view === 'upload' && <AdminUpload />}
    </div>
  )
}

export default AdminPanel
