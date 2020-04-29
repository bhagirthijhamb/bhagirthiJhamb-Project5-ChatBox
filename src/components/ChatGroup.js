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
    padding: 30,
    position: "relative"
};

const footerStyle = {
    position: "absolute",
    bottom: 20
}


class ChatGroupModal extends Component {
    constructor() {
        super()
        this.state = {
            group: '',
            groups: []
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

            // console.log(data);

            const groupsArray = []
            for (let key in data) {
                groupsArray.push(key )
            }

            this.setState({
                groups: groupsArray
            })

            console.log(this.state.groups)
        })

    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            group: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
                        
        if (this.state.groups.indexOf(this.state.group) == -1) {
            const dbRef = firebase.database().ref(`/${this.state.group}`);
            dbRef.push('hello');
        }
    }
    
    
    render() {
        console.log(this.state.group);
        if (!this.props.show) {
            return null;
        }

        // const deleteItem = () => {
        //     const itemRef = firebase.database().ref(this.state.group)
        //     itemRef.remove()
        // }

        return (
            <div className="loginBox" style={backdropStyle}>
                <div style={modalStyle}>
                    {this.props.children}

                    <form onSubmit={this.handleSubmit} action="">
                        <input onChange={this.handleChange} value={this.state.user} type="text" placeholder="Group name" />
                        <div style={footerStyle}>
                            <button className="submit" onClick={() => this.sendGroupName()}>Submit</button>
                            <button className="close" onClick={(e) => { this.props.onClose(e); }}>Close</button>
                        </div>
                    </form>
                    {/* <ul>
                        {this.state.groups.map((group, index) => {
                            return (
                                <li onClick={deleteItem}>{group}</li>
                            )
                        })}

                    </ul> */}

                </div>
            </div>
        );
    }
}


export default ChatGroupModal;