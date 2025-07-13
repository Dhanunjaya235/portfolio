import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, User } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <User className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold">Dhanunjaya</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Passionate full-stack developer creating exceptional digital experiences
              with modern technologies and clean, maintainable code.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#experience', label: 'Experience' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-gray-300">
              <p>dhanunjaya.andavarapu@outlook.com</p>
              <p>+91 9177299229</p>
              <p>Hyderabad, Telangana</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-gray-300 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by Dhanunjaya Andavarapu</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">
              © 2025 Dhanunjaya Andavarapu. All rights reserved.
            </span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;