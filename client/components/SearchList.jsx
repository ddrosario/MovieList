import React from 'react';
import SearchListEntry from './SearchListEntry';
import styles from '../styles/SearchListStyles.css';

export default function SearchList(props) {
  return (
    <div className={styles.searchList}>
      {props.movies.map(movie => {
        return (
          <SearchListEntry
            key={movie.imdbID}
            handleSelection={props.handleSelection}
            movie={movie}
          />
        );
      })}
    </div>
  );
}
