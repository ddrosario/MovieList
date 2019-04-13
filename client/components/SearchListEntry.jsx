import React from 'react';
import styles from '../styles/SearchListEntryStyles.css';

export default function SearchListEntry(props) {
  return (
    <div
      onClick={e => {
        props.handleSelection(e, props.movie.imdbID);
      }}
    >
      click to add
      {console.log(props.movie)}
      <div>
        <img className={styles.poster} src={props.movie.Poster} />
        <div>{props.movie.Title}</div>
        <div>{props.movie.Year}</div>
      </div>
    </div>
  );
}
