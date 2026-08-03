import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, AlertTriangle, Phone } from 'lucide-react';
import { APP_DATA } from '../data';
import './components.css';

const Safety = () => {
  return (
    <motion.div 
      className="glass-card mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title"><ShieldAlert className="icon" /> 안전 및 공지사항</h2>
      
      {APP_DATA.safety.map((section, idx) => (
        <div key={idx} className="safety-box">
          <h3><AlertTriangle size={18} /> {section.title}</h3>
          <ul>
            {section.rules.map((rule, i) => (
              <li key={i} className="text-sm">{rule}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="safety-box mt-4" style={{borderTop: '1px solid var(--border)', paddingTop: '1.5rem'}}>
        <h3 style={{color: 'var(--primary)'}}><Phone size={18} /> 비상 연락망</h3>
        <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem'}}>
          {APP_DATA.emergencyContacts.map((contact, idx) => (
            <div key={idx} style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', padding: '0.5rem', background: 'rgba(0,0,0,0.03)', borderRadius: '4px'}}>
              <strong>{contact.name}</strong>
              <span className="text-primary">{contact.phone}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Safety;
