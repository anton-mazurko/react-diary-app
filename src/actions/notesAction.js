// import {GET_NOTES} from '../actionTypes'
// import {database} from '../firebase'

import { GET_NOTES } from "../actionTypes"

export function getNotes() {
  // return dispatch() => {
  //   database.on('value', snapshot => {
  //     dispatch({
  //       type: GET_NOTES,
  //       payload: snapshot.val()
  //     })
  //   })

  return dispatch => {
    dispatch({
      type: GET_NOTES,
      payload: [{'title': 'Some title', 'body': 'Some body'}, {'title': 'Some title2', 'body': 'Some body2'}]
    });
  }
}

// export const getNotes = () => dispatch => {
//   dispatch({
//     type: 'GET_NOTES',
//     payload: [{'title': 'a', 'body': 'a'}]
//   })
// }

export function saveNote (note) {
  // return dispatch => database.push(note);
  return dispatch => {
    console.log(`Save note to db: ${note.title} ${note.body}`)
  }
}

export function deleteNote (id) {
  // return dispatch => database.child(id).remove();
  return dispatch => {
    console.log(`Remove note with id: ${id}`)
  }
}