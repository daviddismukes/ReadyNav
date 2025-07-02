// components/QuizTopicsScreen.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import quizTopics from '../data/quizTopics';
import { useQuiz } from '../context/QuizContext';

const QuizTopicsScreen = () => {
  console.log('Rendering QuizTopicsScreen');
  const navigate = useNavigate();
  console.log('Navigation hook initialized');
  const quizContext = useQuiz();
  console.log('Quiz context obtained:', quizContext);

  const setSelectedTopic = quizContext?.selectTopic;
  console.log('setSelectedTopic extracted from context:', setSelectedTopic);
  console.log('typeof setSelectedTopic:', typeof setSelectedTopic);

  useEffect(() => {
    console.log('Effect: quizContext updated:', quizContext);
  }, [quizContext]);

  const handleSelectTopic = (topic: any) => {
    console.log('handleSelectTopic invoked with:', topic);
    if (typeof setSelectedTopic === 'function') {
      console.log('Calling setSelectedTopic...');
      setSelectedTopic(topic);
      console.log('Navigating to /quiz');
      navigate('/quiz');
    } else {
      console.error('setSelectedTopic is not a function. Current value:', setSelectedTopic);
    }
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
