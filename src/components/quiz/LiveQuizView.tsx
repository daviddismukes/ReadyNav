import React, { useEffect, useState } from 'react'

type QuizSession = {
  userId: string
  topic: string
  progress: string
  score: string
}

const LiveQuizView = () => {
  const [sessions, setSessions] = useState<QuizSession[]>([])

  useEffect(() => {
    // Mocked or sample data; could be loaded from localStorage
    const data = localStorage.getItem('liveQuizSessions')
    if (data) {
      setSessions(JSON.parse(data))
    } else {
      // Temporary fallback mock
      setSessions([
        { userId: 'sailor001', topic: 'Engineering Systems', progress: '3/10', score: '2' },
        { userId: 'sailor007', topic: 'Sight Conservation', progress: '7/10', score: '6' },
      ])
    }
  }, [])

  return (
    <div>
      <h2>Live Quiz View</h2>
      {sessions.length === 0 ? (
        <p>No active quizzes currently.</p>
      ) : (
        <ul>
          {sessions.map((session, index) => (
            <li key={index}>
              <strong>{session.userId}</strong> is taking <em>{session.topic}</em> - Progress: {session.progress} - Score: {session.score}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LiveQuizView
