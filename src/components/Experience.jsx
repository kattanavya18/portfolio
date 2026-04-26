import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Capgemini Engineering",
    logo: "/logos/cg logo.png",
    role: "Software Engineer",
    period: "Sep 2025 - Present",
    location: "Bengaluru, Karnataka",
    details: [
      "Automated Vision-Language Model inferencing with FastAPI and WebSockets, enabling real-time multimodal processing with streaming responses.",
      "Optimized model lifecycle management (load → infer → unload) on GPUs, resulting in 2x faster deployment and improved throughput."
    ]
  },
  {
    company: "Broadridge Financial Solutions",
    logo: "/logos/br logo.png",
    role: "Member Technical Intern",
    period: "Jan 2025 - June 2025",
    location: "Bengaluru, Karnataka",
    details: [
      "Developed production-ready portals using React.js and Go, streamlining automation submission workflows and system accessibility.",
      "Containerized applications using Docker and implemented CI/CD with Jenkins for automated infrastructure deployment on AWS."
    ]
  },
  {
    company: "Fimer India Private Limited",
    logo: "/logos/fimer logo.jpg",
    role: "Product Developer Intern",
    period: "Aug 2024 - Oct 2024",
    location: "Bengaluru, Karnataka",
    details: [
      "Designed and automated a Calibration Management workflow in ERPNext for 50+ industrial instruments using Python scripts.",
      "Integrated custom real-time monitoring dashboards, improving data accuracy by 25% through automated status updates."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '100px 20px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        <h2 style={{ fontSize: '3.5rem', fontWeight: '800' }}>
          Professional <span className="gradient-text">Journey</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '10px' }}>Building the future of AI and Backend systems</p>
      </motion.div>
      
      <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
        {/* Timeline line */}
        <div style={{ 
          position: 'absolute', 
          left: '50%', 
          top: 0, 
          bottom: 0, 
          width: '2px', 
          background: 'linear-gradient(to bottom, var(--accent-primary), transparent)',
          transform: 'translateX(-50%)',
          opacity: 0.3
        }}></div>

        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            style={{ 
              display: 'flex', 
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
              marginBottom: '80px',
              width: '100%',
              position: 'relative'
            }}
          >
            {/* Timeline Dot */}
            <div style={{ 
              position: 'absolute', 
              left: '50%', 
              top: '30px',
              width: '20px', 
              height: '20px', 
              borderRadius: '50%', 
              background: 'var(--accent-primary)',
              boxShadow: '0 0 20px var(--accent-primary)',
              transform: 'translateX(-50%)',
              zIndex: 2,
              border: '4px solid var(--bg-color)'
            }}></div>

            <div className="glass" style={{ 
              width: '45%', 
              padding: '35px', 
              borderRadius: '24px',
              position: 'relative',
              textAlign: 'left'
            }}>
              <span style={{ 
                color: 'var(--accent-primary)', 
                fontSize: '0.9rem', 
                fontWeight: '700', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                display: 'block',
                marginBottom: '10px'
              }}>
                {exp.period}
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '5px' }}>{exp.role}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <img 
                  src={exp.logo} 
                  alt={exp.company} 
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '8px', 
                    objectFit: 'contain',
                    background: 'white',
                    padding: '4px'
                  }} 
                />
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0, fontWeight: '500' }}>
                  {exp.company} • <span style={{ fontSize: '0.9rem', fontWeight: '300' }}>{exp.location}</span>
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {exp.details.map((detail, i) => (
                  <li key={i} style={{ 
                    color: 'var(--text-secondary)', 
                    marginBottom: '15px', 
                    fontSize: '1rem', 
                    lineHeight: '1.5',
                    display: 'flex', 
                    gap: '12px' 
                  }}>
                    <span style={{ color: 'var(--accent-primary)', marginTop: '3px' }}>▹</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) {
          #experience > div > div {
            justify-content: flex-start !important;
          }
          #experience > div > div > .glass {
            width: calc(100% - 40px) !important;
            margin-left: 40px;
          }
          #experience > div > div:nth-child(even) {
            transform: none !important;
          }
          #experience > div > div > div:first-child { /* Dot */
            left: 0 !important;
            transform: translateX(0) !important;
          }
          #experience > div > div > div:nth-child(2) { /* Line */
            left: 9px !important;
            transform: none !important;
          }
           #experience > div > div:first-child + div { /* the line */
             left: 9px !important;
             transform: none !important;
           }
        }
      `}</style>
    </section>
  );
};

export default Experience;
