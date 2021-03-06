import channels from '../bd/channels';

// TODO: add and export your own actions
export const SET_CHANNELS = "SET_CHANNELS";
export const SET_USERNAME = "SET_USERNAME";
export const DEFAULT_CHANNEL = "DEFAULT_CHANNEL";
export const SELECT_CHANNEL = "SELECT_CHANNEL";
export const GET_MESSAGES = "GET_MESSAGES";
export const SEND_MESSAGE = "SEND_MESSAGE";

export function setChannels(){
  return {
    type: SET_CHANNELS,
    payload: channels
  }
}

export function setDefaultChannel(){
  return {
    type: DEFAULT_CHANNEL,
    payload: channels[0]['name']
  }
}

export function selectChannel(channel){
  return {
    type: SELECT_CHANNEL,
    payload: channel
  }
}

export function sendMessage(username, channel, message){
  const body = {
    author: username,
    content: message
  }

  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: SEND_MESSAGE,
    payload: promise
  }
}

export function getMessages(channel){
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
  .then(response => response.json());

  return {
    type: GET_MESSAGES,
    payload: promise
  }
}

export function setUsername(username){
  return {
    type: SET_USERNAME,
    payload: username
  }
}
