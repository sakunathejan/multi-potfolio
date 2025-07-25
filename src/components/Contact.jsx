import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const socials = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/sakuna-thejan-bb159a282', icon: (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
  ) },
  { name: 'Email', url: 'mailto:sakunathejan@gmail.com', icon: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0l-4 4-4-4"/></svg>
  ) },
  { name: 'Phone', url: 'tel:+94766171234', icon: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
  ) },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false); // Optional: for loading state
  const formRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSending(true); // Optional: show loading state

    // Replace these with your actual EmailJS values
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(
        (result) => {
          setSending(false);
          setSubmitted(true);
          setForm({ name: '', email: '', message: '' }); // Clear form fields
          setTimeout(() => setSubmitted(false), 2500); // Revert after 2.5s
        },
        (error) => {
          setSending(false);
          alert('Failed to send message. Please try again.');
          console.error('EmailJS error:', error); // <-- Add this line
        }
      );
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
    >
      <motion.div
        className="w-full max-w-md bg-gradient-to-br from-purple-200 to-purple-400 dark:from-purple-900 dark:to-purple-700 rounded-2xl shadow-xl p-6 flex flex-col items-center mb-6"
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.7, type: 'spring', stiffness: 120 }}
      >
        <h2 className="text-2xl font-bold mb-2 text-center text-purple-800 dark:text-purple-200">Contact Me</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-200 text-center max-w-xs">
          Feel free to reach out for collaborations, questions, or just to say hello!
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full space-y-4"
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
            whileFocus={{ scale: 1.03 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
            whileFocus={{ scale: 1.03 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows={4}
            required
            whileFocus={{ scale: 1.03 }}
          />
          <motion.button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white font-bold rounded shadow hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 transition text-lg relative overflow-hidden"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            disabled={sending} // Optional: disable while sending
          >
            {sending ? (
              <span>Sending...</span>
            ) : submitted ? (
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="inline-block"
              >
                Thank you!
              </motion.span>
            ) : 'Send Message'}
            {/* Ripple effect */}
            <motion.span
              className="absolute inset-0 rounded"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.15, scale: 1.2 }}
              transition={{ duration: 0.4 }}
              style={{ background: 'radial-gradient(circle, #a78bfa 40%, transparent 70%)' }}
            />
          </motion.button>
        </form>
      </motion.div>
      {/* Social Icons & Contact Details */}
      <motion.div
        className="flex flex-col items-center gap-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="flex gap-8">
          {socials.map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
              aria-label={social.name}
              whileHover={{ y: -6, scale: 1.18, rotate: [0, 8, -8, 0] }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <div className="text-center text-gray-700 dark:text-gray-300 mt-2">
          <div>Email: <a href="mailto:sakunathejan@gmail.com" className="underline hover:text-purple-600">sakunathejan@gmail.com</a></div>
          <div>Phone: <a href="tel:+94766171234" className="underline hover:text-purple-600">+94 76 617 1234</a></div>
        </div>
      </motion.div>
    </motion.div>
  );
} 