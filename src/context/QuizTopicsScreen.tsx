// components/QuizTopicsScreen.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import quizTopics from '../data/quizTopics';
import { useQuiz } from '../context/QuizContext';

const QuizTopicsScreen = () => {
  const navigate = useNavigate();
  const { selectTopic } = useQuiz();

  const handleSelectTopic = (topic: any) => {
    //console.log('Topic selected:', topic);
	console.log('Selected topic:', topic);
    selectTopic(topic);
    navigate('/quiz');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Select a Quiz Topic</h2>
      {quizTopics.map((topic) => (
        <div
          key={topic.id}
          onClick={() => handleSelectTopic(topic)}
          className="cursor-pointer mb-4 p-4 border border-gray-300 rounded hover:bg-blue-50 transition"
        >
          <h3 className="text-lg font-semibold">{topic.title}</h3>
          <p className="text-sm text-gray-600">{topic.description}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizTopicsScreen;