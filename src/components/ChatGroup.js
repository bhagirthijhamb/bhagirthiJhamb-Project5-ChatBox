import React, { Component } from 'react';
import firebase from 'firebase'

// Grey background
const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 50
}

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 8,
    maxWidth: 250,
    minHeight: 150,
    margin: '0 auto',
    padding: 10,
    position: "relative"
};

const footerStyle = {
    position: "absolute",
    bottom: 10
}


class ChatGroupModal extends Component {
    constructor() {
        super()
        this.state = {
            group: '',
            groups: [],
            selectedGroup:''
        }
    }

    sendGroupName = () => {
        this.props.getGroupName(this.state.group)
    }

    onclose = (e) => {
        this.props.onClose && this.props.onClose(e);
    };

    componentDidMount() {
        const dbRef = firebase.database().ref();

        dbRef.on('value', (response) => {
            const data = response.val();

            const groupsArray = []
            for (let key in data) {
                groupsArray.push(key )
            }

            this.setState({
                groups: groupsArray
            })
        })
    }

    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            group: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
                        
        if (this.state.groups.indexOf(this.state.group) === -1) {
            const dbRef = firebase.database().ref(`/${this.state.group}`);
            dbRef.push('hello');
        }
    }

    handleDeleteGroup = () => {
        if(this.state.selectedGroup !== this.props.currentGroup){
            firebase.database().ref(`${this.state.selectedGroup}`).remove();
        } else {
            alert('Cannot delete the current group');
        }
    }    

    handleLiClick = (e) => {
        // e.target.style.backgroundColor = 'red';
        const selectedGroup = e.target.innerText
        this.setState({
            selectedGroup: `${selectedGroup}`
        }, () => {
            // console.log(this.state.selectedGroup);
        })
    }
    
    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="loginBox" style={backdropStyle}>
                <div style={modalStyle}>
                    {this.props.children}

                    <div className="group-list">
                        <ul className="groups">
                            {this.state.groups.map((group, index) => {
                                return (                                    
                                    <li className="group" key="index" onClick={e => this.handleLiClick(e)}>{group}</li>                                    
                                )
                            })}
                        </ul>
                    </div>

                    <form onSubmit={this.handleSubmit} action="">
                        <input className="input" onChange={this.handleChange} value={this.state.group} type="text" placeholder="Group name" /> 
                        <div style={footerStyle}>
                            <button className="submit" onClick={() => this.sendGroupName()}>Submit</button>                            
                            <button className="close" onClick={(e) => { this.props.onClose(e); }}>Close</button>
                        </div>
                    </form>

                    <button className="close" onClick={() => {
                        this.handleDeleteGroup();
                    }}>Delete</button>
                </div>
            </div>
        );
    }
}


export default ChatGroupModal;