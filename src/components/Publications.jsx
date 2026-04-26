import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Users, Calendar } from 'lucide-react';

const publications = [
  {
    title: "CAAFR: Comparative Analysis of Amazon and Flipkart Reviews",
    authors: "Katta Navya, Akshatha G, Joel A, Karthik K H, and M Kavacin",
    date: "September 2025",
    link: "https://www.researchgate.net/publication/398214277_CAAFR_Comparative_Analysis_of_Amazon_and_Flipkart_Reviews",
    description: "A comprehensive comparative analysis of customer sentiment on India's leading e-commerce platforms. This research leverages advanced sentiment analysis techniques to derive actionable insights from thousands of user reviews, highlighting key consumer preferences.",
    tags: ["Sentiment Analysis", "NLP", "E-commerce", "Comparative Study"]
  }
];

const Publications = () => {
  return (
    <section id="publications" style={{ padding: '100px 20px', position: 'relative' }}>
      <div style={{ 
        position: 'absolute', 
        top: '20%', 
        right: '5%', 
        width: '400px', 
        height: '400px', 
        background: 'var(--accent-primary)', 
        filter: 'blur(180px)', 
        opacity: 0.05, 
        zIndex: -1 
      }}></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        <h2 style={{ fontSize: '3.5rem', fontWeight: '800' }}>
          Research & <span className="gradient-text">Publications</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '10px', maxWidth: '700px', margin: '10px auto' }}>
          Contributing to the scientific community through data-driven research and analysis.
        </p>
      </motion.div>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass"
            style={{ 
              padding: '50px', 
              borderRadius: '40px', 
              position: 'relative',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <div style={{ 
                    padding: '10px', 
                    background: 'var(--accent-primary)', 
                    borderRadius: '12px', 
                    color: 'var(--bg-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <BookOpen size={20} />
                  </div>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Research Paper</span>
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '15px' }}>{pub.title}</h3>
              </div>
              
              <motion.a 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                style={{ 
                  padding: '15px', 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  borderRadius: '50%', 
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <ExternalLink size={24} />
              </motion.a>
            </div>

            <div style={{ display: 'flex', gap: '30px', marginBottom: '25px', color: 'var(--text-secondary)', fontSize: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={18} style={{ color: 'var(--accent-primary)' }} />
                <span>{pub.authors}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={18} style={{ color: 'var(--accent-primary)' }} />
                <span>{pub.date}</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px', fontWeight: '300' }}>
              {pub.description}
            </p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {pub.tags.map((tag, i) => (
                <span key={i} style={{ 
                  padding: '8px 20px', 
                  background: 'rgba(0, 210, 255, 0.05)', 
                  borderRadius: '100px', 
                  fontSize: '0.85rem', 
                  color: 'var(--accent-primary)',
                  border: '1px solid rgba(0, 210, 255, 0.1)',
                  fontWeight: '500'
                }}>
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
