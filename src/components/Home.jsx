import React from 'react';
import { motion } from 'framer-motion';

const typingText = "Hi, I'm Sakuna Thejan – Undergraduate Software Engineering Student";

export default function Home() {
  // Typing effect using Framer Motion
  const [displayed, setDisplayed] = React.useState('');
  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(typingText.slice(0, i + 1));
      i++;
      if (i === typingText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 w-full">
      {/* Profile Photo */}
      <motion.img
        src="https://media.licdn.com/dms/image/v2/D5635AQEN35mRKNFnpQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736141014937?e=1754053200&v=beta&t=-jgWH5N5r6NqZ86RVvH3KQZ4rDtzcmfAZJ-vqANZobg" // Replace with your own photo URL
        alt="Sakuna Thejan profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg border-4 border-primary-500 object-cover"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, delay: 0.3 }}
      />
      {/* Bio and Branding */}
      <div className="text-center md:text-left flex-1">
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold mb-2 tracking-tight min-h-[3.5rem] md:min-h-[4.5rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <span className="inline-block border-r-2 border-primary-600 pr-1 animate-pulse">{displayed}</span>
        </motion.h1>
        <motion.p
          className="max-w-xl text-gray-600 dark:text-gray-300 mb-4 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          Based in Panadura, Sri Lanka. Passionate about MERN stack, web development, and solving real-world problems with a growth mindset.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <motion.a
            href="#projects"
            className="inline-block px-6 py-2 bg-primary-600 text-white font-bold rounded shadow hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-block px-6 py-2 bg-white dark:bg-gray-900 border border-primary-600 dark:border-primary-400 text-primary-700 dark:text-primary-300 font-bold rounded shadow hover:bg-primary-50 dark:hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>
    </div>
  );
} 