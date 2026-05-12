import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AboutPage from './pages/AboutPage';
import AudioBooksPage from './pages/AudioBooksPage';
import BooksPage from './pages/BooksPage';
import HomePage from './pages/HomePage';
import IllustratedPage from './pages/IllustratedPage';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/books-interviews" element={<BooksPage />} />
      <Route path="/audio-books" element={<AudioBooksPage />} />
      <Route path="/hg-illustrated" element={<IllustratedPage />} />
      <Route path="/educ-resources" element={<ResourcesPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
