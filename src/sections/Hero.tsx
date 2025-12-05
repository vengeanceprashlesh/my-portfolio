'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Professional Profile Picture */}
        <AnimateOnScroll delay={0.2}>
          <div className="relative mx-auto mb-8 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 p-[3px] shadow-xl">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src="/my pic.jpg"
                  alt="Prashlesh Pratap Singh - Full Stack Developer"
                  fill
                  className="object-cover object-top translate-y-4"
                  priority
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
                />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        
        {/* Professional Name Typography */}
        <AnimateOnScroll delay={0.4}>
          <div className="mb-6">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple bg-clip-text text-transparent">
                Prashlesh Pratap Singh
              </span>
            </motion.h1>
            
            {/* Professional Title */}
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl font-medium text-secondary-text mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-accent-purple font-semibold">Full Stack Developer</span>
              <span className="mx-3 text-primary-text/40">•</span>
              <span className="text-accent-blue font-semibold">MERN Stack Specialist</span>
            </motion.div>
          </div>
        </AnimateOnScroll>

        {/* Professional Description */}
        <AnimateOnScroll delay={0.6}>
          <motion.div 
            className="max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-base sm:text-lg text-secondary-text leading-relaxed mb-6">
              Computer Science student passionate about creating innovative web solutions. 
              Specialized in modern JavaScript technologies and dedicated to delivering 
              high-quality, scalable applications.
            </p>
            
            {/* Key Skills Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['React', 'Node.js', 'Python', 'MongoDB', 'JavaScript', 'Express.js'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-card-bg border border-border rounded-full text-sm font-medium text-primary-text hover:border-accent-purple/50 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(138, 43, 226, 0.1)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimateOnScroll>

        {/* Professional CTA Buttons */}
        <AnimateOnScroll delay={0.8}>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="group relative overflow-hidden px-8 py-3 bg-accent-purple text-white font-medium rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="View my portfolio projects"
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
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
                </svg>
                View Portfolio
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-accent-purple/30 text-accent-purple font-medium rounded-lg hover:bg-accent-purple/10 hover:border-accent-purple transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Get in touch with me"
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
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26c.67.36 1.45.36 2.12 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </span>
            </motion.a>
          </motion.div>
        </AnimateOnScroll>


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
