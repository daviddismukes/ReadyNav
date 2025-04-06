// src/components/dashboard/ResultsHistory.tsx
import React from 'react';

const ResultsHistory = () => {
  const results = JSON.parse(localStorage.getItem('readyNavResults') || '[]');

  return (
    <div>
      <h2>Quiz History</h2>
      {results.length === 0 ? (
        <p>No quiz attempts recorded.</p>
      ) : (
        <ul>
          {results.map((r: any, idx: number) => (
            <li key={idx}>
              {r.topic} - {r.score}/{r.total} - {new Date(r.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultsHistory;
