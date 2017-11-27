import React, { Component } from 'react';

export default class InfiniteScroll extends Component {

  componentDidMount() {
    console.log("scrool")
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillMount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if((window.innerHeight + window.scrollY) >= 
    (document.body.offsetHeight - 500)) {
      console.log("blyat")
    } else {
      console.log("blah")
    }
  }

  render() {
    return(
      <h1>Hola</h1>)
  }
}
