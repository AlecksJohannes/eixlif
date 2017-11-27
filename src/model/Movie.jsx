import React, { Component } from 'react';
import { Box } from 'bloomer';
import Lightbox from '../component/Lightbox';

export default class Movie extends Component {

  constructor(props) {
    super(props);
    this.popupLightbox = this.popupLightbox.bind(this)
    this.state = {
      isPoppedUp: false
    }
  }

  popupLightbox(control) {
      this.setState({
        isPoppedUp: control
      })
  }

  render() {
    return (
       <Box>
        <img src={"https://image.tmdb.org/t/p/w500" + this.props.poster_path} onClick={() => {
          this.popupLightbox(true)
        }} />
        { this.state.isPoppedUp ? <Lightbox isActive={this.state.isPoppedUp} movie={this.props} onPopUp={this.popupLightbox} /> : null }
        <h2>{ this.props.title }</h2>
      </Box>
    )
  }
}
