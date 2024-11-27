// components/ScrollComponent.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Projects.module.css';
import Example from '../example/Example';
import Navbar from '../navBar/NavBar';
import Pets from '../../components/pets/Pets';

gsap.registerPlugin(ScrollTrigger);

const ScrollComponent = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      // Анимация сдвига при попадании в поле зрения
      gsap.fromTo(
        section,
        {
          opacity: 0, // Изначально скрыто
          x: index % 2 === 0 ? 200 : -200, // Начальный сдвиг (вправо или влево)
        },
        {
          opacity: 1, // Конечная прозрачность
          x: 0, // Конечная позиция (по центру)
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', // Анимация начинается при попадании в область видимости
            end: 'top 20%',
            markers: false, // Отключаем маркеры (для отладки можно включить)
            once: true, // Анимация будет выполнена только один раз
          },
        }
      );
    });
  }, []);

  return (
    <div className={styles.container}>
      <div ref={(el) => sectionRefs.current.push(el)} className={styles.section}>
        <Pets name={'Hollow knight project'} />
      </div>
      <div ref={(el) => sectionRefs.current.push(el)} className={styles.section} onClick={() => window.open('https://nurdinbuy.github.io/hollow-knight/index.html', '_blank')}>
        <Pets name={'eMenu'} />
      </div>
      <div ref={(el) => sectionRefs.current.push(el)} className={styles.section}>
        <Pets name={'Name'} />
      </div>
      <div ref={(el) => sectionRefs.current.push(el)} className={styles.section}>
        <Pets name={'Name'} />
      </div>
        <Example id="particles" backgroundColor="#003b46" particleColor="#c4dfe6" />
        <Navbar />
    </div>
  );
};

export default ScrollComponent;
