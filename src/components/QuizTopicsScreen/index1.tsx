// src/components/QuizTopicsScreen/index.tsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import quizTopics from '../../data/quizTopics'
import { useQuiz } from '../../context/QuizContext'

const QuizTopicsScreen = () => {
  const { setSelectedTopic } = useQuiz()
  const navigate = useNavigate()

  const handleTopicSelect = (topic: any) => {
    setSelectedTopic(topic)
    navigate('/quiz')
  }

  return (
    <div>
      <h2>Select a Quiz Topic</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {quizTopics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => handleTopicSelect(topic)}
            style={{
              border: '1px solid #ccc',
              padding: '20px',
              width: '200px',
              cursor: 'pointer',
              borderRadius: '8px',
              background: '#f0f0f0',
            }}
          >
            <img
              src={topic.icon}
              alt={topic.title}
              style={{ width: '40px', height: '40px' }}
            />
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuizTopicsScreen
