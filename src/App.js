import React, { Component } from 'react';

// import components
import LoginModal from './components/LoginModal';
import MessageList from './components/MessageList';
import Message from './components/Message';
import SendMessageForm from "./components/SendMessageForm";

// import firebase
import firebase from './firebase';

// CSS for the `App` component
import "./App.scss";


class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      messages: [],
      user: "",
      time: "",
      message: ''
    };
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  getLoginUser = (userName) => { 
    this.setState({ 
      user: userName 
    }) 
  }

  getMessage = (messageText) => {
    this.setState({
      message: messageText
    })
    this.send(this.state.messages);
  }

  // send = messages => {
  //   messages.forEach(item => {
  //     const message = {
  //       text: item.text,
  //       timestamp: firebase.database.ServerValue.TIMESTAMP,
  //       user: item.user
  //     }
  //     this.db.push(message);
  //   })
  // }

  // send = () => {    
  //     const message = {
  //       text: this.state.message,
  //       timestamp: firebase.database.ServerValue.TIMESTAMP,
  //       user: this.state.user
  //     }
  //     this.db.push(message);
  //   }

  // parse = (message) => {
  //   const { user, text, timestamp } = message.val();
  //   const { key: _id } = message;
  //   const date = new Date(timestamp);
  //   const createdAt = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  //   return {
  //     _id,
  //     createdAt,
  //     text,
  //     user,
  //   };
  // };

  // get = (callback) => {
  //   this.db.on("child_added", (snapShot) => callback(this.parse(snapShot)));
  // };

  // off() {
  //   this.db.off();
  // }

  // get db() {
  //   return firebase.database().ref("messages");
  // }

  // get uid() {
  //   return (firebase.auth().currentUser || {}).uid;
  // }

  // get user() {
  //   return {
  //     _id: this.uid,
  //     name: this.state.user,
  //   };
  // }

  componentDidMount() {
    const dbRef = firebase.database().ref('messages');
    dbRef.on('value', (response) => {
      const data = response.val();

      const messageArray = []
      for(let key in data) {
        // console.log(data[key]);

        const { user, message, time } = data[key];
        const date = new Date(time);
        const createdAt = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        console.log(user, message, createdAt);

        messageArray.push({time: createdAt, user: user, message: message});

        this.setState({
          time: createdAt,
          user: user,
          message: message,
          messages: messageArray
        })
      }
      console.log(messageArray);
    })
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

        <LoginModal getLoginUser={this.getLoginUser} onClose={this.showModal} show={this.state.show}>
          Choose your chat username
        </LoginModal>        

        <SendMessageForm user={this.state.user} getMessage={this.getMessage}/>
      </div>
    );
  }
}

export default App;
