// 📁 /components/Sidebar/index.tsx
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
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col shadow-lg">
      <h1 className="text-3xl font-bold p-6 border-b border-gray-700">ReadyNav</h1>
      <nav className="flex flex-col gap-2 px-4 py-6 flex-1">
        <Link to="/dashboard" className="p-3 rounded-lg hover:bg-blue-800 transition-colors">Dashboard</Link>
        <Link to="/topics" className="p-3 rounded-lg hover:bg-blue-800 transition-colors">Quizzes</Link>
        <Link to="/admin" className="p-3 rounded-lg hover:bg-blue-800 transition-colors">Admin</Link>
        <div className="flex-grow"></div>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 p-3 rounded-lg mt-auto"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}