// src/components/ImageContainer/ImageContainer.tsx
import React, { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './ImageContainer.module.css';

gsap.registerPlugin(ScrollTrigger);

const ImageContainer: React.FC = () => {
  useEffect(() => {
    gsap.to(`.${styles.scrollImage}`, {
      scale: 1.5,
      duration: 2,
      scrollTrigger: {
        trigger: `.${styles.scrollImage}`,
        start: 'top center',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className={styles.imageContainer}>
      <Image
        src="https://utfs.io/f/vEejy1A7gae1d19t77LMcYVL85nezsUwqyIxv3SP2Eogpi1O"
        alt="AI Explorer"
        fill
        className={styles.scrollImage}
      />
    </div>
  );
};

export default ImageContainer;
