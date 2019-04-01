import React, { Component } from 'react';
import { bindActionCreator } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component{
  static defaultProps = {
    channels: [
      {name: '#general'},
      {name: '#react'},
      {name: '#redux'}
    ]
  }

  changeChannel = (event) => {
    const selected_channel = event.currentTarget;
    if (document.querySelector('.active')){
      document.querySelector('.active').classList.remove('active');
    }
    selected_channel.classList.add('active');
  }

  render(){
    return (
      <div className="channels-container">
        <span>Channels</span>
        <ul>
          {this.props.channels.map(channel => <li key={channel.name} onClick={this.changeChannel}>{channel.name}</li> )}
        </ul>
      </div>
    );
  }
}

export default ChannelList;
