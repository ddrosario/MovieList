import React from 'react';
import SearchListEntry from './SearchListEntry';
export default function SearchList(props) {
  return (
    <div>
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
