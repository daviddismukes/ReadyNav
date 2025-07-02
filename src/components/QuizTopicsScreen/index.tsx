import React from 'react';
import { useNavigate } from 'react-router-dom';
import quizTopics from '../../data/quizTopics';
import { useQuiz } from '../../context/QuizContext';

const QuizTopicsScreen = () => {
  const navigate = useNavigate();
  const { selectTopic } = useQuiz();

  const handleSelectTopic = (topic) => {
    selectTopic(topic);
    navigate('/quiz');
  };

  return (
    <div>
      <h2>Select a Quiz Topic</h2>
      <ul>
        {quizTopics.map((topic) => (
          <li
            key={topic.id}
            onClick={() => handleSelectTopic(topic)}
            style={{ cursor: 'pointer', marginBottom: '1rem', fontWeight: 'bold' }}
          >
            {topic.title} - {topic.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizTopicsScreen;
