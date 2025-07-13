import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'featured'
    ? projects.filter(project => project.featured)
    : projects;

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
    <section id="projects" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-11xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-primary-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              A collection of projects that showcase my skills and passion for creating
              innovative digital solutions.
            </p>

            <div className="flex justify-center space-x-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${filter === 'all'
                  ? 'bg-gradient-to-r from-electric-500 to-primary-500 text-white shadow-lg'
                  : 'bg-white/70 backdrop-blur-sm dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-electric-200/30 dark:border-gray-700'
                  }`}
              >
                All Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('featured')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${filter === 'featured'
                  ? 'bg-gradient-to-r from-electric-500 to-primary-500 text-white shadow-lg'
                  : 'bg-white/70 backdrop-blur-sm dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-electric-200/30 dark:border-gray-700'
                  }`}
              >
                Featured Only
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            layout
            className="grid md:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(3, 169, 244, 0.3)"
                }}
                className="bg-white/90 backdrop-blur-sm dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-electric-200/30 dark:border-gray-700"
                style={{ perspective: "1000px" }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                    initial={false}
                  >
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    )}
                  </motion.div>
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      className="absolute top-4 right-4 bg-gradient-to-r from-neon-500 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                    >
                      Featured
                    </motion.div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * techIndex, type: "spring" }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 bg-electric-100 dark:bg-electric-900/30 text-electric-700 dark:text-electric-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center space-x-2 text-electric-600 dark:text-electric-400 hover:text-electric-700 dark:hover:text-electric-300 font-medium"
                      >
                        <Eye className="h-4 w-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                      >
                        <Github className="h-4 w-4" />
                        <span>Source Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(3, 169, 244, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-electric-500 to-neon-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-600 to-electric-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10">
                View All Projects on GitHub
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;