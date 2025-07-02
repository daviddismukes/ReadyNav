// 📁 /components/QuizTopicsScreen.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import quizTopics from '../data/quizTopics';
import { useQuiz } from '../context/QuizContext';

const QuizTopicsScreen = () => {
  const navigate = useNavigate();
  const { selectTopic } = useQuiz();

  const handleSelectTopic = (topic: any) => {
    if (typeof selectTopic === 'function') {
      selectTopic(topic);
      navigate('/quiz');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-blue-900 text-center">Select a Quiz Topic</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizTopics.map((topic, index) => (
            <div
              key={topic.id || index}
              onClick={() => handleSelectTopic(topic)}
              className="cursor-pointer bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:bg-blue-50 transition-all transform hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="text-blue-800 text-3xl">📘</div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-1">{topic.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{topic.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizTopicsScreen;