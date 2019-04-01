import React, { Component } from 'react';
import { bindActionCreator } from 'redux';
import { connect } from 'react-redux';

class Message extends Component{
  render(){
    return (
      <div className="message-container">
        <i>{this.props.data.author} <small>{this.props.data.created_at}</small></i>
        <p>{this.props.data.content}</p>
      </div>
    );
  }
}

export default Message;

