import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useDarkMode from '../hooks/useDarkMode';

const About = () => {
  const { isDark } = useDarkMode();
  // Parallax effect for About background
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, 160]);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
      {/* Video Backgrounds with Smooth Transition */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          src="/white1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: isDark ? 0 : 1, transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1)' }}
        />
        <video
          src="/dark1.mp4"
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
          background: 'linear-gradient(120deg, rgba(236,72,153,0.07) 0%, rgba(59,130,246,0.10) 100%)',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, type: 'spring', stiffness: 120, damping: 18 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, type: 'spring', stiffness: 120, damping: 18 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl transform rotate-6"
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 1, rotate: 6 }}
                transition={{ duration: 1.1, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={process.env.PUBLIC_URL + "/profile.png"}
                alt="Muhammad Azlan Khan Profile"
                loading="lazy"
                width="600"
                height="384"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              />
            </div>
            {/* Floating Stats */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">GIKI</div>
                <div className="text-sm text-gray-300">Data Science</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, type: 'spring', stiffness: 120, damping: 18 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.h3
              className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Data Analyst | DevOps Engineer | Software Engineer
            </motion.h3>

            <motion.p
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I am Muhammad Azlan Khan, an aspiring Data Scientist and final year Computer Science student at Ghulam Ishaq Khan Institute (GIKI). My academic journey has been focused on Data Science, Machine Learning, and their practical applications in solving real-world problems.<br/><br/>
              
              My expertise spans across various domains of Data Science and ML, including:
              • Data Analysis & Visualization using Python, Power BI, and advanced statistical methods
              • Machine Learning model development and deployment
              • Real-time data processing pipelines and ETL workflows
              • Cloud infrastructure and DevOps practices for ML systems
              • Full-stack development for data-driven applications<br/><br/>
              
              I've worked on diverse projects ranging from cloud-based chatbots and real-time stock market analysis to air quality monitoring systems and healthcare applications. My approach combines technical expertise with a strong focus on delivering practical, scalable solutions that drive meaningful insights and business value.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="mt-8 flex justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/cv.pdf"
                download
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl glass cursor-pointer select-none relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 12px 32px 0 rgba(0,0,0,0.25), 0 0 16px 4px #60a5fa99' }}
                whileTap={{ scale: 0.95 }}
                data-interactive="true"
                style={{
                  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.06)',
                }}
              >
                <span className="relative z-10">Download CV</span>
                <span className="absolute inset-0 rounded-xl pointer-events-none dark:group-hover:shadow-[0_0_16px_4px_rgba(96,165,250,0.7)] dark:group-hover:border-2 dark:group-hover:border-blue-400 transition-all duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 