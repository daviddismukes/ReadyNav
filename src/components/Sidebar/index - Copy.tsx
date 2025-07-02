// Sidebar/index.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <h1 className="text-3xl font-bold p-4">ReadyNav</h1>
      <nav className="flex flex-col gap-4 px-4">
        <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
        <Link to="/topics" className="hover:bg-gray-700 p-2 rounded">Quizzes</Link>
        <Link to="/admin" className="hover:bg-gray-700 p-2 rounded">Admin</Link>
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-500 hover:bg-red-600 p-2 rounded"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}
