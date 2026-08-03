import React, { useState } from 'react';
import { Home, Calendar, CheckSquare, Info } from 'lucide-react';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Schedule from './components/Schedule';
import Attractions from './components/Attractions';
import Checklist from './components/Checklist';
import Notice from './components/Notice';
import Safety from './components/Safety';
import './index.css';
import './bottom-nav.css';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="App">
      <Hero />
      
      <div className="top-tabs">
        <button className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
          개요
        </button>
        <button className={`tab-btn ${activeTab === 'schedule' ? 'active' : ''}`} onClick={() => setActiveTab('schedule')}>
          일정
        </button>
        <button className={`tab-btn ${activeTab === 'checklist' ? 'active' : ''}`} onClick={() => setActiveTab('checklist')}>
          준비물
        </button>
        <button className={`tab-btn ${activeTab === 'notice' ? 'active' : ''}`} onClick={() => setActiveTab('notice')}>
          안내
        </button>
      </div>

      <div className="container">
        {activeTab === 'overview' && <Overview />}
        {activeTab === 'schedule' && (
          <>
            <Schedule />
            <Attractions />
          </>
        )}
        {activeTab === 'checklist' && <Checklist />}
        {activeTab === 'notice' && (
          <>
            <Notice />
            <Safety />
          </>
        )}
        
        <footer style={{textAlign: 'center', padding: '2rem 0', color: 'var(--text-muted)', fontSize: '0.8rem', wordBreak: 'keep-all'}}>
          © 2026 금산초등학교 청음어린이예술단
        </footer>
      </div>
    </div>
  );
}

export default App;
