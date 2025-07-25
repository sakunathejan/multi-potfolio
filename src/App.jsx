import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import DownloadCV from './components/DownloadCV';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'cv', label: 'Download CV' },
  { id: 'contact', label: 'Contact' },
];

function AppContent() {
  const { darkMode } = useTheme();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ backgroundColor: darkMode ? '#111827' : '#fff' }}
      animate={{ backgroundColor: darkMode ? '#111827' : '#fff' }}
      transition={{ duration: 0.5 }}
      className="min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      {/* Header with theme toggle and nav */}
      <Header sections={sections} onNav={handleNav} />
      {/* Main Content */}
      <main className="pt-20 max-w-5xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.section id="home" className="min-h-[80vh] flex items-center justify-center scroll-mt-20" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.7 }}>
            <Home />
          </motion.section>
          <motion.section id="about" className="py-16 scroll-mt-20" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <About />
          </motion.section>
          <motion.section id="projects" className="py-16 scroll-mt-20" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <Projects />
          </motion.section>
          <motion.section id="cv" className="py-16 scroll-mt-20" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.7, delay: 0.25 }}>
            <DownloadCV />
          </motion.section>
          <motion.section id="contact" className="py-16 scroll-mt-20" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <Contact />
          </motion.section>
        </AnimatePresence>
      </main>
      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Sakuna Thejan. All rights reserved.
      </footer>
    </motion.div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
} 