// src/components/HeroSection/HeroSection.tsx
import React, { useEffect } from 'react';
import styles from '../../components/HeroSection/HeroSection.module.css'; // Caminho corrigido
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  useEffect(() => {
    gsap.to(`.${styles.hero}`, {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: `.${styles.hero}`,
        start: 'top center',
        scrub: true,
      },
    });
  }, []);

  return (
    <section className={`${styles.hero} h-screen`}>
      <h1 className="text-white text-6xl">We Can Code the Future</h1>
    </section>
  );
};

export default HeroSection;
