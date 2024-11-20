import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.logoSection}>
          <Link href="/">
            <img src="/images/logo.png" alt="Uncle Flippo Logo" className={styles.logo} />
          </Link>
          <p>Uncle Flippo</p>
          <p>The truth in the lies</p>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linkColumn}>
            <h4>Quick Links</h4>
            <Link href="#about">About</Link>
            <Link href="#tokenomics">Tokenomics</Link>
            <Link href="#howtobuy">How to Buy</Link>
          </div>
          {/* <div className={styles.linkColumn}>
            <h4>Resources</h4>
            <a href="https://raydium.io/" target="_blank" rel="noopener noreferrer">Raydium</a>
            <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer">Dex Screener</a>
            <a href="https://jup.ag/" target="_blank" rel="noopener noreferrer">Jupiter Dex</a>
          </div> */}
          <div className={styles.linkColumn}>
            <h4>Community</h4>
            {/* <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a> */}
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; 2024 Uncle Flippo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;