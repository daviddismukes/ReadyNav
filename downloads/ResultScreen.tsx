// 📁 /components/ResultScreen.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultScreen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { answers = [], topic = 'Unknown Topic', breakdown = [] } = state || {};

  console.log('[Debug] Breakdown:', breakdown);
  breakdown.forEach((item, idx) => {
    console.log(`[Debug] Q${idx + 1}`, {
      selected: item.selected,
      correct: item.correct,
      match: item.selected === item.correct,
    });
  });

  const correctCount = breakdown.filter((b) => b.selected === b.correct).length;
  console.log('[Debug] Correct count:', correctCount);
  const total = answers.length || 1;
  const percent = Math.round((correctCount / total) * 100);
  const date = new Date().toLocaleString();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Quiz Results</h2>
        <p className="text-xl font-medium mb-1 text-gray-700">
          <span className="font-semibold">Topic:</span> <span className="text-blue-900 font-semibold">{topic}</span>
        </p>
        <p className="text-xl font-medium mb-1 text-gray-700">
          <span className="font-semibold">Score:</span> {correctCount} / {total} ({percent}%)
        </p>
        <p className="text-sm text-gray-500 mb-6">Taken on: {date}</p>

        <div className="space-y-4">
          {breakdown.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border shadow-sm ${item.selected === item.correct ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300'}`}
            >
              <p className="font-semibold">Q{idx + 1}: {item.question}</p>
              <p className="text-blue-800">Your answer: {item.selected || '—'}</p>
              <p className="text-gray-700">Correct answer: {item.correct || '—'}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate('/topics')}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow"
          >
            Back to Topics
          </button>
          <button
            onClick={() => navigate('/quiz')}
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-lg shadow"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

// ✅ Ensure this component is imported in Routes.tsx as:
// import ResultScreen from './components/ResultScreen';
export default ResultScreen;
