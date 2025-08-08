import React, { useRef, useEffect } from 'react';
import styles from '../styles/Footer.module.css';
import { gsap } from 'gsap';

const Footer = () => {
  const particleRefs = useRef([]);
  const linkRefs = useRef([]);

  useEffect(() => {
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

    // Link hover animation
    linkRefs.current.forEach((link) => {
      const hover = link.querySelector(`.${styles.linkHover}`);
      link.addEventListener('mouseenter', () => {
        gsap.to(hover, { scaleX: 1, duration: 0.3, ease: "power2.out" });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(hover, { scaleX: 0, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  const addToParticlesRef = (el) => {
    if (el && !particleRefs.current.includes(el)) {
      particleRefs.current.push(el);
    }
  };

  const addToLinksRef = (el) => {
    if (el && !linkRefs.current.includes(el)) {
      linkRefs.current.push(el);
    }
  };

  return (
    <footer className={styles.quantumFooter}>
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

      <div className={styles.footerGrid}>
        <div className={styles.footerBrand}>
          <div className={styles.logo}>
            <span>LU</span>
            <span className={styles.logoAccent}>CAS</span>
            <div className={styles.logoPulse}></div>
          </div>
          <p className={styles.tagline}>
            Interdimensional digital experiences crafted with quantum precision
          </p>
          <div className={styles.socialLinks}>
            {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
              <a 
                key={social}
                href="#"
                className={styles.socialLink}
                ref={addToLinksRef}
              >
                {social}
                <span className={styles.linkHover}></span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerNav}>
          <div className={styles.navColumn}>
            <h3 className={styles.navTitle}>EXPLORE</h3>
            {['Home', 'Work', 'Services', 'About'].map((item) => (
              <a 
                key={item}
                href="#"
                className={styles.navLink}
                ref={addToLinksRef}
              >
                {item}
                <span className={styles.linkHover}></span>
              </a>
            ))}
          </div>
          <div className={styles.navColumn}>
            <h3 className={styles.navTitle}>RESOURCES</h3>
            {['Blog', 'Tutorials', 'Docs', 'Research'].map((item) => (
              <a 
                key={item}
                href="#"
                className={styles.navLink}
                ref={addToLinksRef}
              >
                {item}
                <span className={styles.linkHover}></span>
              </a>
            ))}
          </div>
          <div className={styles.navColumn}>
            <h3 className={styles.navTitle}>CONNECT</h3>
            {['Contact', 'Careers', 'Press', 'Investors'].map((item) => (
              <a 
                key={item}
                href="#"
                className={styles.navLink}
                ref={addToLinksRef}
              >
                {item}
                <span className={styles.linkHover}></span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.newsletter}>
          <h3 className={styles.newsletterTitle}>JOIN THE QUANTUM NETWORK</h3>
          <p className={styles.newsletterText}>
            Subscribe to our interdimensional newsletter for cosmic updates
          </p>
          <div className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="YOUR@QUANTUM.EMAIL" 
              className={styles.newsletterInput}
            />
            <button className={styles.newsletterButton}>
              <span>TRANSMIT</span>
              <div className={styles.buttonOrb}></div>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Quantum Lucas. All dimensions reserved.
        </div>
        <div className={styles.legalLinks}>
          {['Privacy', 'Terms', 'Cookies', 'Security'].map((item) => (
            <a 
              key={item}
              href="#"
              className={styles.legalLink}
              ref={addToLinksRef}
            >
              {item}
              <span className={styles.linkHover}></span>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.quantumSignature}>
        <span>VERIFIED BY QUANTUM ENCRYPTION PROTOCOL</span>
      </div>
    </footer>
  );
};

export default Footer;