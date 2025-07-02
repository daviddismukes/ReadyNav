// components/ResultsHistory.tsx
import React, { useEffect, useState } from 'react';

const ResultsHistory = () => {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('quizResults') || '[]');
    console.log('Loaded results from localStorage:', stored);
    setResults(stored);
  }, []);

  const formatDate = (iso: string) => {
    const date = new Date(iso);
    return date.toLocaleString();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Quiz History</h2>
      {results.length === 0 ? (
        <p>No quiz results found.</p>
      ) : (
        <ul className="space-y-4">
          {results.map((res, idx) => (
            <li key={idx} className="bg-white shadow rounded p-4">
              <p className="font-semibold">Topic: {res.topic}</p>
              <p>Score: {res.score} / {res.total} ({res.total ? `${Math.round((res.score / res.total) * 100)}%` : 'N/A'})</p>
              <p className="text-sm text-gray-500">Taken on: {formatDate(res.timestamp)}</p>
              {res.details?.length > 0 && (
                <div className="mt-3">
                  <h4 className="font-semibold">Questions:</h4>
                  <ul className="pl-4 list-disc">
                    {res.details.map((d: any, qIdx: number) => (
                      <li key={qIdx} className="mt-1">
                        <p className="text-sm">{d.question}</p>
                        <p className="text-green-600 text-sm">Correct: {d.correct}</p>
                        <p className="text-blue-600 text-sm">You answered: {d.user}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultsHistory;
