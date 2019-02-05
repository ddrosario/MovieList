import React from 'react';
import styles from '../appStyles'

export default function SearchListEntry(props) {
  return (
    <span
      onClick={e => {
        props.handleSelection(e, props.movie.imdbID);
      }}
    >
      <div>
        <img src={props.movie.Poster} className={styles.poster} />
        <div>{props.movie.Title}</div>
        <div>{props.movie.Year}</div>
      </div>
    </span>
  );
}
