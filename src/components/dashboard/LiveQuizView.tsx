import React from 'react'
import { liveSessions } from '../../data/liveSessions'

const LiveQuizView = () => {
  return (
    <div>
      <h2>Live Quiz View</h2>
      {liveSessions.length > 0 ? (
        <ul>
          {liveSessions.map((session, index) => (
            <li key={index}>
              {session.userId} is taking <strong>{session.topic}</strong> – Progress:{' '}
              {session.currentQuestion}/{session.totalQuestions} – Score: {session.correctAnswers}
            </li>
          ))}
        </ul>
      ) : (
        <p>No live sessions currently in progress.</p>
      )}
    </div>
  )
}

export default LiveQuizView
