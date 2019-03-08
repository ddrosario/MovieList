import React from 'react';
// import style from '../appstyles.css';

export default function SearchListEntry(props) {
  return (
    <span
      onClick={e => {
        props.handleSelection(e, props.movie.imdbID);
      }}
    >
      click to add
      <div>
        <img src={props.movie.Poster} className="poster" />
        <div>{props.movie.Title}</div>
        <div>{props.movie.Year}</div>
      </div>
    </span>
  );
}
