/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/MovieListEntryStyles.css';

export default function MovieListEntry({ movie, handleRating, handleDelete }) {
  return (
    <div className={styles.innerShell}>
      <h2>{movie.title}</h2>
      <img className={styles.poster} src={movie.posterUrl} alt="" />
      <div>
        <span>Year: </span>
        <span>{movie.year}</span>
      </div>
      <div className="test">
        <span>Runtime: </span>
        <span>
          {`${movie.runtime}  |  Rotten 🍅 Rating:${
            movie.rottenRating
          }`}
        </span>
      </div>
      {movie.userRating === 'like' ? 'Your rating: 👍' : <div />}
      {movie.userRating === 'dislike' ? 'Your rating: 👎' : <div />}
      <div />
      <span className="likeButtons">
        <button
          type="button"
          onClick={e => handleRating(e, {
            like: 'like',
            title: movie.title,
            id: movie._id,
          })
          }
        >
          <span role="img" aria-label="ThumbsUp">👍</span>
        </button>
        <button
          type="button"
          onClick={e => handleRating(e, {
            like: 'dislike',
            title: movie.title,
            id: movie._id,
          })
          }
        >
          <span role="img" aria-label="ThumbsDown">👎</span>
        </button>
        <button
          type="button"
          onClick={e => handleDelete(e, movie._id)}
        >
          <span>Delete</span>
        </button>
      </span>
    </div>
  );
}

MovieListEntry.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    runtime: PropTypes.string,
    posterUrl: PropTypes.string,
    rottenRating: PropTypes.string,
    userRating: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleRating: PropTypes.func.isRequired,
};
