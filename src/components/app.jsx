import React from 'react';
import ChannelList from '../containers/channel_list';
import Channel from '../containers/channel';

const App = () => {
  return (
    <div className="app messaging-wrapper">
      <div className="logo-container"><img className="messaging-logo" src="assets/images/logo.svg" alt=""/></div>
      <ChannelList></ChannelList>
      <Channel></Channel>
    </div>
  );
};

export default App;
