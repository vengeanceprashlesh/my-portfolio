'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto text-center space-y-8 sm:space-y-12">
        
        {/* Profile Picture */}
        <AnimateOnScroll delay={0.2}>
          <div className="relative mx-auto mb-8 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
            {/* Clean white border like reference */}
            <div className="w-full h-full rounded-full bg-white p-1 shadow-lg">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/my pic.jpg"
                  alt="Prashlesh Pratap Singh - Full Stack Developer"
                  fill
                  className="object-cover object-top translate-y-4"
                  priority
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        
        {/* Main Heading */}
        <AnimateOnScroll delay={0.4}>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple bg-clip-text text-transparent">
              Prashlesh
            </span>
            <br />
            <span className="text-primary-text">Pratap Singh</span>
          </motion.h1>
        </AnimateOnScroll>

        {/* Subtitle */}
        <AnimateOnScroll delay={0.6}>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary-text max-w-4xl mx-auto leading-relaxed px-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-accent-purple font-semibold">Full Stack Developer</span> | Student | 
            <span className="text-accent-blue font-semibold">MERN Stack Expert</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">Building innovative web applications with modern technologies</span>
          </motion.p>
        </AnimateOnScroll>

        {/* CTA Buttons */}
        <AnimateOnScroll delay={0.8}>
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12 mb-16" aria-label="Main navigation">
            <motion.a
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold rounded-xl shadow-lg text-sm sm:text-base inline-flex items-center justify-center text-decoration-none"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(138, 43, 226, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label="Navigate to projects section"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              <span className="flex items-center justify-center gap-2">
                Explore Projects <span className="text-lg" aria-hidden="true">🌟</span>
              </span>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent-purple text-accent-purple font-semibold rounded-xl hover:bg-accent-purple hover:text-white transition-colors duration-300 text-sm sm:text-base inline-flex items-center justify-center text-decoration-none"
              whileHover={{ 
                scale: 1.05,
                borderColor: "#4F46E5"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label="Navigate to contact section"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              <span className="flex items-center justify-center gap-2">
                Contact Me <span className="text-lg" aria-hidden="true">💫</span>
              </span>
            </motion.a>
          </nav>
        </AnimateOnScroll>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-20"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            >
              {['⭐', '✨', '💫', '🌟', '🌠'][i]}
            </motion.div>
          ))}
        </div>

      </div>
      
      {/* Scroll Indicator - Outside main container */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <AnimateOnScroll delay={1.0}>
          <motion.div
            className="flex flex-col items-center space-y-2 text-secondary-text"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-accent-purple rounded-full flex justify-center"
              whileHover={{ borderColor: "#4F46E5" }}
            >
              <motion.div
                className="w-1 h-3 bg-accent-purple rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
