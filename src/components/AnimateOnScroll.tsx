'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}

export default function AnimateOnScroll({ 
  children, 
  className = '',
  delay = 0,
  duration = 0.6,
  y = 50,
  once = true
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once,
    margin: '-100px 0px -100px 0px'
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: y,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
