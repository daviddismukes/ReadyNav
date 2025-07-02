
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../context/QuizContext'

const QuestionScreen = () => {
  const navigate = useNavigate()
  const { questions, currentQuestionIndex, correctAnswers, selectAnswer, nextQuestion, selectedTopic } = useQuiz()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  if (!questions.length) {
    return <p>No questions available. Please select a topic first.</p>
  }

  const currentQuestion = questions[currentQuestionIndex]

  const handleAnswer = (option: string) => {
    setSelectedOption(option)
    selectAnswer(option)
    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        nextQuestion()
        setSelectedOption(null)
      } else {
        navigate('/result')
      }
    }, 800)
  }

  return (
    <div>
      <h2>{selectedTopic?.title}</h2>
      <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
      <h3>{currentQuestion.question}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => handleAnswer(option)}
              disabled={selectedOption !== null}
              style={{
                backgroundColor: selectedOption === option ? '#ccc' : '#fff',
                padding: '10px 15px',
                margin: '5px 0',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer'
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionScreen
