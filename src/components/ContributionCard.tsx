'use client';

import { motion } from 'framer-motion';

interface ContributionCardProps {
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

export default function ContributionCard({
  projectName,
  projectLogo,
  prTitle,
  description,
  language,
  status,
  additions,
  deletions,
  githubUrl,
  mergedAt,
  projectUrl
}: ContributionCardProps) {
  const statusConfig = {
    merged: { color: '#22C55E', icon: '✅', text: 'Merged' },
    open: { color: '#3B82F6', icon: '🔄', text: 'Open' },
    closed: { color: '#EF4444', icon: '❌', text: 'Closed' }
  };

  const languageColors: Record<string, string> = {
    JavaScript: '#F7DF1E',
    TypeScript: '#3178C6',
    Python: '#3776AB',
    React: '#61DAFB',
    Vue: '#4FC08D',
    Angular: '#DD0031',
    Node: '#339933',
    Go: '#00ADD8',
    Rust: '#000000',
    Java: '#ED8B00'
  };

  return (
    <motion.div
      className="bg-card-bg border border-border rounded-xl overflow-hidden backdrop-blur-sm relative group cursor-pointer h-full"
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(138, 43, 226, 0.2)",
        borderColor: statusConfig[status].color
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Status Badge */}
      <motion.div
        className="absolute top-4 right-4 z-20"
        whileHover={{ scale: 1.1 }}
      >
        <div 
          className="px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
          style={{ 
            backgroundColor: `${statusConfig[status].color}20`,
            color: statusConfig[status].color,
            border: `1px solid ${statusConfig[status].color}40`
          }}
        >
          <span>{statusConfig[status].icon}</span>
          {statusConfig[status].text}
        </div>
      </motion.div>

      {/* Header */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-4 mb-4">
          {/* Project Logo */}
          <motion.div
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {projectLogo ? (
              <img 
                src={projectLogo} 
                alt={`${projectName} logo`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <span className="text-2xl" aria-label="Project package icon">📦</span>
            )}
          </motion.div>

          {/* Project Info */}
          <div className="flex-1 min-w-0">
            <motion.h3
              className="text-lg font-bold text-primary-text truncate"
              whileHover={{ color: statusConfig[status].color }}
              transition={{ duration: 0.3 }}
            >
              {projectName}
            </motion.h3>
            <div className="flex items-center gap-2 mt-1">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: languageColors[language] || '#6B7280' }}
              />
              <span className="text-sm text-secondary-text">{language}</span>
            </div>
          </div>
        </div>

        {/* PR Title */}
        <motion.h4
          className="text-primary-text font-semibold leading-tight mb-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {prTitle}
        </motion.h4>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-secondary-text text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4">
          <motion.div 
            className="flex items-center gap-1 text-xs"
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-green-400 font-medium">+{additions}</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-1 text-xs"
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-2 h-2 bg-red-400 rounded-full"></span>
            <span className="text-red-400 font-medium">-{deletions}</span>
          </motion.div>
          {mergedAt && (
            <div className="text-xs text-secondary-text ml-auto">
              Merged {new Date(mergedAt).toLocaleDateString()}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-accent-purple text-white text-sm font-medium rounded-lg text-center flex items-center justify-center gap-2"
            whileHover={{ 
              backgroundColor: "#4F46E5",
              boxShadow: "0 4px 15px rgba(138, 43, 226, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <span>🔗</span>
            View PR
          </motion.a>
          
          {projectUrl && (
            <motion.a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-accent-purple text-accent-purple text-sm font-medium rounded-lg flex items-center justify-center"
              whileHover={{ 
                backgroundColor: "#8A2BE2",
                color: "#ffffff",
                borderColor: "#8A2BE2"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              📋
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ opacity: 0 }}
      />

      {/* Floating Particles on Hover */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
            style={{
              backgroundColor: statusConfig[status].color,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.8, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
