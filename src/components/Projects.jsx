import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Cloud, ArrowUpRight, Globe, Utensils, Activity, ShieldCheck, Layout } from 'lucide-react';

const projects = [
  {
    title: "Flab2Fab",
    description: "A comprehensive fitness transformation platform that delivers personalized workout and nutrition plans. Leveraging data-driven insights to help users achieve their health goals with precision and motivation.",
    icon: <Activity size={32} />,
    size: "large",
    tags: ["React.js", "Node.js", "MongoDB", "HealthTech"],
    color: "#ff4d4d",
    link: "#"
  },
  {
    title: "AI Recipe Book",
    description: "Digital culinary companion providing intelligent meal recommendations based on dietary preferences. Features AI-powered ingredient substitution and nutritional analysis for a smarter cooking experience.",
    icon: <Utensils size={32} />,
    size: "medium",
    tags: ["FastAPI", "OpenAI", "React", "Python"],
    color: "#ffcc00",
    link: "#"
  },
  {
    title: "Fake News Detection",
    description: "Machine learning system trained on 20,000+ articles to classify news veracity with 90%+ accuracy. Utilizes TF-IDF vectorization and Logistic Regression to combat digital misinformation.",
    icon: <ShieldCheck size={32} />,
    size: "medium",
    tags: ["NLP", "Scikit-Learn", "Python", "MLOps"],
    color: "#4ecdc4",
    link: null
  },
  {
    title: "Enterprise AI Solutions",
    description: "Architecting high-performance backends with FastAPI and Python for Capgemini clients. Building autonomous AI agents and responsive React UIs to solve complex business challenges.",
    icon: <Cpu size={32} />,
    size: "large",
    tags: ["FastAPI", "React", "AI Agents", "Python"],
    color: "#7000ff",
    link: null
  },
  {
    title: "Cloud Infrastructure",
    description: "Developed production-ready environments for Broadridge using Terraform and AWS. Automated submission workflows and enhanced system accessibility through robust web development.",
    icon: <Layout size={32} />,
    size: "medium",
    tags: ["Terraform", "AWS", "Go", "Docker"],
    color: "#00d2ff",
    link: null
  }
];

const ProjectCard = ({ project, index }) => {
  const [mousePos, setMousePos] = React.useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ 
        y: -10,
        scale: 1.02,
      }}
      className={`bento-item ${project.size}`}
      style={{ 
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '30px',
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        cursor: project.link ? 'pointer' : 'default'
      }}
    >
      {/* Spotlight Effect */}
      <div 
        style={{ 
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${project.color}15, transparent 80%)`,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: 0
        }}
      ></div>

      <div className="bento-bg" style={{ background: `radial-gradient(circle at top right, ${project.color}08, transparent)` }}></div>
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: project.color, marginBottom: '20px' }}
        >
          {project.icon}
        </motion.div>
        <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '15px' }}>{project.title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: '300' }}>{project.description}</p>
      </div>

      <div style={{ position: 'relative', zIndex: 1, marginTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {project.tags.map((tag, i) => (
            <span key={i} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '15px', color: 'var(--text-secondary)' }}>{tag}</span>
          ))}
        </div>
        {project.link && (
          <motion.div whileHover={{ rotate: 45 }} style={{ color: 'var(--text-secondary)' }}>
            <ArrowUpRight size={24} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '100px 20px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontSize: '3.5rem', marginBottom: '60px', fontWeight: '800', textAlign: 'center' }}>
          Select <span className="gradient-text">Work</span>
        </h2>
      </motion.div>

      <div className="bento-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 300px;
          gap: 25px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .bento-item.large { grid-column: span 2; grid-row: span 2; }
        .bento-item.medium { grid-column: span 1; grid-row: span 2; }
        .bento-item.small { grid-column: span 3; grid-row: span 1; }
        .bento-bg { position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; z-index: 0; }
        
        @media (max-width: 900px) {
          .bento-grid { grid-template-columns: 1fr; grid-auto-rows: auto; }
          .bento-item.large, .bento-item.medium, .bento-item.small { grid-column: span 1; grid-row: span 1; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
