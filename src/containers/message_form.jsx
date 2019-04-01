import React, { Component } from 'react';
import { bindActionCreator } from 'redux';
import { connect } from 'react-redux';

class Message extends Component{
  render(){
    return (
      <div className="channel-editor">
        <input type="text" className="form-control" placeholder="Type here your message..."/>
        <button type="submit" value="Send">Send</button>
      </div>
    );
  }
}

export default Message;

