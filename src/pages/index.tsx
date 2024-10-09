// src/pages/index.tsx
import { useEffect } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import GradientSection from '../components/GradientSection/GradientSection';
import ImageContainer from '../components/ImageContainer/ImageContainer';

export default function Home() {
  useEffect(() => {
    // Carrega o GSAP apenas no lado do cliente
    import('../scripts/gsapAnimation').then((mod) => {
      mod.initAnimation(); // Inicializa a animação do GSAP
    });
  }, []);

  return (
    <div className="wrapper">
      <HeroSection />
      <ImageContainer />
      <GradientSection />
    </div>
  );
}
