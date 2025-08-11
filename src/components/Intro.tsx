'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// The list of international greetings to cycle through
const greetings = ["Ciao", "Hallo", "Olá", "Konnichiwa", "Hello"];

export default function Intro() {
  // State to keep track of the current word's index
  const [index, setIndex] = useState(0);

  // This useEffect hook will run once, setting up the interval
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the index, and loop back to 0 if it reaches the end
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 800); // Change word every 0.8 seconds (800ms)

    // A cleanup function to clear the interval when the component is removed
    return () => clearInterval(interval);
  }, []); // The empty array [] means this effect runs only on mount

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      {/* AnimatePresence handles the exit animation when the key changes */}
      <AnimatePresence mode="wait">
        <motion.h1
          // The 'key' is the most important part!
          // It tells React & Framer Motion to treat each word as a new element.
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-5xl font-medium flex items-center gap-4"
        >
          <span className="text-4xl">•</span>
          {greetings[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
