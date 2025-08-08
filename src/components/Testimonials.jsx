

import React, { useRef, useEffect } from 'react';
import styles from '../styles/Testimonials.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Testimonials = () => {
  const connectionRefs = useRef([]);
  const particleRefs = useRef([]);
  
  const testimonials = [
    {
      name: "JOHN QUANTUM",
      title: "QUANTUM CEO, NEXUS CORP",
      feedback: "The neural support network boosted our quantum processing by 284% across all dimensions. Truly transcendent!",
      energy: 92,
      connection: 88
    },
    {
      name: "JANE ENTANGLEMENT",
      title: "CTO, HOLO TECH",
      feedback: "Our startup achieved 12-dimensional convergence in just 3 quantum cycles. Unprecedented results!",
      energy: 87,
      connection: 94
    },
    {
      name: "ALICE SUPERPOSITION",
      title: "QUANTUM PRODUCT LEAD",
      feedback: "The multi-verse alignment algorithms helped us secure funding across 7 parallel realities simultaneously.",
      energy: 95,
      connection: 91
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Connection line animation
    connectionRefs.current.forEach((connection, i) => {
      gsap.from(connection, {
        scaleX: 0,
        duration: 1.5,
        delay: i * 0.3,
        scrollTrigger: {
          trigger: connection,
          start: "top 80%"
        },
        ease: "power3.out"
      });
    });

    // Particle animation
    particleRefs.current.forEach((particle, i) => {
      gsap.to(particle, {
        x: gsap.utils.random(-10, 10),
        y: gsap.utils.random(-10, 10),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1
      });
    });

    // Testimonial card animation
    gsap.from(`.${styles.testimonialCard}`, {
      y: 50,
      // opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: `.${styles.testimonialGrid}`,
        start: "top 80%"
      },
      ease: "power3.out"
    });
  }, []);

  const addToConnectionsRef = (el) => {
    if (el && !connectionRefs.current.includes(el)) {
      connectionRefs.current.push(el);
    }
  };

  const addToParticlesRef = (el) => {
    if (el && !particleRefs.current.includes(el)) {
      particleRefs.current.push(el);
    }
  };

  return (
    <div className={styles.quantumTestimonials}>
      {/* Quantum particles */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className={styles.quantumParticle}
          ref={addToParticlesRef}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            opacity: Math.random() * 0.3 + 0.1
          }}
        ></div>
      ))}

      <section className={styles.testimonialNetwork}>
        <div className={styles.networkHeader}>
          <div className={styles.headerDivider}></div>
          <span className={styles.networkTag}>QUANTUM ENDORSEMENT MATRIX</span>
        </div>
        
        <h2 className={styles.networkTitle}>
          <span>NEURAL FEEDBACK PATHS</span>
          <span className={styles.titleHighlight}>ACROSS MULTIPLE DIMENSIONS</span>
        </h2>

        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              {/* Quantum connection lines */}
              {index > 0 && (
                <div 
                  className={styles.quantumConnection} 
                  ref={addToConnectionsRef}
                  style={{
                    top: `${Math.random() * 40 + 30}%`,
                    left: `${Math.random() * 20 - 10}%`,
                    width: `${Math.random() * 20 + 80}%`
                  }}
                ></div>
              )}

              <div className={styles.cardHologram}>
                <div className={styles.holoGrid}></div>
                <div 
                  className={styles.profileImage}
                  style={{ 
                    backgroundImage: `url(https://randomuser.me/api/portraits/${index % 2 ? 'women' : 'men'}/${index + 30}.jpg)`
                  }}
                ></div>
                <div className={styles.energyLevel} style={{ width: `${testimonial.energy}%` }}></div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.clientName}>{testimonial.name}</h3>
                <p className={styles.clientTitle}>{testimonial.title}</p>
                
                <div className={styles.connectionStrength}>
                  <span>NEURAL CONNECTION</span>
                  <div className={styles.connectionBar}>
                    <div 
                      className={styles.connectionFill} 
                      style={{ width: `${testimonial.connection}%` }}
                    ></div>
                  </div>
                </div>

                <p className={styles.clientFeedback}>"{testimonial.feedback}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.quantumSignature}>
          <span>VERIFIED BY QUANTUM ENDORSEMENT NETWORK</span>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

