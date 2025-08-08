import React, { useRef, useEffect } from 'react';
import styles from '../styles/Success.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Success = () => {
  const quantumNodes = useRef([]);
  const dataStreamRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Quantum node animation
    quantumNodes.current.forEach((node, i) => {
      gsap.to(node, {
        y: i % 2 ? 15 : -15,
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    // Data stream animation
    gsap.fromTo(dataStreamRef.current,
      { x: -100 },
      {
        x: 100,
        duration: 10,
        repeat: -1,
        ease: "none",
        scrollTrigger: {
          trigger: `.${styles.successSection}`,
          start: "top center"
        }
      }
    );

    // Success counter animation
    gsap.from(`.${styles.quantumValue}`, {
      textContent: 0,
      duration: 2,
      ease: "power3.out",
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: `.${styles.successHeader}`,
        start: "top 80%"
      }
    });
  }, []);

  const addToNodesRef = (el) => {
    if (el && !quantumNodes.current.includes(el)) {
      quantumNodes.current.push(el);
    }
  };

  return (
    <div className={styles.quantumSuccess}>
      {/* Quantum background elements */}
      <div className={styles.quantumField}></div>
      <div className={styles.dataStream} ref={dataStreamRef}>
        <svg viewBox="0 0 500 100" preserveAspectRatio="none">
          <path 
            d="M0,50 C100,10 150,90 250,50 C350,10 400,90 500,50" 
            fill="none" 
            stroke="url(#dataGradient)"
            strokeWidth="2"
            strokeDasharray="5 3"
          />
          <defs>
            <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="50%" stopColor="#ff00f0" />
              <stop offset="100%" stopColor="#00f0ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <section className={styles.successSection}>
        <div className={styles.successContent}>
          <div className={styles.successHeader}>
            <div className={styles.quantumDivider}></div>
            <span className={styles.successTag}>ADMINISTRATION MATRIX</span>
          </div>
          
          <h2 className={styles.successTitle}>
            <span>NEURAL SUPPORT NETWORK</span>
            <span className={styles.successHighlight}>
              <span>OPTIMIZING YOUR</span>
              <span>QUANTUM SUCCESS</span>
            </span>
          </h2>

          <div className={styles.quantumValue}>$23,450.00</div>
          
          <p className={styles.successDescription}>
            Our quantum-assisted administrative systems handle 284% more transactions than classical methods, 
            ensuring your venture operates at peak efficiency across all dimensions.
          </p>
        </div>

        <div className={styles.quantumDashboard}>
          {/* Startup Metrics Card */}
          <div className={`${styles.dashboardCard} ${styles.metricsCard}`}>
            <div className={styles.cardOrb}></div>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>📈</span>
              <h3 className={styles.cardTitle}>STARTUP QUANTUM METRICS</h3>
            </div>
            <div className={styles.quantumStat}>
              <span className={styles.statValue}>80.3%</span>
              <span className={styles.statLabel}>INVESTOR CONVERGENCE</span>
            </div>
            <div className={styles.quantumGraph}>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className={styles.graphBar}>
                  <div 
                    className={styles.barFill}
                    style={{ height: `${Math.random() * 80 + 20}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction Card */}
          <div className={`${styles.dashboardCard} ${styles.transactionCard}`}>
            <div className={styles.quantumNode} ref={addToNodesRef}>
              <div className={styles.nodePulse}></div>
            </div>
            <div className={styles.profileHologram}>
              <div className={styles.holoGrid}></div>
              <div className={styles.profileImage}></div>
            </div>
            <div className={styles.transactionInfo}>
              <span className={styles.profileName}>JOHN QUANTUM</span>
              <span className={styles.transactionLabel}>QUANTUM TRANSFER</span>
              <span className={styles.transactionAmount}>$2,500.45</span>
            </div>
            <div className={styles.quantumSignature}>
              <span>VERIFIED BY BLOCKCHAIN NEURAL NET</span>
            </div>
          </div>

          {/* Founder Card */}
          <div className={`${styles.dashboardCard} ${styles.founderCard}`}>
            <div className={styles.founderHeader}>
              <div className={styles.founderHolo}>
                <div className={styles.holoGrid}></div>
                <div className={styles.founderImage}></div>
              </div>
              <div className={styles.founderDetails}>
                <span className={styles.founderName}>JANE ENTANGLEMENT</span>
                <span className={styles.founderRole}>QUANTUM FOUNDER</span>
              </div>
            </div>
            <p className={styles.founderQuote}>
              "Our quantum administrative algorithms process 1.2 million transactions per second across parallel dimensions, 
              ensuring your success is not just probable - it's quantum certain."
            </p>
            <div className={styles.quantumBadge}>
              <span>EPCC QUANTUM CERTIFIED</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;