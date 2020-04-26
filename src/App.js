import React, { Component } from 'react';
import './App.css';

// import components
import LoginModal from './components/LoginModal';
import MessageList from './components/MessageList';
import Message from './components/Message';
import MessageInputForm from './components/MessageInput';

// import firebase
import firebase from './firebase.js';



class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      messages: [],
      userInput: "",
      userName: "",
      userColor: "default",
      date: "",
    };
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = messages => {
    messages.forEach(item => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user
      }
      this.db.push(message);
    })
  }

  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const date = new Date(timestamp);
    const createdAt = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on("child_added", (snapShot) => callback(this.parse(snapShot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref("messages");
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get user() {
    return {
      _id: this.uid,
      name: "Piyush",
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (response) => {
      // const dataFromDb = response.val();

      // console.log(response.val());

      // const newState = [];

      // // loop over each value in the array and push them to a new array (newState).
      // for (let key in dataFromDb) {
      //   const messageInfo = {
      //     key: key,
      //     message: dataFromDb[key],
      //   };
      //   newState.push(messageInfo);
      // }
      // // call this.setState to update the component state using the local array newState.
      // this.setState({
      //   messages: newState
      // });

      // console.log(this.state.messages);

      this.get((message) =>
        this.setState((previous) => ({
          messages: [...this.state.messages, message],
        }))
      );
      console.log(this.state.messages);
    });
  }

  componentWillUnmount() {
    this.off();
  }

  render() {
    return (
      <div className="mobile">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="screen">
          <MessageList messages={this.state.messages} />
        </div>

        <button onClick={this.showModal} className="create-user">
          Create User
        </button>

        <LoginModal onClose={this.showModal} show={this.state.show}>
          Choose your chat username
        </LoginModal>

        <MessageInputForm
          handleFormSubmit={this.handleFormSubmit}
          handleChange={this.handleChange}
          userInputProp={this.state.userInput}
        />
      </div>
    );
  }
}

export default App;
