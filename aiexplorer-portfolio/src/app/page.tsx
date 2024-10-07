"use client"; // Certifica-se de que estamos usando client-side rendering

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import styles from './page.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper", // Gatilho correto
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: true,
          markers: true // Deixe ativado para debugar o scroll
        }
      });

      tl.to(".scroll-image", {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut"
      }).to(
        ".section-hero",
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut"
        },
        "<"
      );
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="content">
        <section className="section hero section-hero"></section>
        <section className="section gradient-purple"></section>
        <section className="section gradient-blue"></section>
      </div>
      <div className="imageContainer">
        <Image
          src="https://utfs.io/f/vEejy1A7gae16Hef9CsbqchY9QHEw7mxW0FvUp2AIzsjPlfu"
          alt="AIExxplorerIntro"
          fill
          className="scroll-image"
        />
      </div>
    </div>
  );
}
