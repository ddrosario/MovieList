/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchList from './SearchList';
import styles from '../styles/SearchStyles.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    this.setState({
      search: e.target.value,
    });
  }

  handleSearch(e) {
    const { search } = this.state;
    axios
      .get('/api/search', { params: { search } })
      .then(({ data }) => {
        console.log('Here is the data', data);
        this.setState({
          results: data,
        });
      })
      .catch((err) => {
        console.log('Could not get results', err);
      });
    e.preventDefault();
  }

  render() {
    const { results } = this.state;
    const { handleSelection } = this.props;
    return (
      <span className={styles.search}>
        <form onSubmit={this.handleSearch}>
          <input
            onChange={(e) => {
              this.setState({
                search: e.target.value,
              });
            }}
            type="text"
            placeholder="Search for a movie"
          />
          <input type="submit" />
        </form>
        <SearchList
          movies={results}
          handleSelection={handleSelection}
        />
      </span>
    );
  }
}

Search.propTypes = {
  handleSelection: PropTypes.func.isRequired,
};
