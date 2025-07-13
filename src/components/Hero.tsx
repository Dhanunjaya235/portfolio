import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, NotebookPen } from 'lucide-react';
import dhanu from '../assests/dhanu.png';
import NpmIcon from '../icons/NpmIcon';

const Hero: React.FC = () => {
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-electric-100 via-amber-50 to-neon-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-electric-300/30 dark:bg-electric-900/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-neon-300/30 dark:bg-neon-900/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl"
            >
              <img
                src={dhanu}
                alt="Alex Carter"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Dhanunjaya <span className="text-primary-500">Andavarapu</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 mb-2"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Crafting exceptional digital experiences with modern technologies.
            Passionate about clean code, beautiful design, and innovative solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(3, 169, 244, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-electric-500 to-primary-500 text-white rounded-lg font-semibold hover:from-electric-600 hover:to-primary-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-400 to-electric-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10 flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Get In Touch</span>
              </span>
            </motion.a>
            <motion.a
              href="/resume.pdf"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(3, 169, 244, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-electric-500 text-electric-600 dark:text-electric-400 rounded-lg font-semibold hover:bg-electric-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden group"
            >
              <Download className="h-5 w-5" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center align-center space-x-6 mb-12"
          >
            {[
              { icon: Github, href: 'https://github.com/Dhanunjaya235', label: 'GitHub' },
              { icon: Linkedin, href: 'www.linkedin.com/in/dhanunjaya-andhavarapu-502492246', label: 'LinkedIn' },
              { icon: NotebookPen, href: 'https://www.blogger.com/blog/pages/2357939272283650645', label: 'Blogger' },
              { icon: NpmIcon, href: 'https://www.npmjs.com/settings/dhanunjay/packages', label: 'NPM' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="relative group p-3 bg-white/70 backdrop-blur-sm dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:text-electric-500 dark:hover:text-electric-400 transition-colors duration-200 border border-electric-200/30 dark:border-gray-700"
              >
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/80 dark:bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
                  {label}
                </span>
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-600 dark:text-gray-600"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;