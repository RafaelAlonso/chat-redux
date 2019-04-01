import { GET_MESSAGES, SEND_MESSAGE } from '../actions';

export default function(state, action){
  if(state === undefined) return [];

  switch(action.type){
    case GET_MESSAGES:
      return action.payload.messages;
    case SEND_MESSAGE:
      const messages = state;
      let new_messages = state.slice(0);
      new_messages.push(action.payload);
      return new_messages;
    default:
      return state;
  }
}
