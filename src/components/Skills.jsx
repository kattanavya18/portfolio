import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: "Programming",
    skills: ["Python", "Java", "Go", "C", "SQL", "JavaScript"]
  },
  {
    name: "AI & ML",
    skills: ["LLM", "Vision LLM", "Agentic AI", "RLHF", "FastAPI", "PyTorch", "Tensorflow", "Keras", "OpenCV", "Hugging Face", "Transformers", "PEFT"]
  },
  {
    name: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Jenkins", "Terraform", "JFrog", "Chef", "Ansible", "Git", "GitHub", "Linux", "Shell Scripting"]
  },
  {
    name: "Web & Databases",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Frappe"]
  },
  {
    name: "Networking & Tools",
    skills: ["Cisco Packet Tracer", "Wireshark", "Postman", "Hadoop", "Unix", "Jira", "Confluence"]
  },
  {
    name: "Languages",
    skills: ["Telugu", "English", "Hindi", "Kannada"]
  }
];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '100px 20px' }}>
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ fontSize: '3rem', marginBottom: '60px', fontWeight: '800', textAlign: 'center' }}
      >
        Technical <span className="gradient-text">Powerhouse</span>
      </motion.h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {skillCategories.map((cat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass"
            style={{ padding: '40px', borderRadius: '30px', background: 'rgba(255,255,255,0.01)' }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '25px', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{cat.name}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {cat.skills.map((skill, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5, color: 'var(--accent-primary)' }}
                  style={{ fontSize: '1rem', fontWeight: '300', color: 'var(--text-secondary)', cursor: 'default' }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
