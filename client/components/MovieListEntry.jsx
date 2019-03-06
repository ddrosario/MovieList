import React from 'react';
import styles from '../appStyles.css';

export default function MovieListEntry(props) {
  return (
    <div className="innerGrid">
      <h2>{props.movie.title}</h2>
      <img className="poster" src={props.movie.posterUrl} />
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
    </div>
  );
}
