import React from 'react';
import styles from '../styles/NavBarStyle.css';

export default function NavBar(props) {
  return (
    <span className={styles.navBar}>
      <div className={styles.innerNavBar}>Your List</div>
      <div className={styles.innerNavBar}>Search</div>
      <div className={styles.innerNavBar}>
        What's<br />Streaming
      </div>
      <div className={styles.innerNavBar}>History</div>
    </span>
  );
}
