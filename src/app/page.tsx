import Hero from '../sections/Hero';
import Contact from '../sections/Contact';
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
      title: "Neo-University",
      description: "A comprehensive university management system built for students and faculty. Features course management, grade tracking, student enrollment, and administrative tools with a modern interface.",
      technologies: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js"],
      imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop&crop=center",
      demoUrl: "#",
      codeUrl: "https://github.com/vengeanceprashlesh/Neo-University"
    },
    {
      title: "PsyFlow",
      description: "An innovative psychology and mental health application designed to help users track their emotional well-being. Features mood tracking, mental health resources, and personalized insights.",
      technologies: ["Psychology APIs", "Data Analytics", "User Experience", "Mental Health"],
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop&crop=center",
      demoUrl: "#",
      codeUrl: "https://github.com/vengeanceprashlesh/PsyFlow"
    },
    {
      title: "Parkify",
      description: "A smart parking management system that streamlines parking operations. Features real-time space availability, booking system, payment integration, and space optimization algorithms.",
      technologies: ["Full Stack", "Database Design", "Payment APIs", "Real-time Systems"],
      imageUrl: "https://images.unsplash.com/photo-1590674899484-cc90b1ad8a1e?w=500&h=300&fit=crop&crop=center",
      demoUrl: "#",
      codeUrl: "https://github.com/vengeanceprashlesh/Parkify"
    },
    {
      title: "ClarityFlow",
      description: "Mental Health Companion - An interactive emotional introspection and mood regulation app designed for Gen-Z and young adults. Helps with anxiety, stress, and emotional overwhelm through self-discovery.",
      technologies: ["Mental Health Tech", "Emotional AI", "User Psychology", "Wellness Apps"],
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=center",
      demoUrl: "#",
      codeUrl: "https://github.com/vengeanceprashlesh/ClarityFlow"
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

      {/* Timeline Section */}
      <Timeline items={timelineItems} />

      {/* Contact Section */}
      <Contact />
    </>
  );
}
