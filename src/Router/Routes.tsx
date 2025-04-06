
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import UserDashboard from '../components/dashboard/UserDashboard'
import ResultsHistory from '../components/dashboard/ResultsHistory'
import LiveQuizView from '../components/dashboard/LiveQuizView'
import AdminPanel from '../components/admin/AdminPanel'

const AppRoutes = () => {
  return (
    <Router basename="/ReadyNav">
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<UserDashboard />} />
            <Route path="/results" element={<ResultsHistory />} />
            <Route path="/live-quiz" element={<LiveQuizView />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default AppRoutes

