// src/scripts/gsapAnimation.js
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const initAnimation = () => {
  if (typeof window !== 'undefined') {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: true,
      },
    })
    .to('.scrollImage', { scale: 1.5, ease: 'power1.inOut' });
  }
};
// Ensure this file exports InitAnimationComponent

export const InitAnimationComponent = () => {

  // Component logic here

};
