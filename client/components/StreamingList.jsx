import React from 'react';
import PropTypes from 'prop-types';
import StreamingListEntry from './StreamingListEntry';

export default function StreamingList({ results }) {
  return (
    <div>
      <span>
        {results.map(item => (
          <StreamingListEntry title={item} />
        ))}
      </span>
    </div>
  );
}

StreamingList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
};
