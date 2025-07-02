// 📁 /components/ResultsHistory.tsx
import React from 'react';

const ResultsHistory = () => {
  const history = JSON.parse(localStorage.getItem('quizResults') || '[]');

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Past Quiz Results</h2>
        {history.length === 0 ? (
          <p className="text-gray-600">No past results found.</p>
        ) : (
          <ul className="space-y-4">
            {history.map((entry, idx) => (
              <li key={idx} className="bg-white p-4 rounded-xl shadow">
                <p className="text-lg font-semibold">{entry.topic}</p>
                <p>Score: {entry.score} / {entry.total} ({Math.round((entry.score / entry.total) * 100)}%)</p>
                <p className="text-sm text-gray-500">Taken on: {new Date(entry.date).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ResultsHistory;