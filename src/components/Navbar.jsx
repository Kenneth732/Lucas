import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const location = useLocation();
  const navRef = useRef();
  const particlesRef = useRef([]);

  // Quantum particles
  const particles = Array(15).fill();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate quantum particles
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

    // Menu open/close animation
    if (isMenuOpen) {
      gsap.to(`.${styles.navBackground}`, {
        clipPath: 'circle(150% at 90% 40px)',
        duration: 1.2,
        ease: "power3.inOut"
      });
      gsap.from(`.${styles.navLink}`, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3
      });
      gsap.from(`.${styles.navButton}`, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6
      });
    } else {
      gsap.to(`.${styles.navBackground}`, {
        clipPath: 'circle(0% at 90% 40px)',
        duration: 0.8,
        ease: "power3.in"
      });
    }
  }, [isMenuOpen]);

  const handleHover = (index) => {
    setActiveHover(index);
    gsap.to(`.${styles.linkParticle}`, {
      opacity: 0,
      duration: 0.3
    });
    gsap.to(`.${styles.navLink}:nth-child(${index + 1}) .${styles.linkParticle}`, {
      opacity: 1,
      duration: 0.6
    });
  };

  const addToParticlesRef = (el) => {
    if (el && !particlesRef.current.includes(el)) {
      particlesRef.current.push(el);
    }
  };

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/about", name: "About" },
    { path: "/joinus", name: "Join Us" },
    { path: "/news", name: "News" }
  ];

  return (
    <header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpen : ''}`}
      ref={navRef}
    >
      {/* Quantum particles */}
      {particles.map((_, i) => (
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

      <div className={styles.navbarContainer}>
        <div className={styles.navLogo}>
          <Link to="/" className={styles.logoLink}>
            <span className={styles.logoMain}>LUCAS</span>
            <span className={styles.logoDot}>.</span>
            <div className={styles.logoPulse}></div>
          </Link>
        </div>

        <div 
          className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <div className={styles.menuLine}></div>
          <div className={styles.menuLine}></div>
          <div className={styles.menuLine}></div>
          <div className={styles.menuHalo}></div>
        </div>

        <div className={`${styles.navContent} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.navBackground}></div>
          
          <ul className={styles.navLinks}>
            {navItems.map((item, index) => (
              <li 
                key={item.path}
                className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => setActiveHover(null)}
              >
                <Link to={item.path} onClick={() => setIsMenuOpen(false)}>
                  <span className={styles.linkText}>{item.name}</span>
                  <span className={styles.linkHover}>{item.name}</span>
                  <div className={styles.linkParticle}></div>
                  <div className={styles.linkTrail}></div>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className={styles.navButton}>
            <button className={styles.quantumButton}>
              <span>Register</span>
              <div className={styles.buttonOrb}></div>
              <div className={styles.buttonPulse}></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;