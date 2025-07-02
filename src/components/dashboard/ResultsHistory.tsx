import React, { useEffect, useState } from 'react';

const ResultsScreen = () => {
  const [resultsByTopic, setResultsByTopic] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('quizResults') || '[]');
    const grouped = stored.reduce((acc, curr) => {
      if (!acc[curr.topic]) acc[curr.topic] = [];
      acc[curr.topic].push(curr);
      return acc;
    }, {});
    setResultsByTopic(grouped);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Quiz Results by Topic</h2>
      {Object.keys(resultsByTopic).length === 0 ? (
        <p>No results yet.</p>
      ) : (
        Object.entries(resultsByTopic).map(([topic, results]) => (
          <div key={topic} className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{topic}</h3>
            <ul className="space-y-2">
              {results.map((result, idx) => (
                <li key={idx} className="border p-4 rounded shadow-sm bg-white">
                  <p><strong>User:</strong> {result.userId}</p>
                  <p><strong>Score:</strong> {result.score} / {result.total}</p>
                  <p><strong>Taken on:</strong> {new Date(result.timestamp).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default ResultsScreen;
