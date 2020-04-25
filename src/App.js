import React, { Component } from 'react';
import './App.css';
import LoginModal from './components/LoginModal';
import MessageList from './components/MessageList'


class App extends Component {
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
        <div className="screen">
          <MessageList />
        </div>

        <button onClick={this.showModal} className='create-user'>Create User</button>

        <LoginModal onClose={this.showModal} show={this.state.show}>
          Choose your chat username
        </LoginModal>
      </div>
    );
  }
  
}

export default App;
