

import React, { useRef, useEffect } from 'react';
import styles from '../styles/Sponsor.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Sponsors = () => {
  const sponsorRefs = useRef([]);
  const particleRefs = useRef([]);
  const connectionRefs = useRef([]);

  const sponsors = [
    { id: 1, name: "QUANTECH", tier: "PLATINUM CORE",  },
    { id: 2, name: "NEURALIS", tier: "GOLD MATRIX" },
    { id: 3, name: "HOLO CORP", tier: "PLATINUM CORE" },
    { id: 4, name: "CYBERNOVA", tier: "SILVER NODE" },
    { id: 5, name: "DIGITALIS", tier: "GOLD MATRIX" },
    { id: 6, name: "FUTUREX", tier: "QUANTUM TIER" }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Ensure elements are visible before animating
    gsap.set([...sponsorRefs.current, ...connectionRefs.current], {
      opacity: 1,
      scale: 1
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

    // Sponsor orb animation
    sponsorRefs.current.forEach((sponsor, i) => {
      gsap.from(sponsor, {
        scale: 0,
        duration: 1,
        delay: i * 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sponsor,
          start: "top 80%",
          toggleActions: "play none none none" // Only play once
        }
      });
    });

    // Connection animation
    connectionRefs.current.forEach((connection, i) => {
      gsap.from(connection, {
        scaleX: 0,
        duration: 1.5,
        delay: i * 0.3,
        scrollTrigger: {
          trigger: connection,
          start: "top center",
          toggleActions: "play none none none" // Only play once
        },
        ease: "power3.out"
      });
    });

    // Fallback in case ScrollTrigger fails
    const fallbackAnimation = setTimeout(() => {
      gsap.to([...sponsorRefs.current, ...connectionRefs.current], {
        opacity: 1,
        scale: 1,
        duration: 1
      });
    }, 1000);

    return () => clearTimeout(fallbackAnimation);
  }, []);

  const addToSponsorsRef = (el) => {
    if (el && !sponsorRefs.current.includes(el)) {
      sponsorRefs.current.push(el);
    }
  };

  const addToParticlesRef = (el) => {
    if (el && !particleRefs.current.includes(el)) {
      particleRefs.current.push(el);
    }
  };

  const addToConnectionsRef = (el) => {
    if (el && !connectionRefs.current.includes(el)) {
      connectionRefs.current.push(el);
    }
  };

  const getTierColor = (tier) => {
    switch (tier) {
      case "PLATINUM CORE": return "#00f0ff";
      case "GOLD MATRIX": return "#ffcc00";
      case "SILVER NODE": return "#c0c0c0";
      case "QUANTUM TIER": return "#ff00f0";
      default: return "#ffffff";
    }
  };

  return (
    <div className={styles.quantumSponsors}>
      {/* Quantum particles */}
      {[...Array(30)].map((_, i) => (
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

      <section className={styles.sponsorNetwork}>
        <div className={styles.networkHeader}>
          <div className={styles.headerDivider}></div>
          <span className={styles.networkTag}>QUANTUM PARTNER MATRIX</span>
          <div className={styles.headerDivider}></div>
        </div>

        <h2 className={styles.networkTitle}>
          <span>INTERDIMENSIONAL SUPPORT NETWORK</span>
        </h2>

        <div className={styles.sponsorGrid}>
          {sponsors.map((sponsor, index) => (
            <React.Fragment key={sponsor.id}>
              {/* Quantum connections */}
              {index > 0 && (
                <div
                  className={styles.quantumConnection}
                  ref={addToConnectionsRef}
                  style={{
                    top: `${Math.random() * 40 + 30}%`,
                    left: `${Math.random() * 20 - 10}%`,
                    width: `${Math.random() * 20 + 60}%`
                  }}
                ></div>
              )}

              <div
                className={styles.sponsorOrb}
                ref={addToSponsorsRef}
                style={{
                  '--tier-color': getTierColor(sponsor.tier)
                }}
              >
                <div className={styles.orbHalo}></div>
                <div className={styles.orbCore}>
                  <span className={styles.sponsorName}>{sponsor.name}</span>
                  <span className={styles.sponsorTier}>{sponsor.tier}</span>
                </div>
                <div className={styles.orbParticles}>
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={styles.orbParticle}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className={styles.quantumSignature}>
          <span>VERIFIED BY QUANTUM ENTANGLEMENT PROTOCOL</span>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;



