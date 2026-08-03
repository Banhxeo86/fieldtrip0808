import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Home, CloudSun, Utensils } from 'lucide-react';
import { APP_DATA } from '../data';
import './components.css';

const Overview = () => {
  const { flights, accommodation, weather } = APP_DATA;

  return (
    <div className="overview-section">
      <motion.div 
        className="glass-card mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title"><Plane className="icon" /> 항공편 안내</h2>
        
        <div className="flight-box">
          <div className="flight-route">
            <div className="flight-leg">
              <span className="flight-label">출국</span>
              <strong>{flights.outbound.date}</strong>
              <span>{flights.outbound.flightNo}</span>
              <p>{flights.outbound.departure} → {flights.outbound.arrival}</p>
            </div>
            <div className="flight-leg">
              <span className="flight-label">귀국</span>
              <strong>{flights.inbound.date}</strong>
              <span>{flights.inbound.flightNo}</span>
              <p>{flights.inbound.departure} → {flights.inbound.arrival}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="glass-card mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="section-title"><Home className="icon" /> 숙소 정보</h2>
        <div className="hotel-info">
          <h3>{accommodation.name}</h3>
          <p className="text-sm">{accommodation.address}</p>
        </div>
      </motion.div>

      <motion.div 
        className="glass-card mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="section-title"><CloudSun className="icon" /> 도야마 날씨 (예정)</h2>
        <div className="weather-grid">
          {weather.map((w, idx) => (
            <div key={idx} className="weather-item">
              <span className="weather-date">{w.date.split(' ')[0]}</span>
              <span className="weather-day">{w.date.split(' ')[1]}</span>
              <span className="weather-temp">{w.temp}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Overview;
