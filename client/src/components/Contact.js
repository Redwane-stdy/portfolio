import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error('Error fetching profile:', err));
  }, []);

  if (!profile) return <div>Loading...</div>;

  const contactItems = [
    { icon: FaEnvelope, label: 'Email', value: profile.email, link: `mailto:${profile.email}` },
    { icon: FaPhone, label: 'Téléphone', value: profile.phone, link: `tel:${profile.phone}` },
    { icon: FaMapMarkerAlt, label: 'Localisation', value: profile.location },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'LinkedIn Profile', link: profile.linkedin },
    { icon: FaGithub, label: 'GitHub', value: 'GitHub Profile', link: profile.github }
  ];

  return (
    <section className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p style={{ fontSize: '1.2rem', color: '#cccccc', marginBottom: '3rem' }}>
            Contact me to discuss about your projects or collaboration opportunities.
          </p>
          
          <div className="contact-info">
            {contactItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={item.label}
                  className="contact-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <IconComponent size={24} />
                  <span>{item.label}:</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: '#ffffff' }}>{item.value}</span>
                  )}
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            style={{ marginTop: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a 
              href={`mailto:${profile.email}`}
              className="btn btn-primary"
              style={{ fontSize: '1.1rem' }}
            >
              Send a message
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;