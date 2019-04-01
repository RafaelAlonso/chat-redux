import React, { Component } from 'react';
import { bindActionCreator } from 'redux';
import { connect } from 'react-redux';
import Message from '../containers/message';
import MessageForm from '../containers/message_form';

class Channel extends Component{
  static defaultProps = {
    messages: [
      {username: 'John', time: '31/03/2019 21:53', message: 'Hello World!'},
      {username: 'Mac', time: '31/03/2019 21:53', message: 'Hello John!'},
      {username: 'John', time: '31/03/2019 21:54', message: 'Hello Mac!'},
      {username: 'Mac', time: '31/03/2019 21:55', message: 'How are you doing?'},
      {username: 'John', time: '31/03/2019 21:56', message: 'Fine! Yourself?'},
      {username: 'Meep', time: '31/03/2019 21:57', message: 'Hello guys!'},
      {username: 'John', time: '31/03/2019 21:58', message: 'Hello Meep!'},
      {username: 'Mac', time: '31/03/2019 21:59', message: 'Great, John! Thx for asking'},
      {username: 'Mac', time: '31/03/2019 21:59', message: 'Heeey Meep!'},
    ]
  }

  render(){
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel {this.props.name}</span>
        </div>
        <div className="channel-content">
          {this.props.messages.map((message, index) => {
            return <Message data={message} key={`message_${index}`}></Message>
          })}
        </div>
        <MessageForm></MessageForm>
      </div>
    );
  }
}

export default Channel;
