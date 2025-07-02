// components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-48 bg-gray-800 text-white min-h-screen p-4 space-y-4">
      <h2 className="text-xl font-bold">ReadyNav</h2>
      <nav className="flex flex-col gap-2">
        <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
        <Link to="/topics" className="hover:bg-gray-700 p-2 rounded">Quizzes</Link>
        <Link to="/results-history" className="hover:bg-gray-700 p-2 rounded">Past Results</Link>
        <Link to="/admin" className="hover:bg-gray-700 p-2 rounded">Admin</Link>
      </nav>
      <button
        onClick={() => {
          localStorage.removeItem('userId');
          window.location.href = '/';
        }}
        className="mt-auto hover:bg-red-600 bg-red-500 p-2 rounded"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Sidebar;
