import React, { useState } from 'react'
//import quizData from './data/quizData'
import { quizData } from './data/quizData'
import Question from './components/Question'

function App() {
  const [topic, setTopic] = useState<string | null>(null)
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  if (!topic) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>🚢 ReadyNav</h1>
        <p>Select a training topic:</p>
        {Object.keys(quizData).map((key) => (
          <button key={key} onClick={() => setTopic(key)} style={{ margin: '0.5rem' }}>
            {key}
          </button>
        ))}
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
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>{topic}</h2>
      {showResult ? (
        <>
          <p>Quiz Complete!</p>
          <p>Score: {score} / {questions.length}</p>
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
