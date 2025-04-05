import React, { useState } from 'react'
import AdminUpload from './AdminUpload'

const AdminPanel = () => {
  const [uploadedTopic, setUploadedTopic] = useState<string | null>(null)

  const handleUploadConfirm = (parsedQuiz: {
    topic: string
    questions: {
      question: string
      options: string[]
      answer: string
    }[]
  }) => {
    const quizBank = JSON.parse(localStorage.getItem('quizData') || '{}')
    quizBank[parsedQuiz.topic] = parsedQuiz.questions
    localStorage.setItem('quizData', JSON.stringify(quizBank))
    setUploadedTopic(parsedQuiz.topic)
  }

  return (
    <div style={{ padding: '2rem', color: '#eee' }}>
      <h2>Admin Upload Tool</h2>
      <AdminUpload onConfirm={handleUploadConfirm} />
      {uploadedTopic && <p style={{ color: '#0f0' }}>✔️ {uploadedTopic} uploaded successfully!</p>}
    </div>
  )
}

export default AdminPanel
