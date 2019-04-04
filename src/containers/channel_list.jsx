import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels, selectChannel, getMessages, setDefaultChannel } from '../actions';

class ChannelList extends Component{
  componentWillMount(){
    this.props.setChannels();
    this.props.setDefaultChannel();
  }

  changeChannel = (event) => {
    const selected_channel = event.currentTarget;
    document.querySelector('.active').classList.remove('active');
    selected_channel.classList.add('active');

    this.props.selectChannel(selected_channel.dataset['key']);
    this.props.getMessages(selected_channel.dataset['key']);
    document.querySelector('input').focus();
  }

  render(){
    return (
      <div className="channels-container">
        <span>Channels</span>
        <ul>
          {this.props.channels.map((channel, ind) => {
            return (
              <li
                className={ind == 0 ? 'active' : ''}
                key={channel.name}
                data-key={channel.name}
                onClick={this.changeChannel}>#{channel.name}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({channels}){
  return { channels };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setChannels, selectChannel, getMessages, setDefaultChannel }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
