import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Server, Database, Settings, Braces, CloudCog, LayoutDashboard } from 'lucide-react';
import { skills } from '../data/portfolio';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryIcons = {
    'Languages': Braces,
    'Frontend Frameworks': LayoutDashboard,
    'Backend Frameworks': Server,
    'Databases': Database,
    'CI/CD & Cloud': CloudCog,
    'DevOps/Tools': Settings,
  };

  const categoryColors = {
    'Languages': 'from-sky-500 to-blue-600',
    'Frontend Frameworks': 'from-pink-500 to-rose-500',
    'Backend Frameworks': 'from-emerald-500 to-green-500',
    'Databases': 'from-purple-500 to-violet-500',
    'CI/CD & Cloud': 'from-yellow-500 to-amber-500',
    'DevOps/Tools': 'from-orange-500 to-red-500',
  };


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

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-9xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-primary-500">Skills</span>
            </h2>
            <p className="text-xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
              across different technology stacks.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-6 gap-4"
            variants={containerVariants}
          >
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px rgba(3, 169, 244, 0.2)"
                }}
                className="bg-white/80 backdrop-blur-sm dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-electric-200/30 dark:border-gray-800 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[category as keyof typeof categoryColors]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="flex items-center justify-center mb-6 relative z-10">
                  {React.createElement(categoryIcons[category as keyof typeof categoryIcons], {
                    className: "h-8 w-8 text-primary-500 mr-3"
                  })}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-800 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <motion.span
                          className="text-primary-500 font-semibold"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: 1 + index * 0.1, type: "spring" }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-electric-100 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.2, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                          className={`bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} h-2 rounded-full relative`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Responsive Design', 'RESTful APIs', 'Testing (Jest, Selenium)',
                'Performance Optimization', 'SEO', 'Accessibility', 'Agile Methodology',
                'Code Review', 'Mentoring', 'Technical Writing', 'UI/UX Principles'
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    boxShadow: "0 5px 15px rgba(3, 169, 244, 0.4)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.5 + Math.random() * 0.5 }}
                  className="px-4 py-2 bg-electric-100 dark:bg-electric-900/30 text-electric-700 dark:text-electric-300 rounded-full text-sm font-medium cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;