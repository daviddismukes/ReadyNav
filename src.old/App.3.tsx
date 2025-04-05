import React, { useState, useEffect } from 'react'
import { quizData } from './data/quizData'
import Question from './components/Question'
import TopicCard from './components/TopicCard'
import LoginScreen from './components/LoginScreen'

function App() {
  const [sailorName, setSailorName] = useState<string | null>(null)
  const [sailorRank, setSailorRank] = useState<string | null>(null)
  const [topic, setTopic] = useState<string | null>(null)
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    const storedName = localStorage.getItem('sailorName')
    const storedRank = localStorage.getItem('sailorRank')
    if (storedName && storedRank) {
      setSailorName(storedName)
      setSailorRank(storedRank)
    }
  }, [])

  const handleLogin = (name: string, rank: string) => {
    setSailorName(name)
    setSailorRank(rank)
  }

  const logout = () => {
    localStorage.removeItem('sailorName')
    localStorage.removeItem('sailorRank')
    setSailorName(null)
    setSailorRank(null)
    setTopic(null)
    setCurrentQ(0)
    setScore(0)
    setShowResult(false)
  }

  if (!sailorName || !sailorRank) {
    return <LoginScreen onLogin={handleLogin} />
  }

  if (!topic) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#1c1c1c', minHeight: '100vh', color: '#eee' }}>
        <h1 style={{ color: '#3498db' }}>🚢 ReadyNav</h1>
        <p style={{ color: '#ccc' }}>Welcome, {sailorRank} {sailorName}</p>
        <p>Select a training topic:</p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          {Object.keys(quizData).map((key) => (
            <TopicCard key={key} title={key} onClick={() => setTopic(key)} />
          ))}
        </div>
        <button onClick={logout} style={{ marginTop: '2rem', color: '#eee', background: '#444', padding: '0.5rem 1rem', border: 'none' }}>Log Out</button>
      </div>
    )
  }

  const questions = quizData[topic]
  const current = questions[currentQ]

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore((s) => s + 1)
    const next = currentQ + 1
    if (next < questions.length) {
      setCurrentQ(next)
    } else {
      setShowResult(true)
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#1c1c1c', minHeight: '100vh', color: '#eee' }}>
      <h2 style={{ color: '#f39c12' }}>{topic}</h2>
      <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Logged in as: {sailorRank} {sailorName}</p>
      {showResult ? (
        <>
          <p>Quiz Complete!</p>
          <p style={{ color: '#2ecc71' }}>Score: {score} / {questions.length}</p>
          <button onClick={() => {
            setTopic(null)
            setCurrentQ(0)
            setScore(0)
            setShowResult(false)
          }}>Back to Topics</button>
        </>
      ) : (
        <Question {...current} onAnswer={handleAnswer} />
      )}
    </div>
  )
}

export default App
