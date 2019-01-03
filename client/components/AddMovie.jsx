import React from 'react';

export default function AddMovie(props) {
  return (
    <form
      onSubmit={e => {
        props.handleSubmit(e, {});
      }}
    >
      <input
        type="text"
        placeholder="Enter a title to add"
        onChange={e => {
          props.handleChange(e, {});
        }}
      />
      <input type="submit" />
    </form>
  );
}
