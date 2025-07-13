import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Rocket, ServerCog, UploadCloud, Users } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const features = [
    {
      icon: Code2,
      title: 'Clean Architecture',
      description: 'Building robust frontend and backend systems with maintainable, scalable, and modular code.'
    },
    {
      icon: Palette,
      title: 'User-Centered Design',
      description: 'Crafting intuitive, responsive UIs with attention to detail and accessibility in mind.'
    },
    {
      icon: Rocket,
      title: 'Performance & Optimization',
      description: 'Improving frontend speed and backend efficiency with profiling, caching, and load balancing techniques.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Thriving in cross-functional teams with strong communication, peer code reviews, and agile practices.'
    },
    {
      icon: ServerCog,
      title: 'Backend Expertise',
      description: 'Experience in REST APIs and microservices using Spring Boot, Django, FastAPI, Flask, and Express.js.'
    },
    {
      icon: UploadCloud,
      title: 'CI/CD & Deployment',
      description: 'Deploying scalable applications using Docker, GitHub Actions, Vercel, AWS, and infrastructure-as-code.'
    }
  ];


  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-primary-500">Me</span>
            </h2>
            <p className="text-xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with 3+ years of experience creating
              digital solutions that make a difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -left-4 top-0 w-24 h-24 bg-electric-200/50 dark:bg-electric-900/20 rounded-full blur-xl opacity-70"
              />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                I began my journey in tech with a Computer Science degree, where I developed a deep interest in how software powers the world around us. That curiosity soon evolved into a passion for building real-world applications that solve meaningful problems.
              </p>
              <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                While I started with frontend technologies like React and modern JavaScript frameworks, my path naturally expanded into backend development. Over the years, I've built scalable systems using <strong>Spring Boot</strong>, <strong>Flask</strong>, <strong>Django</strong>, <strong>FastAPI</strong>, and <strong>Express.js</strong>, working across both <strong>Java</strong> and <strong>Python</strong> ecosystems.
              </p>
              <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                This full-stack proficiency allows me to bridge the gap between beautifully designed user interfaces and robust backend logic — ensuring that products are not only functional but also performant and maintainable.
              </p>
              <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                Outside of coding, I love exploring emerging technologies, building POCs, mentoring fellow developers, and writing about practical development workflows. I'm always eager to learn, build, and contribute to the tech community.
              </p>


              <div className="flex flex-wrap gap-3 mt-6">
                {['Problem Solving', 'Team Leadership', 'Agile Development', 'Code Review'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      boxShadow: "0 5px 15px rgba(3, 169, 244, 0.4)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1 + Math.random() * 0.5 }}
                    className="px-4 py-2 bg-electric-100 dark:bg-electric-900/30 text-electric-700 dark:text-electric-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                  }}
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  animate={isInView ? {
                    opacity: 1,
                    y: 0,
                    rotateY: 0
                  } : {
                    opacity: 0,
                    y: 30,
                    rotateY: -15
                  }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="p-6 bg-white/70 backdrop-blur-sm dark:bg-gray-800 rounded-xl text-center border border-electric-200/30 dark:border-gray-700"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <feature.icon className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-electric-200/50 dark:border-gray-700"
          >
            {[
              { number: '10+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '5+', label: 'Happy Clients' },
              { number: '100%', label: 'Success Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ scale: 0, rotateY: 180 }}
                  animate={isInView ? { scale: 1, rotateY: 0 } : { scale: 0, rotateY: 180 }}
                  transition={{
                    delay: 0.5 + Math.random() * 0.3,
                    type: "spring",
                    stiffness: 200,
                    duration: 0.8
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    textShadow: "0 5px 15px rgba(59, 130, 246, 0.3)"
                  }}
                  className="text-3xl md:text-4xl font-bold text-primary-500 mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-800 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;