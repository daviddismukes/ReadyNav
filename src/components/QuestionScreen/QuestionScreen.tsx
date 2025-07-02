// QuizTopicsScreen.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import quizTopics from '../../data/quizTopics';
import { useQuiz } from '../../context/QuizContext';

const QuizTopicsScreen = () => {
  const navigate = useNavigate();
  const { selectTopic } = useQuiz();

  const handleSelectTopic = (topic: any) => {
    selectTopic(topic);
    navigate('/quiz');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Select a Quiz Topic</h2>
      <div className="space-y-4">
        {quizTopics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => handleSelectTopic(topic)}
            className="p-4 bg-white rounded shadow hover:bg-blue-100 cursor-pointer"
          >
            <h3 className="text-lg font-semibold">{topic.title}</h3>
            <p className="text-sm text-gray-600">{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizTopicsScreen;