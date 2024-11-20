'use client'

import React, { useState, useEffect } from 'react';
import styles from './HowToBuy.module.css';

const HowToBuy = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Step 1: Create a Wallet",
      text: "First, ensure you have a Sui-compatible wallet installed. We recommend Sui Wallet for the best experience.",
    },
    {
      title: "Step 2: Get SUI",
      text: "Purchase SUI from a major exchange and transfer it to your Sui wallet.",
    },
    {
      title: "Step 3: Connect Wallet",
      text: "Visit our approved DEX and connect your Sui wallet to start trading.",
    },
    {
      title: "Step 4: Swap for Flippo",
      text: "Use the DEX interface to swap your SUI for Flippo tokens. Always verify the contract address.",
    },
    {
      title: "Step 5: Hold & Monitor",
      text: '"Deception may masquerade as truth," Uncle Flippo declares, "but wisdom sees through the disguise. Embrace the authenticity that sets you free."',
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="howtobuy" className={styles.howtobuy}>
      <div className="container">
        <h2 className={`section-title ${styles.howtobuyTitle}`}>How To Buy</h2>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src="/images/404-4.png" alt="How To Buy Chart" className={styles.image} />
          </div>
          <div className={styles.carouselSection}>
            <div className={styles.carouselContainer}>
              <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={prevSlide}>
                &#8249;
              </button>
              <div className={styles.carousel}>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
                  >
                    <h3 className={styles.slideTitle}>{slide.title}</h3>
                    <p className={styles.description}>{slide.text}</p>
                  </div>
                ))}
              </div>
              <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={nextSlide}>
                &#8250;
              </button>
            </div>
            <div className={styles.indicators}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${currentSlide === index ? styles.activeIndicator : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy; 