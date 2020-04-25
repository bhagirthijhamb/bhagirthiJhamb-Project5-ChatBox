import React, { Component } from 'react';
import mobileUI from '../styles/mobileUI.scss';
import LoginModal from './LoginModal';

class MobileUI extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <div className="mobile">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="screen"></div>

        <button onClick={this.showModal}>Create User</button>

        <LoginModal onClose={this.showModal} show={this.state.show}>
          Choose your chat username
        </LoginModal>
      </div>
    );
  }
}

export default MobileUI;