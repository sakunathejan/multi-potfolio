import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { year: '2021', label: 'NIBM', desc: 'Diploma in Software Engineering – Built a strong foundation in programming and problem-solving.' },
  { year: '2022', label: 'ANC Education', desc: 'Advanced Diploma in Software Engineering – Expanded knowledge in web development and real-world projects.' },
  { year: '2023', label: 'SKYREK', desc: 'MERN Stack Certification – Specialized in full-stack JavaScript development.' },
];

const techs = ['C', 'C#', 'Java', 'C++', 'HTML', 'CSS', 'JavaScript', 'PHP', 'MERN Stack'];

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      {/* Brief Story */}
      <motion.p
        className="mb-6 text-gray-700 dark:text-gray-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        I’m Sakuna Thejan, an undergraduate Software Engineering student based in Panadura, Sri Lanka. I’m passionate about solving real-world problems, have a growth mindset, and love building modern web applications. My journey has taken me from foundational programming to advanced MERN stack development, always striving to learn and grow as a developer.
      </motion.p>
      {/* Skills & Technologies Intro */}
      <motion.p
        className="mb-2 text-primary-700 dark:text-primary-300 font-semibold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-lg">Skills &amp; Technologies:</span> 
      </motion.p>
      {/* Skills */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-100 rounded-full text-sm font-medium shadow hover:scale-105 transition"
              whileHover={{ scale: 1.12 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
      {/* Education Timeline */}
      <div className="relative pl-6 border-l-2 border-primary-400 dark:border-primary-600">
        {timeline.map((item, idx) => (
          <motion.div
            key={item.year + item.label}
            className="mb-8 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <div className="absolute -left-3 top-1 w-6 h-6 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 shadow"></div>
            <div className="ml-6">
              <div className="font-bold text-primary-700 dark:text-primary-300">{item.year}</div>
              <div className="font-semibold">{item.label}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 