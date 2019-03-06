import React from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Search from './components/Search';
import NavBar from './components/NavBar';
import styles from './styles/appStyles.css';

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
        movie: options.title,
        like: options.like
      })
      .then(({ data }) => {
        this.getUserMovie();
      })
      .catch(err => {
        alert('Could not update rating', err);
      });
  }
  handleChange(e, options) {
    this.setState({
      addMovie: e.target.value
    });
  }
  handleSubmit(e, id) {
    axios
      .post('/api/movies', {
        movie: this.state.addMovie,
        id: id
      })
      .then(() => {
        this.getUserMovie();
      })
      .catch(err => {
        console.error(err);
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
        <h1 className={styles.title}>The Watch List</h1>
        <div />
        <NavBar />
        <span className={styles.inputFields}>
          <div>
            <AddMovie
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <MovieList
              movies={this.state.movies}
              handleRating={this.handleRating}
            />
          </div>
          <Search handleSelection={this.handleSubmit} />
        </span>
        <div />
      </span>
    );
  }
}
