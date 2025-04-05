import React, { useState, useEffect } from 'react'
import { quizData } from './data/quizData'
import Question from './components/Question'
import TopicCard from './components/TopicCard'
import LoginScreen from './components/LoginScreen'

type HistoryRecord = {
  topic: string
  score: number
  total: number
}

function App() {
  const [sailorName, setSailorName] = useState<string | null>(null)
  const [sailorRank, setSailorRank] = useState<string | null>(null)
  const [topic, setTopic] = useState<string | null>(null)
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [history, setHistory] = useState<HistoryRecord[]>([])
  const [reviewMode, setReviewMode] = useState(false)
  const [incorrectQuestions, setIncorrectQuestions] = useState<number[]>([])

  useEffect(() => {
    const storedName = localStorage.getItem('sailorName')
    const storedRank = localStorage.getItem('sailorRank')
    const storedHistory = localStorage.getItem('sailorHistory')
    if (storedName && storedRank) {
      setSailorName(storedName)
      setSailorRank(storedRank)
    }
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory))
    }
  }, [])

  const handleLogin = (name: string, rank: string) => {
    setSailorName(name)
    setSailorRank(rank)
  }

  const logout = () => {
    localStorage.removeItem('sailorName')
    localStorage.removeItem('sailorRank')
    localStorage.removeItem('sailorHistory')
    setSailorName(null)
    setSailorRank(null)
    setTopic(null)
    setCurrentQ(0)
    setScore(0)
    setShowResult(false)
    setHistory([])
    setReviewMode(false)
  }

  const updateHistory = (topic: string, score: number, total: number) => {
    const newRecord = { topic, score, total }
    const updatedHistory = [...history.filter(h => h.topic !== topic), newRecord]
    setHistory(updatedHistory)
    localStorage.setItem('sailorHistory', JSON.stringify(updatedHistory))
  }

  if (!sailorName || !sailorRank) {
    return <LoginScreen onLogin={handleLogin} />
  }

  if (!topic) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#1c1c1c', minHeight: '100vh', color: '#eee' }}>
        <h1 style={{ color: '#3498db' }}>🚢 ReadyNav</h1>
        <p style={{ color: '#ccc' }}>Welcome, {sailorRank} {sailorName}</p>
        <h3 style={{ marginTop: '1rem', color: '#f1c40f' }}>📊 Your Training Progress:</h3>
        <ul>
          {Object.keys(quizData).map((key) => {
            const match = history.find(h => h.topic === key)
            return (
              <li key={key}>
                {key} — {match ? `✅ ${match.score}/${match.total}` : '❌ Not Started'}
              </li>
            )
          })}
        </ul>
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
  const questionIndexes = reviewMode ? incorrectQuestions : Array.from(Array(questions.length).keys())
  const current = questions[questionIndexes[currentQ]]

  const handleAnswer = (isCorrect: boolean) => {
    if (!isCorrect) {
      setIncorrectQuestions((prev) => [...prev, questionIndexes[currentQ]])
    }
    if (isCorrect) setScore((s) => s + 1)
    const next = currentQ + 1
    if (next < questionIndexes.length) {
      setCurrentQ(next)
    } else {
      setShowResult(true)
      if (!reviewMode) {
        updateHistory(topic, score + (isCorrect ? 1 : 0), questions.length)
      }
    }
  }

  const startReview = () => {
    setReviewMode(true)
    setShowResult(false)
    setCurrentQ(0)
    setScore(0)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#1c1c1c', minHeight: '100vh', color: '#eee' }}>
      <h2 style={{ color: '#f39c12' }}>{topic}</h2>
      <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Logged in as: {sailorRank} {sailorName}</p>
      {showResult ? (
        <>
          <p>Quiz Complete!</p>
          <p style={{ color: '#2ecc71' }}>Score: {score} / {questions.length}</p>
          {!reviewMode && incorrectQuestions.length > 0 && (
            <button onClick={startReview} style={{ margin: '1rem', padding: '0.5rem 1rem' }}>
              Retry Incorrect ({incorrectQuestions.length})
            </button>
          )}
          <button onClick={() => {
            setTopic(null)
            setCurrentQ(0)
            setScore(0)
            setShowResult(false)
            setReviewMode(false)
            setIncorrectQuestions([])
          }}>Back to Topics</button>
        </>
      ) : (
        <Question {...current} onAnswer={handleAnswer} />
      )}
    </div>
  )
}

export default App
