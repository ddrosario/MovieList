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
    this.handleSelection = this.handleSelection.bind(this);
  }
  handleChange(e) {
    this.setState({
      search: e.target.value
    });
  }
  handleSearch(e) {
    axios.get('/api/search');
  }
  handleSelection(e) {}

  componentDidMount() {}
  render() {
    return (
      <span>
        <form>
          <input />
        </form>
        <SearchList />
      </span>
    );
  }
}
