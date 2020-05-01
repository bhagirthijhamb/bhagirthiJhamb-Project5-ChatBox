import React, { Component } from 'react';
import Message from './Message'

// const DUMMY_DATA = [
//     {
//         senderId:'BJ',
//         text:'Hey, how is it going?'
//     },
//     {
//         senderId: 'Piyush',
//         text: 'Great, how about you?'
//     },
//     {
//         senderId: 'BJ',
//         text: 'Good to hear, I am great as well'
//     }
// ]

class MessageList extends Component {
    render(props) {
        // console.log(this.props.currentGroup);
        return (
            <div className="message-list">
               {this.props.messages.map((message, index) => {
                   return (
                       <Message key={index} currentUser={this.props.currentUser} messageKey={message.key} message={message.message} time={message.time} user={message.user} currentGroup={this.props.currentGroup}/>
                   )
               })}
            </div>
        );
    }
}

export default MessageList;