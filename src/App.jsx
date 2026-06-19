import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);

  // Check for dark mode preference
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Router>
      <div className={isDark ? 'dark' : ''}>
        <div className="bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors">
          <nav className="bg-white dark:bg-slate-900 shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-primary-600">Portfolio</h1>
              <button
                onClick={toggleDarkMode}
                className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {isDark ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>

          <footer className="bg-gray-100 dark:bg-slate-900 py-8 mt-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                © 2024 Data Analytics Portfolio. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20">
      <section className="text-center space-y-8">
        <h2 className="text-5xl font-bold">Welcome to Your Portfolio</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Data Analyst & Data Scientist Portfolio
        </p>
        <div className="space-y-4">
          <p className="text-lg">🚀 Getting Started</p>
          <ul className="text-left max-w-2xl mx-auto space-y-2 text-gray-700 dark:text-gray-300">
            <li>✅ Backend is running on http://localhost:3000</li>
            <li>✅ Configure your .env file with database credentials</li>
            <li>✅ Initialize the PostgreSQL database with schema.sql</li>
            <li>✅ Start building your components in src/components</li>
            <li>✅ Add your routes and pages</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
