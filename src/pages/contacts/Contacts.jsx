import React, { useEffect, useRef } from 'react';
import Example from '../example/Example';
import Navbar from '../navBar/NavBar';
import { gsap } from 'gsap';
import styles from './Contacts.module.css';
import Button from '../../components/button/Button';
import Card from '../../components/Card/Card';
import { FaPhone, FaAt, FaTelegram } from 'react-icons/fa';

export default function Contacts() {

  const titleRef = useRef(null);
  const formRef = useRef(null);
  const cardsWrapperRef = useRef(null); 
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
    );

    gsap.fromTo(
      formRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, delay: 0.5, ease: "power4.out" }
    );

    gsap.fromTo(
      cardsWrapperRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.5 }
    );
  }, []);

  return (
    <div>
      <Example id="particles" backgroundColor="#42313a" particleColor="#f1dcc9" />

      <div
        ref={cardsWrapperRef}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems:'center'}}
      >

        
        <div className={styles.divCard}>
          <Card
            gradientColors={['#34ebba', '#2ca1a2', '#6fffc7']}
            IconComponent={FaPhone}
            title="+996-702-76-24-76"
            width={'350px'}
          />
          <Button textToCopy={'+996702762476'} text={'Copy phone number!'}/>
        </div>
        <div className={styles.divCard}>
          <Card
            gradientColors={['#f3aa47', '#f37121', '#f3ca6e']}
            IconComponent={FaAt}
            title="ailawanlove736@gmail.com"
            width={'420px'}
            waveMargin={"100px"}
          />
          <Button textToCopy={'ailawanlove@gmail.com'} text={'Copy email address number!'}/>
        </div >
        <div className={styles.divCard}>
          <Card
            gradientColors={['#0088cc', '#005f99', '#33a1ff']}
            IconComponent={FaTelegram}
            title="Kxosh"
            width={'350px'}
          />
          <Button textToCopy={'Kxosh'} text={'Copy telegram nickname!'}/>
        </div>
      </div>
    </div>
  );
}
