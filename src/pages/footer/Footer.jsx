import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>© 2024, All Rights Reserved. Made by Isamnkulov Nursultan</p>
        
        <div className={styles.socials}>
          <a href="https://github.com/Skrilz73621" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://discord.gg/Nb6WXW3G" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className="fab fa-discord"></i>
          </a>
          <a href="https://www.instagram.com/skrilz73621/profilecard/?igsh=eml6Y3pqdWNrdzl6" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className={styles.additionalLinks}>
          <a href="/privacy" className={styles.link}>Privacy Policy</a>
          <a href="/terms" className={styles.link}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
