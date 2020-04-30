import React, { Component } from 'react';

// import components
import EnterUserModal from './components/EnterUserModal';
import MessageList from './components/MessageList';
import ChatGroup from './components/ChatGroup';
import SendMessageForm from "./components/SendMessageForm";

// import firebase
import firebase from './firebase';

// CSS for the `App` component
import "./App.scss";


class App extends Component {
  constructor() {
    super();
    this.state = {
      userShow: false,
      groupShow: false,
      time: "",
      user: `${localStorage.getItem("user")}`,
      message: "",
      messages: [],
      group: `${localStorage.getItem("group")}`,
      groups: []
    };
  }

  showUserModal = () => {
    this.setState({
      // ...this.state,
      userShow: !this.state.userShow,
    });
  };


  showGroupModal = () => {
    this.setState({
      // ...this.state,
      groupShow: !this.state.groupShow,
    });
  };

  onclose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  getLoginUser = (userName) => { 
    this.setState({ 
      user: userName 
    }) 
    localStorage.setItem("user", userName);
  }

  

  getGroupName = (groupName) => {
    localStorage.setItem("group", groupName);
    this.setState({
      group: groupName
    }, () => { this.loadMessages();})
    
  }

  loadMessages = () => {
    console.log(this.state.group);
    const dbRef = firebase.database().ref(`/${this.state.group}`);
    // const dbRef = firebase.database().ref(this.state.group);

    dbRef.on('value', (response) => {
      const data = response.val();


      this.setState({
        messages: []
      })

      // console.log(this.state.messages);
      for (let key in data) {
        const { user, message, time } = data[key];
        const date = new Date(time);
        const createdAt = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const messageKey = key;

        console.log(message);

        const copyMessage = [...this.state.messages];

        const newMessage = {
          time: createdAt, 
          user: user,         
          message: message, 
          key: messageKey
        }

        copyMessage.push(newMessage);

        console.log(copyMessage);

        this.setState({
          time: createdAt,
          user: user,
          message: message,
          messages: copyMessage
        })
        // console.log(this.state.messages);
      }
    })
    // window.location.reload(false);
  }

  componentDidMount() {

    const dbRef = firebase.database().ref(`/${this.state.group}`);
    // const dbRef = firebase.database().ref(this.state.group);

    dbRef.on('value', (response) => {
      const data = response.val();

      this.setState({
        messages: []

      })
      for (let key in data) {
        const { user, message, time } = data[key];
        const date = new Date(time);
        const createdAt = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const messageKey = key;
        // console.log(user, message, createdAt, messageKey);

        this.setState({
          time: createdAt,
          user: user,
          message: message,
          messages: [...this.state.messages, { time: createdAt, user: user, message: message, key: messageKey }]
        })
      }
    })   
  }  
     
  
  render() {
    return (
      <div className="mobile">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="topBar"></div>

        <div className="screen">
          
          
          <MessageList messages={this.state.messages} />

                   
        </div>

        <button onClick={this.showUserModal} className="create-user">
          Create User
        </button>
        <button onClick={this.showGroupModal} className="create-group">
          New Group
        </button> 

        <EnterUserModal getLoginUser={this.getLoginUser} onClose={this.showUserModal} show={this.state.userShow}>
          Choose your chat username
        </EnterUserModal>  

        <ChatGroup getGroupName={this.getGroupName} onClose={this.showGroupModal} show={this.state.groupShow}>
          Group name
          </ChatGroup>     

        <SendMessageForm user={this.state.user} group={this.state.group} getMessage={this.getMessage}/>
      </div>
    );
  }
}

export default App;
