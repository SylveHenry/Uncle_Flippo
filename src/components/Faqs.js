import React from 'react';
import styles from './Faqs.module.css';

const FaqItem = ({ stage, title, content, isLast }) => (
  <div className={styles.faqItem}>
    <div className={styles.stageContainer}>
      <span className={styles.stage}>{stage}</span>
      {!isLast && <div className={styles.connector}></div>}
    </div>
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Faqs = () => {
  const faqData = [
    {
      stage: "I",
      title: "What is Flippo?",
      content: [
        "Launch our website publicly",
        "Token mint, program deployment and initialization",
      ]
    },
    {
      stage: "II",
      title: "Is Flippo a serious investment?",
      content: [
        "Token Sales Marketing",
        "Official PRE-SALE launch on Pinksale",
      ]
    },
    {
      stage: "III",
      title: "What's Uncle Flippo's plan?",
      content: [
        "$Flippo initial token burn",
        "Initial listing on major Centralised Exchanges (CEXs)",
      ]
    },
    {
      stage: "IV",
      title: "How do I join Uncle Flippo's community?",
      content: [
        "Initiation of $Flippo weekly token buyback and burn",
        "Ongoing updates and improvements to maintain momentum and relevance",
      ]
    }
  ];

  return (
    <section id="faqs" className={styles.faqs}>
      <div className="container">
        <h2 className={`section-title ${styles.faqsTitle}`}>F.A.Qs</h2>
        <div className={styles.faqsContainer}>
          {faqData.map((item, index) => (
            <FaqItem key={index} {...item} isLast={index === faqData.length - 1} />
          ))}
        </div>
        {/* <p className={styles.note}>
          <strong>Note:</strong> Our floating roadmap is flexible to ensure agility and responsiveness to industry, technological, and community needs. As many of our existing and future features stem from community requests, please understand that our roadmap, particularly for items beyond imminent release, is subject to change.
        </p> */}
      </div>
    </section>
  );
};

export default Faqs;