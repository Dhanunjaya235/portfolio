import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { pocs } from '../data/portfolio'


const POCs: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

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
        <section id="pocs" ref={ref} className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="max-w-7xl mx-auto"
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Proactive <span className="text-primary-500">POCs</span>
                        </h2>
                        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                            A showcase of rapid prototypes and proof of concepts I've built independently and collaboratively —
                            as part of my continuous learning — to explore ideas and demonstrate functionality for prospects and stakeholders.
                        </p>
                    </motion.div>

                    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {pocs.map((poc) => (
                            <motion.div
                                key={poc.id}
                                layout
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <Terminal className="h-6 w-6 text-primary-500 mr-3" />
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {poc.title}
                                    </h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    {poc.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {poc.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-electric-100 dark:bg-electric-900/30 text-electric-700 dark:text-electric-300 rounded-full text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
                <motion.div variants={itemVariants} className="text-center mt-12">
                    <a
                        href="https://github.com/Dhanunjaya235?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
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
                                View All POCs on GitHub
                            </span>
                        </motion.button>
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default POCs;
