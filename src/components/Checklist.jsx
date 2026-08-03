import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Square, Check } from 'lucide-react';
import { APP_DATA } from '../data';
import './components.css';

const Checklist = () => {
  // Load saved checklist from local storage if available
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('toyama_checklist');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return {};
      }
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('toyama_checklist', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const progress = Math.round(
    (Object.values(checkedItems).filter(Boolean).length / APP_DATA.checklist.length) * 100
  );

  return (
    <motion.div 
      className="glass-card mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="section-title mb-0" style={{marginBottom: 0}}><CheckSquare className="icon" /> 준비물 체크리스트</h2>
        <span className="text-primary font-bold">{progress}%</span>
      </div>

      <div style={{width: '100%', height: '6px', background: 'rgba(0,0,0,0.1)', borderRadius: '3px', marginBottom: '1.5rem'}}>
        <div style={{width: `${progress}%`, height: '100%', background: 'var(--primary)', borderRadius: '3px', transition: 'width 0.3s ease'}}></div>
      </div>
      
      <div className="checklist">
        {APP_DATA.checklist.map((item) => (
          <div 
            key={item.id} 
            className={`checklist-item ${checkedItems[item.id] ? 'checked' : ''}`}
            onClick={() => toggleCheck(item.id)}
          >
            <div className="check-icon">
              {checkedItems[item.id] ? <CheckSquare size={20} /> : <Square size={20} />}
            </div>
            <span className="checklist-label">{item.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Checklist;
