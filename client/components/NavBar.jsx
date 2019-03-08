import React from 'react';
import styles from '../styles/NavBarStyle.css';

export default function NavBar(props) {
  var style1 = props.selected === 1 ? styles.selectedInner : styles.innerNavBar;
  var style2 = props.selected === 2 ? styles.selectedInner : styles.innerNavBar;
  return (
    <span className={styles.navBar}>
      <div className={style1} onClick={e => props.handleSelectedWindow(e, 1)}>
        Your List
      </div>
      <div className={style2} onClick={e => props.handleSelectedWindow(e, 2)}>
        Search
      </div>
      <div className={styles.innerNavBar}>
        What's
        <br />
        Streaming
      </div>
      <div className={styles.innerNavBar}>History</div>
    </span>
  );
}
