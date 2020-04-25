import React, { Component } from 'react';
import './App.css';
import LoginModal from './components/LoginModal';
import MobileUI from './components/MobileUI';

class App extends Component {
  render() {
    return (
      <div>
        <MobileUI />
        <button onClick={this.showModal}>Create User</button>

        <LoginModal onClose={this.showModal} show={this.state.show}>
          Choose your chat username
        </LoginModal>
      </div>
    );
  }
  
}

export default App;
