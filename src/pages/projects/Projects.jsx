import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Projects.module.css';
import Example from '../example/Example';
import Navbar from '../navBar/NavBar';
import Pets from '../../components/pets/Pets';
import hk_photo from '../../media/123.png'
import eMenuPhoto from '../../media/emenu.png'
import GSP from '../../media/GSP.png'
import pccPhoto from '../../media/pcc.png'

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          x: index % 2 === 0 ? 200 : -200,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            markers: false,
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={(el) => sectionRefs.current.push(el)}
        className={styles.section}
        onClick={() => window.open('https://nurdinbuy.github.io/hollow-knight/index.html', '_blank')}
      >
        <Pets
          name={'Hollow knight project'}
          description={
            'This project is a fan work inspired by the cult game Hollow Knight. This is a pet project created with sincere love for the mysterious world of Hallownest, its dark but fascinating atmosphere, unforgettable characters and amazing music.'
          }
          photo={hk_photo}
        />
      </div>
      <div ref={(el) => sectionRefs.current.push(el)} className={styles.section} onClick={() => window.open('https://e-menu-ivory.vercel.app/', '_blank')}>
        <Pets name={'eMenu (Only for phones)'} description={'This project is an interactive electronic menu designed for restaurants, cafes, or delivery services. The application provides an easy and modern way to display dishes for users, allowing them to quickly and easily browse available items. The menu includes photos and detailed descriptions of each dish, helping customers make better-informed decisions.'} photo={eMenuPhoto}/>
      </div>
      <div ref={(el) => sectionRefs.current.push(el)} className={styles.section} onClick={() => window.open('https://github.com/adilet0000/Project-Games.git', '_blank')}>
        <Pets name={'Gmae Search Project'} description={'This project is dedicated to showcasing my favorite games, providing a personal and interactive space to celebrate the games that have had the greatest impact on me. It features detailed information about each game, including their storylines, characters, and gameplay mechanics. The project is designed to highlight the unique aspects of these games, offering insights and reflections on what makes them special.'} photo={GSP}/>
      </div>
      <div ref={(el) => sectionRefs.current.push(el)} className={styles.section} onClick={() => window.open('https://iziplayclub.ru/', '_blank')}>
        <Pets name={'PCC'} description={'This project is focused on computer clubs, providing a comprehensive platform for gaming communities to connect, compete, and collaborate. It highlights the features of various computer clubs, such as their gaming setups, available games, events, and membership options.'} photo={pccPhoto} />
      </div>
      <Example id="particles" backgroundColor="#003b46" particleColor="#c4dfe6" />
    </div>
  );
};

export default Projects;
