import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    title: 'GCE Ordinary Level (O/L)',
    date: 'Jun 2022',
    place: 'Nakano College, Bandaragama',
    details: 'Achieved 4Cs, 2Bs, 1S, and 2Ws',
  },
  {
    title: 'Certificate in Software Engineering at NIBM',
    date: 'Jul 2022 - Nov 2022',
    place: '',
    details: 'Acquired proficiency in programming languages such as C#',
  },
  {
    title: 'Diploma in Software Engineering',
    date: 'Mar 2023 - Present',
    place: 'National Institute of Business Management (NIBM - Sri Lanka), Colombo',
    details: 'Has around three to four repeats with the final project',
  },
  {
    title: 'Full Stack Web Development with MERN Stack Certificate',
    date: 'Dec 2024 - Present Program',
    place: 'SKYREK',
    details: 'Underway on learning web development using MERN',
  },
];

const techs = ['C', 'C#', 'Java', 'C++', 'HTML', 'CSS', 'JavaScript', 'PHP', 'MERN Stack'];

const badgeContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
const badgeItem = {
  hidden: { opacity: 0, scale: 0.7, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 18 } },
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      {/* Brief Story */}
      <p className="mb-6 text-gray-700 dark:text-gray-200">
        I’m Sakuna Thejan, an undergraduate Software Engineering student based in Panadura, Sri Lanka. I’m passionate about solving real-world problems, have a growth mindset, and love building modern web applications. My journey has taken me from foundational programming to advanced MERN stack development, always striving to learn and grow as a developer.
      </p>
      {/* Education Section */}
      <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-300">Education</h3>
      <div className="mb-8 space-y-6">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.title + edu.date}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, type: 'spring', stiffness: 120 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 border-l-4 border-primary-500"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <span className="font-bold text-primary-700 dark:text-primary-300">{edu.title}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{edu.date}</span>
            </div>
            {edu.place && <div className="text-sm text-gray-700 dark:text-gray-300 mb-1">{edu.place}</div>}
            <div className="text-sm text-gray-600 dark:text-gray-400">{edu.details}</div>
          </motion.div>
        ))}
      </div>
      {/* Skills & Technologies Intro */}
      <p className="mb-2 text-primary-700 dark:text-primary-300 font-semibold">
        <span className="text-lg">Skills &amp; Technologies:</span>
      </p>
      {/* Skills Badges */}
      <motion.div className="mb-8 flex flex-wrap gap-2" variants={badgeContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {/* {techs.map((tech) => (
          <motion.span
            key={tech}
            className="px-3 py-1 bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-100 rounded-full text-sm font-medium shadow hover:scale-105 transition"
            variants={badgeItem}
            whileHover={{ scale: 1.15, rotate: 2 }}
          >
            {tech}
          </motion.span>
        ))} */}
      </motion.div>
      {/* Modern Creative Skills Grid */}
      <motion.div
        className="grid gap-6 md:grid-cols-2 mb-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Programming Languages */}
        <motion.div
          className="rounded-xl bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-700 p-5 shadow-lg flex flex-col gap-2"
          variants={{ hidden: { opacity: 0, scale: 0.9, y: 30 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200 } } }}
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(59,130,246,0.15)' }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-blue-600 dark:text-blue-300 text-xl">&#128187;</span>
            <span className="font-bold text-lg">Programming Languages</span>
          </div>
          <div className="text-gray-700 dark:text-gray-100">C, C#, Java, C++</div>
        </motion.div>
        {/* Web Development */}
        <motion.div
          className="rounded-xl bg-gradient-to-br from-pink-100 to-pink-300 dark:from-pink-900 dark:to-pink-700 p-5 shadow-lg flex flex-col gap-2"
          variants={{ hidden: { opacity: 0, scale: 0.9, y: 30 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200 } } }}
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(236,72,153,0.15)' }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-pink-600 dark:text-pink-300 text-xl">&#128187;</span>
            <span className="font-bold text-lg">Web Development</span>
          </div>
          <div className="text-gray-700 dark:text-gray-100">HTML, CSS, JavaScript, PHP</div>
        </motion.div>
        {/* Frameworks and Tools */}
        <motion.div
          className="rounded-xl bg-gradient-to-br from-green-100 to-green-300 dark:from-green-900 dark:to-green-700 p-5 shadow-lg flex flex-col gap-2"
          variants={{ hidden: { opacity: 0, scale: 0.9, y: 30 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200 } } }}
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(34,197,94,0.15)' }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-green-600 dark:text-green-300 text-xl">&#9881;&#65039;</span>
            <span className="font-bold text-lg">Frameworks &amp; Tools</span>
          </div>
          <div className="text-gray-700 dark:text-gray-100">MERN Stack (MongoDB, Express.js, React.js, Node.js)</div>
        </motion.div>
        {/* Other Skills */}
        <motion.div
          className="rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-yellow-900 dark:to-yellow-700 p-5 shadow-lg flex flex-col gap-2"
          variants={{ hidden: { opacity: 0, scale: 0.9, y: 30 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200 } } }}
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(250,204,21,0.15)' }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-yellow-600 dark:text-yellow-300 text-xl">&#128161;</span>
            <span className="font-bold text-lg">Other Skills</span>
          </div>
          <div className="text-gray-700 dark:text-gray-100">Problem-solving, Adaptability, Analytical Thinking</div>
        </motion.div>
        {/* Linux OS */}
        <motion.div
          className="rounded-xl bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 p-5 shadow-lg flex flex-col gap-2"
          variants={{ hidden: { opacity: 0, scale: 0.9, y: 30 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200 } } }}
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(107,114,128,0.15)' }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-gray-600 dark:text-gray-300 text-xl">&#128187;</span>
            <span className="font-bold text-lg">Linux OS</span>
          </div>
          <div className="text-gray-700 dark:text-gray-100">Has worked using Oracle VM VirtualBox</div>
        </motion.div>
      </motion.div>
    </div>
  );
} 