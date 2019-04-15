import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/SearchListEntryStyles.css';

export default function SearchListEntry({ movie, handleSelection }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={(e) => {
        handleSelection(e, movie.imdbID);
      }}
      onKeyPress={(e) => {
        handleSelection(e, movie.imdbID);
      }}
    >
      {'click to add'}
      <div>
        <img className={styles.poster} src={movie.Poster} alt="" />
        <div>{movie.Title}</div>
        <div>{movie.Year}</div>
      </div>
    </div>
  );
}

SearchListEntry.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.number,
    imdbID: PropTypes.string,
    Poster: PropTypes.string,
  }).isRequired,
  handleSelection: PropTypes.func.isRequired,
};
