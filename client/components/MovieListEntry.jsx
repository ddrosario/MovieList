import React from 'react';
import styles from '../styles/MovieListEntryStyles.css';

export default function MovieListEntry(props) {
  return (
    <div className={styles.innerShell}>
      <h2>{props.movie.title}</h2>
      <img className={styles.poster} src={props.movie.posterUrl} />
      <div>Year: {props.movie.year}</div>
      <div className="test">
        Runtime:{' '}
        {props.movie.runtime +
          '  |  Rotten 🍅 Rating:' +
          props.movie.rottenRating}
      </div>
      {props.movie.userRating === 'like' ? 'Your rating: 👍' : <div />}
      {props.movie.userRating === 'dislike' ? 'Your rating: 👎' : <div />}
      <div />
      <span className="likeButtons">
        <button
          onClick={e =>
            props.handleRating(e, {
              like: 'like',
              title: props.movie.title,
              id: props.movie._id
            })
          }
        >
          👍
        </button>
        <button
          onClick={e =>
            props.handleRating(e, {
              like: 'dislike',
              title: props.movie.title,
              id: props.movie._id
            })
          }
        >
          👎
        </button>
      </span>
    </div>
  );
}
