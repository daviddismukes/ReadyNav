import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, questions = [], topic = 'Unknown' } = location.state || {};

  const totalQuestions = questions.length || 1;
  const percentage = ((score / totalQuestions) * 100).toFixed(1);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString();
  };

  const handleRetakeQuiz = () => {
    if (location.state?.selectedTopic) {
      navigate('/quiz', { state: { selectedTopic: location.state.selectedTopic } });
    } else {
      navigate('/topics');
    }
  };

  const ActionButtons = () => (
    <div className="mt-6 flex space-x-4">
      <button
        onClick={() => navigate('/topics')}
        className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
      >
        Back to Topics
      </button>
      <button
        onClick={handleRetakeQuiz}
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Retake Quiz
      </button>
    </div>
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
      <p className="mb-2">Topic: <strong>{topic}</strong></p>
      <p className="mb-2">Score: {score} / {totalQuestions} ({percentage}%)</p>
      <p className="mb-6">Taken on: {formatDate(Date.now())}</p>

      <ActionButtons />

      <div className="space-y-4">
        {questions.map((q, index) => (
          <div key={index} className="border p-4 rounded bg-gray-50">
            <p className="font-semibold">{index + 1}. {q.prompt}</p>
            <ul className="mt-2 ml-4 list-disc">
              {q.options.map((opt, i) => (
                <li
                  key={i}
                  className={`ml-2 ${i === q.answerIndex ? 'text-green-700 font-semibold' : ''} ${i === q.userAnswerIndex && i !== q.answerIndex ? 'text-red-600' : ''}`}
                >
                  {opt} {i === q.userAnswerIndex ? '(Your Answer)' : ''}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ActionButtons />
    </div>
  );
};

export default ResultScreen;