import React from 'react';
import MovieListEntry from './MovieListEntry';
import styles from '../styles/MovieListStyles.css';

export default function MovieList(props) {
  return (
    <div className={styles.movieList}>
      {props.movies.map(movie => {
        return (
          <MovieListEntry
            movie={movie}
            key={movie.id}
            id={movie.id}
            handleRating={props.handleRating}
            handleDelete={props.handleDelete}
          />
        );
      })}
    </div>
  );
}
