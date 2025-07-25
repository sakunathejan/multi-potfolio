import React from 'react';
import { motion } from 'framer-motion';

const projects = [
//   {
//     title: 'Sakuraa Products Website',
//     description: 'A modern e-commerce platform for Sakuraa Products, featuring a responsive UI and secure checkout.',
//     tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
//     link: 'https://github.com/sakunathejan/sakuraa-products',
//     demo: 'https://sakuraa-products-demo.com',
//   },
  {
    title: 'SKYREK Project Website',
    description: '🎧 KV Audio – Audio Equipment Rental Website A fully responsive website built for KV Audio, an audio product rental service, under the SKYREK Project. Designed with a focus on user experience and functionality, this platform enables customers to browse, rent, and manage audio equipment seamlessly. Features include real-time updates, an intuitive booking system, and admin management tools for smooth operations and team collaboration.',
    tech: ['MERN Stack', 'MongoDB', 'Express.js', 'Node.js', 'React.js', 'Tailwind CSS'],
    link: 'https://github.com/sakunathejan/kv-audio-frontend.git',
    demo: 'https://kv-audio.netlify.app/',
  },
];

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col justify-between transition hover:scale-105 hover:shadow-lg duration-300 border border-transparent hover:border-primary-400 dark:hover:border-primary-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(59,130,246,0.15)' }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary-700 dark:text-primary-300">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-100 rounded-full text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-auto">
              <a
                href={project.link}
                className="text-primary-600 dark:text-primary-400 font-bold hover:underline hover:text-primary-700 dark:hover:text-primary-300 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
              <a
                href={project.demo}
                className="text-primary-600 dark:text-primary-400 font-bold hover:underline hover:text-primary-700 dark:hover:text-primary-300 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 