import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendMessage } from '../actions';

class Message extends Component{
  constructor(props){
    super(props);

    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    return this.setState({ value: event.currentTarget.value });
  }

  handleSubmit = (event) => {
    this.props.sendMessage(this.props.selectedChannel, this.state.value);
    return this.setState({ value: '' });
  }

  render(){
    return (
      <form action="#" className="channel-editor">
        <input type="text" className="form-control" placeholder="Type here your message..." value={this.state.value} onChange={this.handleChange}/>
        <button type="submit" value="Send" onClick={this.handleSubmit}>Send</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ sendMessage }, dispatch)
}

function mapStateToProps({selectedChannel}){
  return { selectedChannel };
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);

