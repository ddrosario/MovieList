/* eslint-disable no-console */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchList from './SearchList';
import styles from '../styles/SearchStyles.css';

export default function Search(props) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  function handleSearch(e) {
    axios
      .get('/api/search', { params: { search } })
      .then(({ data }) => {
        console.log('Here is the data', data);
        setResults(data);
      })
      .catch((err) => {
        console.log('Could not get results', err);
      });
    e.preventDefault();
  };

  return (
    <span className={styles.search}>
      <form onSubmit={handleSearch}>
        <input
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          type="text"
          placeholder="Search for a movie"
        />
        <input type="submit" />
      </form>
      <SearchList
        movies={results}
        handleSelection={props.handleSelection}
      />
    </span>
  );
} 

Search.propTypes = {
  handleSelection: PropTypes.func.isRequired,
};
