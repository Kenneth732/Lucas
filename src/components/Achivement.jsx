import React, { useRef, useEffect } from 'react';
import styles from '../styles/Achievement.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Achievement = () => {
  const quantumNodes = useRef([]);
  const particleRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Quantum node animation
    quantumNodes.current.forEach((node, i) => {
      gsap.to(node, {
        y: i % 2 ? 10 : -10,
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    // Particle animation
    particleRefs.current.forEach((particle, i) => {
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

    // Achievement counter animation
gsap.from(`.${styles.quantumNumber}`, {
  textContent: 0,
  duration: 0,
  ease: "power3.out",
  snap: { textContent: 1 },
  stagger: 1,
  immediateRender: false,  // Add this
  scrollTrigger: {
    trigger: `.${styles.achievementContainer}`,
    start: "top center"
  }
});

    // Data stream animation
    gsap.to(`.${styles.dataStream} path`, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: `.${styles.quantumVisualization}`,
        start: "top center"
      }
    });
  }, []);

  const addToNodesRef = (el) => {
    if (el && !quantumNodes.current.includes(el)) {
      quantumNodes.current.push(el);
    }
  };

  const addToParticlesRef = (el) => {
    if (el && !particleRefs.current.includes(el)) {
      particleRefs.current.push(el);
    }
  };

  return (
    <div className={styles.achievementContainer}>
      {/* Quantum background elements */}
      <div className={styles.quantumField}></div>
      
      {/* Floating quantum particles */}
      {[...Array(30)].map((_, i) => (
        <div 
          key={i}
          className={styles.quantumParticle}
          ref={addToParticlesRef}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            opacity: Math.random() * 0.5 + 0.1,
            animationDelay: `${i * 0.1}s`
          }}
        ></div>
      ))}
      
      <div className={styles.achievementContent}>
        <div className={styles.quantumStats}>
          <h2 className={styles.quantumNumber}>25,000</h2>
          {/* <h2 className={styles.quantumNumber} style={{ opacity: 0 }}>25,000</h2> */}
          <div className={styles.quantumPlus}>+</div>
          <p className={styles.quantumDescription}>
            Entangled success metrics across our quantum network demonstrate unprecedented achievement synchronization
          </p>
          
          <div className={styles.quantumBadges}>
            <div className={styles.quantumBadge}>
              <div className={styles.badgeCore}></div>
              <span>GLOBAL RECOGNITION</span>
            </div>
            <div className={styles.quantumBadge}>
              <div className={styles.badgeCore}></div>
              <span>QUANTUM CERTIFIED</span>
            </div>
          </div>
        </div>
        
        <div className={styles.quantumVisualization}>
          {/* Quantum achievement nodes */}
          <div className={styles.quantumNodes}>
            {[1, 2, 3, 4, 5].map((node, i) => (
              <div 
                key={i}
                className={styles.quantumNode}
                ref={addToNodesRef}
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${30 + (i % 2 === 0 ? -10 : 10)}%`
                }}
              >
                <div className={styles.nodePulse}></div>
              </div>
            ))}
          </div>
          
          {/* Data stream visualization */}
          <div className={styles.dataStream}>
            <svg viewBox="0 0 500 300" preserveAspectRatio="none">
              <path 
                d="M10,150 C100,50 150,250 250,150 C350,50 400,250 490,150" 
                fill="none" 
                stroke="url(#quantumGradient)"
                strokeWidth="2"
                strokeDasharray="1000"
                strokeDashoffset="1000"
              />
              <defs>
                <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00f0ff" />
                  <stop offset="50%" stopColor="#ff00f0" />
                  <stop offset="100%" stopColor="#00f0ff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Holographic achievement display */}
          <div className={styles.holographicDisplay}>
            <div className={styles.holoGrid}></div>
            <div className={styles.holoImage}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Quantum Achievement"
              />
            </div>
            <div className={styles.holoOverlay}></div>
            <div className={styles.holoBadge}>
              <span>2031</span>
              <span>QUANTUM ERA</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quantum metrics */}
      <div className={styles.quantumMetrics}>
        <div className={styles.metricCard}>
          <div className={styles.metricIcon}>⚡</div>
          <h3 className={styles.metricTitle}>DATA INTEGRITY</h3>
          <div className={styles.metricValue}>99.99%</div>
          <div className={styles.metricBar}>
            <div className={styles.metricFill} style={{ width: '99.99%' }}></div>
          </div>
          <p className={styles.metricDescription}>
            Quantum-encrypted data verification across all neural networks
          </p>
        </div>
        
        <div className={styles.metricCard}>
          <div className={styles.metricIcon}>🚀</div>
          <h3 className={styles.metricTitle}>PERFORMANCE</h3>
          <div className={styles.metricValue}>3.5x</div>
          <div className={styles.metricBar}>
            <div className={styles.metricFill} style={{ width: '82%' }}></div>
          </div>
          <p className={styles.metricDescription}>
            Faster than classical computing benchmarks
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;