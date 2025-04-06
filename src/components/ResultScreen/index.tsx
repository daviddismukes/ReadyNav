// src/components/ResultScreen.tsx
import React, { useEffect } from 'react'
import { useQuiz } from '../../context/QuizContext'
import { saveQuizResult } from '../../utils/saveResult'

const ResultScreen = () => {
  const { correctAnswers, questions, selectedTopic, userId, resetQuiz } = useQuiz()

  useEffect(() => {
    if (selectedTopic && userId) {
      saveQuizResult(userId, selectedTopic.id, {
        correctAnswers,
        totalQuestions: questions.length,
        timestamp: new Date().toISOString(),
      })
    }
  }, [correctAnswers, questions, selectedTopic, userId])

  return (
    <div>
      <h2>Quiz Complete</h2>
      <p>
        Score: {correctAnswers} / {questions.length}
      </p>
      <button onClick={resetQuiz}>Back to Topics</button>
    </div>
  )
}

export default ResultScreen
