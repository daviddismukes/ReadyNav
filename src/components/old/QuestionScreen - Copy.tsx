import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

const QuestionScreen = () => {
  const navigate = useNavigate();
  const { selectedTopic } = useQuiz();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  if (!selectedTopic || !selectedTopic.questions || selectedTopic.questions.length === 0) {
    return <div className="p-4 text-red-500">No topic selected or no questions available.</div>;
  }

  const currentQuestion = selectedTopic.questions[currentQuestionIndex];

  const handleAnswer = (option) => {
    const newAnswers = [...answers, {
      question: currentQuestion.prompt,
      selected: option,
      correct: option === currentQuestion.answer
    }];
    setAnswers(newAnswers);

    if (currentQuestionIndex + 1 < selectedTopic.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/result', {
        state: {
          answers: newAnswers,
          topic: selectedTopic.title,
          breakdown: selectedTopic.questions.map((q, idx) => ({
            question: q.prompt,
            correct: q.answer,
            selected: newAnswers[idx]?.selected || null
          }))
        }
      });
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">{selectedTopic.title}</h2>
      <div className="mb-4">
        <p className="text-md font-medium">{currentQuestion.prompt}</p>
        <div className="mt-2 grid grid-cols-1 gap-2">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="px-4 py-2 bg-blue-100 rounded hover:bg-blue-200"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
