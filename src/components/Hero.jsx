import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Mail } from 'lucide-react';

const roles = ["Software Engineer", "Backend Developer", "AIML Engineer", "GenAI", "Cloud Enthusiast"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      const speed = isDeleting ? 50 : 100;

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + (isDeleting ? -1 : 1)));
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" style={{ textAlign: 'center', paddingTop: '150px', paddingBottom: '100px' }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -15, 0],
        }}
        transition={{ 
          duration: 1, 
          ease: "easeOut",
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="profile-photo-container"
        style={{ cursor: 'pointer' }}
      >
        <div className="profile-glow"></div>
        <motion.img 
          src={import.meta.env.VITE_PROFILE_IMAGE_URL} 
          alt="Navya Katta" 
          className="profile-photo"
          whileHover={{ scale: 1.6, filter: "contrast(120%) brightness(120%)" }}
          onError={(e) => { e.target.src = 'https://via.placeholder.com/280'; }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 style={{ fontSize: '1.2rem', color: 'var(--accent-primary)', marginBottom: '15px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Building Scalable & Intelligent Systems
        </h2>
        <h1 style={{ fontSize: '5rem', lineHeight: '1.1', marginBottom: '25px', fontWeight: '800' }}>
          Navya <span className="gradient-text">Katta</span>
        </h1>
        <h2 style={{ fontSize: '2.5rem', height: '3rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
          {displayText}
          <span style={{ borderRight: '3px solid var(--accent-primary)', marginLeft: '8px', animation: 'blink 1s infinite' }}></span>
        </h2>
        
        <p style={{ color: 'var(--text-secondary)', marginTop: '30px', fontSize: '1.3rem', maxWidth: '800px', margin: '30px auto', fontWeight: '300' }}>
          I build high-performance backend systems and explore the frontiers of Generative AI. 
          Passionate about creating efficient cloud solutions and intelligent user experiences.
        </p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}
        >
          <div className="hero-buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 210, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="glass" 
              style={{ padding: '16px 40px', textDecoration: 'none', color: 'white', fontWeight: '700', borderRadius: '50px', border: '1px solid var(--accent-primary)' }}
            >
              Explore Projects
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, background: "rgba(0, 210, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              style={{ padding: '16px 40px', textDecoration: 'none', color: 'var(--accent-primary)', fontWeight: '700', border: '2px solid var(--accent-primary)', borderRadius: '50px' }}
            >
              Get In Touch
            </motion.a>
          </div>

          <div style={{ display: 'flex', gap: '25px', marginTop: '10px' }}>
            <motion.a 
              whileHover={{ y: -5, color: 'white' }}
              href="https://github.com/kattanavya18" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
            >
              <Code size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, color: 'white' }}
              href="https://www.linkedin.com/in/navya-katta-80a446234/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
            >
              <Briefcase size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, color: 'white' }}
              href="mailto:navya.jh2026@gmail.com" 
              style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </section>
  );
};

export default Hero;
