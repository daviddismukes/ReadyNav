import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import UserDashboard from '../components/dashboard/UserDashboard'
import ResultsHistory from '../components/dashboard/ResultsHistory'
import LiveQuizView from '../components/dashboard/LiveQuizView'
import AdminPanel from '../components/admin/AdminPanel'
import QuizTopicsScreen from '../components/QuizTopicsScreen'
import QuestionScreen from '../components/QuestionScreen'
import ResultScreen from '../components/ResultScreen'
import LoginScreen from '../components/auth/LoginScreen'
import ProfileSetupScreen from '../components/auth/ProfileSetupScreen'
import { useAuth } from '../context/AuthContext'

const AppRoutes = () => {
  const { userId } = useAuth()

  return (
    <Router basename="/ReadyNav">
      <div style={{ display: 'flex' }}>
        {userId && <Sidebar />}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            {!userId ? (
              <>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/profile-setup" element={<ProfileSetupScreen />} />
              </>
            ) : (
              <>
                <Route path="/" element={<UserDashboard />} />
                <Route path="/topics" element={<QuizTopicsScreen />} />
                <Route path="/quiz" element={<QuestionScreen />} />
                <Route path="/result" element={<ResultScreen />} />
                <Route path="/results" element={<ResultsHistory />} />
                <Route path="/live-quiz" element={<LiveQuizView />} />
                <Route path="/admin" element={<AdminPanel />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default AppRoutes