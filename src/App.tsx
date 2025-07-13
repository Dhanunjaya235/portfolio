
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import POCs from './components/Pocs';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-white text-gray-900 dark:bg-[#0c111d] dark:text-gray-100">
      <Header />
      <main className="space-y-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <POCs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
