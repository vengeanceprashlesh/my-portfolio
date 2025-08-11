'use client';

import { motion, useScroll, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  color: string;
  icon: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

function TimelineNode({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Content */}
      <motion.div
        className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-card-bg border border-border rounded-xl p-6 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
          whileHover={{ 
            boxShadow: `0 20px 40px ${item.color}30`,
            borderColor: item.color
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Background Glow */}
          <motion.div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
            style={{ background: `linear-gradient(135deg, ${item.color}20, transparent)` }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              className="text-sm font-medium mb-2"
              style={{ color: item.color }}
              whileHover={{ scale: 1.05 }}
            >
              {item.year}
            </motion.div>
            
            <motion.h3
              className="text-xl font-bold mb-2 text-primary-text"
              whileHover={{ color: item.color }}
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.h3>
            
            <motion.div
              className="text-sm font-medium mb-3 text-secondary-text"
              whileHover={{ opacity: 0.8 }}
            >
              {item.company}
            </motion.div>
            
            <p className="text-secondary-text text-sm mb-4 leading-relaxed">
              {item.description}
            </p>

            {/* Achievements */}
            <div className="space-y-2">
              {item.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  className="flex items-center text-xs text-secondary-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 5, color: item.color }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full mr-3"
                    style={{ backgroundColor: item.color }}
                    whileHover={{ scale: 1.5 }}
                  />
                  {achievement}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Timeline Node */}
      <motion.div
        className="w-2/12 flex justify-center relative"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          className="relative z-20"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Outer Ring */}
          <motion.div
            className="w-16 h-16 rounded-full border-2 flex items-center justify-center backdrop-blur-sm"
            style={{ borderColor: item.color, backgroundColor: `${item.color}10` }}
            whileHover={{ 
              boxShadow: `0 0 30px ${item.color}60`,
              backgroundColor: `${item.color}20`
            }}
            animate={{
              boxShadow: isInView ? `0 0 20px ${item.color}40` : 'none'
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Icon */}
            <motion.div
              className="text-2xl flex items-center justify-center"
              whileHover={{ scale: 1.3, rotate: 360 }}
              animate={isInView ? { 
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0]
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 0.6
              }}
            >
              {item.icon}
            </motion.div>
          </motion.div>

          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: item.color }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={isInView ? {
              scale: [1, 2, 3],
              opacity: [0.6, 0.3, 0]
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.8
            }}
          />
        </motion.div>
      </motion.div>

      {/* Empty Space */}
      <div className="w-5/12" />
    </motion.div>
  );
}

export default function Timeline({ items }: TimelineProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <div ref={containerRef} className="relative py-20">
      <AnimateOnScroll>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple bg-clip-text text-transparent">
              Journey Timeline
            </span>
          </h2>
          <p className="text-xl text-secondary-text max-w-3xl mx-auto">
            The cosmic evolution of skills and experiences across the digital universe
          </p>
        </div>
      </AnimateOnScroll>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Central Timeline Line */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-purple"
          style={{
            scaleY: scrollYProgress,
            transformOrigin: "top",
            height: "100%"
          }}
          initial={{ scaleY: 0 }}
        />

        {/* Timeline Items */}
        <div className="relative z-10">
          {items.map((item, index) => (
            <TimelineNode key={index} item={item} index={index} />
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent-blue/30 rounded-full"
              style={{
                left: `${10 + (i * 10)}%`,
                top: `${20 + (i * 8)}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
