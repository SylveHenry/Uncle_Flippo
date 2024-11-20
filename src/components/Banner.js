import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.imageContainerMobile}>
          <img src="/images/logo.png" alt="Uncle Flippo Mobile" className={styles.imageMobile} />
        </div>
        <h1 className={styles.title}>Uncle Flippo</h1>
        <p className={styles.description}>
        With an uncanny intuition, he observed, his gaze unraveling the fabric of falsehoods woven with precision so intricate even the Crypto pioneers fell victim. 
        In amusement he watched the deceitful dance around him in their feeble attempts to conceal reality.
        He has always known, he saw it all, the truth in the lies.
        </p>
        <div className={styles.tokenInfo}>
          <div className={styles.tokenInfoInner}>
            <p className={styles.tokenAddress}>
              Token address: 
              <a href="/" 
                 target="_blank" 
                 rel="noopener noreferrer">
                4UvV46RjhL4Xvy1DeGWBHJ2EWUwzgNN2EzUumMqMVDQA
              </a>
            </p>
            <p className={styles.totalSupply}>Total Supply: 100 BILLION</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <a href="/" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.primaryButton}`}>
            Buy Flippo
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.secondaryButton}`}>
            View Chart
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="/images/logo.png" alt="Uncle Flippo" className={styles.image} />
      </div>
    </div>
  );
};

export default Banner;