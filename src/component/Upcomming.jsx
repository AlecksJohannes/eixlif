import React, { Component } from 'react';
import {getMoviesFromApi} from '../http/Request';

export default class Upcomming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }
  }
  
  componentDidMount() {
    getMoviesFromApi().then((response) => {
      Object.keys(response).forEach((key) => {
        if(response[key].id == 141052) {
          this.setState({
            movie: response[key]
          })
        }
      })
    })
  }

  render() {
    return(
      <div id="hero" className="Hero" style={{backgroundImage: 'url(https://wallpapersite.com/images/pages/pic_w/9655.jpg)'}}>
        <div className="content">
          <img className="logo" src="https://fanart.tv/fanart/movies/141052/hdmovielogo/justice-league-585e9ca3bcf6a.png" alt="narcos background" />
          <h2>{this.state.movie.title}</h2>
          <p>{this.state.movie.overview}</p>
          <div className="button-wrapper">
            <a href="#" className="Button" data-primary="true">Watch now</a>
            <a href="#" className="Button" style={{color: 'white'}}>+ My List</a>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    )
  }
}
