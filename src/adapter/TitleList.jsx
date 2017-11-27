import React, {Component} from 'react';
import Item from '../component/Item';

export default class TitleList extends Component {

  render() {
    return(
        <div ref="titlecategory" className="TitleList" data-loaded="true" >
          <div className="Title">
            <h1>Now Playing</h1>
            <div className="titles-wrapper">
							<Item movies={this.props.movies} />
						</div>
          </div>
        </div>
    )
  }
}
