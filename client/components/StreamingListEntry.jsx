import React from 'react';
import PropTypes from 'prop-types';

export default function StreamingListEntry({ title }) {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}

StreamingListEntry.propTypes = {
  title: PropTypes.string.isRequired,
};
