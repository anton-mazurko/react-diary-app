import {GET_USER} from '../actionTypes';

export default function userReducer (state={}, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}