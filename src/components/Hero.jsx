import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users } from 'lucide-react';
import { APP_DATA } from '../data';
import './components.css';

const Hero = () => {
  return (
    <motion.div 
      className="hero glass-panel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-content">
        <h2 className="hero-subtitle">{APP_DATA.subtitle}</h2>
        <h1 className="hero-title">{APP_DATA.title}</h1>
        
        <div className="hero-meta">
          <div className="meta-item">
            <Calendar className="icon text-primary" />
            <span>{APP_DATA.period}</span>
          </div>
          <div className="meta-item">
            <MapPin className="icon text-primary" />
            <span>{APP_DATA.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
