import { SET_USERNAME } from '../actions';

export default function(state, action){
  if(state === undefined) return "";

  switch(action.type){
    case SET_USERNAME:
      return action.payload;
    default:
      return state;
  }
}
