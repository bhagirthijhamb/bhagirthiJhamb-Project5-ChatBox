import React, { Component } from 'react';

const DUMMY_DATA = [
    {
        senderId:'BJ',
        text:'Hey, how is it going?'
    },
    {
        senderId: 'Piyush',
        text: 'Great, how about you?'
    },
    {
        senderId: 'BJ',
        text: 'Good to hear, I am great as well'
    }
]

class MessageList extends Component {

    render() {
        return (
            <div className="message-list">
               {DUMMY_DATA.map((message, index) => {
                   return (
                       <div key={index} className='message'>                            
                        <div className='message-username'>{message.senderId}</div>
                        <div className='message-text'>{message.text}</div>
                       </div>
                   )
               })}
            </div>
        );
    }
}

export default MessageList;