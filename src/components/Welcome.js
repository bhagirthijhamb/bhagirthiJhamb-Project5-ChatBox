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
                <div className="header">
                    <div className="info">
                        <h1 className="title"> Chat Box  <span className="chatBoxEmoji">👧🏻</span><span className="chatBoxEmoji">👦🏻</span></h1>
                        <p>A chat app that connects you with your friends in real time</p>
                        <p><span className="mainFeatures">Main features</span> - Click or [tab] to</p>
                        <ul className="infoList">
                            <li><span>👉🏻 </span><span className="infoButton infoInput">Input</span> box to type your message</li>
                                <li><span className="tabLi"><span> - </span><span className="infoButton">Send</span> button or hit enter to send your message</span></li>
                                <li><span className="tabLi"><span> - </span><span className="infoButton infoButtonDelete">x</span> to delete a message</span></li>
                            <li><span>👉🏻 </span><span className="infoButton">User</span> button to enter your user name</li>
                            <li><span>👉🏻 </span><span className="infoButton">Group</span> button to create or change group</li>
                                <li><span className="tabLi"><span>- </span><span className="infoButton">Submit</span> button to select or create a group</span></li>
                                <li><span className="tabLi"><span>- </span><span className="infoButton">Delete</span> button to delete a group</span></li>
                        </ul>
                    </div>
                </div>
            </div>            
        )
    }
}

export default Welcome;