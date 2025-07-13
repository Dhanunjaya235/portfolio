import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
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
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-11xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Work <span className="text-primary-500">Experience</span>
            </h2>
            <p className="text-xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
              My professional journey and the key contributions I've made at each step.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-electric-300 dark:bg-electric-800"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-electric-500 border-4 border-white dark:border-gray-800 rounded-full z-10"></div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                >
                  <div className="bg-white/90 backdrop-blur-sm dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-electric-200/30 dark:border-gray-700">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {experience.role}
                        </h3>
                        {experience.current && (
                          <span className="px-3 py-1 bg-neon-100 dark:bg-neon-900/30 text-neon-700 dark:text-neon-300 rounded-full text-sm font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-medium text-primary-500 mb-2">
                        {experience.company}
                      </h4>
                      <div className="flex items-center text-gray-700 dark:text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements:
                      </h5>
                      {experience.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-neon-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Education
            </h3>
            <div className="bg-white/90 backdrop-blur-sm dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-electric-200/30 dark:border-gray-700 max-w-2xl mx-auto">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Bachelor of Technology in Computer Science
              </h4>
              <p className="text-primary-500 font-medium mb-2">Rajiv Gandhi University of Knowledge and Technologies(IIIT)</p>
              <div className="flex items-center text-gray-700 dark:text-gray-400 text-sm mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>2018 - 2022</span>
              </div>
              <p className="text-gray-800 dark:text-gray-300">
                Graduated with honors. Focused on software engineering, algorithms, and web development.
                Active member of the Computer Science Society and coding competition team.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;