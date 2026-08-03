import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CalendarDays, ChevronDown, ChevronUp } from 'lucide-react';
import { APP_DATA } from '../data';
import './components.css';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <motion.div 
      className="glass-card schedule-container mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title"><CalendarDays className="icon" /> 세부 일정</h2>
      
      <div className="day-tabs">
        {APP_DATA.schedule.map((day) => (
          <button
            key={day.day}
            className={`day-tab ${activeDay === day.day ? 'active' : ''}`}
            onClick={() => setActiveDay(day.day)}
          >
            <span className="day-num">Day {day.day}</span>
            <span className="day-date">{day.date}</span>
          </button>
        ))}
      </div>

      <div className="schedule-content">
        <AnimatePresence mode="wait">
          {APP_DATA.schedule.map((day) => (
            day.day === activeDay && (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="timeline"
              >
                <div className="timeline-summary">
                  <h3>{day.summary}</h3>
                </div>
                {day.details.map((item, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-time">
                      <Clock size={16} />
                      <span>{item.time}</span>
                    </div>
                    <div className="timeline-desc">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Schedule;
