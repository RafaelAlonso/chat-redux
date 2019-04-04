import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChannelList from '../containers/channel_list';
import Channel from '../containers/channel';
import { setUsername } from '../actions';

class App extends Component {
  componentWillMount(){
    let username = '';
    while(username === '' || username === null) username = window.prompt("What's your username?");
    this.props.setUsername(username);
  }

  componentDidMount(){
    document.querySelector('input').focus();
  }

  render(){
    return (
      <div className="app messaging-wrapper">
        <div className="logo-container"><img className="messaging-logo" src="assets/images/logo.svg" alt=""/></div>
        <ChannelList></ChannelList>
        <Channel></Channel>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setUsername }, dispatch)
}

export default connect(null, mapDispatchToProps)(App);
