import React from 'react';
import SearchList from './SearchList.jsx';
import axios from 'axios';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    console.log('this is the props', props);
    this.handleSelection = props.handleSelection;
  }
  handleChange(e) {
    this.setState({
      search: e.target.value
    });
  }
  handleSearch(e) {
    axios
      .get('/api/search', { params: { search: this.state.search } })
      .then(({ data }) => {
        console.log('Here is the data', data);
        this.setState({
          results: data
        });
      })
      .catch(err => {
        alert('Could not get results', err);
      });
    e.preventDefault();
  }

  componentDidMount() {}
  render() {
    return (
      <span>
        <form onSubmit={this.handleSearch}>
          <input
            onChange={e => {
              this.setState({
                search: e.target.value
              });
            }}
            type="text"
          />
          <input type="submit" />
        </form>
        <SearchList
          movies={this.state.results}
          handleSelection={this.props.handleSelection}
        />
      </span>
    );
  }
}
