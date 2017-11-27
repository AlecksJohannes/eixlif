import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Field, Label, Control, Input } from 'bloomer';
import './App.css';
import "bulma/css/bulma.css";
import MoviesList from './adapter/MoviesList';
import Navigation from './component/Navigation';
import Upcomming from './component/Upcomming';
import {compose} from 'react-compose';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.getTopRated = this.getTopRated.bind(this)
    this.getPopular = this.getPopular.bind(this)
  }
  
  handleSearchChange(text) {
    this.refs.child.queryByTitle(text)
  }

  getTopRated() {
    this.refs.child.getTopRated()
  }

  getPopular() {
    this.refs.child.getPopular()
  }


  render() {
    return(
       <div>
         <header className="Header">
           <Navigation onSearchChange={this.handleSearchChange} onGetTopRated={this.getTopRated} onGetPopular={this.getPopular} />
         </header>

         <div>
           <Upcomming />
         </div>
         <Container isFluid={true} style={{margin: 0}}>
           <div className="App">
             <Container isFluid={true} style={{margin: 0}}>
               <MoviesList ref="child" />
             </Container>
           </div>
         </Container>
       </div>
    );
  }
}

export default App;
