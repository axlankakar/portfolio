import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import useDarkMode from '../hooks/useDarkMode';

const Projects = () => {
  const { isDark } = useDarkMode();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Parallax effect for Projects background
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1200], [0, 240]);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'data', name: 'Data Engineering' },
    { id: 'web', name: 'Web Apps' },
    { id: 'game', name: 'Games' },
    { id: 'research', name: 'Research' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Cloud Chatbot',
      description: 'An intelligent chatbot system leveraging cloud technologies for automated customer support and interactions.',
      image: process.env.PUBLIC_URL + '/cloud.jpg',
      category: 'ai',
      technologies: ['Python', 'Cloud Computing', 'NLP', 'Machine Learning'],
      github: 'https://github.com/axlankakar/CloudChatbot-project'
    },
    {
      id: 2,
      title: 'Real-Time Stock Market Pipeline',
      description: 'A comprehensive data processing pipeline for real-time stock market data analysis and visualization.',
      image: process.env.PUBLIC_URL + '/Datapipeline.png',
      category: 'data',
      technologies: ['Apache Kafka', 'Apache Spark', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/axlankakar/Real-TimeStockMarket_DataProcessingPipeline'
    },
    {
      id: 3,
      title: 'Air Quality Monitoring System',
      description: 'IoT-based air quality monitoring system with real-time data processing and analytics pipeline.',
      image: process.env.PUBLIC_URL + '/datapipeline2.png',
      category: 'data',
      technologies: ['IoT', 'Data Engineering', 'Python', 'Cloud'],
      github: 'https://github.com/axlankakar/AirQualityMonitoringSystem_Dataengineering'
    },
    {
      id: 4,
      title: 'Islamic Banking App',
      description: 'A comprehensive Islamic banking application with Shariah-compliant financial services and transactions.',
      image: process.env.PUBLIC_URL + '/islamic.jpg',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Islamic Finance'],
      github: 'https://github.com/1ordmk/BAnking-App'
    },
    {
      id: 5,
      title: 'Psycho Clinic Management',
      description: 'A clinic management system specialized for psychological healthcare facilities.',
      image: process.env.PUBLIC_URL + '/pyscho.jpg',
      category: 'web',
      technologies: ['Full Stack', 'Healthcare', 'Database', 'UI/UX'],
      github: 'https://github.com/axlankakar/Clinic-management-system'
    },
    {
      id: 6,
      title: 'United Chatbot',
      description: 'An intelligent chatbot system designed to provide seamless customer support and automated responses using advanced NLP techniques.',
      image: process.env.PUBLIC_URL + '/chatbot.jpg',
      category: 'ai',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Flask'],
      github: 'https://github.com/Mortaza76/United-chatbot'
    },
    {
      id: 7,
      title: 'Sentiment Dashboard',
      description: 'A comprehensive sentiment analysis dashboard that processes and visualizes emotional data from various sources with real-time analytics.',
      image: process.env.PUBLIC_URL + '/dashboard.jpg',
      category: 'ai',
      technologies: ['React', 'Python', 'D3.js', 'Sentiment Analysis'],
      github: 'https://github.com/Mortaza76/sentiment-dashboard'
    },
    {
      id: 8,
      title: 'Flappy Bird Game',
      description: 'A modern recreation of the classic Flappy Bird game with enhanced graphics, smooth animations, and responsive controls.',
      image: process.env.PUBLIC_URL + '/bird.jpg',
      category: 'game',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
      github: 'https://github.com/Mortaza76/flappybirdgame'
    },
    {
      id: 9,
      title: 'Data Engineering Project',
      description: 'A data engineering project focused on building robust data pipelines, ETL processes, and data warehousing solutions.',
      image: process.env.PUBLIC_URL + '/data.jpg',
      category: 'data',
      technologies: ['Python', 'Apache Spark', 'Docker', 'AWS'],
      github: 'https://github.com/Mortaza76/DE-project'
    },
    {
      id: 10,
      title: 'Chess Game',
      description: 'A fully functional chess game with AI opponent, move validation, and beautiful UI featuring classic chess pieces and board.',
      image: process.env.PUBLIC_URL + '/chess.jpg',
      category: 'game',
      technologies: ['JavaScript', 'React', 'Chess.js', 'AI Algorithms'],
      github: 'https://github.com/Mortaza76/chess'
    },
    {
      id: 11,
      title: 'Information Retrieval System',
      description: 'An information retrieval system that implements advanced search algorithms and document processing techniques.',
      image: process.env.PUBLIC_URL + '/information.jpg',
      category: 'ai',
      technologies: ['Python', 'Information Retrieval', 'Search Algorithms', 'NLP'],
      github: 'https://github.com/Mortaza76/IR-project'
    },
    {
      id: 12,
      title: 'Final Year Project',
      description: 'My final year project showcasing innovative solutions and comprehensive research in advanced software development.',
      image: process.env.PUBLIC_URL + '/fyp.jpg',
      category: 'research',
      technologies: ['Full Stack', 'Research', 'Innovation', 'Advanced Tech'],
      github: 'https://github.com/Mortaza76/FYP-main'
    },
    {
      id: 13,
      title: 'DevOps Pipeline',
      description: 'A comprehensive DevOps project demonstrating CI/CD pipelines, containerization, and cloud infrastructure automation.',
      image: process.env.PUBLIC_URL + '/devops.jpg',
      category: 'web',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
      github: 'https://github.com/Mortaza76/DEVops-final'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18
      }
    },
    exit: {
      opacity: 0,
      y: -40,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden select-none bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Video Backgrounds with Smooth Transition */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          src="/white2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: isDark ? 0 : 1, transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1)' }}
        />
        <video
          src="/dark2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: isDark ? 1 : 0, transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1)' }}
        />
        {/* Overlay for text clarity */}
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? 'linear-gradient(120deg, rgba(0,0,0,0.60) 0%, rgba(30,30,34,0.60) 100%)'
              : 'linear-gradient(120deg, rgba(255,255,255,0.60) 0%, rgba(240,240,240,0.60) 100%)',
            zIndex: 1,
          }}
        />
      </div>
      {/* Parallax Background Layer */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          y: parallaxY,
          background: 'linear-gradient(120deg, rgba(59,130,246,0.07) 0%, rgba(236,72,153,0.10) 100%)',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, type: 'spring', stiffness: 120, damping: 18 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer select-none ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                  : 'bg-white/10 dark:bg-gray-800/10 text-gray-300 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-gray-800/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-interactive="true"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative rounded-2xl p-6 text-center cursor-pointer select-none bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg card"
                whileHover={{ y: -10, transition: { type: 'spring', stiffness: 120, damping: 18 } }}
                whileTap={{ scale: 0.98 }}
                data-interactive="true"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width="600"
                    height="400"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Overlay with Links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 cursor-pointer select-none icon-animate"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        data-interactive="true"
                      >
                        <FaGithub className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                {/* Project Title & Description */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 