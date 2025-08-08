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
          src="data:image/jpeg;base64,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"
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
