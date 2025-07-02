// 📁 /components/QuestionScreen.tsx (patched)
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

const QuestionScreen = () => {
  const navigate = useNavigate();
  const { selectedTopic } = useQuiz();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    console.log('Selected topic:', selectedTopic);
    console.log('Current question index:', currentQuestionIndex);
    console.log('Current question:', selectedTopic?.questions?.[currentQuestionIndex]);
  }, [selectedTopic, currentQuestionIndex]);

  if (!selectedTopic || !selectedTopic.questions || selectedTopic.questions.length === 0) {
    return <div className="p-6 text-red-600 font-semibold">No topic selected or no questions available.</div>;
  }

  const currentQuestion = selectedTopic.questions[currentQuestionIndex];

  const handleAnswer = (option) => {
    const newAnswers = [...answers, {
      question: currentQuestion.prompt,
      selected: option,
      correct: option === currentQuestion.answer
    }];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex + 1 < selectedTopic.questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        navigate('/result', {
          state: {
            answers: newAnswers,
            topic: selectedTopic.title,
            breakdown: selectedTopic.questions.map((q, i) => ({
              question: q.prompt,
              selected: newAnswers[i]?.selected || null,
              correct: q.options[q.answerIndex] || null,
            })),
          },
        });
      }
    }, 0);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">{selectedTopic.title}</h2>
        <p className="text-lg text-gray-800 mb-6">{currentQuestion.prompt}</p>
        <div className="flex flex-col gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-xl shadow transition"
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