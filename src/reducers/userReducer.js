import {GET_USER} from '../actionTypes';

// state = null is default state for user
export default function userReducer (state=null, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}