import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, User } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#me', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#pocs', label: 'POCs' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <User className="h-8 w-8 text-primary-500" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">Dhanunjaya</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-800 dark:text-gray-300 hover:text-electric-500 dark:hover:text-electric-400 transition-colors duration-200"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/70 backdrop-blur-sm dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200 border border-electric-200/30 dark:border-gray-700"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/70 backdrop-blur-sm dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-electric-200/30 dark:border-gray-700"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-white/70 backdrop-blur-sm dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-electric-200/30 dark:border-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-electric-200/50 dark:border-gray-700"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-800 dark:text-gray-300 hover:text-electric-500 dark:hover:text-electric-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;