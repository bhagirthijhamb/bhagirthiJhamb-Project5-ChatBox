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
    render() {
        return (
            <div className="message-list">
               {this.props.messages.map((message, index) => {
                   return (
                       <Message key={index} message={message.message} time={message.time} user={message.user} />
                   )
               })}
            </div>
        );
    }
}

export default MessageList;