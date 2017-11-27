import React, { Component } from 'react';
import { Delete, Button, Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardTitle, ModalCardBody, ModalCardFooter } from 'bloomer';

export default class Lightbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isTriggered: this.props.isActive
    }
  }

  render() {
    return (
      <Modal isActive={this.state.isTriggered}>
        <ModalBackground />
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>{this.props.movie.title}</ModalCardTitle>
            <Delete onClick={() => {
              this.setState({
                isTriggered: false
              })
              this.props.onPopUp(false)
            }} />
          </ModalCardHeader>
          <ModalCardBody>
            <img src={"https://image.tmdb.org/t/p/original" + this.props.movie.poster_path} />
          </ModalCardBody>
        </ModalCard>
      </Modal>
    )
  }
}
