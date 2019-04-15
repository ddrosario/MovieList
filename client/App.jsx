/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
// import AddMovie from './components/AddMovie';
import Search from './components/Search';
import NavBar from './components/NavBar';
import styles from './styles/appStyles.css';
/** *****
 * enum selected{
 * login: 0,
 * movies: 1,
 * search: 2,
 * history: 3,
 * }
 */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // loggedIn: false,
      // user: '',
      movies: [],
      addMovie: '',
      selected: 1,
    };
    this.getUserMovie = this.getUserMovie.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelectedWindow = this.handleSelectedWindow.bind(this);
  }

  componentDidMount() {
    this.getUserMovie();
  }

  getUserMovie() {
    axios
      .get('/api/movies')
      .then(({ data }) => {
        console.log('Here are the movies: ', data.movies);
        this.setState({
          movies: data.reverse(),
        });
      })
      .catch((err) => {
        console.log('Could not receive data: ', err);
      });
  }

  handleRating(_e, options) {
    axios
      .patch(`/api/movies/${options.id}`, {
        movie: options.title,
        like: options.like,
      })
      .then(() => {
        this.getUserMovie();
      })
      .catch((err) => {
        console.log('Could not update rating', err);
      });
  }

  handleChange(e) {
    this.setState({
      addMovie: e.target.value,
    });
  }

  handleDelete(_e, id) {
    axios
      .delete(`/api/movies/${id}`)
      .then((res) => {
        console.log('result', res);
        this.getUserMovie();
      })
      .catch(err => console.log('could not delete: ', err));
  }

  handleSubmit(_e, id) {
    const { addMovie } = this.state;
    axios
      .post('/api/movies', {
        movie: addMovie,
        id,
      })
      .then(() => {
        this.getUserMovie();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleSelectedWindow(_e, someEnum) {
    console.log('hello ', someEnum);
    this.setState({
      selected: someEnum,
    });
  }

  render() {
    const { selected, movies } = this.state;
    let selectedWindow = <div />;
    if (selected === 1) {
      selectedWindow = (
        <MovieList
          movies={movies}
          handleRating={this.handleRating}
          handleDelete={this.handleDelete}
        />
      );
    } else if (selected === 2) {
      selectedWindow = <Search handleSelection={this.handleSubmit} />;
    }
    return (
      <span>
        <h1 className={styles.title}>The Watch List</h1>
        <span className={styles.mainContainer}>
          <NavBar
            handleSelectedWindow={this.handleSelectedWindow}
            selected={selected}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          >
            {selectedWindow}
          </div>
        </span>
        <div />
      </span>
    );
  }
}

// {
//   /* <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center'
//             }}
//           >
//             <h3>Your List</h3>
//             <AddMovie
//               handleChange={this.handleChange}
//               handleSubmit={this.handleSubmit}
//             />
//           </div> */
// }
