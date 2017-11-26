import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Field, Label, Control, Input } from 'bloomer';
import './App.css';
import "bulma/css/bulma.css";
import MoviesList from './adapter/MoviesList';

class App extends Component {

  constructor(props) {
    super(props);
    this.triggerChildAlert = this.triggerChildAlert.bind(this)
  }

  triggerChildAlert(query) {
    this.refs.child.showAlert(query)
  }

  render() {
    return (
      <Container>
        <Field>
          <Label>Name</Label>
          <Control>
            <Input type="text" placeholder='Text Input' onChange={(e) => this.triggerChildAlert(e.target.value) } />
          </Control>
        </Field>

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Container>
            <MoviesList ref="child" />
          </Container>
        </div>
      </Container>
    );
  }
}

export default App;
