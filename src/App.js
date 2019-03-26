import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Field, Label, Control, Input } from 'bloomer';
import './App.css';
import "bulma/css/bulma.css";
import MoviesList from './adapter/MoviesList';
import Navigation from './component/Navigation';
import Upcomming from './component/Upcomming';
import {compose} from 'react-compose';

import TrailerModal from './component/TrailerModal';
import {getVideosFromApi} from './http/Request';



class App extends Component {

  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.getTopRated = this.getTopRated.bind(this)
    this.getPopular = this.getPopular.bind(this)
    this.state = {
      showModal: false,
      trailerKey: null
    }
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

  handleShowTrailer(id) {
    // Go get the trailer
    // When we have the trailer key, show the modal.
    alert('showing trailer' + id);
    getVideosFromApi(id).then((response) => {
      alert('got videos');
      console.log(response);
      if(response != null && response[0] != null && response[0].key != null) {
        this.setState({
          trailerKey: response[0].key,
          showModal: true
        });
      }
     
      })
  }


  render() {
    return(
       <div>
         <button onClick={() => this.setState({showModal: true})}> Show Modal </button>
         <TrailerModal 
            isOpen={this.state.showModal} 
            onClose={() => this.setState({showModal: false})}
            trailerKey={this.state.trailerKey} 
          />

         <Container isFluid={true} style={{margin: 0}}>
           <div className="App">
             <Container isFluid={true} style={{margin: 0}}>
               <MoviesList onShowTrailer={(id) => this.handleShowTrailer(id)} ref="child" />
             </Container>
           </div>
         </Container>

       </div>
    );
  }
}

export default App;
