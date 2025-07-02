import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../../context/QuizContext';

const QuestionScreen = () => {
  const { selectedTopic, questions, answerQuestion } = useQuiz();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (isCorrect) => {
    answerQuestion(isCorrect);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/result');
    }
  };

  if (!selectedTopic) {
    return <div>No topic selected. Please go back and select a topic.</div>;
  }

  const question = questions[currentIndex];

  return (
    <div>
      <h2>{selectedTopic.title}</h2>
      <p>{question.text}</p>
      <div style={{ marginTop: '1rem' }}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.isCorrect)}
            style={{ display: 'block', margin: '0.5rem 0' }}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionScreen;
