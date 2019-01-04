import React from 'react';

export default function MovieListEntry(props) {
  let rating = '';
  if (props.movie.userRating === 'like') {
    rating = '👍';
  } else if (props.movie.userRating === 'dislike') {
    rating = '👎';
  }
  return (
    <div className="innerGrid">
      <h2>{props.movie.title}</h2>
      <img className="poster" src={props.movie.posterUrl} />
      <div>Year: {props.movie.year}</div>
      <div>
        Runtime:{' '}
        {props.movie.runtime +
          '  |  Rotten 🍅 Rating:' +
          props.movie.rottenRating}
      </div>
      <div>Your rating: {rating}</div>
      <br />
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
