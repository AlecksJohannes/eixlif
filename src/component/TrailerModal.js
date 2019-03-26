import React, { Component } from 'react'

import ReactModal from 'react-modal';
import YouTube from '@u-wave/react-youtube';

const TrailerModal = ({isOpen, trailerKey, onClose}) => {
  return (
    <ReactModal isOpen={isOpen}>
        <YouTube
          video={trailerKey}
          autoplay
        />
          <button onClick={() => onClose()}>Close Modal</button>
        </ReactModal>
  )
}


export default TrailerModal


// export default class TrailerModal extends Component {
//   render() {
//     return (
//       <ReactModal isOpen={this.props.isOpen}>
//          <YouTube
//             video={this.props.trailerKey}
//             autoplay
//           />
//             <button onClick={() => this.props.onClose()}>Close Modal</button>
//          </ReactModal>
//     )
//   }
// }
