import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Star, Trophy } from 'lucide-react';
import { achievements } from '../data/portfolio';

const Achievements: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring" as "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  type AchievementType = 'award' | 'recognition' | 'certification' | 'achievement';

  const iconMap: Record<AchievementType, React.ComponentType<any>> = {
    award: Award,
    recognition: Users,
    certification: Trophy,
    achievement: Star
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-electric-100 via-amber-50 to-neon-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-300/20 dark:bg-electric-900/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neon-300/20 dark:bg-neon-900/10 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-8xl mx-auto"
        >
          <motion.div
            variants={cardVariants}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-electric-500 to-neon-500 rounded-full mb-6"
            >
              <Star className="h-8 w-8 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Recognition & <span className="text-primary-500">Achievements</span>
            </h2>
            <p className="text-xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
              Celebrating milestones and recognition that reflect dedication to excellence
              and collaborative leadership.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = iconMap[achievement.type as AchievementType];

              return (
                <motion.div
                  key={achievement.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(3, 169, 244, 0.2)"
                  }}
                  className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden group ${index % 2 === 0 ? 'md:transform md:translate-x-4' : 'md:transform md:-translate-x-4'
                    }`}
                  style={{ perspective: "1000px" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-500/10 to-neon-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 200 }}
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-electric-500 to-neon-500 rounded-full mb-6 relative z-10"
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </motion.div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <motion.h3
                        className="text-2xl font-bold text-gray-900 dark:text-white"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.7 + index * 0.2 }}
                      >
                        {achievement.title}
                      </motion.h3>
                      <motion.span
                        className="text-lg font-semibold text-electric-600 dark:text-electric-400 bg-electric-100 dark:bg-electric-900/30 px-3 py-1 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 0.9 + index * 0.2, type: "spring" }}
                      >
                        {achievement.year}
                      </motion.span>
                    </div>

                    <motion.p
                      className="text-gray-800 dark:text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 1.1 + index * 0.2 }}
                    >
                      {achievement.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 1.3 + index * 0.2, type: "spring", stiffness: 200 }}
                      className="mt-6 inline-flex items-center space-x-2 bg-gradient-to-r from-electric-500 to-neon-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      <span className="text-lg">{achievement.icon}</span>
                      <span className="capitalize">{achievement.type}</span>
                    </motion.div>
                  </div>

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-4 right-4 w-8 h-8 border-2 border-electric-200 dark:border-electric-800 rounded-full opacity-20"
                  />
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={cardVariants}
            className="text-center mt-16"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(3, 169, 244, 0.4)"
              }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-electric-500 to-neon-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg cursor-pointer"
            >
              <Trophy className="h-5 w-5" />
              <span>Ready to achieve more together?</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;