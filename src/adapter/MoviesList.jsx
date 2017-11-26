import React, { Component } from 'react';
import {getMoviesFromApi, searchMovies} from '../http/Request';
import Movie from '../model/Movie';

class MoviesList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      getMoviesFromApi().then((response) => {
        this.setState({
          movies: response,
          isLoading: false
        })
      })
    }, 4000)
  }

  showAlert(query) {
    this.setState({
      isLoading: true
    })

    searchMovies(query).then((response) => {
      this.setState({
        movies: response,
        isLoading: false
      })
    })
  }

  render() {
    let content;
    if(this.state.isLoading) {
      return (<h1> Loading </h1>)
    } else {
      return(
        this.state.movies.map((movie) =>
          <Movie {...movie}/>
        )
      )
    }
  }
}

export default MoviesList;
