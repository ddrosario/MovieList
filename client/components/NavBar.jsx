import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/NavBarStyle.css';

export default function NavBar({ selected, handleSelectedWindow }) {
  const style1 = selected === 1 ? styles.selectedInner : styles.innerNavBar;
  const style2 = selected === 2 ? styles.selectedInner : styles.innerNavBar;
  return (
    <span className={styles.navBar}>
      <div
        className={style1}
        role="button"
        tabIndex={0}
        onClick={e => handleSelectedWindow(e, 1)}
        onKeyPress={e => handleSelectedWindow(e, 1)}
      >
        {'Your List'}
      </div>
      <div
        className={style2}
        role="button"
        tabIndex={0}
        onClick={e => handleSelectedWindow(e, 2)}
        onKeyPress={e => handleSelectedWindow(e, 2)}
      >
        {'Search'}
      </div>
      <div className={styles.innerNavBar}>
        {'What\'s'}
        <br />
        {'Streaming'}
      </div>
      <div className={styles.innerNavBar}>History</div>
    </span>
  );
}

NavBar.propTypes = {
  selected: PropTypes.number.isRequired,
  handleSelectedWindow: PropTypes.func.isRequired,
};
