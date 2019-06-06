import React from 'react';
import PropTypes from 'prop-types';
import SearchListEntry from './SearchListEntry';
import styles from '../styles/SearchListStyles.css';

export default function SearchList({ movies, handleSelection }) {
  return (
    <div className={styles.searchList}>
      {movies.map(movie => (
        <SearchListEntry
          key={movie.imdbID}
          handleSelection={handleSelection}
          movie={movie}
        />
      ))}
    </div>
  );
}

SearchList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
    Poster: PropTypes.string,
  })).isRequired,
  handleSelection: PropTypes.func.isRequired,
};
