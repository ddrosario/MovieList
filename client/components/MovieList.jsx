import React from 'react';
import MovieListEntry from './MovieListEntry';

export default function MovieList(props) {
  return (
    <div
      className="movieList"
      style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}
    >
      {props.movies.map(movie => {
        return (
          <MovieListEntry
            movie={movie}
            key={movie.id}
            handleRating={props.handleRating}
          />
        );
      })}
    </div>
  );
}
