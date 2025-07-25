import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';

export default function Header({ sections, onNav }) {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
      className="fixed w-full z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-bold text-xl tracking-tight">Sakuna Thejan</span>
        <div className="flex items-center gap-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onNav(section.id)}
              className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition font-medium"
            >
              {section.label}
            </button>
          ))}
          <motion.button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            whileTap={{ scale: 0.85, rotate: 20 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {darkMode ? (
              <motion.svg
                key="moon"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </motion.svg>
            ) : (
              <motion.svg
                key="sun"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </motion.svg>
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
} 