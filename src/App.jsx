import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import ModulePage from './pages/ModulePage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-mystical-50 via-white to-primary-50">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/module/:moduleId" element={<ModulePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;