import React, { Component } from 'react';
import Message from './Message'

class MessageList extends Component {

    render(props) {
        // console.log(this.props.currentGroup);
        return (
            <div className="message-list">
               {this.props.messages.map((message, index) => {
                   return (
                       <div>
                            <Message key={index} currentUser={this.props.currentUser} messageKey={message.key} message={message.message} time={message.time} user={message.user} currentGroup={this.props.currentGroup}/>             
                        </div>
                   )
               })}
            </div>
        );
    }
}

export default MessageList;