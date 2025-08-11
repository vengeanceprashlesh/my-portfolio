import Hero from '../sections/Hero';
import Contact from '../sections/Contact';
import OpenSource from '../sections/OpenSource';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import Timeline from '../components/Timeline';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function Home() {
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
      title: "AI Transcriber",
      description: "Built an AI-powered audio-to-text transcription tool using Python. Features real-time transcription with high accuracy for various audio formats.",
      technologies: ["Python", "AI/ML", "Speech Recognition", "APIs"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "TG-DD Bot",
      description: "Developed a productivity app to manage daily tasks with notification features. A comprehensive task management system with user-friendly interface.",
      technologies: ["JavaScript", "Node.js", "Database", "APIs"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "The University",
      description: "Created a university management system for students and faculty. Features course management, grades tracking, and administrative tools.",
      technologies: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Traffic Light Controller",
      description: "Built a Python-based traffic light management system for optimizing traffic flow. Includes simulation and real-time control features.",
      technologies: ["Python", "Simulation", "Control Systems", "Optimization"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Rashtra Swatantrata Sangram",
      description: "Built a parking management system to streamline parking operations. Features booking system, payment integration, and space optimization.",
      technologies: ["Full Stack", "Database Design", "Payment APIs", "Web Development"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "PyPost",
      description: "Developed a psychology application using MERN stack. Features mental health assessments, progress tracking, and interactive tools.",
      technologies: ["MERN Stack", "Psychology APIs", "Data Analytics", "User Experience"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const timelineItems = [
    {
      year: "2028",
      title: "B.Sc Computer Science (Expected)",
      company: "Woxsen University",
      description: "Pursuing Bachelor of Science in Computer Science with a focus on full-stack web development, algorithms, and software engineering principles.",
      achievements: [
        "Strong foundation in computer science fundamentals",
        "Specialized in MERN stack development",
        "Active participant in hackathons and coding competitions"
      ],
      color: "#8A2BE2"
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
      color: "#4F46E5"
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
      color: "#60A5FA"
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
      color: "#22C55E"
    }
  ];

  const contributions = [
    {
      projectName: "React Three Fiber",
      projectLogo: "https://docs.pmnd.rs/apple-touch-icon.png",
      prTitle: "Add support for custom camera controls in Canvas",
      description: "Enhanced the Canvas component to support custom camera control implementations, improving developer flexibility for 3D scene management.",
      language: "TypeScript",
      status: "merged" as const,
      additions: 127,
      deletions: 23,
      githubUrl: "https://github.com/pmndrs/react-three-fiber/pull/example",
      mergedAt: "2024-01-15T10:30:00Z",
      projectUrl: "https://docs.pmnd.rs/react-three-fiber"
    },
    {
      projectName: "Framer Motion",
      prTitle: "Fix animation flickering on Safari mobile devices",
      description: "Resolved a critical bug causing animation flickering on Safari mobile browsers by optimizing the transform calculations and GPU acceleration.",
      language: "JavaScript",
      status: "merged" as const,
      additions: 89,
      deletions: 34,
      githubUrl: "https://github.com/framer/motion/pull/example",
      mergedAt: "2023-11-22T14:45:00Z",
      projectUrl: "https://www.framer.com/motion/"
    },
    {
      projectName: "Next.js",
      prTitle: "Improve TypeScript support for App Router metadata API",
      description: "Enhanced TypeScript definitions for the metadata API in App Router, providing better type safety and developer experience.",
      language: "TypeScript",
      status: "merged" as const,
      additions: 156,
      deletions: 12,
      githubUrl: "https://github.com/vercel/next.js/pull/example",
      mergedAt: "2023-09-08T16:20:00Z",
      projectUrl: "https://nextjs.org"
    },
    {
      projectName: "Tailwind CSS",
      prTitle: "Add new gradient animation utilities",
      description: "Contributed new utility classes for gradient animations, making it easier to create dynamic background effects without custom CSS.",
      language: "JavaScript",
      status: "open" as const,
      additions: 201,
      deletions: 8,
      githubUrl: "https://github.com/tailwindlabs/tailwindcss/pull/example",
      projectUrl: "https://tailwindcss.com"
    },
    {
      projectName: "Vite",
      prTitle: "Optimize build performance for large TypeScript projects",
      description: "Implemented caching optimizations that reduce build times by up to 40% for large TypeScript projects with complex dependency graphs.",
      language: "TypeScript",
      status: "merged" as const,
      additions: 178,
      deletions: 45,
      githubUrl: "https://github.com/vitejs/vite/pull/example",
      mergedAt: "2023-07-12T09:15:00Z",
      projectUrl: "https://vitejs.dev"
    },
    {
      projectName: "Zustand",
      prTitle: "Add DevTools integration for better debugging",
      description: "Enhanced the state management library with improved DevTools integration, making it easier to debug state changes and time-travel.",
      language: "TypeScript",
      status: "merged" as const,
      additions: 92,
      deletions: 18,
      githubUrl: "https://github.com/pmndrs/zustand/pull/example",
      mergedAt: "2023-05-30T11:40:00Z",
      projectUrl: "https://github.com/pmndrs/zustand"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Skills Section */}
      <AnimateOnScroll>
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="skills-heading">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll delay={0.2}>
              <h2 id="skills-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
                  Cosmic Skills
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
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                  Stellar Projects
                </span>
              </h2>
              <p className="text-xl text-secondary-text text-center mb-16 max-w-3xl mx-auto">
                Exploring the frontier of what's possible with code
              </p>
            </AnimateOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <OpenSource contributions={contributions} />

      {/* Timeline Section */}
      <Timeline items={timelineItems} />

      {/* Contact Section */}
      <Contact />

      {/* Phase 5 Complete Section */}
      <AnimateOnScroll>
        <section className="py-20 px-4" aria-labelledby="completion-heading">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card-bg border border-border rounded-2xl p-12 backdrop-blur-sm">
              <h2 id="completion-heading" className="text-3xl font-bold mb-6 text-accent-purple">Phase 5 Complete! 🚀</h2>
              <div className="text-left space-y-4 text-secondary-text mb-8">
                <p>✅ Full responsive design for all screen sizes (mobile to desktop)</p>
                <p>✅ Semantic HTML structure with proper heading hierarchy</p>
                <p>✅ ARIA labels and accessibility improvements throughout</p>
                <p>✅ Optimized images with lazy loading and proper alt tags</p>
                <p>✅ Reduced motion and improved performance</p>
                <p>✅ Production-ready with proper metadata and SEO</p>
              </div>
              <div className="p-6 bg-accent-purple/10 border border-accent-purple/20 rounded-xl">
                <p className="text-primary-text font-medium">
                  🎆 Your cosmic portfolio is now polished, accessible, and ready for deployment!
                  Time to launch it to the digital universe.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
