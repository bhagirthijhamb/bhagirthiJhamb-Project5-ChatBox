import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import components
import Welcome from './components/Welcome';
import EnterUserModal from './components/EnterUserModal';
import MessageList from './components/MessageList';
import ChatGroup from './components/ChatGroup';
import SendMessageForm from "./components/SendMessageForm";
import Footer from './components/Footer';

// import firebase
import firebase from './firebase';

// CSS for the App
import "./App.scss";


class App extends Component {
  constructor() {
    super();
    this.state = {
      userShow: false,
      groupShow: false,
      time: "",
      user: `${localStorage.getItem("user") ? localStorage.getItem("user") : 'user'}`,
      message: "",
      messages: [],
      group: `${localStorage.getItem("group") ? localStorage.getItem("group") : 'Messages'}`,
      groups: []
    };
  }

  // 🎁 Function to toggle the User Modal
  showUserModal = () => {
    this.setState({
      userShow: !this.state.userShow,
    });
  };

  // 🎁 Function to toggle the Group Modal
  showGroupModal = () => {
    this.setState({
      groupShow: !this.state.groupShow,
    });
  };

  onclose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  // 🎁 Function to get User from EnterUserModal Component
  getLoginUser = (userName) => { 
    this.setState({ 
      user: userName 
    }) 
    localStorage.setItem("user", userName);
  }  

// 🎁 Function to get Group from ChatGroup Component
  getGroupName = (groupName) => {
    localStorage.setItem("group", groupName);
    this.setState({
      group: groupName
    }, () => { this.loadMessages();})    
  }

// 🎁 Function to fetch messages from Firebase database
  loadMessages = () => {
    const dbRef = firebase.database().ref(`/${this.state.group}`);

    dbRef.on('value', (response) => {
      const data = response.val();

      this.setState({ 
        messages: [] 
      }, () => {
         
          const copyMessage = [...this.state.messages];
          for (let key in data) {
            const { user, message, time } = data[key];
            const date = new Date(time);
            const createdAt = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            const messageKey = key;

            const newMessage = {
              time: createdAt,
              user: user,
              message: message,
              key: messageKey
            }

            copyMessage.push(newMessage);

            this.setState({
              message: message,
              messages: copyMessage
            })
          }
      })     
    })
  }

// 🎁 Function to keep the current message in view
  scrollToBottom = () => {
      const messageList = document.querySelector(".screen");
      messageList.scrollTop = messageList.scrollHeight - messageList.clientHeight;
  }

  componentDidMount() {
    this.loadMessages(); 
    // this.scrollToBottom();
  }       

  componentDidUpdate(){
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="wrapper">    
      <a class="skip-main" href="#main">Skip to main content</a>    
        <Welcome className="information" />
        <div className="chatBox">
          <div className="mobile">
            <div className="top"></div>
            <div className="bottom"></div>
            <div className="topBar"></div>

            <div className="screen">
              <MessageList currentUser={this.state.user} messages={this.state.messages} currentGroup={this.state.group} />
            </div>          

            {/* Buttons on the main page */}
            <button onClick={this.showUserModal} className="create-user">
              User
            </button>
            <div className="current-group">
              {this.state.group}
            </div>
            <button id="main" onClick={this.showGroupModal} className="create-group">
              Group
            </button> 

            <EnterUserModal getLoginUser={this.getLoginUser} onClose={this.showUserModal} show={this.state.userShow}>
            </EnterUserModal>  

            <ChatGroup currentUser={this.state.user} currentGroup={this.state.group} getGroupName={this.getGroupName} onClose={this.showGroupModal} show={this.state.groupShow}>
              <h2 className="modalHeader">Group Name</h2>
              </ChatGroup>     

            <SendMessageForm user={this.state.user} group={this.state.group} getMessage={this.getMessage}/>

          </div>
        </div>
            <Footer />
      </div>
    );
  }
}

export default App;
