'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../sections/Hero';
import Contact from '../sections/Contact';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import Timeline from '../components/Timeline';
import AnimateOnScroll from '../components/AnimateOnScroll';
import Intro from '../components/Intro';

export default function Home() {
  // State to control the visibility of the entire intro screen
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Total duration for the intro animation
    // (0.8 seconds per word) * (5 words) = 4 seconds
    const totalDuration = 4000;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, []);
  const skills = [
    {
      title: "MERN Stack Development",
      description: "Full-stack web development using MongoDB, Express.js, React, and Node.js",
      icon: "⚛️",
      level: 90
    },
    {
      title: "Python & JavaScript",
      description: "Programming with Python for backend development and JavaScript for web applications",
      icon: "🐍",
      level: 85
    },
    {
      title: "Database & APIs",
      description: "Working with databases like MongoDB and building RESTful APIs",
      icon: "🗄️",
      level: 80
    },
    {
      title: "Problem Solving",
      description: "Analytical thinking and technical problem-solving skills",
      icon: "🧠",
      level: 88
    },
    {
      title: "Version Control",
      description: "Git and GitHub for collaborative development and project management",
      icon: "🔧",
      level: 85
    },
    {
      title: "Web Technologies",
      description: "HTML, CSS, JavaScript and modern web development frameworks",
      icon: "🌐",
      level: 90
    }
  ];

  const projects = [
    {
      title: "Evolve",
      description: "Transform your learning experience with AI-powered personalized education. Master university subjects through project-based learning, visual diagrams, and interactive problem-solving with advanced learning analytics.",
      technologies: ["MERN Stack", "AI Integration", "React", "Node.js", "Educational Technology"],
      imageUrl: "/images/evolve.png",
      demoUrl: "https://evolve-xi.vercel.app/",
      codeUrl: "https://github.com/vengeanceprashlesh/evolve"
    },
    {
      title: "Airport Guide",
      description: "A comprehensive airport navigation and information system. Features interactive terminal maps, flight information, gate details, and practical guides to help travelers navigate airports efficiently and find essential services.",
      technologies: ["Web Development", "Interactive Maps", "Travel Tech", "User Experience"],
      imageUrl: "/images/airport.png",
      demoUrl: "https://firstprashlesh.vercel.app",
      codeUrl: "https://github.com/vengeanceprashlesh/Terminal-Guide"
    },
    {
      title: "Emotions Detector",
      description: "An advanced emotion detection system that analyzes facial expressions and emotions in real-time. Features machine learning algorithms, computer vision, and mobile-responsive design to identify and classify various emotional states with high accuracy.",
      technologies: ["Machine Learning", "Computer Vision", "Mobile Development", "AI/ML"],
      imageUrl: "/images/emotiondetector.png",
      demoUrl: "#",
      codeUrl: "https://github.com/vengeanceprashlesh/prashlesh-mobile-glow"
    },
    {
      title: "Wealthara",
      description: "A comprehensive wealth management and financial planning platform. Features investment tracking, portfolio analysis, financial goal setting, and personalized investment recommendations with advanced analytics and market insights.",
      technologies: ["FinTech", "Financial Analytics", "Investment Tracking", "Wealth Management"],
      imageUrl: "/images/wealthera.png",
      demoUrl: "#",
      codeUrl: "https://github.com/vengeanceprashlesh/wealthara"
    }
  ];

  const timelineItems = [
    {
      year: "2025",
      title: "B.tech in Computer Science(Core)",
      company: "Woxsen University",
      description: "Pursuing Bachelor of Science in Computer Science with a focus on full-stack web development, algorithms, and software engineering principles.",
      achievements: [
        "Strong foundation in computer science fundamentals",
        "Specialized in MERN stack development",
        "Active participant in hackathons and coding competitions"
      ],
      color: "#8A2BE2",
      icon: "🎓"
    },
    {
      year: "2024",
      title: "Full Stack Developer Journey",
      company: "Personal Development",
      description: "Intensive learning and development phase focusing on modern web technologies. Built multiple projects using MERN stack and Python.",
      achievements: [
        "Mastered MERN stack (MongoDB, Express.js, React, Node.js)",
        "Developed AI-powered transcription tool",
        "Created university management system"
      ],
      color: "#4F46E5",
      icon: "💻"
    },
    {
      year: "2023",
      title: "Project Development Phase",
      company: "Self-Learning & Building",
      description: "Focused on practical application of programming skills through real-world projects. Enhanced problem-solving abilities and technical expertise.",
      achievements: [
        "Built traffic light controller system in Python",
        "Developed parking management application",
        "Created productivity and task management tools"
      ],
      color: "#60A5FA",
      icon: "🚀"
    },
    {
      year: "2022",
      title: "Foundation Building",
      company: "Learning Phase",
      description: "Started the journey in computer science and programming. Built strong foundation in programming languages and development concepts.",
      achievements: [
        "Learned Python and JavaScript fundamentals",
        "Started with HTML, CSS, and web development",
        "Participated in hackathons and tech events"
      ],
      color: "#22C55E",
      icon: "🌱"
    }
  ];


  return (
    <main>
      <AnimatePresence>
        {isLoading && (
          // This motion.div will handle the final fade-out of the whole screen
          <motion.div
            key="intro-screen"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <Intro />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Your actual page content goes here */}
      {!isLoading && (
        <>
          {/* Hero Section */}
          <Hero />
          
          {/* About Me Section */}
          <AnimateOnScroll>
            <section className="py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <AnimateOnScroll delay={0.2}>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
                      My Philosophy
                    </span>
                  </h2>
                  <div className="bg-card-bg border border-border rounded-2xl p-8 backdrop-blur-sm">
                    <p className="text-lg text-primary-text leading-relaxed mb-4">
                      I believe that great technology should feel like magic to users while being built on solid engineering principles. 
                      Every line of code I write is an opportunity to solve real problems and create meaningful experiences.
                    </p>
                    <p className="text-base text-secondary-text leading-relaxed">
                      What drives me most is the moment when an idea transforms from concept to reality—when users interact with 
                      something I&apos;ve built and it genuinely makes their lives better. That&apos;s the intersection of creativity and 
                      logic where I thrive.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </section>
          </AnimateOnScroll>
          
          {/* Skills Section */}
          <AnimateOnScroll>
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="skills-heading">
              <div className="max-w-6xl mx-auto">
                <AnimateOnScroll delay={0.2}>
                  <h2 id="skills-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
                    <span className="bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
                      Skills
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-secondary-text text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-2">
                    Mastering the technologies that power the digital universe
                  </p>
                </AnimateOnScroll>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {skills.map((skill, index) => (
                    <AnimateOnScroll key={skill.title} delay={0.2 * (index + 1)}>
                      <SkillCard {...skill} />
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </section>
          </AnimateOnScroll>

          {/* Projects Section */}
          <AnimateOnScroll>
            <section id="projects" className="py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <AnimateOnScroll delay={0.2}>
                  <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
                    <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                     Projects
                    </span>
                  </h2>
                  <p className="text-xl text-secondary-text text-center mb-16 max-w-3xl mx-auto">
                    Exploring the frontier of what&apos;s possible with code
                  </p>
                </AnimateOnScroll>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-3">
                  {projects.map((project, index) => (
                    <AnimateOnScroll key={project.title} delay={0.2 * (index + 1)}>
                      <ProjectCard {...project} />
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </section>
          </AnimateOnScroll>

          {/* Open Source Section */}
          <AnimateOnScroll>
            <section className="py-20 px-4">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
                  <span className="bg-gradient-to-r from-green-400 to-accent-blue bg-clip-text text-transparent">
                    Open Source Tapestry
                  </span>
                </h2>
                <p className="text-xl text-secondary-text text-center mb-8 max-w-3xl mx-auto">
                  Contributing to the global developer community with code that matters
                </p>
              </div>
            </section>
          </AnimateOnScroll>

          {/* Timeline Section */}
          <Timeline items={timelineItems} />

          {/* Contact Section */}
          <Contact />
        </>
      )}
    </main>
  );
}
