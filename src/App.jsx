import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Magnetic from './components/Magnetic';
import { Code, Briefcase, Mail } from 'lucide-react';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle path-based scrolling
  useEffect(() => {
    const path = location.pathname.replace('/', '');
    const elementId = path === '' || path === 'home' ? 'home' : path;
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Experience', path: '/experience' },
    { label: 'Work', path: '/projects' },
    { label: 'Research', path: '/publications' },
    { label: 'Skills', path: '/skills' },
    { label: 'Education', path: '/education' },
    { label: 'Interests', path: '/interests' },
  ];

  return (
    <div className="portfolio-app">
      {/* Custom Cursor */}
      <motion.div 
        className="cursor"
        animate={{ 
          x: mousePos.x - 10, 
          y: mousePos.y - 10,
          scale: 1
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.5 }}
        style={{
          boxShadow: '0 0 20px var(--accent-primary)',
          border: '1px solid white'
        }}
      />
      
      <motion.div 
        className="cursor-follower"
        animate={{ 
          x: mousePos.x - 20, 
          y: mousePos.y - 20,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100, mass: 1 }}
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          border: '1px solid var(--accent-primary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0.5
        }}
      />
      
      <nav className="navbar">
        <motion.div 
          className="scroll-progress"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '2px',
            background: 'var(--accent-primary)',
            width: '100%',
            transformOrigin: '0%',
            scaleX
          }}
        />
        <div className="logo" style={{ fontWeight: '800', fontSize: '1.5rem', letterSpacing: '-0.05em' }}>
          N<span className="gradient-text">K</span>
        </div>
        <div className="nav-links glass">
          {navItems.map((item) => (
            <Magnetic key={item.path}>
              <Link 
                to={item.path} 
                style={{ 
                  color: location.pathname === item.path ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontWeight: location.pathname === item.path ? '600' : '300',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.label}
              </Link>
            </Magnetic>
          ))}
        </div>
      </nav>

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Education />
        <Interests />
        
        <motion.section 
          id="contact" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', padding: '150px 20px', position: 'relative' }}
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'var(--accent-primary)', filter: 'blur(150px)', opacity: 0.1, zIndex: -1 }}></div>
          <h2 className="contact-heading" style={{ marginBottom: '20px', fontWeight: '800' }}>Ready to <span className="gradient-text">Innovate?</span></h2>
          <p className="contact-subheading" style={{ color: 'var(--text-secondary)', marginBottom: '50px', fontWeight: '300' }}>I'm currently open to new opportunities and interesting AI projects.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="mailto:navya.jh2026@gmail.com" className="glass" style={{ padding: '18px 50px', textDecoration: 'none', color: 'white', fontWeight: '700', borderRadius: '50px' }}>Say Hello</motion.a>
          </div>
        </motion.section>
      </main>

      <footer style={{ padding: '60px 20px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '300' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '30px' }}>
          <motion.a whileHover={{ y: -5, color: 'white' }} href="https://github.com/kattanavya18" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}><Code size={20} /></motion.a>
          <motion.a whileHover={{ y: -5, color: 'white' }} href="https://www.linkedin.com/in/navya-katta-80a446234/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}><Briefcase size={20} /></motion.a>
          <motion.a whileHover={{ y: -5, color: 'white' }} href="mailto:navya.jh2026@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}><Mail size={20} /></motion.a>
        </div>
        <p>&copy; 2026 Navya Katta. Design refined with intelligence.</p>
      </footer>

      <style>{`
        .cursor, .cursor-follower {
          position: fixed;
          background: var(--accent-primary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          display: none;
        }
        .cursor-follower {
          background: transparent;
        }
        @media (pointer: fine) {
          .cursor, .cursor-follower { display: block; }
          body { cursor: none; }
          a, button { cursor: none; }
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
        }
      `}</style>
    </div>
  );
}

export default App;
