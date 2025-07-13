import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, NotebookPen, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import NpmIcon from '../icons/NpmIcon';


const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .send(
        import.meta.env.PORTFOLIO_EMAILJS_SERVICE_ID,
        import.meta.env.PORTFOLIO_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.PORTFOLIO_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('sent');

        setTimeout(() => setStatus('idle'), 3000);
      })
      .catch((error) => {
        console.error('Email error:', error);
        setStatus('idle');
      });
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
    <section id="contact" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In <span className="text-primary-500">Touch</span>
            </h2>
            <p className="text-xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together
              to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-electric-100 dark:bg-electric-900/30 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-800 dark:text-gray-300">dhanunjaya.andavarapu@outlook.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-electric-100 dark:bg-electric-900/30 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-800 dark:text-gray-300">+91 9177299229</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-electric-100 dark:bg-electric-900/30 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-800 dark:text-gray-300">Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
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
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-electric-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent bg-white/90 backdrop-blur-sm dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-electric-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent bg-white/90 backdrop-blur-sm dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-electric-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent bg-white/90 backdrop-blur-sm dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-electric-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent bg-white/90 backdrop-blur-sm dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                  disabled={status === 'sending' || status === 'sent'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-electric-500 to-neon-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' && (
                    <motion.div
                      key="sending"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center space-x-2"
                    >
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </motion.div>
                  )}

                  {status === 'sent' && (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span>Sent!</span>
                    </motion.div>
                  )}

                  {status === 'idle' && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center space-x-2"
                    >
                      <Send className="h-5 w-5 text-white" />
                      <span>Send Message</span>
                    </motion.div>
                  )}
                </motion.button>

              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;