import React, { Component } from 'react';

// Grey background
const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 50,
}

const modalStyle = {
    position: 'absolute',
    top: '30%',
    left: 0,
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


class EnterUserModal extends Component {
  constructor(){
    super()
    this.state = {
      user: ''
    }
  }

  sendUser = () => {
    this.props.getLoginUser(this.state.user)
  }

  onclose = (e) => {
    this.props.onClose && this.props.onClose(e);
  }; 


  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      user: e.target.value
    })
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.sendUser();

    // this.setState({
    //   user: ''
    // })
  }

  
  render() {
    // console.log(this.state.user);    

    if (!this.props.show) {
      return null;
    }
    return (
      <div className="loginBox" style={backdropStyle}>
        <div style={modalStyle}>
          <h2 className="modalHeader">Enter username</h2>
          {this.props.children}

            <form onSubmit={this.handleSubmit} action="">
                <input className="input loginInput" onChange={this.handleChange} value={this.state.user} type="text" placeholder="Username" />
                <div style={footerStyle}>
                  <button className="submit">Submit</button>
                  <button className="close" onClick={(e) => { this.props.onClose(e); }}>Close</button>
                </div>
            </form>          
        </div>
      </div>
    );
  }
}

export default EnterUserModal;