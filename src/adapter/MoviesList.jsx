import React, { Component } from 'react';
import {getMoviesFromApi, searchMovies, getMoreMoviesFromApi, getTopRatedFromApi, getPopularFromApi} from '../http/Request';
import Movie from '../model/Movie';
import InfiniteScroll from 'react-infinite-scroller';
import Spinner from '../component/Spinner';
import TitleList from './TitleList';

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

  queryByTitle(query) {
    this.setState({
      isLoading: true
    })

    searchMovies(query).then((response) => {
      this.setState({
        movies: response,
        isLoading: false,
        page: 2
      })
    })
  }

  getPopular() {
    this.setState({
      isLoading: true
    })
    setTimeout(() => {
      getPopularFromApi().then((response) => {
        this.setState({
            movies: response,
            isLoading: false
          })
        })
    }, 2000)
  }

  getTopRated() {
    this.setState({
      isLoading: true
    })
   setTimeout(() => {
    getTopRatedFromApi().then((response) => {
      this.setState({
          movies: response,
          isLoading: false
        })
      })
    }, 2000)
  }



  handleInfiniteLoad(page) {
    getMoreMoviesFromApi(page).then((response) => {
      setTimeout(() => {
        this.setState({
          movies: this.state.movies.concat(response)
        })
      }, 1000)
    })
  }

  render() {
    if(this.state.isLoading) {
      return (<Spinner isTriggered={this.state.isLoading} />)
    } else {
      if(localStorage.getItem('view') == 'box' || localStorage.getItem('view') == null) {
        return(
        <InfiniteScroll
          pageStart={1}
          loadMore={this.handleInfiniteLoad.bind(this)}
          hasMore={true || false}
          loader={<div className="loader"></div>}>
          {
            this.state.movies.map((movie) =>
              <Movie {...movie}/>
            )
          }
        </InfiniteScroll>
        )
      } else {
        return (
        <InfiniteScroll
          pageStart={1}
          loadMore={this.handleInfiniteLoad.bind(this)}
          hasMore={true || false}
          loader={<div className="loader"></div>}>
          {
            <TitleList movies={this.state.movies}/>
          }
        </InfiniteScroll>

				)
      }
    }
  }
}

export default MoviesList;
