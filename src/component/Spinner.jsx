import React, { Component } from 'react';
import { Delete, Button, Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardTitle, ModalCardBody, ModalCardFooter } from 'bloomer';

export default class Spinner extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal isActive={this.props.isTriggered}>
        <ModalBackground />
        <ModalCard>
          <ModalCardHeader>
            Fetching new movies
          </ModalCardHeader>
          <ModalCardBody>
            <div className="loader" style={{textAlign: 'center'}}>
            </div>
          </ModalCardBody>
        </ModalCard>
      </Modal>
    )
  }
}
