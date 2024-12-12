import React from 'react';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.label}><hr />About Me <hr /></div>
      <img
        src="https://plus.unsplash.com/premium_photo-1673448391005-d65e815bd026?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8fDA%3D "
        alt="Your Profile"
        className={styles.image}
      />
      <div className={styles.description}>
        <h2>Hello, I'm Nursultan</h2>
        <p style={{textAlign:'center', width:'40rem'}}>
          I am a passionate front-end developer with strong expertise in HTML, CSS, JavaScript, React, and Git.
          I am currently expanding my skill set by learning back-end development to become a well-rounded full-stack developer.
          My goal is to create efficient and beautiful applications that make a positive impact in the tech world.
          I specialize in building high-quality web applications and am always excited to learn new technologies and improve my skills.
        </p>
      </div>
    </div>
  );
}
