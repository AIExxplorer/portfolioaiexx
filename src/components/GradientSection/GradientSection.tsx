// src/components/GradientSection/GradientSection.tsx
import React from 'react';
import styles from '../../components/GradientSection/GradientSection.module.css'; // Caminho corrigido

const GradientSection: React.FC = () => {
  return (
    <>
      <section className={`${styles.gradientPurple} h-screen`}></section>
      <section className={`${styles.gradientBlue} h-screen`}></section>
    </>
  );
};

export default GradientSection;
