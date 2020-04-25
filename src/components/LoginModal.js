import React, { Component } from 'react';
import loginModal from '../styles/loginModal.scss';

// Grey background
const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 50
}

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 8,
    maxWidth: 250,
    minHeight: 150,
    margin: '0 auto',
    padding: 30,
    position: "relative"
};

const footerStyle = {
    position: "absolute",
    bottom: 20
}


class LoginModal extends Component {
  onclose = (e) => {
    this.props.onClose && this.props.onClose(e);
  }; 

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="loginBox" style={backdropStyle}>
        <div style={modalStyle}>
          {this.props.children}

          <input type="text" placeholder="Username" />

          <div style={footerStyle}> 
            <button
              onClick={(e) => {
                this.props.onClose(e);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;