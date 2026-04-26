import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    institution: "Dayananda Sagar College of Engineering",
    logo: "/logos/dsce logo.jpg",
    degree: "Bachelor of Engineering in Computer Science",
    period: "Dec 2021 - Jun 2025",
    location: "Bengaluru, Karnataka",
    grade: "9.5 CGPA",
    highlights: ["Focus on AI, Cloud Computing, and Backend Systems"]
  },
  {
    institution: "Narayana Junior College",
    logo: "/logos/narayana logo.png",
    degree: "MPC (Mathematics, Physics, Chemistry)",
    period: "Jun 2019 - Jun 2021",
    location: "Ongole, Andhra Pradesh",
    grade: "97.7%",
    highlights: ["Top percentile in state level examinations"]
  }
];

const Education = () => {
  return (
    <section id="education" style={{ padding: '100px 20px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 style={{ fontSize: '3.5rem', fontWeight: '800' }}>
          Academic <span className="gradient-text">Foundation</span>
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass"
            style={{ padding: '40px', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.05 }}>
              <GraduationCap size={150} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: 'white', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '6px',
                overflow: 'hidden'
              }}>
                <img 
                  src={edu.logo} 
                  alt={edu.institution} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <span style={{ color: 'var(--accent-primary)', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '0.1em' }}>{edu.period}</span>
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '10px' }}>{edu.institution}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '20px', fontWeight: '300' }}>
              {edu.degree}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                <span style={{ fontSize: '0.9rem' }}>{edu.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(0, 210, 255, 0.1)', borderRadius: '12px', color: 'var(--accent-primary)', fontWeight: '700' }}>
                <Award size={18} />
                <span>{edu.grade}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
