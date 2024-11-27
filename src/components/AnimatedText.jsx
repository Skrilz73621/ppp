// AnimatedText.jsx
import React, { useEffect, useState } from 'react';
import styles from './AnimatedText.module.css';
import TypingText from './TypingText/TypingText';

const   AnimatedText = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 500); 
    return () => clearTimeout(timeout);
  }, []);

  const messages = [
    'Welcome to my portfolio!',
    'My name is Nursultan!',
    'I am frontend developer!',
    'Responsible person!'
  ]

  return (
    <h1 className={`${styles.animatedText} ${visible ? styles.visible : ''}`}>
      <TypingText props = {messages} fontSize = '4rem'/>
    </h1>
  );
};

export default AnimatedText;
