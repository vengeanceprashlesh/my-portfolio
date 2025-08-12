'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  codeUrl?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  imageUrl, 
  demoUrl, 
  codeUrl 
}: ProjectCardProps) {
  return (
    <motion.div
      className="bg-card-bg border border-border rounded-xl overflow-hidden backdrop-blur-sm relative group cursor-pointer"
      whileHover={{ 
        y: -15, 
        scale: 1.03,
        rotateX: 5,
        boxShadow: "0 25px 50px rgba(138, 43, 226, 0.3)"
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ perspective: "1000px" }}
      onClick={() => {
        if (codeUrl && codeUrl !== '#') {
          window.open(codeUrl, '_blank');
        }
      }}
    >
      {/* GitHub Link Indicator */}
      {codeUrl && codeUrl !== '#' && (
        <div className="absolute top-3 right-3 z-20 bg-accent-purple/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-sm font-medium">🐙 GitHub</span>
        </div>
      )}
      
      {/* Click to view indicator */}
      <div className="absolute top-3 left-3 z-20 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-xs font-medium">Click to view →</span>
      </div>

      {/* Image/Preview Section */}
      <div className="relative h-48 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 overflow-hidden">
        {imageUrl ? (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              className={title === "Evolve" || title === "Airport Guide" || title === "Emotions Detector" || title === "Wealthara" ? "object-contain" : "object-cover"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        ) : (
          <motion.div 
            className="w-full h-full flex items-center justify-center text-6xl"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            💫
          </motion.div>
        )}
        
        {/* Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center pb-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-3">
            {demoUrl && (
              <motion.button
                className="px-4 py-2 bg-accent-purple text-white text-sm rounded-lg font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "#4F46E5" }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(demoUrl, '_blank');
                }}
              >
                Live Demo
              </motion.button>
            )}
            {codeUrl && (
              <motion.button
                className="px-4 py-2 border border-accent-purple text-accent-purple text-sm rounded-lg font-medium"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#8A2BE2",
                  color: "#ffffff"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(codeUrl, '_blank');
                }}
              >
                Code
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6">
        <motion.h3
          className="text-lg sm:text-xl font-bold mb-3 text-primary-text"
          whileHover={{ 
            color: "#8A2BE2",
            x: 5
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-secondary-text text-xs sm:text-sm mb-4 leading-relaxed"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-accent-purple/20 text-accent-purple text-xs rounded-full font-medium border border-accent-purple/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.3,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(138, 43, 226, 0.3)",
                borderColor: "#8A2BE2"
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Animated Border Gradient */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-xl"
        style={{
          background: "linear-gradient(45deg, #8A2BE2, #4F46E5) border-box",
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "subtract"
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-blue/50 rounded-full opacity-0 group-hover:opacity-100"
            style={{
              left: `${10 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
