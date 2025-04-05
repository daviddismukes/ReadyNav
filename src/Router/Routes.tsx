import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import UserDashboard from '../components/dashboard/UserDashboard'
import ResultsHistory from '../components/results/ResultsHistory'
import LiveQuizView from '../components/quiz/LiveQuizView'
import AdminPanel from '../components/admin/AdminPanel' // ✅ Added this line

const AppRoutes = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '240px', padding: '1rem', width: '100%' }}>
          <Routes>
            <Route path="/" element={<UserDashboard />} />
            <Route path="/results" element={<ResultsHistory />} />
            <Route path="/quiz/sample" element={<LiveQuizView />} />
            <Route path="/admin" element={<AdminPanel />} /> {/* ✅ Route fixed */}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default AppRoutes
