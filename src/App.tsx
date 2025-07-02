// App.tsx
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { QuizProvider } from './context/QuizContext';
import AppRoutes from './router/Routes';

function App() {
  return (
    <AuthProvider>
      <QuizProvider>
        <AppRoutes />
      </QuizProvider>
    </AuthProvider>
  );
}

export default App;