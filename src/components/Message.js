import React, {Component} from 'react';

function Message(props) {    
    return (
        <div className="message">
            <div className="message-time">{props.time}</div>
            <div className="message-username">{props.user}</div>
            <div className="message-text">{props.message}</div>
        </div>
    );
    
}

export default Message;