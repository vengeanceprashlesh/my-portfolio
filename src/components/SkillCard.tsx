'use client';

import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
  level: number; // 1-100
}

export default function SkillCard({ title, description, icon, level }: SkillCardProps) {
  return (
    <motion.div
      className="bg-card-bg border border-border p-6 rounded-xl backdrop-blur-sm relative overflow-hidden group cursor-pointer"
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(138, 43, 226, 0.2)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className="text-4xl mb-4"
          whileHover={{ 
            scale: 1.2,
            rotate: [0, -10, 10, 0]
          }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>

        <motion.h3
          className="text-xl font-semibold mb-2 text-primary-text"
          whileHover={{ color: "#8A2BE2" }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <p className="text-secondary-text text-sm mb-4">
          {description}
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-background rounded-full h-2 mb-2">
          <motion.div
            className="bg-gradient-to-r from-accent-purple to-accent-blue h-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
        
        <motion.span
          className="text-xs text-secondary-text font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          viewport={{ once: true }}
        >
          {level}% Proficiency
        </motion.span>
      </div>

      {/* Floating Particles on Hover */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-purple rounded-full opacity-0 group-hover:opacity-100"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
