import React, {Component} from 'react';

class Welcome extends Component {
    render(){
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning";
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon";
        } else {
            timeOfDay = "night";
        }
        return(
            <div>
                <div className="info">
                    <h2>Good { timeOfDay } <span className="chatBoxEmoji">👧🏻</span> <span className="chatBoxEmoji">👦🏻</span> </h2>
                    <p><span className="title">Chat Box</span>  is a chat app that helps you stay connected with your friends in real time</p>
                    <p>Main features - Click or [tab] to</p>
                    <ul className="infoList">
                        <li><span>👉🏻 </span><span className="infoButton infoInput">Input</span> box to type and <span className="infoButton">Send</span> your message</li>
                        <li><span className="infoButton">X</span> to delete a message</li>
                        <li><span>👉🏻 </span><span className="infoButton">User</span> button to enter your user name</li>
                        <li><span>👉🏻 </span><span className="infoButton">Group</span> button to create or change group</li>
                        <ul>
                            <li><span className="infoButton">Submit</span> to select or create group</li>
                            <li><span className="infoButton">Delete</span> to delete a group</li>
                        </ul>
                    </ul>

                </div>
            </div>            
        )
    }
}

export default Welcome;