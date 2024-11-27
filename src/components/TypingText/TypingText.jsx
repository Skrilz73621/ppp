
import React from 'react';
import TypingEffect from 'react-typing-effect';
import styles from './TypingText.module.css';
import Bubbles from '../Bubbles/Bubbles';
import SocialCard from '../SocialCard/SocialCard'

const TypingText = ({props, fontSize}) => {
  return (
    <div className={styles.typingContainer} style={{ fontSize }}>
      <div style={{display:'flex', flexDirection:"column", justifyContent:'flex-end', alignItems:'center'}}>
        <TypingEffect
          text={props}
          speed={100}
          eraseSpeed={50}
          typingDelay={500} 
        />
        {/* <SocialCard/> */}
      </div>
    </div>
  );
};

export default TypingText;
