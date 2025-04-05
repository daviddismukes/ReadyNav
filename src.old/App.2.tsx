import React, { useState } from 'react'
import { quizData } from './data/quizData'
import Question from './components/Question'
import TopicCard from './components/TopicCard'

function App() {
  const [topic, setTopic] = useState<string | null>(null)
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  if (!topic) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#1c1c1c', minHeight: '100vh', color: '#eee' }}>
        <h1 style={{ color: '#3498db' }}>🚢 ReadyNav</h1>
        <p style={{ color: '#ccc' }}>Select a training topic:</p>
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
