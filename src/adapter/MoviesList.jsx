import React, { Component } from 'react';
import {getMoviesFromApi} from '../http/Request';

class MoviesList extends Component {

	componentDidMount() {
		getMoviesFromApi().then((response) => {
			this.setState({

			})
		});
	}

  render() {
    return(
      <div>
        Hello
      </div>
    )
  }
}

export default MoviesList;
