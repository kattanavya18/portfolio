import React from 'react';
import { motion } from 'framer-motion';
import { Film, Palette, Trophy, Sparkles } from 'lucide-react';

const Interests = () => {
  const hobbies = [
    {
      name: "Watching Movies",
      icon: <Film size={24} />,
      description: "Exploring cinematic universes and visual storytelling.",
      color: "#ff4d4d"
    },
    {
      name: "Painting",
      icon: <Palette size={24} />,
      description: "Expressing creativity through colors and textures.",
      color: "#ffcc00"
    },
    {
      name: "Badminton",
      icon: <Trophy size={24} />,
      description: "Staying active and competitive on the court.",
      color: "#00d2ff"
    }
  ];

  return (
    <section id="interests" style={{ padding: '100px 20px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: '800' }}>
          Beyond the <span className="gradient-text">Code</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '20px', fontSize: '1.2rem', fontWeight: '300' }}>
          When I'm not architecting AI systems, you can find me...
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              y: -10,
              scale: 1.05,
              boxShadow: `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px ${hobby.color}22`
            }}
            className="glass"
            style={{ 
              padding: '40px', 
              textAlign: 'center', 
              position: 'relative',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '30px'
            }}
          >
            <div style={{ 
              position: 'absolute', 
              top: '-20px', 
              right: '-20px', 
              width: '100px', 
              height: '100px', 
              background: hobby.color, 
              opacity: 0.05, 
              borderRadius: '50%', 
              filter: 'blur(40px)' 
            }}></div>
            
            <div style={{ color: hobby.color, marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
              {hobby.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px' }}>{hobby.name}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: '300' }}>{hobby.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
