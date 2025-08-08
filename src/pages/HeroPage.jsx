import React, { useEffect, useCallback } from 'react';
import styles from '../styles/HeroPage.module.css';

const HeroPage = () => {
  // Initialize particle network
  const initParticleNetwork = useCallback((canvas) => {
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Particle settings
    const particles = [];
    const particleCount = Math.floor(canvas.width * canvas.height / 8000);
    const colors = [
      'rgba(10, 180, 255, 0.8)',
      'rgba(255, 20, 150, 0.8)',
      'rgba(150, 255, 50, 0.8)'
    ];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: Math.random() * 0.02 - 0.01
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(p => {
        // Update position with slight floating motion
        p.x += p.speedX + Math.cos(p.angle) * 0.3;
        p.y += p.speedY + Math.sin(p.angle) * 0.3;
        p.angle += p.angleSpeed;
        
        // Boundary check with bounce
        if (p.x < 0 || p.x > canvas.width) {
          p.speedX *= -1;
          p.x = p.x < 0 ? 0 : canvas.width;
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.speedY *= -1;
          p.y = p.y < 0 ? 0 : canvas.height;
        }
        
        // Draw particle
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connections to nearby particles
        particles.forEach(p2 => {
          if (p === p2) return;
          
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = 1 - distance / 120;
            ctx.strokeStyle = `rgba(10, 180, 255, ${opacity * 0.3})`;
            ctx.lineWidth = 0.5 * opacity;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // GSAP animations for other elements
  useEffect(() => {
    const animateElements = async () => {
      const gsap = (await import('gsap')).default;
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
      gsap.registerPlugin(ScrollTrigger);
      
      // Title animation
      gsap.from(`.${styles.heroTitle} span`, {
        y: 80,
        // opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3
      });
      
      // Subtitle animation
      gsap.from(`.${styles.heroSubtitle}`, {
        y: 40,
        // opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.8
      });
      
      // Button animations
      gsap.from(`.${styles.heroButton}`, {
        y: 30,
        // opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out",
        delay: 1.2
      });
      
      // Image and card animation
      gsap.from(`.${styles.cyberImage}`, {
        x: 50,
        // opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5
      });
      
      gsap.from(`.${styles.dataCard}`, {
        x: 100,
        y: 50,
        // opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        delay: 1
      });
      
      // Floating orbs animation
      const orbs = document.querySelectorAll(`.${styles.cyberOrb}`);
      orbs.forEach((orb, i) => {
        gsap.to(orb, {
          y: i % 2 ? 40 : -40,
          duration: 5 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    };
    
    animateElements();
  }, []);
  
  return (
    <section className={styles.hero}>
      {/* Advanced Background Elements */}
      <canvas 
        ref={initParticleNetwork}
        className={styles.particleNetwork}
      />
      <div className={styles.holographicGrid}></div>
      <div className={styles.scanlines}></div>
      
      {/* Floating cyber orbs */}
      <div className={`${styles.cyberOrb} ${styles.orb1}`}></div>
      <div className={`${styles.cyberOrb} ${styles.orb2}`}></div>
      <div className={`${styles.cyberOrb} ${styles.orb3}`}></div>
      
      {/* Main Content */}
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span>Being founders</span>
            {/* <span>PROTOCOL</span> */}
            <span>Takes guts </span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            <span className={styles.subtitleHighlight}>RISK_TOLERANCE.EXE</span> loaded. 
            Navigating entrepreneurial matrix with advanced decision algorithms.
          </p>
          
          <div className={styles.heroButtons}>
            <button className={`${styles.heroButton} ${styles.primaryButton}`}>
              <span>INITIATE_SEQUENCE</span>
              <div className={styles.buttonPulse}></div>
            </button>
            <button className={`${styles.heroButton} ${styles.secondaryButton}`}>
              <span>ACCESS_ARCHIVES</span>
              <div className={styles.buttonGlow}></div>
            </button>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          {/* Main cyber image */}
          <div className={styles.cyberImage}>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Cyber entrepreneur" 
              loading="eager"
            />
            <div className={styles.imageGlitch}></div>
          </div>
          
          {/* Floating data card */}
          <div className={styles.dataCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardPing}></div>
              <span>DATA_STREAM</span>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.dataRow}>
                <span>STARTUP_VITALITY</span>
                <div className={styles.dataBar}>
                  <div className={styles.barFill} style={{ width: '82%' }}></div>
                </div>
              </div>
              <div className={styles.dataRow}>
                <span>INNOVATION_INDEX</span>
                <div className={styles.dataBar}>
                  <div className={styles.barFill} style={{ width: '76%' }}></div>
                </div>
              </div>
              <div className={styles.dataRow}>
                <span>MARKET_PENETRATION</span>
                <div className={styles.dataBar}>
                  <div className={styles.barFill} style={{ width: '64%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.cardFooter}>
              <span>SYNC_COMPLETE</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cyber scroll indicator */}
      <div className={styles.scrollCue}>
        <div className={styles.scrollLine}></div>
        <span>SCROLL_TO_DECRYPT</span>
      </div>
    </section>
  );
};

export default HeroPage;