'use client';

import React, { useEffect, useState } from 'react';
import styles from './FilmGrain.module.css';

const FilmGrain = () => {
  const [scratches, setScratches] = useState([]);
  const [dustParticles, setDustParticles] = useState([]);

  useEffect(() => {
    const createDustParticle = () => {
      const newDust = {
        id: Math.random(),
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 2,
        blur: Math.random() * 2 + 1,
      };

      setDustParticles(prev => [...prev, newDust]);

      setTimeout(() => {
        setDustParticles(prev => prev.filter(dust => dust.id !== newDust.id));
      }, 7000);
    };

    const createScratch = () => {
      const newScratch = {
        id: Math.random(),
        left: Math.random() * 100,
      };

      setScratches(prev => [...prev, newScratch]);

      setTimeout(() => {
        setScratches(prev => prev.filter(scratch => scratch.id !== newScratch.id));
      }, Math.random() * 1000 + 500);
    };

    const scratchInterval = setInterval(() => {
      const numberOfScratches = Math.floor(Math.random() * 6) + 1;
      for (let i = 0; i < numberOfScratches; i++) {
        if (Math.random() > 0.5) {
          createScratch();
        }
      }
    }, Math.random() * 1000 + 500);

    const dustInterval = setInterval(() => {
      const numberOfDustParticles = Math.floor(Math.random() * 5) + 2;
      for (let i = 0; i < numberOfDustParticles; i++) {
        if (Math.random() > 0.5) {
          createDustParticle();
        }
      }
    }, Math.random() * 1000 + 500);

    return () => {
      clearInterval(scratchInterval);
      clearInterval(dustInterval);
    };
  }, []);

  return (
    <>
      <div className={styles.filmGrain}></div>
      <div className={styles.filmScratches}>
        {scratches.map(scratch => (
          <div
            key={scratch.id}
            className={styles.scratch}
            style={{
              left: `${scratch.left}%`,
            }}
          />
        ))}
        {dustParticles.map(dust => (
          <div
            key={dust.id}
            className={styles.dustParticle}
            style={{
              left: `${dust.left}%`,
              top: `${dust.top}%`,
              width: `${dust.size}px`,
              height: `${dust.size}px`,
              filter: `blur(${dust.blur}px)`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default FilmGrain; 