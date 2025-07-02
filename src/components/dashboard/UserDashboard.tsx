// components/dashboard/UserDashboard.tsx
import React, { useEffect, useState } from 'react';

const UserDashboard = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('username');
    setUsername(stored);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Welcome back, {username || 'Sailor'}!</h1>
      <p className="text-sm text-gray-600">
        Use the sidebar to start a quiz or view your history.
      </p>
    </div>
  );
};

export default UserDashboard;