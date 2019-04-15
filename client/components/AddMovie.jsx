import React from 'react';
import PropTypes from 'prop-types';

export default function AddMovie({ handleSubmit, handleChange }) {
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      id="addMovie"
    >
      <input
        type="text"
        placeholder="Enter a title to add"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input type="submit" />
    </form>
  );
}

AddMovie.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
