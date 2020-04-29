import React, { Component } from "react";
import firebase from 'firebase'

class SendMessageForm extends Component {
  constructor(){
    super();
    this.state = {
      message: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.message);
    // this.sendMessage();

    const fullMessage = {
        message: this.state.message,
        time: firebase.database.ServerValue.TIMESTAMP,
        user: this.props.user
      }

    if (this.state.message !== '') {

      const dbRef = firebase
        .database()
        .ref(`/${this.props.group}`);
      dbRef.push(fullMessage);

      this.setState({
        message: ''
      })
    }
  }

  handleUserInput = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  
  render() {
    // console.log(this.state.message);
    // console.log(this.props.group);
    return (
        <form onSubmit={this.handleSubmit} className="send-message-form" action="">
          <input onChange={this.handleChange} value={this.state.message} type="text" placeholder="Type your message and hit ENTER" />
          <button onClick={this.handleSubmit} className="send-message">
            Send
          </button>
        </form>
    );
  }
}

export default SendMessageForm;
