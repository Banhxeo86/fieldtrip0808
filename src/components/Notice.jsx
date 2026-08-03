import React from 'react';
import { motion } from 'framer-motion';
import { Info, CreditCard, Link as LinkIcon } from 'lucide-react';
import { APP_DATA } from '../data';
import './components.css';

const Notice = () => {
  const { currency, visitJapanWeb } = APP_DATA;

  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="glass-card mb-4">
        <h2 className="section-title"><CreditCard className="icon" /> 화폐 및 환율 안내</h2>
        <div style={{marginBottom: '1rem'}}>
          <p className="text-sm font-bold">{currency.notes}</p>
          <p className="text-sm font-bold">{currency.coins}</p>
        </div>
        <ul style={{listStyle: 'circle', paddingLeft: '1.5rem'}}>
          {currency.tips.map((tip, idx) => (
            <li key={idx} className="text-sm text-muted">{tip}</li>
          ))}
        </ul>
      </div>

      <div className="glass-card mb-4">
        <h2 className="section-title"><Info className="icon" /> 비짓재팬웹 등록안내</h2>
        <ul style={{listStyle: 'circle', paddingLeft: '1.5rem', marginBottom: '1rem'}}>
          {visitJapanWeb.tips.map((tip, idx) => (
            <li key={idx} className="text-sm text-muted">{tip}</li>
          ))}
        </ul>
        <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
          <a href={visitJapanWeb.link} target="_blank" rel="noreferrer" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold'}}>
            <LinkIcon size={16} /> 공식 등록 링크
          </a>
          <a href={visitJapanWeb.guide} target="_blank" rel="noreferrer" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem'}}>
            <LinkIcon size={16} /> 등록방법 설명 블로그
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Notice;
