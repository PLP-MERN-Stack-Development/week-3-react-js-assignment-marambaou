import React from 'react';
import { useTheme } from './ThemeContext';
import Button from './Button';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow">
      <div className="font-bold text-xl">MyApp</div>
      <ul className="flex gap-6 items-center">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/tasks" className="hover:underline">Tasks</a></li>
        <li><a href="/api" className="hover:underline">API Data</a></li>
        <li>
          <Button onClick={toggleTheme} variant="secondary" size="sm">
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 