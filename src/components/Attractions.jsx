import React from 'react';
import { motion } from 'framer-motion';
import { Map, Camera } from 'lucide-react';
import { APP_DATA } from '../data';
import './components.css';

const Attractions = () => {
  return (
    <motion.div 
      className="glass-card mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title"><Map className="icon" /> 방문지 및 워크숍 안내 (예정)</h2>
      
      <div className="attractions-list">
        {APP_DATA.attractions.map((item, idx) => (
          <motion.div 
            key={idx} 
            className="attraction-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3><Camera size={18} className="inline mr-2 text-primary" style={{display: 'inline', marginRight: '8px'}} />{item.name}</h3>
            <p className="text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Attractions;
