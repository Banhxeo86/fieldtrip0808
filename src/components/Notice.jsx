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
        <div style={{display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1.2rem'}}>
          <a href={visitJapanWeb.link} target="_blank" rel="noreferrer" className="vjw-btn vjw-btn-primary" style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '0.5rem', 
            color: '#fff', 
            background: 'var(--primary)', 
            padding: '0.8rem 1rem', 
            borderRadius: 'var(--radius-sm)', 
            textDecoration: 'none', 
            fontSize: '0.95rem', 
            fontWeight: 'bold',
            boxShadow: 'var(--shadow-sm)',
            transition: 'all 0.2s'
          }}>
            <LinkIcon size={18} /> 비짓재팬웹 공식 등록 바로가기
          </a>
          <a href={visitJapanWeb.guide} target="_blank" rel="noreferrer" className="vjw-btn vjw-btn-secondary" style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '0.5rem', 
            color: 'var(--primary)', 
            background: 'rgba(43, 92, 255, 0.1)', 
            padding: '0.8rem 1rem', 
            borderRadius: 'var(--radius-sm)', 
            textDecoration: 'none', 
            fontSize: '0.95rem', 
            fontWeight: 'bold',
            transition: 'all 0.2s'
          }}>
            <LinkIcon size={18} /> 등록방법 설명 블로그 보기
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Notice;
