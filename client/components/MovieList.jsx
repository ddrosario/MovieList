import React from 'react';
import MovieListEntry from './MovieListEntry';
import styles from '../appStyles.css';

export default function MovieList(props) {
  return (
    <div
      // className={styles.movieList}
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}
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
