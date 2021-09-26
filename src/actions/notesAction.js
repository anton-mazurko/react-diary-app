import {GET_NOTES} from '../actionTypes'
import { getDatabase, ref, onValue, set, remove } from "firebase/database";
import { uuidv4 } from '../common';


// Web version 9: https://firebase.google.com/docs/database/web/read-and-write#web-version-9_1
export function getNotes() {
  const db = getDatabase();
  const notesRef = ref(db, '/notes');
  return dispatch => {
    onValue(notesRef, (snapshot) => {
      dispatch({
        type: GET_NOTES,
        payload: snapshot.val()
      })
    })
  }
}

export function saveNote (note) {
  const db = getDatabase();
  const noteId = uuidv4();
  return () => {
    set(ref(db, `/notes/${noteId}`), note);
  }
}

export function deleteNote (id) {
  const db = getDatabase();
  return () => {
    remove(ref(db, `/notes/${id}`))
  }
}