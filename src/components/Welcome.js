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
            <header>
                <h2>Good {timeOfDay} to you, sir or madam!</h2>
                <p>Chat Box is a chat app that has groups and youcan chat with people in real time</p>
            </header>            
        )
    }
}

export default Welcome;