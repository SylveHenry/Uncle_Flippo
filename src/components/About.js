// File: src/components/About.js
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className={`section-title ${styles.aboutTitle}`}>The Maestro&apos;s Message</h2>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>
            &quot;Deception may masquerade as truth,&quot; Uncle Flippo declares, 
            &quot;but wisdom sees through the disguise. Embrace the authenticity that sets you free.&quot;
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src="/images/about.png" alt="About Chart" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;