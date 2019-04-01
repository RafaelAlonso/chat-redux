import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels, selectChannel, getMessages } from '../actions';

class ChannelList extends Component{
  componentWillMount(){
    this.props.setChannels();
  }

  changeChannel = (event) => {
    const selected_channel = event.currentTarget;
    if (document.querySelector('.active')){
      document.querySelector('.active').classList.remove('active');
    }
    selected_channel.classList.add('active');

    this.props.selectChannel(selected_channel.dataset['key']);
    this.props.getMessages(selected_channel.dataset['key']);
  }

  render(){
    return (
      <div className="channels-container">
        <span>Channels</span>
        <ul>
          {this.props.channels.map(channel => <li key={channel.name} data-key={channel.name} onClick={this.changeChannel}>#{channel.name}</li> )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({channels}){
  return { channels };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setChannels, selectChannel, getMessages }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
