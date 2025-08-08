import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import styles from "../styles/DevSignature.module.css";

const DevSignature = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const showToast = () => {
      setShow(true);
      setTimeout(() => setShow(false), 5000); // visible for 5 seconds
    };

    showToast(); // show instantly
    const interval = setInterval(showToast, 30000); // repeat every 30s

    return () => clearInterval(interval);
  }, []);

  return (
    show && (
      <div className={styles.toast}>
        <img
          src="https://github.com/account"
          alt="Kenneth Mburu"
          className={styles.avatar}
        />
        <div>
          <h4>
            👨‍💻 Built by{" "}
            <span className={styles.highlight}>Kenneth Mburu</span>
          </h4>
          <p>Full-Stack Developer | Crafting with Passion 🚀</p>
          <div className={styles.links}>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default DevSignature;
