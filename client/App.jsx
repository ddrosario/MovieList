import React from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: '',
      movies: [],
      addMovie: ''
    };
    this.getUserMovie = this.getUserMovie.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleRating(e, options) {
    axios
      .patch('/api/movies/' + options.id, {
        //update url to reflect id!!!!!
        movie: options.title,
        like: options.like
      })
      .then(({ data }) => {
        console.log(data);
        data.like = options.like;
        this.setState({
          movies: this.state.movies.map(movie =>
            movie._id === options.id ? data : movie
          )
        });
      })
      .catch(err => {
        console.log('was not able to rate', err);
        alert('Could not update rating');
      });
  }
  handleChange(e, options) {
    this.setState({
      addMovie: e.target.value
    });
  }
  handleSubmit(e, options) {
    axios.post('/api/movies', {
      movie: this.state.addMovie
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
          <AddMovie
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div>
          <MovieList movies={this.state.movies} />
        </div>
      </span>
    );
  }
}
