import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '1rem',
          flexWrap: 'wrap'
        }}>
          <a 
            href="https://linkedin.com/in/redwane-aitbrahim" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#999999', transition: 'color 0.3s ease' }}
            onMouseOver={(e) => e.target.style.color = '#ffffff'}
            onMouseOut={(e) => e.target.style.color = '#999999'}
          >
            <FaLinkedin size={20} />
          </a>
          
          <a 
            href="https://github.com/Redwane-stdy" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#999999', transition: 'color 0.3s ease' }}
            onMouseOver={(e) => e.target.style.color = '#ffffff'}
            onMouseOut={(e) => e.target.style.color = '#999999'}
          >
            <FaGithub size={20} />
          </a>
          
          <a 
            href="mailto:redwane.aitbrahim67@gmail.com"
            style={{ color: '#999999', transition: 'color 0.3s ease' }}
            onMouseOver={(e) => e.target.style.color = '#ffffff'}
            onMouseOut={(e) => e.target.style.color = '#999999'}
          >
            <FaEnvelope size={20} />
          </a>
        </div>
        
        <p>&copy; 2025 Redwane Aitbrahim. Tous droits réservés.</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Développé avec React & Node.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;