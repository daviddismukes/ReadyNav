// components/ResultScreen.tsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

const ResultScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedTopic: topic } = useQuiz();

  const { score, questions } = location.state || { score: 0, questions: [] };

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem('quizResults') || '[]');
    const newEntry = {
      topic: topic?.title || 'Unknown',
      score,
      total: questions.length,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('quizResults', JSON.stringify([...existing, newEntry]));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
      <p className="mb-2">Topic: <strong>{topic?.title}</strong></p>
      <p className="mb-2">Score: <strong>{score}</strong> out of <strong>{questions.length}</strong></p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => navigate('/dashboard')}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default ResultScreen;