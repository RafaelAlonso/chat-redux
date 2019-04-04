import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';
import MessageForm from '../containers/message_form';
import { setDefaultChannel, getMessages } from '../actions';

class Channel extends Component{
  componentWillMount(){
    this.props.getMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    setInterval(() => {
      this.props.getMessages(this.props.selectedChannel);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval();
  }

  render(){
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setDefaultChannel, getMessages }, dispatch);
}

function mapStateToProps({selectedChannel, messages}){
  return { selectedChannel, messages };
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
