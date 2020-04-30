import React from 'react';

function Message(props) {   
    return (
        <div className="message">
            <div className="message-time">{props.time}</div>
            <div className="message-username">{props.user}</div>
            <div className="message-text">{props.message}<span></span></div>
            <button
                className="delete"
                // onClick={() => {
                //     remove(msgProp.message.key);
                // }}
            >
                <i className="fas fa-times"></i>
            </button>
        </div>
    );
    
}

export default Message;