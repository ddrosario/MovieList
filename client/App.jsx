import React from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: '',
      movies: []
    };
    this.getUserMovie = this.getUserMovie.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }
  handleRating(e, obj) {
    axios
      .post('/api/movies', {
        movie: obj.title,
        like: obj.like
      })
      .then(result => {
        this.getUserMovie();
      })
      .catch(err => {
        console.log('was not able to rate', err);
        alert('Could not update rating');
      });
  }
  getUserMovie() {
    axios
      .get('/api/movies')
      .then(({ data }) => {
        console.log('Here are the movies: ', data.movies);
        this.setState({
          movies: data.reverse()
        });
      })
      .catch(err => {
        console.log('Could not receive data: ', err);
      });
  }
  componentDidMount() {
    this.getUserMovie();
  }
  render() {
    return (
      <span>
        <h1 className="title">The Watch List</h1>
        <div />
        <div>
          <MovieList movies={this.state.movies} />
        </div>
      </span>
    );
  }
}
