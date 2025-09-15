import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('/api/experience')
      .then(res => res.json())
      .then(data => setExperiences(data))
      .catch(err => console.error('Error fetching experiences:', err));
  }, []);

  return (
    <section className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Expérience Professionnelle
        </motion.h2>
        
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="experience-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period}</p>
              </div>
              
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.2) + (i * 0.1) }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;