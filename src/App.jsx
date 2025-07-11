import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';
import './App.css';

// Placeholder Home component
const Home = () => (
  <div className="text-center max-w-2xl mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
    <p className="text-lg text-gray-600 dark:text-gray-300">A React + Tailwind assignment demo</p>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/api" element={<ApiData />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
