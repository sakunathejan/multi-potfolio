import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SKYREK Project Website',
    description: '🎧 KV Audio – Audio Equipment Rental Website\nA fully responsive website built for KV Audio, an audio product rental service, under the SKYREK Project. Designed with a focus on user experience and functionality, this platform enables customers to browse, rent, and manage audio equipment seamlessly. Features include real-time updates, an intuitive booking system, and admin management tools for smooth operations and team collaboration.',
    tech: ['MERN Stack', 'MongoDB', 'Express.js', 'Node.js', 'React.js', 'Tailwind CSS'],
    link: 'https://github.com/sakunathejan/kv-audio-frontend.git',
    demo: 'https://kv-audio.netlify.app/',
    icon: '🎧',
    color: 'from-indigo-500 to-blue-400',
  },
  
];

const cardContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};
const cardItem = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={cardContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 flex flex-col justify-between border border-gray-200 dark:border-gray-800 transition-transform`}
            variants={cardItem}
            whileHover={{ scale: 1.04, rotateY: 4, boxShadow: '0 8px 32px rgba(99,102,241,0.15)' }}
            style={{ perspective: 800, transformStyle: 'preserve-3d' }}
          >
            {/* Accent Bar & Icon */}
            <div className={`absolute left-0 top-0 h-full w-2 rounded-l-2xl bg-gradient-to-b ${project.color}`}></div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{project.icon}</span>
              <span className="font-bold text-lg text-indigo-700 dark:text-indigo-300">{project.title}</span>
            </div>
            <div className="text-gray-700 dark:text-gray-200 whitespace-pre-line mb-4">{project.description}</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <motion.span
                  key={t}
                  className="px-3 py-1 bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-100 rounded-full text-xs font-medium shadow hover:scale-110 transition"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <a
                href={project.link}
                className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline hover:text-indigo-800 dark:hover:text-indigo-200 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
              <a
                href={project.demo}
                className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline hover:text-indigo-800 dark:hover:text-indigo-200 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 