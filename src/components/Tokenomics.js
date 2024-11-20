import React from 'react';
import styles from './Tokenomics.module.css';

const TokenAllocation = () => (
  <div className={styles.tableContainer}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>THE IDEA</th>
          <th>THE PLAN</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fair Launch</td>
          <td>100%</td>
        </tr>
        <tr>
          <td>Airlock</td>
          <td>Enabled</td>
        </tr>
        <tr>
          <td>LP</td>
          <td>Burned</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Tokenomics = () => {
  return (
    <section id="Tokenomics" className={styles.tokenomics}>
      <div className="container">
        <h2 className={`section-title ${styles.tokenomicsTitle}`}>FLIPPONOMICS</h2>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <span className={styles.label}>Token Name:</span>
            <span className={styles.value}>Flippo</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Token Symbol:</span>
            <span className={styles.value}>Flippo</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Total Supply:</span>
            <span className={styles.value}>100,000,000,000</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Network:</span>
            <span className={styles.value}>Sui</span>
          </div>
        </div>
        <h3 className={styles.subtitle}>Uncle Flippo&apos;s plan</h3>
        <TokenAllocation />
      </div>
    </section>
  );
};

export default Tokenomics;