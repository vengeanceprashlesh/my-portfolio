'use client';

import { motion } from 'framer-motion';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ContributionCard from '../components/ContributionCard';

interface Contribution {
  projectName: string;
  projectLogo?: string;
  prTitle: string;
  description: string;
  language: string;
  status: 'merged' | 'open' | 'closed';
  additions: number;
  deletions: number;
  githubUrl: string;
  mergedAt?: string;
  projectUrl?: string;
}

interface OpenSourceProps {
  contributions: Contribution[];
}

export default function OpenSource({ contributions }: OpenSourceProps) {
  const stats = {
    totalContributions: contributions.length,
    mergedPRs: contributions.filter(c => c.status === 'merged').length,
    totalAdditions: contributions.reduce((sum, c) => sum + c.additions, 0),
    totalDeletions: contributions.reduce((sum, c) => sum + c.deletions, 0),
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-6xl">🌟</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-clip-text text-transparent">
                Open Source
              </span>
              <br />
              <span className="text-primary-text">Contributions</span>
            </h2>
            
            <p className="text-xl text-secondary-text max-w-3xl mx-auto">
              Contributing to the cosmic community through open source projects. 
              Every pull request is a step toward making the digital universe better for everyone.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Stats Overview */}
        <AnimateOnScroll delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: 'Total PRs', value: stats.totalContributions, icon: '📝', color: '#8A2BE2' },
              { label: 'Merged', value: stats.mergedPRs, icon: '✅', color: '#22C55E' },
              { label: 'Lines Added', value: `${stats.totalAdditions}+`, icon: '📈', color: '#3B82F6' },
              { label: 'Impact Score', value: '∞', icon: '🚀', color: '#F59E0B' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-card-bg border border-border rounded-xl p-6 text-center backdrop-blur-sm relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: stat.color,
                  boxShadow: `0 10px 30px ${stat.color}30`
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Background Glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: stat.color }}
                />

                <motion.div
                  className="text-3xl mb-3"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.div
                  className="text-2xl md:text-3xl font-bold text-primary-text mb-2"
                  whileHover={{ color: stat.color }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-sm text-secondary-text font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Contribution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contributions.map((contribution, index) => (
            <AnimateOnScroll key={index} delay={0.2 * (index + 1)}>
              <ContributionCard {...contribution} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Call to Action */}
        <AnimateOnScroll delay={0.8}>
          <div className="text-center">
            <motion.div
              className="bg-card-bg border border-border rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
              whileHover={{ 
                boxShadow: "0 20px 40px rgba(138, 43, 226, 0.2)",
                borderColor: "#8A2BE2"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 to-accent-blue/5"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-primary-text">
                  Want to Collaborate?
                </h3>
                <p className="text-secondary-text mb-6 max-w-2xl mx-auto">
                  I&apos;m always looking for exciting open source projects to contribute to. 
                  Let&apos;s build something amazing together and make an impact on the developer community!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold rounded-xl flex items-center gap-3"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(138, 43, 226, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xl">🐙</span>
                    Visit My GitHub
                  </motion.a>

                  <motion.button
                    className="px-8 py-4 border-2 border-accent-purple text-accent-purple font-semibold rounded-xl hover:bg-accent-purple hover:text-white transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "#4F46E5"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl">💬</span>
                      Discuss Ideas
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-blue/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
}
