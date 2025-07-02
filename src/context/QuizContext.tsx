// context/QuizContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface QuizContextType {
  selectedTopic: any;
  selectTopic: (topic: any) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const selectTopic = (topic: any) => setSelectedTopic(topic);

  return (
    <QuizContext.Provider value={{ selectedTopic, selectTopic }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error('useQuiz must be used within a QuizProvider');
  return context;
};