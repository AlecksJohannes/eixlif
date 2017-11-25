import React, { Component } from 'react';
import logo from './logo.svg';
import { Container } from 'bloomer';
import './App.css';
import "bulma/css/bulma.css";
import MoviesList from './adapter/MoviesList';

class App extends Component {

  render() {
    return (
      <Container>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Container>
            <MoviesList />
          </Container>
        </div>
      </Container>
    );
  }
}

export default App;
