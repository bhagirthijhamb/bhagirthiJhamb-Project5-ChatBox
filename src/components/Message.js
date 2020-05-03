import React from 'react';

import firebase from './../firebase';

function Message(props) {  

    // 🎁 Function to delete a message
    let remove = messageKey => {
        const dbRef = firebase.database().ref(`/${props.currentGroup}`);
        dbRef.child(props.messageKey).remove();
    }

    // // 🎁 Style the current user messages
    let className = 'message';
    if (props.currentUser === props.user) {
        className = 'myMessage'
    }

    return (
        <div className={className}>
            <div className="message-top">
                <div className="message-time">{props.time}</div>
                <div className="message-username">{props.user}</div>
            </div>
           
            <div className="message-text">{props.message}<span></span></div>
            <div
                className="delete"
                onClick={() => {
                    remove(props.message.key);
                }}
            >
                <i className="fas fa-times deleteIcon"></i>
            </div>
        </div>
    );    
}

export default Message;