import React, { useRef, useEffect } from 'react';
import styles from '../styles/News.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const News = () => {
  const newsContainer = useRef();
  const particlesRef = useRef([]);
  
  const newsItems = [
    {
      id: 1,
      type: 'featured',
      title: 'QUANTUM BUSINESS TRENDS',
      description: 'Decoding the algorithmic patterns that will define commerce in the post-digital era through quantum computing insights.',
      author: {
        name: 'DR. THOMAS SPEARK',
        role: 'Quantum Strategist',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      date: 'MAY 2031',
      energyLevel: 87,
      noveltyFactor: 92
    },
    {
      id: 2,
      type: 'card',
      title: 'NEURAL VISIBILITY',
      description: 'Augmented reality projections that adapt to viewer consciousness levels in real-time.',
      date: 'JUN 2031',
      icon: '👁️',
      energyLevel: 76,
      noveltyFactor: 88
    },
    {
      id: 3,
      type: 'card',
      title: 'AI COGNITIVE ASSISTANTS',
      description: 'Neural network companions that anticipate entrepreneurial decisions before conscious thought forms.',
      date: 'AUG 2031',
      icon: '🧠',
      energyLevel: 94,
      noveltyFactor: 95
    },
    {
      id: 4,
      type: 'data',
      title: 'MARKET ENTANGLEMENT',
      description: 'Real-time visualization of global business quantum entanglement correlations.',
      date: 'SEP 2031',
      icon: '⚛️',
      energyLevel: 82,
      noveltyFactor: 91
    },
      {
      id: 5,
      type: 'data',
      title: 'MARKET ENTANGLEMENT',
      description: 'Real-time visualization of global business quantum entanglement correlations.',
      date: 'SEP 2031',
      icon: '⚛️',
      energyLevel: 82,
      noveltyFactor: 91
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Particle animation
    particlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        x: gsap.utils.random(-20, 20),
        y: gsap.utils.random(-20, 20),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1
      });
    });

    // Holographic entrance animation
    gsap.from(`.${styles.newsItem}`, {
      scrollTrigger: {
        trigger: newsContainer.current,
        start: "top 80%"
      },
      y: 50,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Energy pulse animation
    gsap.to(`.${styles.energyPulse}`, {
      scale: 1.1,
      opacity: 0.3,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  const addToParticlesRef = (el) => {
    if (el && !particlesRef.current.includes(el)) {
      particlesRef.current.push(el);
    }
  };

  return (
    <div className={styles.newsContainer} ref={newsContainer}>
      <div className={styles.holographicBase}></div>
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className={styles.particle}
          ref={addToParticlesRef}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            opacity: Math.random() * 0.5 + 0.1
          }}
        ></div>
      ))}
      
      <div className={styles.newsGrid}>
        {newsItems.map((item) => (
          <div 
            key={item.id} 
            className={`${styles.newsItem} ${styles[item.type + 'Item']}`}
            data-energy={item.energyLevel}
          >
            {item.type === 'featured' ? (
              <div className={styles.featuredContent}>
                <div className={styles.energyIndicator}>
                  <div className={styles.energyLevel} style={{ width: `${item.energyLevel}%` }}></div>
                  <div className={styles.energyPulse}></div>
                </div>
                
                <h2 className={styles.featuredTitle}>
                  <span>{item.title.split(' ').slice(0, -1).join(' ')}</span>
                  <span className={styles.titleAccent}> {item.title.split(' ').pop()}</span>
                </h2>
                
                <div className={styles.holographicDivider}></div>
                
                <p className={styles.featuredDescription}>{item.description}</p>
                
                <div className={styles.authorProfile}>
                  <div className={styles.avatarHalo}>
                    <img src={item.author.avatar} alt={item.author.name} className={styles.avatar} />
                  </div>
                  <div className={styles.authorInfo}>
                    <h3 className={styles.authorName}>{item.author.name}</h3>
                    <p className={styles.authorRole}>{item.author.role}</p>
                    <div className={styles.noveltyMeter}>
                      <span>NOVELTY</span>
                      <div className={styles.meterBar}>
                        <div 
                          className={styles.meterFill} 
                          style={{ width: `${item.noveltyFactor}%` }}
                        ></div>
                      </div>
                      <span>{item.noveltyFactor}%</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.dateBadge}>
                  <span>{item.date}</span>
                  <div className={styles.dateGlow}></div>
                </div>
              </div>
            ) : item.type === 'data' ? (
              <div className={styles.dataVisualization}>
                <div className={styles.dataHeader}>
                  <span className={styles.dataIcon}>{item.icon}</span>
                  <span className={styles.dataDate}>{item.date}</span>
                </div>
                <h3 className={styles.dataTitle}>{item.title}</h3>
                <p className={styles.dataDescription}>{item.description}</p>
                
                <div className={styles.quantumGraph}>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={styles.quantumLine}>
                      <div 
                        className={styles.quantumDot} 
                        style={{ 
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
                
                <div className={styles.entanglementIndicator}>
                  <span>ENTANGLEMENT INDEX</span>
                  <div className={styles.entanglementBar}>
                    <div 
                      className={styles.entanglementFill}
                      style={{ width: `${item.energyLevel}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{item.icon}</span>
                  <span className={styles.cardDate}>{item.date}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                
                <div className={styles.cardStats}>
                  <div className={styles.statItem}>
                    <span>ENERGY</span>
                    <div className={styles.statBar}>
                      <div 
                        className={styles.statFill} 
                        style={{ width: `${item.energyLevel}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className={styles.statItem}>
                    <span>NOVELTY</span>
                    <div className={styles.statBar}>
                      <div 
                        className={styles.statFill} 
                        style={{ width: `${item.noveltyFactor}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.cardGlow}></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;