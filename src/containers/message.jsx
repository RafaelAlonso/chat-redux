import React, { Component } from 'react';
import { bindActionCreator } from 'redux';
import { connect } from 'react-redux';

class Message extends Component{
  render(){
    return (
      <div className="message-container">
        <i>{this.props.data.username} <small>{this.props.data.time}</small></i>
        <p>{this.props.data.message}</p>
      </div>
    );
  }
}

export default Message;

