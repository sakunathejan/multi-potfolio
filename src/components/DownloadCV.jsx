import React from 'react';
import { motion } from 'framer-motion';

export default function DownloadCV() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Download My CV</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300 text-center max-w-xl">
        Interested in my background and experience? Download my latest CV to learn more about my skills, education, and projects.
      </p>
      <motion.a
        href="/cv/Sakuna_Thejan_CV.pdf"
        download
        className="inline-block px-8 py-3 bg-primary-600 text-white font-bold rounded shadow hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 text-lg"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
      >
        Download CV (PDF)
      </motion.a>
    </div>
  );
} 