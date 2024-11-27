import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../navBar/NavBar';
import Example from '../example/Example';
import AnimatedText from '../../components/AnimatedText';
import AboutMe from '../../components/AboutMe/AboutMe';
import Card from '../../components/Card/Card';
import Footer from '../footer/Footer';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiVite, SiRedux, SiDjango, SiReact } from 'react-icons/si';

export default function Main() {
  const cardsRef = useRef(null);
  const headerRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(headerRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from(aboutRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.fromTo(
      Array.from(cardsRef.current.children),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div style={{ overflow: 'hidden' }}>
      <Example id="particles" backgroundColor="#000000" particleColor="#FFFFFF" />
      <Navbar />

      <div ref={aboutRef} style={{ textAlign: 'center', color: 'white', marginTop: '10rem' }}>
        <h1 style={{ fontSize: '4rem' }}>About me</h1>
        <AboutMe />
      </div>

      <div
        ref={headerRef}
        style={{ zIndex: '1010', color: 'white', position: 'relative', textAlign: 'center', fontSize: '2rem' }}
      >
        <h1>What I do</h1>
        <h3>The current languages and libraries I know by far</h3>
      </div>

      <div ref={cardsRef} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card
          gradientColors={['#e34c26', '#f06529', '#ef652a']}
          IconComponent={FaHtml5}
          title="HTML"
          width={'250px'}
          onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/HTML', '_blank')}
        />
        <Card
          gradientColors={['#264de4', '#2965f1', '#2a73f5']}
          IconComponent={FaCss3Alt}
          title="CSS"
          width={'250px'}
          onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/CSS', '_blank')}
        />
        <Card
          gradientColors={['#f0db4f', '#f7e018', '#f6cf13']}
          IconComponent={FaJs}
          title="JavaScript"
          width={'250px'}
          onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank')}
        />
        <Card
          gradientColors={['#61dafb', '#21a1f1', '#1d8ed1']}
          IconComponent={FaReact}
          title="React"
          width={'250px'}
          onClick={() => window.open('https://reactjs.org/docs/getting-started.html', '_blank')}
        />
        <Card
          gradientColors={['#646cff', '#3e54f3', '#8093ff']}
          IconComponent={SiVite}
          title="Vite-React"
          width={'250px'}
          onClick={() => window.open('https://vitejs.dev/guide/', '_blank')}
        />
        <Card
          gradientColors={['#764abc', '#6e40c9', '#5d33d4']}
          IconComponent={SiRedux}
          title="Redux"
          width={'250px'}
          onClick={() => window.open('https://redux.js.org/introduction/getting-started', '_blank')}
        />
        <Card
          gradientColors={['#0d76a8', '#0a507e', '#083d63']}
          IconComponent={SiReact}
          title="React Native"
          width={'250px'}
          onClick={() => window.open('https://reactnative.dev/docs/getting-started', '_blank')}
        />
        <Card
          gradientColors={['#092e20', '#135c38', '#1f7b4c']}
          IconComponent={SiDjango}
          title="Django"
          width={'250px'}
          onClick={() => window.open('https://docs.djangoproject.com/en/stable/', '_blank')}
        />
        <Card
          gradientColors={['#f14e32', '#e44d26', '#d04b26']}
          IconComponent={FaGitAlt}
          title="Git"
          width={'250px'}
          onClick={() => window.open('https://git-scm.com/doc', '_blank')}
        />
      </div>

    </div>
  );
}
