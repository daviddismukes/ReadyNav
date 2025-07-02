import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <QuizContext.Provider value={{ selectedTopic, setSelectedTopic }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
