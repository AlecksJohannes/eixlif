import React, { Component } from 'react';

export default class Item extends Component {
  render() {
  return(
  this.props.movies.map((movie) => {
    return (
        <div onClick={() => this.props.onShowTrailer(movie.id)} className="Item" style={{backgroundImage: 'url(' + "https://image.tmdb.org/t/p/w342"+ movie.poster_path + ')'}} >
          <div className="overlay">
            <div className="title">{movie.title}</div>
            <div className="rating">{movie.vote_average} / 10</div>
            <div className="plot">{movie.overview}</div>
          </div>
        </div>
      )
    })
    )
  }
}
