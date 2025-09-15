import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error('Error fetching profile:', err));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <section className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About me
        </motion.h2>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            fontSize: '1.2rem',
            lineHeight: '2',
            color: '#cccccc'
          }}
        >
          <p style={{ marginBottom: '2rem' }}>
            {profile.description}
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <motion.div 
              className="info-card"
              style={{
                backgroundColor: '#111111',
                border: '1px solid #333333',
                borderRadius: '10px',
                padding: '2rem'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>Formation</h3>
              <p style={{ color: '#cccccc' }}>
                Sofware Engineering Student<br />
                <strong>Télécom SudParis</strong><br />
                2023 - now
              </p>
            </motion.div>
            
            <motion.div 
              className="info-card"
              style={{
                backgroundColor: '#111111',
                border: '1px solid #333333',
                borderRadius: '10px',
                padding: '2rem'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>Location</h3>
              <p style={{ color: '#cccccc' }}>
                📍 {profile.location}
              </p>
            </motion.div>
            
            <motion.div 
              className="info-card"
              style={{
                backgroundColor: '#111111',
                border: '1px solid #333333',
                borderRadius: '10px',
                padding: '2rem'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>My Goal</h3>
              <p style={{ color: '#cccccc' }}>
                Looking for a 6-month internship starting February 2026
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;