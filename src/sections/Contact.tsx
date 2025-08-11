'use client';

import { motion } from 'framer-motion';
import AnimateOnScroll from '../components/AnimateOnScroll';
import Globe from '../components/Globe';

export default function Contact() {
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "iamprashlesh@gmail.com",
      href: "mailto:iamprashlesh@gmail.com",
      color: "#8A2BE2"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/prashlesh-pratap-singh",
      href: "https://linkedin.com/in/prashlesh-pratap-singh",
      color: "#4F46E5"
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/prashlesh",
      href: "https://github.com/prashlesh",
      color: "#60A5FA"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 9918190536",
      href: "tel:+919918190536",
      color: "#22C55E"
    },
    {
      icon: "🌍",
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
      color: "#F59E0B"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start xl:items-center">
          {/* Contact Information */}
          <AnimateOnScroll delay={0.2}>
            <div className="space-y-8">
              <motion.div
                className="bg-card-bg border border-border rounded-2xl p-8 backdrop-blur-sm"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(138, 43, 226, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-primary-text">
                  Let&apos;s Start a Conversation
                </h3>
                <p className="text-secondary-text mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I&apos;m always excited to connect with fellow cosmic explorers.
                </p>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <AnimateOnScroll key={method.label} delay={0.4 + index * 0.1}>
                      <motion.a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center group cursor-pointer"
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="text-3xl mr-4"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: [0, -10, 10, 0]
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {method.icon}
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className="text-sm font-medium text-secondary-text">
                            {method.label}
                          </div>
                          <motion.div
                            className="text-primary-text font-medium"
                            whileHover={{ color: method.color }}
                            transition={{ duration: 0.3 }}
                          >
                            {method.value}
                          </motion.div>
                        </div>

                        <motion.div
                          className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ backgroundColor: method.color }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                        />
                      </motion.a>
                    </AnimateOnScroll>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats */}
              <AnimateOnScroll delay={0.6}>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { number: "50+", label: "Projects" },
                    { number: "3+", label: "Years Exp" },
                    { number: "∞", label: "Possibilities" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="bg-card-bg border border-border rounded-xl p-4 text-center backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: index === 0 ? "#8A2BE2" : index === 1 ? "#4F46E5" : "#60A5FA"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="text-2xl font-bold text-primary-text mb-1"
                        whileHover={{ 
                          color: index === 0 ? "#8A2BE2" : index === 1 ? "#4F46E5" : "#60A5FA"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-xs text-secondary-text font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>

          {/* Interactive Globe */}
          <AnimateOnScroll delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <Globe />
            </motion.div>
          </AnimateOnScroll>
        </div>

      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-purple/40 rounded-full"
            style={{
              left: `${5 + (i * 7)}%`,
              top: `${10 + (i * 6)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
}
