import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css';
import { useNavigate } from 'react-router-dom';
import TypingText from '../../components/TypingText/TypingText';

const Navbar = () => {
  const navigate = useNavigate();

  const messages = [
    'Welcome to my portfolio!',
    'My name is Nursultan!',
    'I am frontend developer!',
    'Responsible person!',
  ];

  const handleNavigation = (path) => {
    navigate(path);
    window.location.reload();
  };

  return (
    <div className={`${styles.container} ${styles.glassBackground} ${styles.borderXwidth}`}>

      <div className={styles.typingTextWrapper}>
        <TypingText props={messages} fontSize="2rem" />
      </div>

      <div className={styles.linkContainer}>
        <Link onClick={() => handleNavigation('/')}>HOME</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/contacts">CONTACT</Link>
      </div>
    </div>
  );
};

export default Navbar;
